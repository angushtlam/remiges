import React from 'react'
import styled, {keyframes} from 'react-emotion'
import Box from '../Box'
import {constructWithTheme} from 'lib/utils/components'

const ProgressListRow = styled(Box)`
  position: relative;
`

const pulsing = props => keyframes`
  0%, 100% {background: ${props.theme.colorInteractable};}
  50% {background: ${props.theme.colorBlank};}
`

const Slot = styled.div`
  ${props => {
    if (props.isCurrent) {
      return `animation: 3s ${pulsing(props)} ease-in-out infinite;`
    } else if (props.isFilled) {
      return `background: ${props.theme.colorInteractable}`
    } else {
      return `background: ${props.theme.colorBlank}`
    }
  }};

  border: ${props => props.theme.spacingDivider} solid
    ${props => {
      if (props.isCurrent || props.isFilled) {
        return props.theme.colorInteractable
      } else {
        return props.theme.colorShadow
      }
    }};

  border-radius: 50%;
  transition: background 0.5s ease-in-out, border 0.5s ease-in-out;
  height: 1.4em;
  width: 1.4em;
  z-index: 1;

  ${props =>
    !props.isLast &&
    `
      &::after {
        background: ${
          props.isFilled
            ? props.theme.colorInteractable
            : props.theme.colorShadow
        };
        content: '';
        height: calc(100% - 1.3em);
        transition: background 0.5s ease-in-out;
        left: 1.475em;
        top: 2.2em;
        position: absolute;
        width: ${props.theme.spacingDivider};
        z-index: 0;
      }
  `};
`

class ProgressListItem extends React.Component {
  render() {
    const {children, isCurrent, isFilled, isLast, theme} = this.props

    return (
      <ProgressListRow flex>
        <Box
          horizontallyCenter
          padding={[theme.spacingNormal, '0', '0', theme.spacingNormal]}
        >
          <Slot isCurrent={isCurrent} isFilled={isFilled} isLast={isLast} />
        </Box>
        <Box width="100%" padding verticallyCenter>
          {children}
        </Box>
      </ProgressListRow>
    )
  }
}

export default constructWithTheme(ProgressListItem)
