import styled from 'react-emotion'
import Sizable from '~/metacomponents/Sizable'

const Image = styled.img`
  ${props =>
    props.fill &&
    `
      height: 100%;
      width: auto;
    `};
`

export default Sizable(Image)
