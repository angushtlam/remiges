import styled from 'react-emotion'
import Backgroundable from '~/metacomponents/Backgroundable'
import Sizable from '~/metacomponents/Sizable'

const Box = styled.div`
  display: flex;
  flex-direction: ${props => (props.horizontalDirection ? 'row' : 'column')};

  ${props =>
    props.horizontallyCenter &&
    `
      margin-left: auto;
      margin-right: auto;
    `};
  ${props => props.verticallyCenter && `align-items: center;`};
`

export default Backgroundable(Sizable(Box))
