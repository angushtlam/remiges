import React from 'react'
import styled from 'react-emotion'
import Displayable from 'lib/metacomponents/Displayable'
import Sizable from 'lib/metacomponents/Sizable'
import {constructWithTheme} from 'lib/utils/components'

export const constructButtonWithStyling = styling => {
  const LinkElem = styled.a(styling)
  const ButtonElem = styled.button(styling)

  const Button = props => {
    const {className, children, rel, target, to, using, ...otherProps} = props

    // Always add noreferrer and noopener to rel if the target is blank
    const relationship =
      (rel || '') + `${target === '_blank' && ' noreferrer noopener'}`

    // If the component is a React Router component in the using prop, then just
    // style the component.
    if (using) {
      const UsingComponent = using

      // Manually populate props for styling
      return (
        <UsingComponent
          className={className}
          css={styling(props)}
          rel={rel}
          target={target}
          to={to}
          {...otherProps}
        >
          {children}
        </UsingComponent>
      )
    }

    return to || using ? (
      <LinkElem
        className={className}
        href={to || '#'}
        rel={relationship}
        target={target}
        {...otherProps}
      >
        {children}
      </LinkElem>
    ) : (
      <ButtonElem className={className} {...otherProps}>
        {children}
      </ButtonElem>
    )
  }

  return Displayable(Sizable(constructWithTheme(Button)))
}
