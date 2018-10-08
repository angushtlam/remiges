import React from 'react'
import {css} from 'emotion'
import styled from 'react-emotion'
import colors from '~/styles/colors'

const styling = `
  color: ${colors.interactable};
  display: inline-block;
  font-weight: inherit;
  font-size: inherit;

  &:hover {
    transition: transform 0.4s ease;
    transform: translateY(-0.1em);
  }
`

const Hyperlink = styled.a(styling)
const styleClassName = css(styling)

const Link = ({children, rel, target, to, using}) => {
  // Always add noreferrer and noopener to rel if the target is blank
  const relationship =
    (rel || '') + `${target === '_blank' && ' noreferrer noopener'}`

  // If the component is a React Router component in the using prop, then just
  // style the component.
  if (using) {
    const UsingComponent = using
    return (
      <UsingComponent
        className={styleClassName}
        rel={rel}
        target={target}
        to={to}
      >
        {children}
      </UsingComponent>
    )
  }

  return (
    <Hyperlink href={to || '#'} rel={relationship} target={target}>
      {children}
    </Hyperlink>
  )
}

export default Link
