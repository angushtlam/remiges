import React from 'react'
import styled from 'styled-components'
import Paddable from '~/metacomponents/Paddable'
import NavigationItem from './NavigationItem'

const Division = styled.div`
  display: flex;
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
`

const Navigation = ({className, children, debug, horizontal}) => {
  const validatedChildren = children.filter(child => {
    if (!React.isValidElement(child) || child.type !== NavigationItem) {
      throw new Error('Child element is not a valid NavigationItem component.')
    }

    return true
  })

  return (
    <Division className={className} horizontal={horizontal}>
      {validatedChildren.map((child, i) =>
        React.cloneElement(child, {
          debug,
          horizontal,
          key: i,
        })
      )}
    </Division>
  )
}

export default Paddable(Navigation)
