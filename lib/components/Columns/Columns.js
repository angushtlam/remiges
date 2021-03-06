import React from 'react'
import styled from 'react-emotion'
import Box from 'lib/components/Box'
import {constructWithTheme} from 'lib/utils/components'

const Division = styled(Box)`
  ${props => props.theme.breakpointTabletPortrait} {
    display: flex;
  }
`

const Columns = ({children, padding, ...otherProps}) => {
  const transformedChildren = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      padding,
      key: i,
    })
  })

  return (
    <Division relative width="100%" {...otherProps}>
      {transformedChildren}
    </Division>
  )
}

export default constructWithTheme(Columns)
