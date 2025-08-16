"use client"

import { useState } from "react"
import { ArrowLeft, Heart, Share2, Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const product = {
    id: "vape-001",
    name: "NICOTIA Pod System Pro",
    description: "最新のポッドシステムで、スムーズな吸い心地と長時間のバッテリー持続を実現",
    price: 4980,
    category: "Pod Systems",
    brand: "NICOTIA",
    inStock: true,
    image: "/placeholder-f99ai.png",
    tags: ["Pod Systems", "NICOTIA品質保証", "在庫あり"],
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-gray-600">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">ホームページに戻る</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Desktop Breadcrumb */}
        <div className="hidden lg:block mb-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
            ← ホームページに戻る
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 via-purple-800 to-pink-600 relative">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-4xl lg:text-6xl font-bold tracking-wider">(N)ICOTIA</div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
              <p className="text-gray-600 text-sm lg:text-base mb-4">{product.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant={tag === "在庫あり" ? "default" : "secondary"}
                    className={tag === "在庫あり" ? "bg-black text-white" : ""}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="text-3xl lg:text-4xl font-bold text-gray-900">¥{product.price.toLocaleString()}</div>

            {/* Health Warning */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-4">
                <h3 className="font-semibold text-red-800 mb-2">健康に関する警告</h3>
                <p className="text-sm text-red-700">
                  このニコチン製品は20歳未満の方の使用を禁止しています。ニコチンは依存性があり、健康に害を及ぼす可能性があります。妊娠中・授乳中の方は使用しないでください。
                </p>
              </CardContent>
            </Card>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">数量:</span>
                <div className="flex items-center border rounded-lg">
                  <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(-1)} className="px-3">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                  <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(1)} className="px-3">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-black hover:bg-gray-800 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  カートに追加
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? "text-red-500 border-red-500" : ""}
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">商品詳細</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">商品ID:</span>
                    <span className="font-medium">{product.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">カテゴリ:</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ブランド:</span>
                    <span className="font-medium">{product.brand}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">在庫状況:</span>
                    <span className="font-medium text-green-600">在庫あり</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">配送:</span>
                    <span className="font-medium">全国送料無料</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
