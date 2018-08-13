import React from 'react'
import { Header, HeaderWrapper } from '../components/ui/header'
import PortfolioHeaderImage from '../assets/images/portfolio_header.png'
import UI from '../components/ui'

import Projects from '../components/projects'

export default () =>
  <React.Fragment>
    <UI.Container width='80%'>
      <HeaderWrapper>
        <Header image={PortfolioHeaderImage} />
      </HeaderWrapper>
      <h2>
        My portfolio is all the projects I have done throughout my learning. It will be very basic to some really big projects. A lot of this stuff are concepts but they are pretty neat to check out.
      </h2>
      <Projects />
    </UI.Container>
  </React.Fragment>
