import styled from 'styled-components'

const Paddable = Component =>
  styled(Component).attrs({
    padding: props => props.padding || '0',
  })`
    padding: ${props => props.padding};
  `

export default Paddable
