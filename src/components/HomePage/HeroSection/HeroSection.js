import FormArea from "./FormArea"
import TourImage from "./TourImage"


const HeroSection = () => {
  return (
      <div className=" bg-[#f3f6fa] mb-[110px] relative w-full   ">
          <div className="  max-w-[1344px] grid grid-cols-2 ">
          <FormArea/>
          <TourImage/>
          </div>
    </div>
  )
}

export default HeroSection