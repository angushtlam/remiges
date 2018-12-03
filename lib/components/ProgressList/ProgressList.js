import React from 'react'
import Box from '../Box'

class ProgressList extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {children, completed} = this.props

    const transformedChildren = React.Children.map(children, (child, i) => {
      return React.cloneElement(child, {
        key: i,
        isCurrent: i == completed,
        isFilled: i < completed,
        isLast: i >= children.length - 1,
      })
    })

    return (
      <Box direction="vertical" padding="0">
        {transformedChildren}
      </Box>
    )
  }
}

export default ProgressList
