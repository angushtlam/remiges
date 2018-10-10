import React from 'react'
import styled from 'react-emotion'
import breakpoints from '~/styles/breakpoints'

const FlexContainer = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: ${breakpoints.tabletPortrait}) {
    display: flex;
  }
`

const Columns = ({children, debug, padding}) => {
  const transformedChildren = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      debug,
      padding,
      key: i,
    })
  })

  return <FlexContainer>{transformedChildren}</FlexContainer>
}

export default Columns
