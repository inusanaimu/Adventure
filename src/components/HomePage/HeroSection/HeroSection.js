import FormArea from "./FormArea"
import TourImage from "./TourImage"


const HeroSection = () => {
  return (
      <div className=" relative w-full  border border-[#212121] ">
          <div className=" relative max-w-[1344px] grid grid-cols-2 ">
          <FormArea/>
          <TourImage/>
          </div>
    </div>
  )
}

export default HeroSection