import React from 'react'
import Box from 'lib/components/Box'

const NavbarNavigation = ({className, children, padding}) => {
  const transformedChildren = React.Children.map(children, child => {
    return <Box padding>{child}</Box>
  })

  return (
    <Box className={className} flex padding={padding}>
      {transformedChildren}
    </Box>
  )
}

export default NavbarNavigation
