import React from 'react'
import ProjectsWrapper from './index.style'
import Project from './project'
import UI from '../ui'

export default () =>
  <ProjectsWrapper>
    <UI.Grid columns={2} gridGap='12px' noHeight>
      <UI.Column>
        <Project />
      </UI.Column>
      <UI.Column>
        <Project />
      </UI.Column>
      <UI.Column>
        <Project />
      </UI.Column>
      <UI.Column>
        <Project />
      </UI.Column>
      <UI.Column>
        <Project />
      </UI.Column>
    </UI.Grid>
  </ProjectsWrapper>
