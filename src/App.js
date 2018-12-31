import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios'
const ID ='S50Q3PGKONDINTVVUN4CS0TAFFMZ01HFVPPO2UMK25PBY30I'
const secret ='XYCVGLSLSEPRP50EVFU142AWS1XIAHO5I4TNXOYLCKBRK4CT'
const base ='https://api.foursquare.com/v2/venues/search'
const ll ='24.874486899999997,67.1853436'


class App extends Component {
  constructor(){
    super()
    this.state={
      adress:[]
      // adress:['ayan','taha']
    }
  }

  adresses = (query)=>{
    fetch(`${base}?ll=${ll}&client_id=${ID}&client_secret=${secret}&v=20181225&query=${query}&limit=10`)
    .then(function(res) {
    return res.json();
    })
    .then((res)=> {
            this.setState({adress :res.response.venues})
    })
    .catch(()=> {
    // Code for handling errors\\
    console.log('error in fatching=>')
    });
    }
    

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <input 
        type='text'
        placeholder='search your location'
        onChange={(e)=>{this.adresses(e.target.value)}}
        />

        <ul>
          <Suggestions result={this.state.adress}/>
        </ul>


      </div>
    );
  }
}

export default App;



const Suggestions = (props) => {


   const getLocation = (obj,index)=>{
    console.log('index==>',obj,index)
   }

  const options = props.result.map((r,i) => (
    <li 
    onClick={()=>getLocation(r,i)}
    key={r.id}
    
    >
      {r.name}
    </li>
  ))
  return <ul>{options}</ul>
}
