import React from 'react'
import styled from 'react-emotion'
import colors from '~/styles/colors'
import details from '~/styles/details'
import spacing from '~/styles/spacing'

const Division = styled.a`
  border: 1px solid transparent;
  border-radius: ${details.roundedCorner};
  color: ${colors.print};
  display: block;
  padding: ${spacing.thin} ${spacing.normal};

  &:hover {
    background-color: ${colors.shadow};
  }

  ${props => props.active && `background-color: ${colors.interactable}`};
`

const NavigationItem = ({active, children, to}) => {
  return (
    <Division active={active} href={to}>
      {children}
    </Division>
  )
}

export default NavigationItem
