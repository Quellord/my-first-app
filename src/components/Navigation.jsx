import { MdOutlineLightMode } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
// import "./Navigation.css";

const c_nav ={
    fontSize:"22px",
    backgroundColor:"hsl(0,0%,10%)",
    color:"white",
    width:"30%",
    maxWidth:"200px",
    height:"100vh",
    display:"flex",
    flexDirection:"column",
}
const Navigation = () => {
    
  return (
    <nav style={c_nav} >
        <h3 style={{margin:"1em"}}>Colour Lab</h3>
        <ul style={{ border:"solid red",height:"50%"}}>
            <li style={{height :"2em" , borderRadius:"0.5em", border:"solid blue"}}>
                <a href="/" className="Active">Your Pallete</a>
                <a href="/">Colour Picker</a>
                <a href="/">Colour code</a>
            </li>
        </ul>
        
    </nav>
  )
}

export default Navigation