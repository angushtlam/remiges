import styled from 'react-emotion'
import {camelCaseToPipeCase} from 'lib/utils/naming'

const Displayable = Component =>
  styled(Component)`
    ${props => {
      if (props.block && props.inline) {
        return `display: inline-block;`
      } else if (props.block) {
        return `display: block;`
      } else if (props.display) {
        return `display: ${camelCaseToPipeCase(props.display)};`
      }
    }}

    ${props =>
      props.textAlign && `text-align: ${camelCaseToPipeCase(props.textAlign)};`}
  `

export default Displayable
