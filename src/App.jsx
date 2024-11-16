import Card from "./components/Card";
import { useState,useRef } from "react";
import "./App.css"
let duck = 100;
const App = ()=>{ 
  const [count, setCount] = useState(0);
 let fuck = useRef(2);
  const UpdateC = ()=>{
    console.log(fuck.current);
    fuck.current ++;
    duck++;
    console.log(duck)
    //yaha pe fuck variable badal raha hai but jab count ko render kiya jaata hai tab app component pura render hota hai so fuck become s 2 again
    //for this we have use ref
    

    // ab muje ye doubt hai ki global var bhi useref jesa hi kaam karta hai toh global kyu use nhi karte
    //doubt clear because global me hum uncreate or rendered element ka name store nhi kar sakte 
    //use ref document .get eleme t ka alternatuve hota hai
    
    setCount(count+1);
  }
  return <>
    <Card />
    <h2>{count}</h2>
    <button onClick={UpdateC}>Load</button>
  </>
};
export default App;