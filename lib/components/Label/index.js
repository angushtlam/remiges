import styled from 'react-emotion'
import Displayable from 'lib/metacomponents/Displayable'
import Sizable from 'lib/metacomponents/Sizable'
import Textable from 'lib/metacomponents/Textable'
import {constructWithTheme} from 'lib/utils/components'

const Label = styled.label`
  font-weight: ${props => props.theme.fontWeightStrong};
  font-size: 1em;
  line-height: 1.2;
  padding: ${props => props.theme.spaceHalf};
`

export default Displayable(Sizable(Textable(constructWithTheme(Label))))
