import styled from 'react-emotion'
import Backgroundable from '~/metacomponents/Backgroundable'
import Displayable from '~/metacomponents/Displayable'
import Flexboxable from '~/metacomponents/Flexboxable'
import Sizable from '~/metacomponents/Sizable'

const Image = styled.img`
  display: flex;

  ${props =>
    props.fillParent &&
    `
      height: 100%;
      width: auto;
    `};
`

export default Backgroundable(Displayable(Flexboxable(Sizable(Image))))
