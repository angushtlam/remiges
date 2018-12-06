import React from 'react'
import styled from 'react-emotion'
import Box from '~/components/Box'
import Backgroundable from '~/metacomponents/Backgroundable'
import Fixedable from '~/metacomponents/Fixedable'

const FlexBox = styled(Box)`
  z-index: 100;
`

const Navbar = ({className, children}) => {
  return (
    <FlexBox
      className={className}
      flex
      height="2.8em"
      justifyContent="spaceBetween"
    >
      {children}
    </FlexBox>
  )
}

export default Backgroundable(Fixedable(Navbar))
