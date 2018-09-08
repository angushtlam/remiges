import React from 'react'
import styled from 'styled-components'

const FixedDivision = styled.div`
  position: fixed;
  width: inherit;
`

const Column = ({children, fixed, debug, width}) => {
  const Division = styled.div`
    word-break: break-word;

    ${width
      ? `flex: 0 0 ${width};
         width: ${width};`
      : `width: 100%;`};
    ${debug &&
      `background: pink;
       border: 1px solid black;`};
  `

  if (fixed) {
    return (
      <Division>
        <FixedDivision>{children}</FixedDivision>
      </Division>
    )
  }

  return <Division>{children}</Division>
}

export default Column
