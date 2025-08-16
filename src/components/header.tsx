import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full max-w-[1140px] mx-auto flex justify-between items-center h-[50px] px-4 lg:px-0">
      <div className="font-bold text-lg">NICOTIA</div>
      <nav className="flex gap-8">
        <Link href="/" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">
          Home
        </Link>
        <Link href="/info" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">
          Info
        </Link>
        <Link href="/contact" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  )
}