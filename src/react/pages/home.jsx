import React from 'react'
import Sidebar from '../components/sidebar'
import Layout from '../components/ui/grid'


export default () =>
  <div>
    <Layout.Grid columns={3} gridGap='10px'>
      <h1>test</h1>
      <h1>test 1</h1>
      <h1>test 2</h1>
    </Layout.Grid>
  </div>
