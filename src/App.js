import logo from './logo.svg';
import './App.css';
import Nabar from './Components/Nabar';
import Header from './Components/Header';
import About from './Components/About';
import Services from './Components/Services';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Theme from './Components/Theme';
import Themetwo from './Components/Themetwo';



function App() {
  return (
    <div className="App">
      <Nabar/>
      <Header/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
      {/* <Themetwo/> */}
      <Footer/>
    </div>
  );
}

export default App;
