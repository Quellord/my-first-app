import Card from "./components/Card";
import { useState } from "react";
import "./App.css"
const App = ()=>{ 
  const [data, setdata] = useState([])
  async function fetchData(){
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random()*20)+1}`);
      if(!response.ok){
        throw new Error('Failed to fetch data');
      }
      const newdata = await response.json();
      setdata(newdata);
      
    }catch(error){
      console.error(error);
    }
    
  }
  return <>
    <Card id ={data.id} title={data.title} status ={data.completed}/>  
    <button onClick={fetchData}>Load</button>
  </>
};
export default App;