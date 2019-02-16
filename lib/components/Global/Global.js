import React from 'react'
import {constructWithTheme} from 'lib/utils/components'

let globalStyleElem = null
const globalStyleId = 'remiges__global'

const Global = props => {
  const {children, styles, theme} = props

  if (typeof window !== `undefined`) {
    if (globalStyleElem) {
      globalStyleElem.remove()
    }

    globalStyleElem = window.document.createElement('style')
    globalStyleElem.id = globalStyleId
    globalStyleElem.innerHTML = ''
    document.body.appendChild(globalStyleElem)

    globalStyleElem.innerHTML = `
      * {
        box-sizing: border-box;
      }

      html {
        font-size: ${theme.bodyFontSize};
        margin: 0;
      }

      body {
        background-color: ${theme.bodyBackgroundColor};
        margin: 0;
      }

      body,
      button,
      input {
        color: ${theme.bodyColor};
        font-family: ${theme.fontA};
        font-weight: ${theme.fontWeightNormal};
        font-size: 1.6em;
      }

      ${theme.breakpointTabletPortrait} {
        body {
          font-size: 1.8em;
        }
      }

      ${theme.breakpointTabletLandscape} {
        body {
          font-size: 1.9em;
        }
      }

      ${theme.breakpointDesktop} {
        body {
          font-size: 2.1em;
        }
      }

      ${theme.breakpointBigDesktop} {
        body {
          font-size: 2.4em;
        }
      }

      ${!!styles ? styles(props) : ''}
    `
  }

  return <>{children}</>
}

export default constructWithTheme(Global, theme => ({
  bodyBackgroundColor: theme.color90,
  bodyColor: theme.color0,
  bodyFontSize: '62.5%',
}))
