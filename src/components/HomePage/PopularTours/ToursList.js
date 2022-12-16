import TourCard from './TourCard'

const ToursList = (props) => {
  return (
    <div>
      {props.map((item) => {
  return( <TourCard Tour={item} /> )
})}
    </div>
  )
}

export default ToursList