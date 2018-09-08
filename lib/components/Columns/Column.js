import React from 'react'
import styled from 'styled-components'
import Paddable from '~/metacomponents/Paddable'

const FixedDivision = styled.div`
  position: fixed;
  width: inherit;
`

const Column = ({className, children, fixed, debug, width}) => {
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

  return (
    <Division className={className}>
      {fixed ? <FixedDivision>{children}</FixedDivision> : children}
    </Division>
  )
}

export default Paddable(Column)
