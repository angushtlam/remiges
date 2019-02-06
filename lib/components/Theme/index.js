import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import {defaultTheme} from 'lib/utils/theming'

export default ({children, theme = {}}) => {
  const adjustedTheme = ancestorTheme => {
    const mergedTheme = {
      ...defaultTheme,
      ...ancestorTheme,
    }

    const customTheme = typeof theme === 'function' ? theme(mergedTheme) : theme

    const final = {
      ...mergedTheme,
      ...customTheme,
    }

    return final
  }

  return (
    <ThemeProvider theme={adjustedTheme}>
      <React.Fragment>{children}</React.Fragment>
    </ThemeProvider>
  )
}
