import React from 'react'
import TrackedDimensionPureComponent from 'lib/abstracts/TrackedDimensionPureComponent'
import Box from 'lib/components/Box'

class GridList extends TrackedDimensionPureComponent {
  constructor() {
    super()
  }

  render() {
    const {children} = this.props
    const {refTrackedWidth} = this.state

    const transformedChildren = React.Children.map(children, (child, i) => {
      return React.cloneElement(child, {
        gridListWidth: refTrackedWidth,
        key: i,
      })
    })

    return (
      <Box
        flex
        flexWrap="wrap"
        innerRef={elem => (this.trackedDimensionRef = elem)}
      >
        {transformedChildren}
      </Box>
    )
  }
}

export default GridList
