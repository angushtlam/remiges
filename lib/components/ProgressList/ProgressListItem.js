import React from 'react'
import styled from 'react-emotion'
import Box from '../Box'
import colors from '~/styles/colors'
import spacing from '~/styles/spacing'

const ProgressListRow = styled(Box)`
  position: relative;
`

const Slot = styled.div`
  background: ${props => {
    if (props.isCurrent) {
      return colors.shadow
    } else if (props.isFilled) {
      return colors.interactable
    } else {
      return colors.blank
    }
  }};

  border: ${spacing.divider} solid
    ${props => {
      if (props.isCurrent || props.isFilled) {
        return colors.interactable
      } else {
        return colors.shadow
      }
    }};

  border-radius: 50%;
  transition: background 0.5s ease-in-out, border 0.5s ease-in-out;
  height: 1.5em;
  width: 1.5em;
  z-index: 1;

  ${props =>
    !props.isLast &&
    `
      &::after {
        background: ${props.isFilled ? colors.interactable : colors.shadow};
        content: '';
        height: calc(100% - 1em);
        transition: background 0.5s ease-in-out;
        left: 1.5em;
        top: 2.3em;
        position: absolute;
        width: ${spacing.divider};
        z-index: 0;
      }
  `};
`

class ProgressListItem extends React.Component {
  render() {
    const {children, isCurrent, isFilled, isLast} = this.props

    return (
      <ProgressListRow flex>
        <Box
          horizontallyCenter
          padding={[spacing.normal, '0', '0', spacing.normal]}
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

export default ProgressListItem
