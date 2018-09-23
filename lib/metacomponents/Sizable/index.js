import styled from 'styled-components'

const Paddable = Component =>
  styled(Component)`
    ${props => props.display && `display: ${props.display}`};
    ${props => props.height && `height: ${props.height}`};
    ${props => props.width && `width: ${props.width}`};
  `

export default Paddable
