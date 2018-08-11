import React from 'react'
import Sidebar from './index.style'
import SidebarNav from './nav'

export default () =>
  <React.Fragment>
    <Sidebar>
      <h1>Ethan's Dev Journey 🎉</h1>
      <SidebarNav>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Portfolio</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
        <li>
          <a href='#'>Twitter</a>
        </li>
        <li>
          <a href='#'>GitHub</a>
        </li>
      </SidebarNav>
    </Sidebar>
  </React.Fragment>
