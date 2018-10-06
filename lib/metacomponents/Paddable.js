import styled from 'react-emotion'
import spacing from '~/styles/spacing'

const Paddable = Component => {
  return styled(Component)`
    padding: ${props => props.padding || spacing.normal};
  `
}

export default Paddable
