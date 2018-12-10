import React from 'react'
import Box from '../Box'

class List extends React.Component {
  render() {
    const {children, connected, filled} = this.props

    const transformedChildren = React.Children.map(children, (child, i) => {
      return React.cloneElement(child, {
        connected,
        filled,
        key: i,
        isLast: i >= children.length - 1,
      })
    })

    return (
      <Box direction="vertical" flex>
        {transformedChildren}
      </Box>
    )
  }
}

export default List
