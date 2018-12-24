import React from 'react'
import styled from 'react-emotion'
import Box from 'lib/components/Box'
import Link from 'lib/components/Link'
import {constructWithTheme} from 'lib/utils/components'

const Division = styled(Box)`
  overflow-x: scroll;

  ${Link} {
    font-weight: ${props => props.theme.navbarLinkFontWeight};
    text-decoration: ${props => props.theme.navbarLinkTextDecoration};
    white-space: nowrap;
  }
`

const Navbar = ({className, children, ...otherProps}) => (
  <Division
    className={className}
    flex
    height="2.8em"
    justifyContent="spaceBetween"
    width="100%"
    zIndex="100"
    {...otherProps}
  >
    {children}
  </Division>
)

export default constructWithTheme(Navbar, {
  navbarLinkTextDecoration: 'none',
  navbarLinkFontWeight: 700,
})
