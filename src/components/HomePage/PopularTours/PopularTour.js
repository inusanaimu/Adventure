import ToursList from './ToursList'

import Popular1 from '../../../assets(images)/2 Popular Tour/Popular Tour 1.svg'
import Popular2 from '../../../assets(images)/2 Popular Tour/Popular Tour 2.svg'
import Popular3 from '../../../assets(images)/2 Popular Tour/Popular Tour 3.svg'
import Popular4 from '../../../assets(images)/2 Popular Tour/Popular Tour 4.svg'
import Popular5 from '../../../assets(images)/2 Popular Tour/Popular Tour 5.svg'
import Popular6 from '../../../assets(images)/2 Popular Tour/Popular Tour 6.svg'

const popularTourList = [Popular1, Popular2, Popular3, Popular4, Popular5, Popular6]


const PopularTour = () => {
    return (
      <div className=''>
            <div className=' mb-4 flex justify-between'>
                <h1 className=' text-left text-4xl font-medium  ' >PopularTours</h1>
                <h4 className=' text-left text-xl font-normal  ' >VIEW ALL-------</h4>
            </div>
            <ToursList popularTourList={popularTourList}/>

      </div>
  )
}

export default PopularTour