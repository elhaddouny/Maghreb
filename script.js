// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#ffd700', '#00ff88', '#ffffff']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffd700',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Number Animation Function
function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        
        if (element.id === 'champion-profit' || element.classList.contains('profit-amount')) {
            element.textContent = '$' + current.toLocaleString();
        } else if (element.id === 'total-volume') {
            element.textContent = '$' + (current / 1000000).toFixed(1) + 'M';
        } else {
            element.textContent = current.toLocaleString();
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'countUp 0.8s ease-out forwards';
            
            // Animate numbers when they come into view
            if (entry.target.id === 'champion-profit') {
                animateNumber(entry.target, 0, 2847592, 2000);
            } else if (entry.target.id === 'total-traders') {
                animateNumber(entry.target, 0, 2847, 1500);
            } else if (entry.target.id === 'total-profits') {
                animateNumber(entry.target, 0, 12500000, 2000);
            } else if (entry.target.id === 'active-users') {
                animateNumber(entry.target, 0, 2847, 1500);
            } else if (entry.target.id === 'total-volume') {
                animateNumber(entry.target, 0, 12500000, 2000);
            } else if (entry.target.id === 'successful-trades') {
                animateNumber(entry.target, 0, 15432, 2000);
            } else if (entry.target.id === 'countries') {
                animateNumber(entry.target, 0, 47, 1000);
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.stat-number, .stat-value, #champion-profit');
    animatedElements.forEach(el => observer.observe(el));
});

// Real-time Updates Simulation
function updateRealTimeData() {
    const championProfit = document.getElementById('champion-profit');
    const totalTraders = document.getElementById('total-traders');
    const totalProfits = document.getElementById('total-profits');
    
    if (championProfit) {
        const currentValue = parseInt(championProfit.textContent.replace(/[$,]/g, ''));
        const newValue = currentValue + Math.floor(Math.random() * 1000) + 100;
        championProfit.textContent = '$' + newValue.toLocaleString();
    }
    
    if (totalTraders) {
        const currentValue = parseInt(totalTraders.textContent.replace(/,/g, ''));
        const newValue = currentValue + Math.floor(Math.random() * 5) + 1;
        totalTraders.textContent = newValue.toLocaleString();
    }
    
    if (totalProfits) {
        const currentText = totalProfits.textContent;
        const currentValue = parseFloat(currentText.replace(/[$M]/g, ''));
        const newValue = currentValue + (Math.random() * 0.1);
        totalProfits.textContent = '$' + newValue.toFixed(1) + 'M';
    }
}

// Update data every 5 seconds
setInterval(updateRealTimeData, 5000);

// Chart.js Configuration
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('profitChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
                datasets: [{
                    label: 'أرباح محمد الهدوني',
                    data: [150000, 280000, 450000, 680000, 920000, 1200000, 1580000, 1890000, 2150000, 2450000, 2680000, 2847592],
                    borderColor: '#ffd700',
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#ffd700',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }, {
                    label: 'متوسط المنصة',
                    data: [50000, 85000, 120000, 180000, 250000, 320000, 410000, 520000, 640000, 780000, 920000, 1100000],
                    borderColor: '#00ff88',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#00ff88',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff',
                            font: {
                                family: 'Cairo',
                                size: 14
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'مقارنة الأرباح الشهرية',
                        color: '#ffd700',
                        font: {
                            family: 'Cairo',
                            size: 18,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#cccccc',
                            font: {
                                family: 'Cairo'
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#cccccc',
                            font: {
                                family: 'Cairo'
                            },
                            callback: function(value) {
                                return '$' + (value / 1000000).toFixed(1) + 'M';
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                elements: {
                    point: {
                        hoverBackgroundColor: '#ffffff'
                    }
                }
            }
        });
    }
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.header');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
    }
});

// Floating Animation for Cards
function addFloatingAnimation() {
    const cards = document.querySelectorAll('.stat-card, .news-card, .trader-row');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize floating animations
document.addEventListener('DOMContentLoaded', addFloatingAnimation);

// Dynamic Profit Updates for Leaderboard
function updateLeaderboardProfits() {
    const profitElements = document.querySelectorAll('.profit-amount');
    profitElements.forEach((element, index) => {
        if (index === 0) return; // Skip champion (محمد الهدوني)
        
        const currentValue = parseInt(element.textContent.replace(/[$,]/g, ''));
        const increase = Math.floor(Math.random() * 5000) + 1000;
        const newValue = currentValue + increase;
        
        // Animate the change
        element.style.color = '#00ff88';
        element.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            element.textContent = '$' + newValue.toLocaleString();
            element.style.transform = 'scale(1)';
        }, 200);
    });
}

// Update leaderboard every 10 seconds
setInterval(updateLeaderboardProfits, 10000);

// Success Rate Animation
function animateSuccessRate() {
    const successElements = document.querySelectorAll('.growth-positive');
    successElements.forEach(element => {
        const currentValue = parseFloat(element.textContent.replace(/[+%]/g, ''));
        const newValue = currentValue + (Math.random() * 2 - 1); // Random change between -1 and +1
        element.textContent = '+' + newValue.toFixed(1) + '%';
        
        // Add pulse effect
        element.style.animation = 'pulse 0.5s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    });
}

// Update success rates every 15 seconds
setInterval(animateSuccessRate, 15000);

// Mobile Menu Toggle (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add click handlers for buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            button.appendChild(ripple);
            
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-coin');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Console Welcome Message
console.log(`
🏆 مرحباً بك في منصة الأرباح الذهبية! 🏆
💰 محمد الهدوني - البطل الأول في التجارة الإلكترونية 💰
🇲🇦 من المغرب إلى العالم 🇲🇦

الموقع تم تطويره بأحدث التقنيات:
✨ HTML5 & CSS3
✨ JavaScript ES6+
✨ Chart.js للرسوم البيانية
✨ Particles.js للتأثيرات البصرية
✨ تصميم متجاوب بالكامل

تابعنا لمزيد من النجاحات! 🚀
`);

// Easter Egg - Konami Code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Activate special effect
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 تهانينا! لقد اكتشفت الكود السري! محمد الهدوني يهنئك! 🎉');
        }, 2000);
    }
});

// Add rainbow animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

