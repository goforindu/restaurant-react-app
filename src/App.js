import './App.css';
import React,{useState, useEffect} from 'react';
import { HashLoader  } from 'react-spinners';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';
import Contacts from './Components/Contacts';

function App() {
  const[loading,setLoading]=useState(false);
 
  useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  },5000);
  },[]);
  return (
    <div className="App">
    
     {
      loading ? <HashLoader  color={'#36d7b7'} loading={loading} cssOverride={{marginTop:'45vh', marginLeft:'45vw'}} size={50}/>
      :
      <>
        <Navbar/>
        <Header/>
        <Products/>
        <About/>
        <Contacts/>
      </>
    }
    </div>
  );
}

export default App;
