import styled from 'react-emotion'
import colors from '../../ui/colors'

const introWrapper = styled('div')`
  h1 {
    font-size: 4em;
  }
  #content-intro {
    font-size: 2.5em;
    color: ${colors.text}
  }
  #content-intro-important {
    color: ${colors.primary};
  }
`

export default introWrapper
