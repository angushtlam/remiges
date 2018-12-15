import React from 'react'
import styled from 'react-emotion'
import colors from '~/styles/colors'
import details from '~/styles/details'
import spacing from '~/styles/spacing'
import Box from '../Box'

const Toggle = styled.div`
  ${props => {
    if (props.disabled) {
      return `
        background-color: ${props.flipped ? colors.blank : colors.muted};
      `
    } else {
      return `
        background-color: ${props.flipped ? colors.blank : colors.interactable};
      `
    }
  }}
  
  border-radius: ${details.interactableRoundedCorner};
  display: flex;
  height: 1.75em;
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease,
    transform 0.25s;
  transform: translate(${props => (props.flipped ? '2em' : '0')}, 0);
  width: 1.75em;
`

const Slot = styled.div`
  align-items: center;
  border-radius: 4em;
  display: flex;
  height: 2.2em;
  padding-left: 0.15em;
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  width: 4.25em;

  ${props => {
    if (props.disabled) {
      return `
        background-color: ${props.flipped ? colors.muted : colors.blank};
        border: ${spacing.divider} solid ${colors.muted};
      `
    } else {
      return `
        background-color: ${props.flipped ? colors.interactable : colors.blank};
        border: ${spacing.divider} solid ${colors.interactable};

        :hover {
          border-color: ${colors.interacted};
          ${props.flipped && `background-color: ${colors.interacted}`};
        }

        :hover ${Toggle} {
          ${!props.flipped && `background-color: ${colors.interacted}`};
          ${props.flipped && `border-color: ${colors.interacted}`};
        }
      `
    }
  }}
`

const Switch = ({children, disabled, flipped, ...otherProps}) => {
  return (
    <Slot disabled={disabled} flipped={flipped} {...otherProps}>
      <Toggle disabled={disabled} flipped={flipped}>
        <Box horizontallyCenter padding="0">
          {children}
        </Box>
      </Toggle>
    </Slot>
  )
}

export default Switch
