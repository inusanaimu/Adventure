import tourImage from '../../../assets(images)/1 MainHero/MainHero.svg'


const background =  {
  backgroundImage: `url(${tourImage})`
}

const TourImage = () => {
  return (


    <div className=' h-full w-full bg-no-repeat bg-[center_bottom_0] bg-origin-content ' style={background} >

      <div >.</div>
    
    </div>
  )
}

export default TourImage