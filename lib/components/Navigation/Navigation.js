import React from 'react'
import styled from 'styled-components'
import spacing from '~/styles/spacing'
import NavigationItem from './NavigationItem'

const Navigation = ({children, debug}) => {
  const Division = styled.div`
    padding: ${spacing.normal};
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
