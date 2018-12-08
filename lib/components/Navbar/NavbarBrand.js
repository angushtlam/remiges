import React from 'react'
import Box from 'lib/components/Box'
import Backgroundable from 'lib/metacomponents/Backgroundable'
import spacing from 'lib/styles/spacing'

const NavbarBrand = ({className, children, padding}) => (
  <Box
    className={className}
    padding={padding === '0' ? '0' : padding || spacing.normal}
    height="100%"
    verticallyCenter
  >
    {children}
  </Box>
)

export default Backgroundable(NavbarBrand)
