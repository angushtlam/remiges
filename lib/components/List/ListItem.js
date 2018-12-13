import React from 'react'
import styled from 'react-emotion'
import colors from 'lib/styles/colors'
import spacing from 'lib/styles/spacing'
import Box from '../Box'

const ListRow = styled.li`
  display: flex;
  position: relative;
  width: 100%;

  :last-of-type {
    & ${Slot}::after {
      display: none;
    }
  }
`

const Slot = styled.div`
  align-items: center;
  display: flex;
  transition: background 0.5s ease-in-out, border 0.5s ease-in-out;
  height: 1.4em;
  margin: 0 auto;
  width: 1.4em;
  z-index: 1;

  ${props =>
    props.connected &&
    !props.isLast &&
    `
      ::after {
        background: ${colors.print};
        content: '';
        height: calc(100% - 0.5em);
        transition: background 0.5s ease-in-out;
        left: 1.45em;
        top: 1.75em;
        position: absolute;
        width: ${spacing.divider};
        z-index: 0;
      }
  `};
`

const Bullet = styled.div`
  background: ${props => (props.filled ? colors.print : colors.blank)};
  border: ${spacing.divider} solid ${colors.print};
  border-radius: 50%;
  height: 0.5em;
  margin: 0 auto;
  width: 0.5em;
`

const ListItem = ({children, connected, filled, isLast}) => (
  <ListRow>
    <Box
      horizontallyCenter
      padding={[spacing.normal, '0', '0', spacing.normal]}
    >
      <Slot connected={connected} isLast={isLast}>
        <Bullet filled={filled} />
      </Slot>
    </Box>
    <Box
      width="100%"
      padding={[spacing.normal, '0', '0', spacing.thin]}
      verticallyCenter
    >
      {children}
    </Box>
  </ListRow>
)

export default ListItem
