import { useState, lazy, Suspense } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ShoppingCart, Star, Search, Menu, User, Heart } from 'lucide-react'
import './App.css'

// Lazy loading for better performance
const ProductGrid = lazy(() => import('./components/ProductGrid.jsx'))

function App() {
  const [cartItems, setCartItems] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const addToCart = () => {
    setCartItems(prev => prev + 1)
  }

  const featuredProducts = [
    {
      id: 1,
      name: "سجادة مغربية تقليدية",
      price: "1,200 درهم",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 124,
      category: "ديكور منزلي"
    },
    {
      id: 2,
      name: "طاجين فخاري أصلي",
      price: "350 درهم",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 89,
      category: "أدوات مطبخ"
    },
    {
      id: 3,
      name: "قفطان مغربي مطرز",
      price: "800 درهم",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 156,
      category: "ملابس تقليدية"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <h1 className="text-2xl font-bold text-gradient">سوق المغرب</h1>
              <Badge variant="secondary" className="moroccan-gradient text-white">
                AI مدعوم بـ
              </Badge>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="ابحث عن المنتجات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs moroccan-gradient text-white">
                    {cartItems}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 moroccan-pattern">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-moroccan-pulse">
              اكتشف جمال المغرب الأصيل
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              منصة التجارة الإلكترونية المغربية المتطورة - تسوق المنتجات المغربية الأصيلة بتقنيات الذكاء الاصطناعي
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="moroccan-gradient text-white hover-lift">
                تسوق الآن
              </Button>
              <Button size="lg" variant="outline" className="moroccan-border hover-lift">
                اكتشف المجموعات
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">تصفح حسب الفئة</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['ديكور منزلي', 'ملابس تقليدية', 'أدوات مطبخ', 'مجوهرات'].map((category) => (
              <Card key={category} className="hover-lift cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 moroccan-gradient rounded-full flex items-center justify-center group-hover:animate-moroccan-pulse">
                    <span className="text-2xl text-white">🏺</span>
                  </div>
                  <h4 className="font-semibold">{category}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">المنتجات المميزة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover-lift group overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                    <span className="text-4xl">🏺</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.category}</CardDescription>
                    </div>
                    <Badge variant="secondary">{product.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={addToCart}
                      className="moroccan-gradient text-white hover-lift"
                    >
                      أضف للسلة
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid with Lazy Loading */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">جميع المنتجات</h3>
          <Suspense fallback={
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          }>
            <ProductGrid />
          </Suspense>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gradient">سوق المغرب</h4>
              <p className="text-muted-foreground">
                منصة التجارة الإلكترونية المغربية المتطورة لتسوق المنتجات الأصيلة
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">روابط سريعة</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">الرئيسية</a></li>
                <li><a href="#" className="hover:text-foreground">المنتجات</a></li>
                <li><a href="#" className="hover:text-foreground">من نحن</a></li>
                <li><a href="#" className="hover:text-foreground">اتصل بنا</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">خدمة العملاء</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">الدعم الفني</a></li>
                <li><a href="#" className="hover:text-foreground">سياسة الإرجاع</a></li>
                <li><a href="#" className="hover:text-foreground">الشحن والتوصيل</a></li>
                <li><a href="#" className="hover:text-foreground">الأسئلة الشائعة</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">تواصل معنا</h5>
              <div className="space-y-2 text-muted-foreground">
                <p>البريد الإلكتروني: elhaddouny@Hotmail.com</p>
                <p>الهاتف: 212+681848262</p>
                <p>العنوان: المغرب</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 سوق المغرب. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
