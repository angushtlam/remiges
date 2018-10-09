import styled from 'react-emotion'

const Sizable = Component =>
  styled(Component)`
    ${props => props.height && `height: ${props.height}`};
    ${props => props.maxHeight && `max-height: ${props.maxHeight}`};
    ${props => props.minHeight && `min-height: ${props.minHeight}`};
    ${props => props.maxWidth && `max-width: ${props.maxWidth}`};
    ${props => props.minWidth && `min-width: ${props.minWidth}`};
    ${props => props.width && `width: ${props.width}`};
  `

export default Sizable
