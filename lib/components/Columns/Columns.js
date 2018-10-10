import React from 'react'
import styled from 'react-emotion'
import Column from './Column'
import breakpoints from '~/styles/breakpoints'

const FlexContainer = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: ${breakpoints.tabletPortrait}) {
    display: flex;
  }
`

const Columns = ({children, debug}) => {
  const transformedChildren = React.Children.map(children, child, i => {
    return React.cloneElement(child, {
      debug,
      key: i,
    })
  })

  return <FlexContainer>{transformedChildren}</FlexContainer>
}

export default Columns
