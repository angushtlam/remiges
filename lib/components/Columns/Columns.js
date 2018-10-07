import React from 'react'
import styled from 'react-emotion'
import Column from './Column'

const FlexContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`

const Columns = ({children, debug}) => {
  const validatedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child) || child.type !== Column) {
      throw new Error('Child element is not a valid Column component.')
    }

    return child
  })

  return (
    <FlexContainer>
      {validatedChildren.map((child, i) =>
        React.cloneElement(child, {
          debug,
          key: i,
        })
      )}
    </FlexContainer>
  )
}

export default Columns
