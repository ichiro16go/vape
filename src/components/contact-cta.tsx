import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4">他にご質問がございますか？</h3>
          <p className="text-gray-600 mb-8">お気軽にお問い合わせください。専門スタッフが丁寧にサポートいたします。</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-400 hover:bg-purple-500 text-white px-8 py-3 rounded-xl">
              <Mail className="w-5 h-5 mr-2" />
              メールで問い合わせ
            </Button>
            <Button variant="outline" className="border-gray-300 px-8 py-3 rounded-xl bg-transparent">
              <Phone className="w-5 h-5 mr-2" />
              電話で問い合わせ
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
