import React from 'react'
import Box from 'lib/components/Box'
import Backgroundable from 'lib/metacomponents/Backgroundable'
import {constructWithTheme} from 'lib/utils/components'

const NavbarBrand = ({className, children, padding, theme}) => (
  <Box
    className={className}
    padding={padding === '0' ? '0' : padding || theme.spacingNormal}
    height="100%"
    verticallyCenter
  >
    {children}
  </Box>
)

export default Backgroundable(constructWithTheme(NavbarBrand))
