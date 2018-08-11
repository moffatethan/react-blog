import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/home.jsx'
import { injectGlobal } from 'emotion'
import colors from './components/ui/colors'

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
`

ReactDOM.render(<Home />, document.getElementById('mount'))
