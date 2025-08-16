import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-purple-600">N</span>ICOTIA
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              高品質なvape製品をお届けする、日本最大級のオンラインショップです。安全性と品質にこだわり、お客様に最高の体験をお約束します。
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-gray-600" />
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-gray-600" />
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Youtube className="w-5 h-5 text-gray-600" />
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">クイックリンク</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  商品一覧
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  新着商品
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  セール商品
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  ブランド一覧
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  初心者ガイド
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-bold mb-4">カスタマーサポート</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  よくある質問
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  配送について
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  返品・交換
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  利用規約
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">お問い合わせ</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>0120-123-456</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span>info@nicotia.jp</span>
              </div>
              <div className="flex items-start gap-2">
                <span>📍</span>
                <div>
                  <div>〒100-0001</div>
                  <div>東京都千代田区千代田1-1</div>
                  <div>NICOTIA本社ビル</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h5 className="font-medium mb-2">営業時間</h5>
              <div className="text-sm text-gray-600">
                <div>平日: 9:00 - 18:00</div>
                <div>土日祝: 10:00 - 17:00</div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-bold mb-4">お支払い方法</h4>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-2">クレジットカード</div>
                <div className="flex gap-2">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">VISA</div>
                  <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">MC</div>
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-2">銀行振込</div>
              </div>

              <div>
                <div className="bg-orange-500 text-white px-3 py-2 rounded text-sm font-bold inline-block">PayPay</div>
              </div>

              <div className="flex items-center gap-2 text-sm text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>SSL暗号化で安全</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">© 2024 NICOTIA. All rights reserved.</div>

          <div className="flex flex-col items-center gap-2">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              20歳未満の方への販売は行っておりません
            </div>
            <div className="text-xs text-gray-500">※本サイトは20歳以上の方を対象としています</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
