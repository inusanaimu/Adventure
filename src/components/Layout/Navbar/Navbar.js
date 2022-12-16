import PrimaryNav from "./PrimaryNav"
import SecondaryNav from "./SecondaryNav"


const Navbar = () => {
  return (
      <div className=" w-full bg-[#f3f6fa] border border-[#111111] m-auto ">
          <div className=" max-w-[1344px]  flex flex-col "> 
            <PrimaryNav/>      
            <SecondaryNav/>
          </div>
      </div>
  )
}

export default Navbar