import styled from 'react-emotion'

const gridSetup = styled('div')(props => ({
  display: 'grid',
  gridGap: props.gridGap || 'none',
  gridTemplateRows: `repeat(${props.rows}, 1fr);` && 'inherit;',
  gridTemplateColumns: `repeat(${props.columns}, 1fr);` || 'inherit;'
}))

export default gridSetup
