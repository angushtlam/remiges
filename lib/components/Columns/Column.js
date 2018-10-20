import React from 'react'
import styled from 'react-emotion'
import Paddable from '~/metacomponents/Paddable'
import breakpoints from '~/styles/breakpoints'

const Division = styled.div`
  width: 100%;

  ${props =>
    props.debug &&
    `
  background: pink;
  border: 1px solid black;`};

  @media screen and (min-width: ${breakpoints.tabletPortrait}) {
    overflow: scroll; // This is needed to prevent the child width from expanding.
    ${props => props.width && `flex: 0 0 ${props.width}`};
  }
`

const FixedDivision = styled.div`
  @media screen and (min-width: ${breakpoints.tabletPortrait}) {
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
    if (this.divisionRef) {
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
    const {className, children, debug, fixed, width} = this.props

    if (!fixed) {
      return (
        <Division className={className} debug={debug} width={width}>
          {children}
        </Division>
      )
    }

    const {fixedDivWidth} = this.state

    return (
      <Division
        className={className}
        debug={debug}
        innerRef={elem => (this.divisionRef = elem)}
        width={width}
      >
        <FixedDivision fixedDivWidth={fixedDivWidth}>{children}</FixedDivision>
      </Division>
    )
  }
}

export default Paddable(Column)
