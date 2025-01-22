import Companies from "@/components/Companies";
import Contents from "@/components/Contents";
import Footer from "@/components/Footer";
import { WorldMapDemo } from "@/components/MapWithCountries";
import Header from "@/components/Header";
import IndustrySection from "@/components/IndustrySection";
import Testimonial from "@/components/Testimonials";
import Video from "@/components/Video";
import CardGrid from "@/components/CardGrid";

export default function App() {
  const cardsGroup1 = [
    {
      image: "/cardgrid/slide1.jpg",
      title: "EXTRUSION DIVISION",
      description: "76,800 metric ton",
      unit: "Output per annum",
      className: "hidden sm:block",
      link: "/about/ourgroups/extrudedprofiles",
    },
    {
      image: "/cardgrid/slide2.jpg",
      title: "POWDER COATING DIVISION",
      description: "44,400 metric ton",
      unit: "Output per annum",
      className: "hidden sm:block",
      link: "/about/ourgroups/extrudedprofiles",
    },
    {
      image: "/cardgrid/slide3.jpg",
      title: "ANODIZING DIVISION",
      description: "14,800 metric ton",
      unit: "Output per annum",
      className: "hidden sm:block",
      link: "/about/ourgroups/extrudedprofiles",
    },
    {
      image: "/cardgrid/slide4.jpg",
      title: "WOOD COATING DIVISION",
      description: "1500 metric ton",
      unit: "Output per annum",
      className: "hidden sm:block",
      link: "/wood-coating-division",
    },
  ];

  const cardsGroup2 = [
    {
      image: "/cardgrid/slide5.jpg",
      title: "EXTRUSION DIE DIVISION",
      description: "1800 Dies",
      unit: "Output per annum",
      className: "hidden sm:block",
      link: "/about/ourgroups/extrudedprofiles",
    },
    {
      image: "/cardgrid/slide6.jpg",
      title: "EPDM RUBBER PRODUCTS DIVISION",
      description: "1800 metric ton",
      unit: "Output per annum",
      className: "hidden sm:block",
      link: "/epdm-rubber-products-division",
    },
    {
      image: "/cardgrid/slide7.jpg",
      title: "ALUMINIUM COIL & SHEET DIVISION",
      description: "30,000 metric ton",
      unit: "Output per annum",
      // className: "hidden sm:block",
      link: "/aluminium-coil-sheet-division",
    },
    {
      image: "/cardgrid/slide3.jpg",
      title: "METAL DIVISION",
      description: "30,000 metric ton",
      unit: "Output per annum",
      className: "hidden sm:block",
      link: "/about/ourgroups/nashat",
    },
  ];

  return (
    <div>
      <Header />
      <Video />
      <Contents />
      <div className="flex justify-center">
        <CardGrid cards={cardsGroup1} />
      </div>
      <div className="flex justify-center items-center">
        <CardGrid cards={cardsGroup2} />
      </div>
      <Companies />
      <Testimonial />
      <IndustrySection />
      <WorldMapDemo />
      <Footer />
    </div>
  );
}
