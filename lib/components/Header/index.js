import styled from 'react-emotion'
import Displayable from 'lib/metacomponents/Displayable'
import Sizable from 'lib/metacomponents/Sizable'
import Textable from 'lib/metacomponents/Textable'

const Header = styled.h1`
  font-weight: 700;
  font-size: 4em;
  line-height: 1.2;
  margin: 0;
`
export default Displayable(Sizable(Textable(Header)))
