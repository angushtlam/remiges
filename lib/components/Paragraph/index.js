import styled from 'styled-components'

import breakpoints from '~/styles/breakpoints'

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 1em;
  line-height: 1.3em;
  margin-bottom: 0.5em;
  margin-top: 0;

  @media screen and (min-width: ${breakpoints.mobile}) {
    line-height: 1.3em;
  }

  @media screen and (min-width: ${breakpoints.tabletPortrait}) {
    line-height: 1.3em;
  }

  @media screen and (min-width: ${breakpoints.tabletLandscape}) {
    line-height: 1.35em;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    line-height: 1.35em;
  }

  @media screen and (min-width: ${breakpoints.bigDesktop}) {
    line-height: 1.4em;
  }
`

export default Paragraph
