import styled from 'react-emotion'
import Displayable from 'lib/metacomponents/Displayable'
import Sizable from 'lib/metacomponents/Sizable'

const Subheader = styled.h2`
  font-weight: 500;
  font-size: 2em;
  line-height: 1.2;
  margin-bottom: 0.3em;
  margin-top: 0;
`

export default Displayable(Sizable(Subheader))
