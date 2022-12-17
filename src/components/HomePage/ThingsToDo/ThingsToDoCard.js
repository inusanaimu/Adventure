

const ThingsToDoCard = (props) => {
 
  const image = props.children

  return (
    <div className=' m-auto h-full w-full text-center ' >
      <img  className=" m-auto w-full " alt={`destination ${image}`} src={image} />
    </div>
  )
}

export default ThingsToDoCard