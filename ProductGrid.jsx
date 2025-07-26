import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Star, ShoppingCart } from 'lucide-react'

const ProductGrid = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // Simulate API call with useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockProducts = [
        {
          id: 4,
          name: "صندوق خشبي مغربي",
          price: "450 درهم",
          rating: 4.6,
          reviews: 78,
          category: "ديكور منزلي"
        },
        {
          id: 5,
          name: "فانوس مغربي نحاسي",
          price: "280 درهم",
          rating: 4.8,
          reviews: 92,
          category: "إضاءة"
        },
        {
          id: 6,
          name: "بابوش مغربي جلدي",
          price: "320 درهم",
          rating: 4.5,
          reviews: 156,
          category: "أحذية"
        },
        {
          id: 7,
          name: "مرآة مغربية مزخرفة",
          price: "680 درهم",
          rating: 4.9,
          reviews: 43,
          category: "ديكور منزلي"
        },
        {
          id: 8,
          name: "طقم شاي مغربي",
          price: "220 درهم",
          rating: 4.7,
          reviews: 134,
          category: "أدوات مطبخ"
        },
        {
          id: 9,
          name: "حقيبة جلدية مغربية",
          price: "520 درهم",
          rating: 4.4,
          reviews: 67,
          category: "إكسسوارات"
        }
      ]
      
      setProducts(mockProducts)
      setLoading(false)
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="animate-pulse">
            <div className="aspect-square bg-muted"></div>
            <CardHeader>
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-muted rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product.id} className="hover-lift group overflow-hidden">
          <div className="aspect-square overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
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
                className="moroccan-gradient text-white hover-lift"
              >
                <ShoppingCart className="h-4 w-4 ml-2" />
                أضف للسلة
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ProductGrid

