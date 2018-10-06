import React from 'react'
import Box from '~/components/Box'
import Link from '~/components/Link'

const NavbarNavigation = ({className, children}) => {
  const validatedChildren = children.filter(child => {
    if (!React.isValidElement(child) || child.type !== Link) {
      throw new Error('Child element is not a valid Link component.')
    }

    return true
  })

  return (
    <Box className={className} padding="0">
      {validatedChildren.map((child, i) => (
        <Box>{React.cloneElement(child, {key: i})}</Box>
      ))}
    </Box>
  )
}

export default NavbarNavigation
