import styled from 'react-emotion'

const Backgroundable = Component =>
  styled(Component)`
    ${props => props.background && `background: ${props.background}`};
    ${props =>
      props.backgroundAttachment &&
      `background-attachment: ${props.backgroundAttachment}`};
    ${props =>
      props.backgroundClip && `background-clip: ${props.backgroundClip}`};
    ${props =>
      props.backgroundColor && `background-color: ${props.backgroundColor}`};
    ${props =>
      props.backgroundImage && `background-image: ${props.backgroundImage}`};
    ${props =>
      props.backgroundOrigin && `background-origin: ${props.backgroundOrigin}`};
    ${props =>
      props.backgroundPosition &&
      `background-position: ${props.backgroundPosition}`};
    ${props =>
      props.backgroundRepeat && `background-repeat: ${props.backgroundRepeat}`};
    ${props =>
      props.backgroundSize && `background-size: ${props.backgroundSize}`};
  `

export default Backgroundable
