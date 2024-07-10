// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import State from "./Pages/State";
import Landing from "./Pages/Landing";
import EvenHandling from "./Pages/EventHandling";
import UseEffect from "./Pages/UseEffect";
import UpdateState from "./Componen/UpdateState";
import Animasi from "./Componen/Animasi";
import FetchApi from "./Componen/FetchApi";
import ReactContext from "./Pages/ReactContext";
import GetMahasiswa from "./Componen/Admin/GetMahasiswa";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/landingpage" element={<Landing/>}/>
      <Route path="/State" element={<State/>}/>
      <Route path="/EventHandling" element={<EvenHandling/>}/>
      <Route path="/UseEffect" element={<UseEffect/>}/>
      <Route path="/UpdateState" element={<UpdateState/>}/>
      <Route path="/Animasi" element={<Animasi/>}/>
      <Route path="/Fetsch" element={<FetchApi/>}/>
      <Route path="/ReactContext" element={<ReactContext/>}/>
      <Route path="/getmhs" element={<GetMahasiswa/>}/>

    </Routes>
   );
}

export default App;
