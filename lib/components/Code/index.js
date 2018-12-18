import styled from 'react-emotion'
import {constructWithTheme} from 'lib/utils/components'

const Code = styled.pre`
  font-family: ${props => props.theme.fontFixedWidth};
`

export default constructWithTheme(Code)
