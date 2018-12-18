import React from 'react'
import styled from 'react-emotion'
import Box from 'lib/components/Box'
import {constructWithTheme} from 'lib/utils/components'

const Division = styled(Box)`
  @media screen and (min-width: ${props =>
      props.theme.breakpointTabletPortrait}) {
    display: flex;
  }
`

const Columns = ({children, padding}) => {
  const transformedChildren = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      padding,
      key: i,
    })
  })

  return (
    <Division relative width="100%">
      {transformedChildren}
    </Division>
  )
}

export default constructWithTheme(Columns)
