import React from 'react'
import styled from 'react-emotion'
import colors from '~/styles/colors'
import details from '~/styles/details'
import spacing from '~/styles/spacing'
import Box from '../Box'

const Toggle = styled.div`
  background-color: ${props =>
    props.flipped ? colors.blank : colors.interactable};
  border-radius: ${details.interactableRoundedCorner};
  display: flex;
  height: 1.4em;
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease,
    transform 0.25s;
  transform: translate(${props => (props.flipped ? '1.425em' : '0')}, 0);
  width: 1.4em;
`

const Slot = styled.div`
  align-items: center;
  background-color: ${props =>
    props.flipped ? colors.interactable : colors.blank};
  border: ${spacing.divider} solid ${colors.interactable};
  border-radius: ${details.interactableRoundedCorner};
  display: flex;
  height: 1.8em;
  padding-left: ${spacing.divider};
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  width: 3.2em;

  &:hover {
    border-color: ${colors.interacted};
    ${props => !!props.flipped && `background-color: ${colors.interacted}`};
  }

  &:hover ${Toggle} {
    ${props => !props.flipped && `background-color: ${colors.interacted}`};
    ${props => !!props.flipped && `border-color: ${colors.interacted}`};
  }
`

const Switch = ({children, flipped}) => {
  return (
    <Slot flipped={flipped}>
      <Toggle flipped={flipped}>
        <Box horizontallyCenter padding="0">
          {children}
        </Box>
      </Toggle>
    </Slot>
  )
}

export default Switch
