import React from 'react'
import Theme from 'lib/components/Theme'
import {withTheme} from 'emotion-theming'

export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

export const constructWithTheme = (Component, customTheme = {}) => {
  const ThemedComponent = withTheme(Component)

  const FinalComponent = ({children, ...otherProps}) => {
    return (
      <Theme theme={customTheme}>
        <ThemedComponent {...otherProps}>{children}</ThemedComponent>
      </Theme>
    )
  }

  FinalComponent.displayName = Component.displayName
  return FinalComponent
}
