import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
//  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer position={"bottom-left"} />
      <App />
    </BrowserRouter>,
 // </React.StrictMode>,
)
