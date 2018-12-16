import React from 'react'
import Box from 'lib/components/Box'

const Navbar = ({className, children, ...otherProps}) => {
  return (
    <Box
      className={className}
      flex
      height="2.8em"
      justifyContent="spaceBetween"
      width="100%"
      zIndex="100"
      {...otherProps}
    >
      {children}
    </Box>
  )
}

export default Navbar
