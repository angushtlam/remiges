import React from 'react'
import {createGlobalStyle} from 'styled-components'
import breakpoints from '~/styles/breakpoints'
import colors from '~/styles/colors'
import typography from '~/styles/typography'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
  }

  body {
    color: ${colors.print};
    font-family: ${typography.sanSerif};
    font-weight: 400;
    font-size: 1em;
    
    @media screen and (min-width: ${breakpoints.mobile}) {
      font-size: 1em;
    }
  
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
  }
`

const Screen = ({children}) => (
  <React.Fragment>
    <GlobalStyles />
    {children}
  </React.Fragment>
)

export default Screen
