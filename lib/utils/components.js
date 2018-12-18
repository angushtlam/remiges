import React from 'react'
import Theme from 'lib/components/Theme'

export const constructWithTheme = (Component, theme = {}) => ({
  children,
  ...otherProps
}) => (
  <Theme theme={theme}>
    <Component {...otherProps}>{children}</Component>
  </Theme>
)
