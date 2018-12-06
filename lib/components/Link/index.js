import {css} from 'emotion'
import React from 'react'
import styled from 'react-emotion'
import colors from '~/styles/colors'
import Displayable from '~/metacomponents/Displayable'
import Sizable from '~/metacomponents/Sizable'

const styling = `
  color: ${colors.interactable};
  display: inline-block;
  font-weight: inherit;
  font-size: inherit;

  &:active,
  &:hover {
    transition: color 0.2s ease;
    color: ${colors.interacted};
  }
`

const Hyperlink = styled.a(styling)
const styleClassName = css(styling)

const Link = ({className, children, rel, target, to, using}) => {
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
      >
        {children}
      </UsingComponent>
    )
  }

  return (
    <Hyperlink
      className={className}
      href={to || '#'}
      rel={relationship}
      target={target}
    >
      {children}
    </Hyperlink>
  )
}

export default Displayable(Sizable(Link))
