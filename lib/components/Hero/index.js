import React from 'react'
import styled from 'react-emotion'
import Box from 'lib/components/Box'
import Backgroundable from 'lib/metacomponents/Backgroundable'
import Paddable from 'lib/metacomponents/Paddable'
import {constructWithTheme} from 'lib/utils/components'

const FlexDivision = styled(Box)`
  background: ${props => props.theme.gradientAccentPrimary};
  color: ${props => props.theme.colorBlank};
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

export default Backgroundable(Paddable(constructWithTheme(Hero)))
