import HeaderSection from "@/components/Header";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <HeaderSection />
      <Image
        src="/cover-image.png"
        className="mx-auto"
        alt="hero"
        width={1000}
        height={1000}
      />
    </div>
  );
}
