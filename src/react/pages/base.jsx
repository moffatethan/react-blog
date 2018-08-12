import React from 'react'
import Sidebar from '../components/sidebar'
import UI from '../components/ui/'
import { Route } from 'react-router-dom'

import HomePage from './home'
import PortfolioPage from './portfolio'

export default () =>
  <div>
    <UI.Grid columns={3} gridRows={5}>
      <UI.Column rowStart={1} rowEnd={6}>
        <Sidebar />
      </UI.Column>
      <UI.Column start={2} end={4} rowStart={1} rowEnd={6}>
        <Route path='/' exact component={HomePage} />
        <Route path='/portfolio' component={PortfolioPage} />
      </UI.Column>
    </UI.Grid>
  </div>
