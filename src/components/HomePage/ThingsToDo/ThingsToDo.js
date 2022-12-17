import ThingsToDoCard from './ThingsToDoCard'

import Things1 from '../../../assets(images)/3 Things to do/Things to do 1.svg'
import Things2 from '../../../assets(images)/3 Things to do/Things to do 2.svg'
import Things3 from '../../../assets(images)/3 Things to do/Things to do 3.svg'
import Things4 from '../../../assets(images)/3 Things to do/Things to do 4.svg'

const things = [ Things1, Things2, Things3, Things4]

const ThingsToDo = () => {
  return (
    <div className='relative w-full'>
<div className='  absolute w-full h-[426px] bg-[rgba(198,206,221,0.2)]' ></div>
      <div  className=' max-w-[1140px] m-auto '  >
      <div className=' my-14 flex justify-between'>
                <h1 className=' text-4xl font-medium  ' >Things to do</h1>
                <h4 className=' text-xl font-normal  ' >VIEW ALL-------</h4>
        </div>
        <div className=' grid grid-cols gap-[50px] justify-between' >
        {things.map((item) => {
          return( <ThingsToDoCard  key={item} >{ item }</ThingsToDoCard> )
        })}
        </div>
      </div>
    </div>
  )
}

export default ThingsToDo