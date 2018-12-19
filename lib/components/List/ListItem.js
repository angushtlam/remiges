import React from 'react'
import styled from '@emotion/styled'
import Box from '../Box'
import {constructWithTheme} from 'lib/utils/components'

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
        background: ${props.theme.colorPrint};
        content: '';
        height: calc(100% - 0.5em);
        transition: background 0.5s ease-in-out;
        left: 1.45em;
        top: 1.35em;
        position: absolute;
        width: ${props.theme.spacingDivider};
        z-index: -1;
      }
  `};
`

const Bullet = styled.div`
  background: ${props =>
    props.filled ? props.theme.colorPrint : props.theme.colorsBlank};
  border: ${props => props.theme.spacingDivider} solid
    ${props => props.theme.colorPrint};
  border-radius: 50%;
  height: 0.5em;
  margin: 0 auto;
  width: 0.5em;
`

const ListItem = ({children, connected, filled, isLast, theme}) => (
  <ListRow>
    <Box
      horizontallyCenter
      padding={[theme.spacingThin, '0', '0', theme.spacingNormal]}
    >
      <Slot connected={connected} isLast={isLast}>
        <Bullet filled={filled} />
      </Slot>
    </Box>
    <Box
      width="100%"
      padding={[theme.spacingThin, '0', '0', theme.spacingThin]}
    >
      {children}
    </Box>
  </ListRow>
)

export default constructWithTheme(ListItem)
