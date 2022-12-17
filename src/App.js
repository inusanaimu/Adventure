import Navbar from "./components/Layout/Navbar/Navbar";
import HeroSection from "./components/HomePage/HeroSection/HeroSection";
import PopularTour from "./components/HomePage/PopularTours/PopularTour";
import ThingsToDo from './components/HomePage/ThingsToDo/ThingsToDo'

function App() {
  return (
    <div className=" m-auto bg-[#f3f6fa] ">
      <Navbar />
      <HeroSection />
      <PopularTour/>
      <ThingsToDo/>
      
    </div>
  );
}

export default App;
