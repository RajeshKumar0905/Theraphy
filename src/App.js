
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Components/Home';
import Training from './Pages/Training/Training';
import Pricing from './Pages/Pricing/Pricing';
import ScrollToTop from "./Compoents/Scrolltop"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <div className='app'>
    <Router>
    <ScrollToTop/>
      <Routes>
        
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Pricing" exact element={<Pricing/>}/>
        <Route path="/Contact" exact element={<Contact/>}/>
        <Route path="/Training" exact element={<Training/>}/>
       
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
