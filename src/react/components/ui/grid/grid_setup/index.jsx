import styled from 'react-emotion'

const gridSetup = styled('div')(props => ({
  display: 'grid',
  gridGap: props.gridGap || 'none',
  gridTemplateRows: `repeat(${props.gridRows}, 1fr)` || 'inherit',
  gridTemplateColumns: `repeat(${props.columns}, 1fr)` || 'inherit',
  margin: '0 auto',
  height: '100vh'
}))

export default gridSetup
