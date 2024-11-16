import { useEffect } from "react"

const Card = () => {
    //for every rendering  pass nothing
    useEffect(()=>{
        console.log("hello");
    },[])
  return (
    <div></div>
  )
}

export default Card