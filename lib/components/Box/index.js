import styled from 'react-emotion'
import Backgroundable from '~/metacomponents/Backgroundable'
import Paddable from '~/metacomponents/Paddable'
import Sizable from '~/metacomponents/Sizable'

const Box = styled.div`
  display: flex;
  ${props => {
    if (props.direction && props.direction === 'horizontal') {
      return 'flex-direction: row'
    } else if (props.direction && props.direction === 'vertical') {
      return 'flex-direction: column'
    }
  }};

  ${props =>
    props.horizontallyCenter &&
    `
      margin-left: auto;
      margin-right: auto;
    `};
  ${props => props.verticallyCenter && `align-items: center;`};
`

export default Backgroundable(Paddable(Sizable(Box)))
