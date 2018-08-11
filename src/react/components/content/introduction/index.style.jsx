import styled from 'react-emotion'
import colors from '../../ui/colors'

const introWrapper = styled('div')`
  h1 {
    color: ${colors.primary};
    font-size: 4em;
    font-family: 'Kadwa', 'Source Sans Pro', sans-serif;
  }
  #content-intro {
    font-size: 2.5em;
    color: ${colors.text}
  }
  #content-intro-important {
    color: ${colors.primary};
    font-weight: 700;
  }
`

export default introWrapper
