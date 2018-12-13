import React from 'react'
import styled from 'react-emotion'
import spacing from 'lib/styles/spacing'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;

  & > & {
    margin-left: ${spacing.wide};
  }
`

class List extends React.Component {
  render() {
    const {children, connected, filled} = this.props

    const transformedChildren = React.Children.map(children, (child, i) => {
      return React.cloneElement(child, {
        connected,
        filled: !filled,
        key: i,
        isLast: i >= children.length - 1,
      })
    })

    return <StyledList>{transformedChildren}</StyledList>
  }
}

export default List
