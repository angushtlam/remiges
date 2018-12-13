import React from 'react'
import styled from 'react-emotion'
import colors from 'lib/styles/colors'
import spacing from 'lib/styles/spacing'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;

  & > & {
    margin-left: ${spacing.normal};
    padding-left: ${spacing.normal};
    position: relative;

    ::after {
      background: ${colors.print};
      content: '';
      height: 100%;
      transition: background 0.5s ease-in-out;
      left: 0.65em;
      top: 1.25em;
      position: absolute;
      width: ${spacing.divider};
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

export default List
