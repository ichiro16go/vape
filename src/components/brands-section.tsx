export default function BrandsSection() {
    const brands = [
      {
        name: "MIST TECH",
        description: "テクノ先端ブランド",
        logo: "/vape1.jpeg",
      },
      {
        name: "PURE VAPE",
        description: "ピュアフレーバー体験",
        logo:"/vape1.jpeg",
      },
      {
        name: "ZEN VAPOR",
        description: "禅の心を込めたvape",
        logo:"/vape1.jpeg",
      },
      {
        name: "ELITE MIST",
        description: "エリート向けプレミアム",
        logo:"/vape1.jpeg",
      },
      {
        name: "CRYSTAL VAPE",
        description: "クリスタルクリアな品質",
        logo: "/vape1.jpeg",
      },
    ]
  
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">取扱ブランド</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            使い捨てvapeに特化した（N）ICOTIAならではの厳選した安全で高品質な豊富なブランド
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="w-16 h-16 mx-auto object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{brand.name}</h3>
                <p className="text-sm text-gray-600">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  