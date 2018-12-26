import React from 'react'
import styled from 'react-emotion'
import {constructWithTheme} from 'lib/utils/components'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;

  & > & {
    margin-left: ${props => props.theme.spacingNormal};
    padding-left: ${props => props.theme.spacingNormal};
    position: relative;

    ::after {
      background-color: ${props => props.theme.colorPrint};
      content: '';
      ${props => !props.connected && `display: none;`}
      height: 100%;
      left: 0.65em;
      top: 0.85em;
      position: absolute;
      width: ${props => props.theme.spacingDivider};
      z-index: 0;
    }

    :last-child {
      ::after {
        display: none;
      }
    }
  }
`

const List = ({children, ...otherProps}) => {
  const {connected, filled} = otherProps
  const childrenArray = React.Children.toArray(children)

  return (
    <StyledList {...otherProps}>
      {childrenArray.map((child, i) => {
        return React.cloneElement(child, {
          connected,
          filled,
          key: i,
          isLast: i >= childrenArray.length - 1,
        })
      })}
    </StyledList>
  )
}

export default constructWithTheme(List)
