import React from 'react'
import {injectGlobal} from 'react-emotion'
import {constructWithTheme} from 'lib/utils/components'

const GlobalStyling = props => {
  const {children, styles} = props

  injectGlobal`
    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
    }

    body {
      background: ${props.theme.bodyBackground};
    }

    body,
    button,
    input {
      color: ${props.theme.colorPrint};
      font-family: ${props.theme.fontFamilySanSerif};
      font-weight: ${props.theme.weightNormal};
      font-size: 1em;
    }

    body {
      @media screen and (min-width: ${props.theme.breakpointTabletPortrait}) {
        font-size: 1.1em;
      }

      @media screen and (min-width: ${props.theme.breakpointTabletLandscape}) {
        font-size: 1.15em;
      }

      @media screen and (min-width: ${props.theme.breakpointDesktop}) {
        font-size: 1.3em;
      }

      @media screen and (min-width: ${props.theme.breakpointBigDesktop}) {
        font-size: 1.6em;
      }
    }

    ${styles && styles(props)}
  `

  return <>{children}</>
}

export default constructWithTheme(GlobalStyling)
