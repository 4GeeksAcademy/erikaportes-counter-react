import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './components/Home';

let counter = 0;
const raiz = ReactDOM.createRoot(document.getElementById('root'))
const interval = setInterval(() => {
  counter++;
  raiz.render(
    <React.StrictMode>
      <SecondsCounter seconds={counter} />
    </React.StrictMode>,
  )
}, 1000)

raiz.render(
  <React.StrictMode>
    <SecondsCounter seconds={counter} />
  </React.StrictMode>,
)
