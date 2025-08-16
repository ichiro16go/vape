import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Sale Banner */}
        <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center">
            <div className="text-red-500 text-6xl font-bold mb-4">SALE</div>
            <div className="text-red-500 text-8xl font-bold mb-4">50%</div>
            <div className="flex items-center justify-center gap-2 text-white">
              <Mail className="w-5 h-5" />
              <span className="text-lg">最新情報をお届け</span>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-8 right-12 w-2 h-2 bg-white rounded-full opacity-40"></div>
          <div className="absolute top-12 right-8 w-1 h-1 bg-white rounded-full opacity-80"></div>
        </div>

        {/* Newsletter Form */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">最新情報をお届け</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            新商品情報やお得なキャンペーン情報をいち早くお知らせします
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="メールアドレスを入力"
              className="flex-1 px-4 py-3 rounded-xl border-gray-300"
            />
            <Button className="bg-purple-400 hover:bg-purple-500 text-white px-8 py-3 rounded-xl">登録</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
