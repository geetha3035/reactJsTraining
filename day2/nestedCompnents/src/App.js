import logo from './logo.svg';
import './App.css';
import Navbar from './Compnents/Navbar';
import Header from  './Compnents/Header';
import Sidebar from  './Compnents/Sidebar';
import Home from  './Compnents/Home';
import Footer from  './Compnents/Footer';

function App() {
  return (
    // <div className="App">
    //   {/* <h1>Hello World</h1>
    //   <Hello/>
    //   <World/> */}
    <div>
      <Navbar/>
      <Header />
      <div className='row'>
        <div className='col-lg-3'>
        <Sidebar/>
        </div>
        <div className='col-lg-9'>
        <Home />
        </div>
      </div>
     
     
      <Footer />
    
    </div>
  );
}

export default App;
