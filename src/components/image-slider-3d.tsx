"use client"
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import styles from "./ImageSlider3D.module.css"
import { useRouter } from "next/navigation"
const ImageItem = ({
  src,
  alt,
  position,
  onHover,
}: { src: string; alt: string; position: number; onHover: (isHovered: boolean) => void }) => {
  const router = useRouter();

  const handleClick = () => {
    // ここで遷移先のパスを指定します
    router.push(`/product/${position}`);
  };

  return (
    <div
      className={styles.item}
      style={{ "--position": position } as React.CSSProperties}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={handleClick} // クリックイベントを追加
    >
      <Image
        src={src}
        alt={alt}
        width={200} // 元のCSSの幅
        height={250} // 元のCSSの高さ
        className={styles.image}
      />
    </div>
  );
};

export const ImageSlider3D = ({ images }: { images: { src: string; alt: string }[] }) => {
  const [isHovered, setIsHovered] = useState(false)
  if (!images || images.length === 0) {
    return null // 画像がなければ何も表示しない
  }

  return (
    <div className={styles.banner}>
      <div className={styles.slider} style={{ "--quantity": images.length } as React.CSSProperties}>
        {images.map((image, i) => (
          <ImageItem key={i} src={image.src} alt={image.alt} position={i + 1} onHover={setIsHovered} />
        ))}
      </div>
    </div>
  )
}
