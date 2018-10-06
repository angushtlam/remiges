import styled from 'react-emotion'

const Paddable = Component =>
  styled(Component)`
    ${props => props.padding && `padding: ${props.padding}`};
  `

export default Paddable
