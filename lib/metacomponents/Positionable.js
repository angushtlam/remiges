import styled from 'react-emotion'
import {camelCaseToPipeCase} from 'lib/utils/naming'

const Positionable = Component =>
  styled(Component)`
    ${props => props.absolute && `position: absolute;`}
    ${props => props.relative && `position: relative;`}
    ${props => props.fixed && `position: fixed;`};
    ${props => props.bottom && `bottom: ${camelCaseToPipeCase(props.bottom)};`}
    ${props => props.left && `left: ${camelCaseToPipeCase(props.left)};`}
    ${props => props.right && `right: ${camelCaseToPipeCase(props.right)};`}
    ${props => props.top && `top: ${camelCaseToPipeCase(props.top)};`}
    ${props => props.zIndex && `z-index: ${camelCaseToPipeCase(props.zIndex)};`}
  `

export default Positionable
