import Header from "@/components/header"
import {ImageSlider3D} from "@/components/image-slider-3d"
import NewsletterSection from "@/components/newsletter-section"
import BrandsSection from "@/components/brands-section"
import SpecialCollection from "@/components/special-collection"
import NewsletterSignup from "@/components/newsletter-signup"
import FAQSection from "@/components/faq-section"
import ContactCTA from "@/components/contact-cta"

export default function Home() {
  const vapeImages = [
    { src: "/vape1.jpeg", alt: "Purple Vape Device" },
    { src: "/licensed-image.webp", alt: "Pink Vape Device" },
    { src: "/vape1.jpeg", alt: "Blue Vape Device" },
    { src: "/licensed-image.webp", alt: "Green Vape Device" },
  ]

  return (
    <main className="min-h-screen">
      <ImageSlider3D images={vapeImages} />
      <NewsletterSection />
      <BrandsSection />
      <SpecialCollection />
      <FAQSection />
      <ContactCTA />
      <NewsletterSignup />
    </main>
  )
}
