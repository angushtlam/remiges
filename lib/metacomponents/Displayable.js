import styled from '@emotion/styled'
import {camelCaseToPipeCase} from '~/utils/naming'

const Displayable = Component =>
  styled(Component)`
    ${props => {
      if (props.block) {
        return `display: block`
      } else if (props.display) {
        return `display: ${camelCaseToPipeCase(props.display)}`
      }
    }};
  `

export default Displayable
