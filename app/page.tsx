import Companies from "@/components/Companies";
import Contents from "@/components/Contents";
import CustomCarousel from "@/components/CustomCarousel";
import Footer from "@/components/Footer";
import  { WorldMapDemo } from "@/components/MapWithCountries";
import Header from "@/components/Header";
import IndustrySection from "@/components/IndustrySection";
import NewGlobe from "@/components/newGlobe";
import Testimonial from "@/components/Testimonials";
import Video from "@/components/Video";

export default function App() {
  return (
    <div>
      <Header />
      <Video />
      <div className="mt-8 mb-20">
        <div>
          <CustomCarousel />
        </div>
      </div>
      <Companies />
      <Contents />
      <Testimonial />
      <IndustrySection />
      <WorldMapDemo />
      <Footer />
    </div>
  );
}
