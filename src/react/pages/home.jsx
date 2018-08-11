import React from 'react'
import Sidebar from '../components/sidebar'
import UI from '../components/ui/'
import Content from '../components/content'

export default () =>
  <div>
    <UI.Grid columns={3} gridRows={5}>
      <UI.Column rowStart={1} rowEnd={6}>
        <Sidebar />
      </UI.Column>
      <UI.Column start={2} end={4} rowStart={1} rowEnd={6}>
        <Content />
      </UI.Column>
    </UI.Grid>
  </div>
