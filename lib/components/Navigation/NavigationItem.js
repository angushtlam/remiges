import React from 'react'
import styled from 'react-emotion'
import {constructWithTheme} from 'lib/utils/components'

const Division = styled.a`
  border: 1px solid transparent;
  border-radius: ${props => props.theme.roundedCorner};
  color: ${props => props.theme.colorPrint};
  display: block;
  padding: ${props => props.theme.spaceHalf} ${props => props.theme.space};

  &:hover {
    background-color: ${props => props.theme.colorShadow};
  }

  ${props =>
    props.active &&
    `background-color: ${props => props.theme.colorInteractable}`};
`

const NavigationItem = ({active, children, to}) => {
  return (
    <Division active={active} href={to}>
      {children}
    </Division>
  )
}

export default constructWithTheme(NavigationItem)
