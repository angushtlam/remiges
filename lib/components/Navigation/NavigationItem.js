import React from 'react'
import styled from 'styled-components'

const Division = styled.div`
  ${props =>
    props.horizontal &&
    `
      margin-left: 0.5em; 
      margin-right: 0.5em
    `};
`

const NavigationItem = ({children, divider, horizontal}) => {
  if (divider) {
    return <hr />
  }

  return <Division horizontal={horizontal}>{children}</Division>
}

export default NavigationItem
