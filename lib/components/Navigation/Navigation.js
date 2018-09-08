import React from 'react'
import styled from 'styled-components'
import Paddable from '~/metacomponents/Paddable'
import NavigationItem from './NavigationItem'

const Navigation = ({className, children, debug}) => {
  const Division = styled.div``

  const validatedChildren = children.filter(child => {
    if (!React.isValidElement(child) || child.type !== NavigationItem) {
      throw new Error('Child element is not a valid NavigationItem component.')
    }

    return true
  })

  return (
    <Division className={className}>
      {validatedChildren.map((child, i) =>
        React.cloneElement(child, {
          debug,
          key: i,
        })
      )}
    </Division>
  )
}

export default Paddable(Navigation)
