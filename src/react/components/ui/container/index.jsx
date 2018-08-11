import styled from 'react-emotion'

const container = styled('div')(props => ({
  maxWidth: props.width || 'inherit',
  margin: `${props.topMargin || '0'} auto`,
  padding: props.padding || 'none'
}))

export default container
