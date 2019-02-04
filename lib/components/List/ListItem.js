import React from 'react'
import styled from 'react-emotion'
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
        background: ${props.theme.color0};
        content: '';
        height: 100%;
        transition: background 0.5s ease-in-out;
        left: 1.475em;
        top: 1.35em;
        position: absolute;
        width: ${props.theme.spaceHairline};
        z-index: -1;
      }
  `};
`

const Bullet = styled.div`
  background: ${props =>
    props.filled ? props.theme.color0 : props.theme.color90};
  border: ${props => props.theme.spaceHairline} solid
    ${props => props.theme.color0};
  border-radius: 50%;
  height: 0.5em;
  margin: 0 auto;
  width: 0.5em;
`

const ListItem = ({children, connected, filled, isLast, theme}) => (
  <ListRow>
    <Box horizontallyCenter padding={[theme.spaceHalf, '0', '0', theme.space]}>
      <Slot connected={connected} isLast={isLast}>
        <Bullet filled={filled} />
      </Slot>
    </Box>
    <Box width="100%" padding={[theme.spaceHalf, '0', '0', theme.spaceHalf]}>
      {children}
    </Box>
  </ListRow>
)

export default constructWithTheme(ListItem)
