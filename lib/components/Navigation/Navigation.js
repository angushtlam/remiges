import React from 'react'
import styled from 'styled-components'
import NavigationItem from './NavigationItem'

const Navigation = ({children, fixed, debug}) => {
  const Division = styled.div`
    display: block;

    ${fixed &&
      `position: fixed;
       width: inherit;`};
  `

  const validatedChildren = children.filter(child => {
    if (!React.isValidElement(child) || child.type !== NavigationItem) {
      throw new Error('Child element is not a valid NavigationItem component.')
    }

    return true
  })

  return (
    <Division>
      {validatedChildren.map(child =>
        React.cloneElement(child, {
          debug,
        })
      )}
    </Division>
  )
}

export default Navigation
