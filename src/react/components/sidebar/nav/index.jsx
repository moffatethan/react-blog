import styled from 'react-emotion'
import colors from '../../ui/colors'

const sidebarNav = styled('ul')`
  list-style: none;
  margin-top: 56px;
  li {
    --webkit-transition: all 245ms ease-in-out;
    --moz-transition: all 245ms ease-in-out;
    transition: all 245ms ease-in-out;
    &:hover {
      background: ${colors.text};
      box-shadow: inset 6px 1px 16px rgba(0,0,0,0.35);
      a {
        margin-left: 15px;
      }
    }
    a {
      color: ${colors.white};
      font-size: 18px;
      display: block;
      text-decoration: none;
      font-weight: bold;
      transition: all 245ms cubic-bezier(0,-0.61, 0, 1.96);
      padding: 30px 25px;
    }
  }
`

export default sidebarNav
