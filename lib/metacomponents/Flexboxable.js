import styled from '@emotion/styled'
import {camelCaseToPipeCase} from '~/utils/naming'

const Flexboxable = Component =>
  styled(Component)`
    ${props =>
      props.alignContent &&
      `align-content: ${camelCaseToPipeCase(props.alignContent)}`};
    ${props =>
      props.alignItems &&
      `align-items: ${camelCaseToPipeCase(props.alignItems)}`};
    ${props =>
      props.alignSelf && `align-self: ${camelCaseToPipeCase(props.alignSelf)}`};
    ${props =>
      props.flex === true
        ? `display: flex`
        : `flex: ${camelCaseToPipeCase(props.flex || '')}`};
    ${props =>
      props.flexBasis && `flex-basis: ${camelCaseToPipeCase(props.flexBasis)}`};
    ${props =>
      props.flexDirection &&
      `flex-direction: ${camelCaseToPipeCase(props.flexDirection)}`};
    ${props =>
      props.flexFlow && `flex-flow: ${camelCaseToPipeCase(props.flexFlow)}`};
    ${props =>
      props.flexGrow && `flex-grow: ${camelCaseToPipeCase(props.flexGrow)}`};
    ${props =>
      props.flexShrink &&
      `flex-shrink: ${camelCaseToPipeCase(props.flexShrink)}`};
    ${props =>
      props.flexWrap && `flex-wrap: ${camelCaseToPipeCase(props.flexWrap)}`};
    ${props =>
      props.justifyContent &&
      `justify-content: ${camelCaseToPipeCase(props.justifyContent)}`};
    ${props => props.order && `order: ${camelCaseToPipeCase(props.order)}`};
    ${props =>
      props.placeContent &&
      `place-content: ${camelCaseToPipeCase(props.placeContent)}`};
  `

export default Flexboxable
