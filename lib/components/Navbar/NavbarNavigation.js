import React from 'react'
import Box from '~/components/Box'

const NavbarNavigation = ({className, children}) => {
  const transformedChildren = React.Children.map(children, child => {
    return <Box>{child}</Box>
  })

  return (
    <Box className={className} padding="0">
      {transformedChildren}
    </Box>
  )
}

export default NavbarNavigation
