import React from 'react'
import Box from '~/components/Box'
import Paddable from '~/metacomponents/Paddable'

const NavbarBrand = ({className, children}) => {
  return (
    <Box className={className} height="100%" padding="0">
      <Box padding="0" verticallyCenter>
        {children}
      </Box>
    </Box>
  )
}

export default Paddable(NavbarBrand)
