import {injectGlobal} from 'emotion'
import breakpoints from '~/styles/breakpoints'
import colors from '~/styles/colors'
import typography from '~/styles/typography'
import weights from '~/styles/weights'

const globalStyles = `
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
    font-weight: ${weights.normal};
    font-size: 1em;
    
    @media screen and (min-width: ${breakpoints.mobile}) {
      font-size: 1em;
    }

    @media screen and (min-width: ${breakpoints.tabletPortrait}) {
      font-size: 1.15em;
    }

    @media screen and (min-width: ${breakpoints.tabletLandscape}) {
      font-size: 1.3em;
    }

    @media screen and (min-width: ${breakpoints.desktop}) {
      font-size: 1.6em;
    }

    @media screen and (min-width: ${breakpoints.bigDesktop}) {
      font-size: 2.4em;
    }
  }
`

const setupGlobalStyles = () => {
  injectGlobal(globalStyles)
}

export {globalStyles, setupGlobalStyles}
