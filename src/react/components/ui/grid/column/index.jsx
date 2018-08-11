import styled from 'react-emotion'

const column = styled('div')(props => ({
  gridColumnStart: props.start || 'inherit',
  gridColumnEnd: props.end || 'inherit'
}))

export default column
