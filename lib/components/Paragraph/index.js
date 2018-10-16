import styled from 'react-emotion'

import breakpoints from '~/styles/breakpoints'
import weights from '~/styles/weights'

const Paragraph = styled.p`
  font-weight: ${weights.normal};
  font-size: 1em;
  line-height: 1.3em;
  margin-bottom: 1.5em;
  margin-top: 0;

  @media screen and (min-width: ${breakpoints.mobile}) {
    line-height: 1.3em;
  }

  @media screen and (min-width: ${breakpoints.tabletPortrait}) {
    line-height: 1.35em;
  }

  @media screen and (min-width: ${breakpoints.tabletLandscape}) {
    line-height: 1.4em;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    line-height: 1.45em;
  }

  @media screen and (min-width: ${breakpoints.bigDesktop}) {
    line-height: 1.5em;
  }
`

export default Paragraph
