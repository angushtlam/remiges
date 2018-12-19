import React from 'react'
import {Global, css} from '@emotion/core'
import {constructWithTheme} from 'lib/utils/components'

const createGlobalStyles = userStyles => {
  const styling = props => css`
    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
    }

    body,
    button,
    input {
      color: ${props.theme.colorPrint};
      font-family: ${props.theme.fontFamilySanSerif};
      font-weight: ${props.theme.fontWeightNormal};
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

      @media screen and (min-width: ${props.theme.breakpointsBigDesktop}) {
        font-size: 1.6em;
      }
    }

    ${userStyles || ''};
  `

  const GlobalWithDefaults = props => (
    <Global styles={styling(props)} {...props} />
  )

  return constructWithTheme(GlobalWithDefaults)
}

export {createGlobalStyles}
