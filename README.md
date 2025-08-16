```
.
├── .env.local                  # 環境変数（CMSのAPIキーなどをここに記述）
├── next.config.mjs             # Next.jsの設定ファイル
├── src/                        # アプリケーションコードのルート
│   ├── app/                    # App Routerのメインディレクトリ
│   │   ├── (main)/             # 顧客向けページのルートグループ
│   │   │   ├── products/
│   │   │   │   ├── [slug]/     # 商品詳細ページ（動的ルート）
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── components/   # このページ専用のコンポーネント
│   │   │   │   │       └── ProductDetails.tsx
│   │   │   │   │
│   │   │   │   ├── page.tsx      # 商品一覧ページ
│   │   │   │   └── layout.tsx    # 商品ページ共通のレイアウト
│   │   │   │
│   │   │   ├── about/
│   │   │   │   └── page.tsx      # 会社概要ページ
│   │   │   │
│   │   │   ├── layout.tsx      # (main)グループ共通のレイアウト（ヘッダー、フッターなど）
│   │   │   └── page.tsx        # トップページ
│   │   │
│   │   ├── api/                  # APIルート
│   │   │   └── revalidate/       # CMS更新時にキャッシュを破棄するためのルート
│   │   │       └── route.ts
│   │   │
│   │   ├── globals.css         # グローバルなCSS
│   │   └── layout.tsx            # アプリケーション全体のルートレイアウト
│   │
│   ├── components/
│   │   ├── ui/                   # shadcn/uiのような再利用可能なUI部品（Button, Card, Inputなど）
│   │   └── shared/               # 複数ページで利用する複合コンポーネント（Header, Footerなど）
│   │
│   ├── lib/
│   │   ├── cms-client.ts         # ヘッドレスCMSとの通信ロジックをすべてここに集約
│   │   └── types.ts              # CMSから取得するデータの型定義
│   │
│   └── hooks/
│       └── use-media-query.ts    # カスタムフックなど
│
└── tsconfig.json
```# vape
