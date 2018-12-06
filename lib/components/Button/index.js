import React from 'react'
import {css} from '@emotion/core'
import styled from '@emotion/styled'
import Box from '~/components/Box'
import Displayable from '~/metacomponents/Displayable'
import Sizable from '~/metacomponents/Sizable'
import colors from '~/styles/colors'
import details from '~/styles/details'
import spacing from '~/styles/spacing'
import weights from '~/styles/weights'

const styling = `
  align-items: center;
  background-color: ${colors.interactable};
  border: 0;
  border-radius: ${details.interactableRoundedCorner};
  color: ${colors.shadow};
  cursor: pointer;
  display: inline-flex;
  font-weight: ${weights.bold};
  font-size: 1.1em;
  text-align: center;
  margin-bottom: 1px;
  margin-right: 1px;
  padding: ${spacing.thin} ${spacing.normal};
  text-decoration: none;
  white-space: nowrap; 

  &:active,
  &:hover {
    transition: background-color 0.2s ease;
    background-color: ${colors.interacted};
  }
`

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
        css={css(styling)}
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

export default Displayable(Sizable(Button))
