import React from 'react'
import styled from 'styled-components'

const Column = ({children, debug, width}) => {
  const Divison = styled.div`
    overflow: none;
    width: 100%;

    ${width &&
      `flex: 0 0 ${width};
       word-break: break-all;`};
    ${debug &&
      `background: pink;
       border: 1px solid black;`};
  `
  return <Divison>{children}</Divison>
}

export default Column
