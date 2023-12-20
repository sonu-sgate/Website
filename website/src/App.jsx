import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import AOS from "aos";
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Onepirate/modules/Home'

import 'aos/dist/aos.css'; // Import AOS styles
function App() {
  const [count, setCount] = useState(0)
useEffect(() => {
  // Initialize AOS
  AOS.init({
    duration: 700, // Duration of animation in milliseconds
    // once: true, // Whether animation should only happen once while scrolling down
  });
}, []);
  return (
    <>
     <Home/>
   
    </>
  )
}

export default App
