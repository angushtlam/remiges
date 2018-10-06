import React from 'react'
import styled from 'react-emotion'
import Box from '~/components/Box'
import Backgroundable from '~/metacomponents/Backgroundable'
import Fixedable from '~/metacomponents/Fixedable'

const FlexBox = styled(Box)`
  justify-content: space-between;
`

const Navbar = ({className, children}) => {
  return (
    <FlexBox className={className} padding="0">
      {children}
    </FlexBox>
  )
}

export default Backgroundable(Fixedable(Navbar))
