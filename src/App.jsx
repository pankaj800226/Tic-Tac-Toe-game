
import{ BrowserRouter as Router,Routes,Route } from "react-router-dom"; 
import Header from "./componentes/Header"
import Home from"./componentes/Home"
import About from"./componentes/About"
import Contact from"./componentes/Contact"

//styles link import
import "./styles/header.scss"
import "./styles/home.scss"


function App() {
  return (
    <Router>
    <Header />

    <Routes>
  <Route  path="/" element={<Home />}/>
  <Route  path="/about" element={<About />}/>
  <Route  path="/contact" element={<Contact />}/>
  

    </Routes>

  
  </Router>
  );
}

export default App;
