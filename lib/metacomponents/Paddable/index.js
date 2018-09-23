import styled from 'styled-components'

const Paddable = Component =>
  styled(Component)`
    ${props => props.padding && `padding: ${props.padding}`};
  `

export default Paddable
