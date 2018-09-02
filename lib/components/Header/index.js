import styled from 'styled-components'
import colors from '~/styles/colors'
import typography from '~/styles/typography'

const Header = styled.h1`
  color: ${colors.print};
  font-family: ${typography.sanSerif};
  font-weight: 700;
  font-size: 4em;
  line-height: 1.2em;
  margin: 0;
`
export default Header
