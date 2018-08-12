import styled from 'styled-components'
import breakpoints from '~/styles/breakpoints'

const Screen = styled.div`
  box-sizing: border-box;
  font-size: 62.5%;
  margin: 0;

  @media screen and (min-width: ${breakpoints.tabletPortrait}) {
    font-size: 1.15em;
  }

  @media screen and (min-width: ${breakpoints.tabletLandscape}) {
    font-size: 1.35em;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 1.75em;
  }

  @media screen and (min-width: ${breakpoints.bigDesktop}) {
    font-size: 2.5em;
  }
`

export default Screen
