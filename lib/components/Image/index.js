import styled from 'react-emotion'
import Backgroundable from 'lib/metacomponents/Backgroundable'
import Displayable from 'lib/metacomponents/Displayable'
import Flexboxable from 'lib/metacomponents/Flexboxable'
import Sizable from 'lib/metacomponents/Sizable'

const Image = styled.img`
  ${props =>
    props.fillParent &&
    `
      height: 100%;
      width: auto;
    `};
`

export default Backgroundable(Displayable(Flexboxable(Sizable(Image))))
