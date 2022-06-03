// import logo from './logo.svg';
import './App.css';

function List1(){
  return(
    <div>
      <h1>Mobile Operating System</h1>
      <ul>
        <li>Android</li>
         <li>Blackberry</li>
         <li>iPhone</li>
         <li>Windows Phone</li>
      </ul>
    </div>
  )
}

function List2(){
  return(
    <div>
      <h1>Mobile Manufacturers</h1>
      <ul>
        <li>Samsung</li>
         <li>HTC</li>
         <li>Micromax</li>
         <li>Apple</li>
      </ul>
    </div>
  )
};

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

 <div className="list">
<List1/>
<List2/>
 </div>


  );
}

export default App;