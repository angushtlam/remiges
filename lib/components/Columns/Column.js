import React from 'react'
import styled from 'styled-components'

const Column = ({children, debug, width}) => {
  const Division = styled.div`
    word-break: break-all;

    ${width
      ? `flex: 0 0 ${width};
         width: ${width};`
      : `width: 100%;`};
    ${debug &&
      `background: pink;
       border: 1px solid black;`};
  `
  return <Division>{children}</Division>
}

export default Column
