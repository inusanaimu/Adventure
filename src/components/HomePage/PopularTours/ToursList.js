import TourCard from './TourCard'

const ToursList = (props) => {
  return (
    <div className=' grid grid-cols-3 gap-[50px] justify-between '>
      {props.popularTourList.map((item) => {
        return(<TourCard key={item}>{item}</TourCard>)
})}
    </div>
  )
}

export default ToursList