import React, { useEffect } from 'react';
import Home from './pages/Home';
import AOS from "aos";



function App() {
  useEffect(()=>{
    AOS.init({
      duration : 1000,
      once : true
    });
  }, [])
  return (
   <>
   <Home/>
   </>
  )
}

export default App