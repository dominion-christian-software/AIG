import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ContentGrid from "@/components/ContentGrid";
import VideoSection from "@/components/VideoSection";
import MinistryHighlights from "@/components/MinistryHighlights";
import NewsletterCTA from "@/components/NewsletterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <ContentGrid />
        <VideoSection />
        <MinistryHighlights />
        <NewsletterCTA />
      </main>
      <Footer />
    </div>
  );
}
