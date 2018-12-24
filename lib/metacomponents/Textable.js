import styled from 'react-emotion'

const Textable = Component =>
  styled(Component)`
    ${props => props.color && `color: ${props.color}`};
  `

export default Textable
