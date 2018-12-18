import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import {defaultTheme} from 'lib/utils/theming'

export default ({children, theme = {}}) => {
  const newTheme = ancestorTheme => ({
    ...defaultTheme,
    ...theme,
    ...ancestorTheme,
  })

  return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>
}
