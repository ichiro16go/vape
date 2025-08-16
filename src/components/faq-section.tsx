"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "初めてvapeを使用する場合、どの商品がおすすめですか？",
    answer: "初心者の方には、使い捨てタイプのvapeがおすすめです。メンテナンス不要で簡単にお使いいただけます。",
  },
  {
    question: "配送にはどのくらいの時間がかかりますか？",
    answer: "通常、ご注文から2-3営業日でお届けいたします。地域によって多少前後する場合があります。",
  },
  {
    question: "年齢確認はどのように行われますか？",
    answer: "ご注文時に身分証明書による年齢確認を行っております。20歳未満の方はご購入いただけません。",
  },
  {
    question: "商品の返品・交換は可能ですか？",
    answer: "未開封の商品に限り、商品到着から7日以内であれば返品・交換を承っております。",
  },
  {
    question: "リキッドの成分について教えてください",
    answer: "当店で取り扱うリキッドは、すべて安全基準をクリアした高品質な成分のみを使用しております。",
  },
  {
    question: "メンテナンス方法がわからない場合はどうすればいいですか？",
    answer: "商品に付属の取扱説明書をご確認いただくか、カスタマーサポートまでお気軽にお問い合わせください。",
  },
  {
    question: "支払い方法はどのようなものがありますか？",
    answer: "クレジットカード、銀行振込、PayPayでのお支払いが可能です。",
  },
  {
    question: "ポイント制度はありますか？",
    answer: "はい、ご購入金額に応じてポイントが貯まり、次回のお買い物でご利用いただけます。",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold">よくある質問</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            お客様からよくいただくご質問をまとめました。こちらで解決しない場合は、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">
                  <p className="pt-4">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
