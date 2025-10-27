import Header from "@/components/layout/header";
import Hero from "@/components/home/hero";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-y-hidden bg-black">
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <SparklesCore
          className="h-full w-full"
          particleDensity={60}
          minSize={0.5}
          maxSize={1.5}
        />
      </div>
      <div className="z-10">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
