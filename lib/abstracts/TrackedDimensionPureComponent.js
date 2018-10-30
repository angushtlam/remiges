import React from 'react'

class TrackedDimensionPureComponent extends React.PureComponent {
  constructor() {
    super()

    this.trackedDimensionRef = null
    this.state = {
      refTrackedWidth: 0,
    }

    this.onTrackedDivisionResize = this.onTrackedDivisionResize.bind(this)
  }

  componentDidMount() {
    if (this.trackedDimensionRef) {
      window.addEventListener('resize', this.onTrackedDivisionResize)
    }

    this.onTrackedDivisionResize()
  }

  onTrackedDivisionResize() {
    if (this.trackedDimensionRef) {
      const divStyle = getComputedStyle(this.trackedDimensionRef)

      const divWidthBorder =
        parseFloat(divStyle.borderTopWidth) +
        parseFloat(divStyle.borderBottomWidth)
      const divWidthPadding =
        parseFloat(divStyle.paddingTop) + parseFloat(divStyle.paddingBottom)
      const refTrackedWidth =
        this.trackedDimensionRef.offsetWidth - divWidthPadding - divWidthBorder

      this.setState({
        refTrackedWidth,
      })
    }
  }
}

export default TrackedDimensionPureComponent
