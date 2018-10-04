import React from 'react'
import styled from 'styled-components'
import Paddable from '~/metacomponents/Paddable'

const Division = styled.div`
  width: 100%;
  word-break: break-word;

  ${props => props.width && `flex: 0 0 ${props.width};`};
  ${props =>
    props.debug &&
    `
      background: pink;
      border: 1px solid black;`};
`

const FixedDivision = styled.div`
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  width: ${props => props.fixedDivWidth}px;
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
      const fixedDivWidth = this.divisionRef.getBoundingClientRect().width

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
        ref={elem => (this.divisionRef = elem)}
        width={width}
      >
        <FixedDivision fixedDivWidth={fixedDivWidth}>{children}</FixedDivision>
      </Division>
    )
  }
}

export default Paddable(Column)
