import React from 'react'
import styled from 'react-emotion'
import Box from '../Box'
import {constructWithTheme} from 'lib/utils/components'

const Toggle = styled.div`
  ${props => {
    if (props.disabled) {
      return `
        background-color: ${
          props.flipped ? props.theme.colorBlank : props.theme.colorMuted
        };
      `
    } else {
      return `
        background-color: ${
          props.flipped ? props.theme.colorBlank : props.theme.colorInteractable
        };
      `
    }
  }}
  
  border-radius: ${props => props.theme.roundedCornerInteractable};
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
        background-color: ${
          props.flipped ? props.theme.colorMuted : props.theme.colorBlank
        };
        border: ${props.theme.spacingDivider} solid ${props.theme.colorMuted};
      `
    } else {
      return `
        background-color: ${
          props.flipped ? props.theme.colorInteractable : props.theme.colorBlank
        };
        border: ${props.theme.spacingDivider} solid ${
        props.theme.colorInteractable
      };

        :hover {
          border-color: ${props.theme.colorInteracted};
          ${props.flipped &&
            `background-color: ${props.theme.colorInteracted}`};
        }

        :hover ${Toggle} {
          ${!props.flipped &&
            `background-color: ${props.theme.colorInteracted}`};
          ${props.flipped && `border-color: ${props.theme.colorInteracted}`};
        }
      `
    }
  }}
`

const Switch = ({children, disabled, flipped}) => {
  return (
    <Slot disabled={disabled} flipped={flipped}>
      <Toggle disabled={disabled} flipped={flipped}>
        <Box horizontallyCenter padding="0">
          {children}
        </Box>
      </Toggle>
    </Slot>
  )
}

export default constructWithTheme(Switch)
