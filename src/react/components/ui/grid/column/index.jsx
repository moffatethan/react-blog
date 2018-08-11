import styled from 'react-emotion'

const column = styled('div')(props => ({
  gridColumnStart: props.start || 'inherit',
  gridColumnEnd: props.end || 'inherit',
  gridRowStart: props.rowStart || 'inherit',
  gridRowEnd: props.rowEnd || 'inherit'
}))

export default column
