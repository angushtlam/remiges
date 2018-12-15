import React from 'react'
import Box from '~/components/Box'
import Backgroundable from '~/metacomponents/Backgroundable'

const Navbar = ({className, children, ...otherProps}) => {
  return (
    <Box
      className={className}
      flex
      height="2.8em"
      justifyContent="spaceBetween"
      zIndex="100"
      {...otherProps}
    >
      {children}
    </Box>
  )
}

export default Backgroundable(Navbar)
