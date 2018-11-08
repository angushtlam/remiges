import React from 'react'
import Box from '~/components/Box'

const NavbarNavigation = ({className, children, padding}) => {
  const transformedChildren = React.Children.map(children, child => {
    return <Box padding={padding}>{child}</Box>
  })

  return (
    <Box className={className} padding="0">
      {transformedChildren}
    </Box>
  )
}

export default NavbarNavigation
