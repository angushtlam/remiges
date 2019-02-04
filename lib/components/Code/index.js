import styled from 'react-emotion'
import {constructWithTheme} from 'lib/utils/components'

const Code = styled.pre`
  font-family: ${props => props.theme.fontB};
`

export default constructWithTheme(Code)
