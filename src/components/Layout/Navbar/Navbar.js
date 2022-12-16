import PrimaryNav from "./PrimaryNav"
import SecondaryNav from "./SecondaryNav"


const Navbar = () => {
  return (
      <div className=" w-full bg-[#f3f6fa]  m-auto pb-8 ">
          <div className=" max-w-[1344px]  flex flex-col "> 
            <PrimaryNav/>      
            <SecondaryNav/>
          </div>
      </div>
  )
}

export default Navbar