import styled from '@emotion/styled'
import {constructWithTheme} from 'lib/utils/components'

const Code = styled.pre`
  font-family: ${props => props.theme.fontFamilyFixedWidth};
`

export default constructWithTheme(Code)
