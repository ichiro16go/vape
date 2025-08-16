import { Button } from "@/components/ui/button"

export default function NewsletterSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ニュースレター</h2>
        <p className="text-gray-600 mb-12">新商品情報やお得なキャンペーン情報をいち早くお知らせします</p>

        {/* Black Friday Sale Banner */}
        <div className="relative bg-red-600 rounded-2xl p-12 text-white overflow-hidden">
          {/* Sale Tags */}
          <div className="flex justify-center gap-4 mb-6">
            {["S", "A", "L", "E"].map((letter, index) => (
              <div key={index} className="bg-gray-700 text-white px-6 py-4 rounded-lg text-2xl font-bold relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gray-400 rounded-full"></div>
                {letter}
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-4">最新キャンペーン</h3>
          <p className="text-lg mb-6">新商品やお得な情報をお見逃しなく</p>

          <Button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg text-lg">
            詳細を見る
          </Button>

          {/* Black Friday Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-black/20 text-8xl font-black tracking-wider">
              BLACK
              <br />
              FRIDAY
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
