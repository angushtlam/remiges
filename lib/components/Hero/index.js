import React from 'react'
import styled from '@emotion/styled'
import Box from '~/components/Box'
import Backgroundable from 'lib/metacomponents/Backgroundable'

const FlexDivision = styled(Box)`
  min-height: ${props => props.minHeight || '10em'};
  height: ${props => props.height || '100vh'};
`
const Hero = ({className, children, height, minHeight}) => {
  return (
    <FlexDivision
      className={className}
      height={height}
      minHeight={minHeight}
      verticallyCenter
    >
      <Box horizontallyCenter>{children}</Box>
    </FlexDivision>
  )
}

export default Backgroundable(Hero)
