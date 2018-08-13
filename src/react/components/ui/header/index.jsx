import styled from 'react-emotion'

export const HeaderWrapper = styled('div')`
  height: 251px;
  width: 100%;
  margin: 25px auto;
  margin-bottom: 54px;
`

export const Header = styled('div')`
  background-image: url(/${props => props.image});
  background-size: cover;
  background-position: center;
  height: 100%;
  border-radius: 25px;
  box-shadow: 0px 6px 52px rgba(0,0,0,0.35);
`
