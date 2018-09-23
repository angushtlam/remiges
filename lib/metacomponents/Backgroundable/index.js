import styled from 'styled-components'

const Backgroundable = Component =>
  styled(Component)`
    ${props => props.background && `background: ${props.background}`};
    ${props =>
      props.backgroundAttachment &&
      `background: ${props.backgroundAttachment}`};
    ${props => props.backgroundClip && `background: ${props.backgroundClip}`};
    ${props =>
      props.backgroundColor && `background-color: ${props.backgroundColor}`};
    ${props =>
      props.backgroundImage && `background-color: ${props.backgroundImage}`};
    ${props =>
      props.backgroundOrigin && `background: ${props.backgroundOrigin}`};
    ${props =>
      props.backgroundPosition &&
      `background-color: ${props.backgroundPosition}`};
    ${props =>
      props.backgroundRepeat && `background: ${props.backgroundRepeat}`};
    ${props => props.backgroundSize && `background: ${props.backgroundSize}`};
  `

export default Backgroundable
