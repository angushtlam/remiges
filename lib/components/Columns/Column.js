import React from 'react'
import styled from '@emotion/styled'
import Paddable from 'lib/metacomponents/Paddable'
import {constructWithTheme} from 'lib/utils/components'

const Division = styled.div`
  width: 100%;

  @media screen and (min-width: ${props =>
      props.theme.breakpointTabletPortrait}) {
    overflow: auto; // This is needed to prevent the child width from expanding.
    ${props => props.width && `flex: 0 0 ${props.width}`};
  }
`

const FixedDivision = styled.div`
  @media screen and (min-width: ${props =>
      props.theme.breakpointTabletPortrait}) {
    height: 100vh;
    overflow-y: scroll;
    position: fixed;
    width: ${props => props.fixedDivWidth}px;
  }
`

class Column extends React.Component {
  constructor() {
    super()

    this.divisionRef = null
    this.state = {
      fixedDivWidth: 0,
    }

    this.onResize = this.onResize.bind(this)
  }

  componentDidMount() {
    if (typeof window !== `undefined` && this.divisionRef) {
      window.addEventListener('resize', this.onResize)
    }

    this.onResize()
  }

  onResize() {
    if (this.divisionRef) {
      const divStyle = getComputedStyle(this.divisionRef)
      const divBorder =
        parseFloat(divStyle.borderTopWidth) +
        parseFloat(divStyle.borderBottomWidth)
      const divPadding =
        parseFloat(divStyle.paddingTop) + parseFloat(divStyle.paddingBottom)
      const fixedDivWidth =
        this.divisionRef.offsetWidth - divPadding - divBorder

      this.setState({
        fixedDivWidth,
      })
    }
  }

  render() {
    const {className, children, fixed, width} = this.props

    if (!fixed) {
      return (
        <Division className={className} width={width}>
          {children}
        </Division>
      )
    }

    const {fixedDivWidth} = this.state

    return (
      <Division
        className={className}
        innerRef={elem => (this.divisionRef = elem)}
        width={width}
      >
        <FixedDivision fixedDivWidth={fixedDivWidth}>{children}</FixedDivision>
      </Division>
    )
  }
}

export default Paddable(constructWithTheme(Column))
