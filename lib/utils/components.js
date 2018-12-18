import React from 'react'
import Theme from 'lib/components/Theme'
import {withTheme} from 'emotion-theming'

export const constructWithTheme = (Component, theme = {}) => {
  const ThemedComponent = withTheme(Component)

  return ({children, ...otherProps}) => (
    <Theme theme={theme}>
      <ThemedComponent {...otherProps}>{children}</ThemedComponent>
    </Theme>
  )
}
