import React from 'react'
import styled from '@emotion/styled'
import Box from 'lib/components/Box'
import breakpoints from 'lib/styles/breakpoints'

const FlexContainer = styled.div`
  position: relative;

  @media screen and (min-width: ${breakpoints.tabletPortrait}) {
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

  return <FlexContainer width="100%">{transformedChildren}</FlexContainer>
}

export default Columns
