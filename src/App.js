import Navbar from "./components/Layout/Navbar/Navbar";
import HeroSection from "./components/HomePage/HeroSection/HeroSection";
import PopularTour from "./components/HomePage/PopularTours/PopularTour";

function App() {
  return (
    <div className=" text-center text-3xl ">
      <Navbar />
      <HeroSection />
      <PopularTour/>
      
    </div>
  );
}

export default App;
