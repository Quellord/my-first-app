import { MdOutlineLightMode } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import "./style.css";

const c_nav ={
    fontSize:"22px",
    backgroundColor:"hsl(0,0%,5%)",
    color:"white",
    Width:"100vw",
    height:"3.5em",
    display:"flex",
    justifyContent:"space-between",
    padding:"0em 2em"
}
const Navigation = () => {
    const toggleWebColor =()=>{
        if(document.getElementsByClassName("DarkMode"))Document.getElementsByClassName("DarkMode").style.backgroundColor="hsl(0,0%,95%)";
        else Document.getElementsByClassName("DarkMode").style.backgroundColor="hsl(0,0%,5%)";
    }
  return (
    <nav style={c_nav} className="DarkMode">
        <h3>Aman Gupta </h3>
        <ul style={{listStyle:"none",display:"flex",gap:"0.5em"}}>
            <li>
                <a href="/" className="Active"><FaRegUserCircle /></a>
                <a href="/"><FaDiagramProject /></a>
                <a href="/"><GiSkills/></a>
                <MdOutlineLightMode onClick={toggleWebColor} style={{cursor:"pointer"}} />
            </li>
        </ul>
        
    </nav>
  )
}

export default Navigation