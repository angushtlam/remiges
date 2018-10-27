import styled from 'react-emotion'
import {camelCaseToPipeCase} from '~/utils/naming'

const Displayable = Component =>
  styled(Component)`
    ${props =>
      props.display && `display: ${camelCaseToPipeCase(props.display)}`};
  `

export default Displayable
