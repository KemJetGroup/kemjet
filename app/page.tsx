import Header from "@/components/layout/header";
import Hero from "@/components/home/hero";
import NewsList from "@/components/home/news-list";
import Footer from "@/components/layout/footer";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <div className="relative w-full bg-black">
      {/* Hero Section with Sparkles */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 w-full min-h-full pointer-events-none">
          <SparklesCore
            className="w-full h-full"
            particleDensity={60}
            minSize={0.5}
            maxSize={1.5}
          />
        </div>
        <div className="relative z-10">
          <Header />
          <Hero />
          <NewsList />
          <Footer />
        </div>
      </div>
    </div>
  );
}
