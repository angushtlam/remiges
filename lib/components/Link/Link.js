import {css} from 'emotion'
import React from 'react'
import styled from 'react-emotion'
import Displayable from 'lib/metacomponents/Displayable'
import Sizable from 'lib/metacomponents/Sizable'
import {compose, constructWithTheme} from 'lib/utils/components'

const styling = props => css`
  color: ${props.theme.linkColor};
  display: inline-block;
  font-weight: inherit;
  font-size: inherit;

  &:active,
  &:hover {
    transition: ${props.theme.linkTransition};
    color: ${props.theme.linkColorInteracted};
  }
`

const Hyperlink = styled.a(styling)

const Link = props => {
  const {className, children, rel, target, to, using, ...otherProps} = props
  // Always add noreferrer and noopener to rel if the target is blank
  const relationship =
    (rel || '') + `${target === '_blank' && ' noreferrer noopener'}`

  // If the component is a React Router component in the using prop, then just
  // style the component.
  if (using) {
    const UsingComponent = using
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

  return (
    <Hyperlink
      className={className}
      href={to || '#'}
      rel={relationship}
      target={target}
      {...otherProps}
    >
      {children}
    </Hyperlink>
  )
}

export default compose(
  Displayable,
  Sizable
)(
  constructWithTheme(Link, theme => ({
    linkColor: theme.color50,
    linkColorInteracted: theme.color60,
    linkTransition: 'color 0.2s ease',
  }))
)
