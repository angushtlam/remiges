import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import defaultBreakpoints from 'lib/styles/breakpoints'
import defaultColors from 'lib/styles/colors'
import defaultDetails from 'lib/styles/details'
import defaultSpacing from 'lib/styles/spacing'
import defaultTypography from 'lib/styles/typography'
import defaultWeights from 'lib/styles/weights'

export default ({children, theme}) => {
  const finalTheme = {
    breakpoints: {
      ...defaultBreakpoints,
      ...(theme && theme.breakpoints),
    },
    colors: {
      ...defaultColors,
      ...(theme && theme.colors),
    },
    details: {
      ...defaultDetails,
      ...(theme && theme.details),
    },
    spacing: {
      ...defaultSpacing,
      ...(theme && theme.spacing),
    },
    typography: {
      ...defaultTypography,
      ...(theme && theme.typography),
    },
    weights: {
      ...defaultWeights,
      ...(theme && theme.weights),
    },
  }

  return <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>
}
