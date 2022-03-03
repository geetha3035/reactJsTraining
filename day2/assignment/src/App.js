import logo from './logo.svg';
import './App.css';
import Navbar from './Compnents/Navbar/Navbar'
import Sidebar from './Compnents/Home/Sidebar';
import Crad from './Compnents/Home/Card';


function App() {
  return (
    // <div className="App">
    //   {/* <h1>Hello World</h1>
    //   <Hello/>
    //   <World/> */}
    <div>
      <Navbar />
      <Sidebar />
      <Crad />
    </div>


  );
}

export default App;
