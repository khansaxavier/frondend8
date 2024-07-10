import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contoh from  './Contoh.jsx'
import Home from './Pages/home.jsx'
import IndukProps from './Pages/induk-props.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import Landing from './Pages/Landing.jsx'
import Layout from './Componen/Layout.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    {/*<Contoh> */}
    {/*<Home>*/} 
    {/*<IndukProps>*/}
    {/* <Home /> */}

    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
