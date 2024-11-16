
const Card = ({id,title,status}) => {
   
  return <>
    <h2>{id}</h2>
   <p className={status?"strikeThrough":""}>{title}</p>
  </>
}

export default Card