import React from 'react'
import Box from '~/components/Box'

const NavbarBrand = ({className, children}) => {
  return (
    <Box className={className} height="100%">
      <Box className={className} padding="0" verticallyCenter>
        {children}
      </Box>
    </Box>
  )
}

export default NavbarBrand
