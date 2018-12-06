import React from 'react'
import styled from '@emotion/styled'
import Box from '~/components/Box'
import Backgroundable from '~/metacomponents/Backgroundable'

const FlexDivision = styled(Box)`
  min-height: ${props => props.minHeight || '10em'};
  height: ${props => props.height || '100vh'};

  ${props =>
    props.debug &&
    `background: pink;
     border: 1px solid black;`};
`
const Hero = ({className, children, debug, height, minHeight}) => {
  return (
    <FlexDivision
      className={className}
      debug={debug}
      height={height}
      minHeight={minHeight}
      verticallyCenter
    >
      <Box horizontallyCenter>{children}</Box>
    </FlexDivision>
  )
}

export default Backgroundable(Hero)
