import { Lora } from "next/font/google";
import Image from "next/image";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        src="/logo/kemjet_logo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="w-auto h-10 md:h-14"
      />
      <h1 className={`font-bold uppercase md:text-3xl font-lora text-white`}>
        kemjet
      </h1>
    </div>
  );
}
