import styled from 'styled-components'
import colors from '~/styles/colors'
import typography from '~/styles/typography'

const Paragraph = styled.p`
  color: ${colors.print};
  font-family: ${typography.sanSerif};
  font-weight: 400;
  font-size: 1em;
  line-height: 1.5em;
  margin-bottom: 0.5em;
  margin-top: 0;
`

export default Paragraph
