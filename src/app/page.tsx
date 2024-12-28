import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Works from "./components/Works";
import ExploreSection from "./components/Explore";
import Services from "./components/Services";
import Results from "./components/Results";
import FeaturedInsights from "./components/FeaturedInsights";
import Footer from "./components/Footer";
import HiddenDisplay from "./components/HiddenDisplay";

export default function Home() {
  return (
    <div className=" font-[ppmori-regular] w-screen ">
      <NavBar />
      {/* <div className="relative"> */}
      <Hero />
      <div className="relative ">
        <ExploreSection />
        <About />
        <Works />
        <Services />
        <Results />
        <FeaturedInsights />
        <Footer />
        <HiddenDisplay />
      </div>
      {/* </div> */}
    </div>
  );
}
