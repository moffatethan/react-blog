import React from 'react'
import ReactDOM from 'react-dom'
import Base from './pages/base.jsx'
import { injectGlobal } from 'emotion'
import colors from './components/ui/colors'
import { BrowserRouter } from 'react-router-dom'

injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;   
  }

  body {
    background: ${colors.pageBackground};
    font-family: 'Source Sans Pro', sans-serif;
  }

  h1 {
    color: ${colors.primary};
    font-family: 'Kadwa', 'Source Sans Pro', sans-serif;
  }

  h2, h3, h5, h6 {
    color: ${colors.text};
  }
`
const app = (
  <BrowserRouter>
    <Base />
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('mount'))
