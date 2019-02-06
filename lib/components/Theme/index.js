import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import {defaultTheme} from 'lib/utils/theming'

export default ({children, theme = {}}) => {
  const adjustedTheme = ancestorTheme => {
    const mergedTheme = {
      ...defaultTheme,
      ...ancestorTheme,
    }

    if (typeof theme === 'function') {
      return {
        ...theme(mergedTheme),
        ...mergedTheme,
      }
    }

    return {
      ...mergedTheme,
      ...theme,
    }
  }

  return (
    <ThemeProvider theme={adjustedTheme}>
      <React.Fragment>{children}</React.Fragment>
    </ThemeProvider>
  )
}
