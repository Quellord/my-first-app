import Navbar from "./components/Navbar";
import Greet from "./components/Greet";
import Main from "./components/Main";
import Footer from "./components/Footer"

const App = ()=>{
  return <section>
      <Navbar/>
      <Greet/>
      <Main> <h2>Cart 🛒</h2></Main>
      <Footer/>
    </section>;
};
export default App;