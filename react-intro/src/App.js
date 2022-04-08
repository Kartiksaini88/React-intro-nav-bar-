import logo from './logo.svg';
import './App.css';
import {Name,Nav} from "./compnents/compnents.jsx"
function App() {
  let data = [
    {
      name:"Android"
    },
    {
      name:"Blackberry"
    },
    {
      name:"iPhone"
    },
    {
      name:"Windows Phone"
    },
   
  ]

  let manu = [
    {
      name:"Samasung",
      title:{
        name:"hi"
      }

    },
    {
      name:"HTC",
      title:{
        name:"hi"
      }
    },
    {
      name:"Micromax",
      title:{
        name:"hi"
      }
    },
    {
      name:"Apple",
      title:{
        name:"hi"
      }
    },
  ]


  return (
    
  <div>
      <Nav/>
    <h1 className='h1'>Mobile Operating System</h1>
    <ul>
      {data.map(e=> <Name name={e.name}/>)} 
    </ul>
    <h1 className='h1'>Mobile Manufacturers</h1>
      <ul>
      {manu.map(e=><Name name={e.name}/>)}
      </ul>

  </div>
  );
}



export default App;
