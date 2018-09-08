import React from 'react'
import styled from 'styled-components'
import Paddable from '~/metacomponents/Paddable'

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
    const {className, children, fixed, debug, width} = this.props

    const Division = styled.div`
      width: 100%;
      word-break: break-word;

      ${width && `flex: 0 0 ${width};`};
      ${debug &&
        `background: pink;
         border: 1px solid black;`};
    `

    if (!fixed) {
      return <Division className={className}>{children}</Division>
    }

    const {fixedDivWidth} = this.state

    const FixedDivision = styled.div`
      height: 100vh;
      overflow-y: scroll;
      position: fixed;
      width: ${fixedDivWidth}px;
    `

    return (
      <Division className={className} ref={elem => (this.divisionRef = elem)}>
        <FixedDivision>{children}</FixedDivision>
      </Division>
    )
  }
}

export default Paddable(Column)
