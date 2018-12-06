import React from 'react'
import Box from 'lib/components/Box'
import Backgroundable from 'lib/metacomponents/Backgroundable'
import Paddable from 'lib/metacomponents/Paddable'
import spacing from 'lib/styles/spacing'

const NavbarBrand = ({className, children, padding}) => {
  return (
    <Box
      className={className}
      height="100%"
      padding={padding || spacing.normal}
      verticallyCenter
    >
      {children}
    </Box>
  )
}

export default Backgroundable(Paddable(NavbarBrand))
