import React from 'react'
import styled from 'react-emotion'
import TrackedDimensionPureComponent from '~/abstracts/TrackedDimensionPureComponent'

const Division = styled.div`
  display: flex;
  flex-wrap: wrap;
`

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
      <Division innerRef={elem => (this.trackedDimensionRef = elem)}>
        {transformedChildren}
      </Division>
    )
  }
}

export default GridList
