import React from 'react'
import {css} from 'emotion'
import styled from 'react-emotion'
import colors from '~/styles/colors'
import details from '~/styles/details'
import spacing from '~/styles/spacing'
import Displayable from '~/metacomponents/Displayable'
import Sizable from '~/metacomponents/Sizable'

const styling = `
  background-color: ${colors.interactable};
  border: 0;
  border-radius: ${details.interactableRoundedCorner};
  color: ${colors.shadow};
  cursor: pointer;
  display: inline-block;
  font-weight: inherit;
  font-size: 1.1em;
  text-align: center;
  margin-bottom: 1px;
  margin-right: 1px;
  padding: 0.25em ${spacing.normal} ${spacing.thin} ${spacing.normal};
  text-decoration: none;
  white-space: nowrap; 

  &:active,
  &:hover {
    transition: background-color 0.2s ease;
    background-color: ${colors.interacted};
  }
`

const styleClassName = css(styling)
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

  // If the component is a React Router component in the using prop, then just
  // style the component.
  if (using) {
    const UsingComponent = using
    return (
      <UsingComponent
        className={className + ' ' + styleClassName}
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

export default Displayable(Sizable(Button))
