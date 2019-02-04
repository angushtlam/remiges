import styled from 'react-emotion'
import Displayable from 'lib/metacomponents/Displayable'
import Sizable from 'lib/metacomponents/Sizable'
import Textable from 'lib/metacomponents/Textable'
import {constructWithTheme} from 'lib/utils/components'

const Paragraph = styled.p`
  font-weight: ${props => props.theme.fontWeightNormal};
  line-height: 1.3em;
  margin-bottom: 1em;
  margin-top: 0;

  ${props =>
    !props.padding &&
    `
    &:last-child {
      margin-bottom: 0;
    }
  `}
`

export default Displayable(Sizable(Textable(constructWithTheme(Paragraph))))
