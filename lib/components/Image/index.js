import styled from '@emotion/styled'
import Backgroundable from '~/metacomponents/Backgroundable'
import Displayable from '~/metacomponents/Displayable'
import Flexboxable from '~/metacomponents/Flexboxable'
import Sizable from '~/metacomponents/Sizable'

const Image = styled.img`
  ${props =>
    props.fillParent &&
    `
      height: 100%;
      width: auto;
    `};
`

export default Backgroundable(Displayable(Flexboxable(Sizable(Image))))
