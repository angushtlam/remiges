import React from 'react'
import styled from 'react-emotion'
import Box from '../Box'
import {constructWithTheme} from 'lib/utils/components'

const Toggle = styled.div`
  ${props => {
    if (props.disabled) {
      return `
        background-color: ${
          props.flipped ? props.theme.color80 : props.theme.color70
        };
      `
    } else {
      return `
        background-color: ${
          props.flipped ? props.theme.color80 : props.theme.color50
        };
      `
    }
  }}

  border-radius: 50%;
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
  margin-bottom: 1px;
  padding-left: 0.15em;
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  width: 4.25em;

  ${props => {
    if (props.disabled) {
      return `
        background-color: ${
          props.flipped ? props.theme.color70 : props.theme.color80
        };
        border: ${props.theme.spaceHairline} solid ${props.theme.color70};
      `
    } else {
      return `
        background-color: ${
          props.flipped ? props.theme.color50 : props.theme.color80
        };
        border: ${props.theme.spaceHairline} solid ${props.theme.color50};

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

export default constructWithTheme(Switch)
