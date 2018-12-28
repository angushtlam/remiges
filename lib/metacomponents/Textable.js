import styled from 'react-emotion'

const Textable = Component =>
  styled(Component)`
    ${props => props.color && `color: ${props.color}`};
    ${props => props.fontSize && `font-size: ${props.fontSize}`};
  `

export default Textable
