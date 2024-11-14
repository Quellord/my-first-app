import Greetings from "./components/Greetings";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather"
// import "./index.css";

// there are three way to add css 
// 1.using {{}} to make mapp in that same Linter
// 2.using another map list as style
// 3.adding new css file and importing it


// css in part way
const secstyle ={
  backgroundColor:"teal" ,
  padding:"4rem"
}

const App = ()=>{
  return (
  // <section style={{backgroundColor:"teal"}}>
    <section style={secstyle}>
      <Weather/>
      <UserStatus log ={false} admin={true}/>
      <Greetings time="afternoon"/>
  </section>);
};
export default App;