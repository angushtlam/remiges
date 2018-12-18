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
      background: ${props => props.theme.colorPrint};
      content: '';
      height: 100%;
      transition: background 0.5s ease-in-out;
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

const List = ({children, connected, filled}) => {
  const childrenArray = React.Children.toArray(children)

  return (
    <StyledList>
      {childrenArray.map((child, i) =>
        React.cloneElement(child, {
          connected,
          cloned: true,
          filled,
          key: i,
          isLast: i >= childrenArray.length - 1,
        })
      )}
    </StyledList>
  )
}

export default constructWithTheme(List)
