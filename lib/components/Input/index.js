import React from 'react'
import styled from 'react-emotion'
import Displayable from 'lib/metacomponents/Displayable'
import Paddable from 'lib/metacomponents/Paddable'
import Box from 'lib/components/Box'
import {constructWithTheme} from 'lib/utils/components'

const Label = styled.div`
  font-size: 80%;
  transition: transform 0.1s ease;

  ${props =>
    !!props.value &&
    props.shy &&
    `
      height: 0;
      transform: scale(1, 0);
  `};
`

const StyledInput = styled.input`
  background: none;
  border: none;
  color: initial;
  display: block;
  font: unset;
  width: 100%;

  ::placeholder {
    color: ${props => props.theme.colorMuted};
  }
`

const Input = ({className, label, shy, type, value, ...otherProps}) => (
  <Box>
    <Label shy={shy} value={value}>
      {label}
    </Label>
    <StyledInput type={type || 'text'} value={value} {...otherProps} />
  </Box>
)

export default constructWithTheme(Displayable(Paddable(Input)))
