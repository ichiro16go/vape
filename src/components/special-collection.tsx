import { Star, StarHalf } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  image: string
  rating: number
  reviewCount: number
  originalPrice: number
  salePrice: number
  discount: number
  badge: "SPECIAL" | "LIMITED" | "BESTSELLER"
  badgeColor: string
}

const products: Product[] = [
  {
    id: "1",
    name: "NASTY FIX PREMIUM",
    image: "/placeholder-4lcd3.png",
    rating: 4.8,
    reviewCount: 156,
    originalPrice: 2800,
    salePrice: 1980,
    discount: 29,
    badge: "SPECIAL",
    badgeColor: "bg-purple-500",
  },
  {
    id: "2",
    name: "ELFBAR ULTIMATE",
    image: "/woman-red-sweater-orange.png",
    rating: 4.9,
    reviewCount: 203,
    originalPrice: 2200,
    salePrice: 1580,
    discount: 28,
    badge: "LIMITED",
    badgeColor: "bg-purple-600",
  },
  {
    id: "3",
    name: "LOST MARY DELUXE",
    image: "/placeholder-vb9wc.png",
    rating: 4.7,
    reviewCount: 89,
    originalPrice: 1800,
    salePrice: 1280,
    discount: 29,
    badge: "BESTSELLER",
    badgeColor: "bg-green-500",
  },
]

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={i + fullStars} className="w-4 h-4 text-gray-300" />
      ))}
    </div>
  )
}

export default function SpecialCollection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-400 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            SPECIAL OFFER
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-purple-400">SPECIAL</span> <span className="text-black">COLLECTION</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            厳選されたプレミアムvapeを特別価格でご提供。数量限定の特別オファーをお見逃しなく
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative mb-6">
                <div
                  className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold z-10`}
                >
                  {product.badge}
                </div>
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{product.name}</h3>

              <div className="flex items-center gap-2 mb-4">
                <StarRating rating={product.rating} />
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviewCount}件)
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm text-gray-400 line-through">¥{product.originalPrice.toLocaleString()}</span>
                <span className="text-2xl font-bold text-purple-600">¥{product.salePrice.toLocaleString()}</span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold">
                  {product.discount}% OFF
                </span>
              </div>

              <Button className="w-full bg-purple-400 hover:bg-purple-500 text-white py-3 rounded-xl">
                今すぐ購入 →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
