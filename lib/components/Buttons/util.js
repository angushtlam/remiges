import React from 'react'
import styled from 'react-emotion'
import Box from 'lib/components/Box'
import Displayable from 'lib/metacomponents/Displayable'
import Sizable from 'lib/metacomponents/Sizable'
import spacing from 'lib/styles/spacing'

export const constructButtonWithStyling = styling => {
  const LinkElem = styled.a(styling)
  const ButtonElem = styled.button(styling)

  const Button = ({
    className,
    children,
    rel,
    target,
    to,
    using,
    ...otherProps
  }) => {
    // Always add noreferrer and noopener to rel if the target is blank
    const relationship =
      (rel || '') + `${target === '_blank' && ' noreferrer noopener'}`

    const renderChildren = (
      <Box padding={['0', '0', spacing.divider, '0']}>{children}</Box>
    )

    // If the component is a React Router component in the using prop, then just
    // style the component.
    if (using) {
      const UsingComponent = using
      return (
        <UsingComponent
          className={className}
          css={styling}
          rel={rel}
          target={target}
          to={to}
          {...otherProps}
        >
          {renderChildren}
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
        {renderChildren}
      </LinkElem>
    ) : (
      <ButtonElem className={className} {...otherProps}>
        {renderChildren}
      </ButtonElem>
    )
  }

  return Displayable(Sizable(Button))
}
