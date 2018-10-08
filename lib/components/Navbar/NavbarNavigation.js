import React from 'react'
import Box from '~/components/Box'
import Link from '~/components/Link'

const NavbarNavigation = ({className, children}) => {
  const validatedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child) || child.type !== Link) {
      throw new Error('Child element is not a valid Link component.')
    }

    return <Box>{child}</Box>
  })

  return (
    <Box className={className} padding="0">
      {validatedChildren}
    </Box>
  )
}

export default NavbarNavigation
