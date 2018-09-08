import React from 'react'
import styled from 'styled-components'
import Link from '../Link'

const Division = styled.div``

const NavigationItem = ({children, to, divider}) => {
  if (divider) {
    return <hr />
  }

  if (to) {
    return (
      <Division>
        <Link>{children}</Link>
      </Division>
    )
  }

  return <Division>{children}</Division>
}

export default NavigationItem
