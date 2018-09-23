import React from 'react'
import styled from 'styled-components'
import Backgroundable from '~/metacomponents/Backgroundable'

const Division = styled.div`
  margin: 0 auto;
`

const Hero = ({className, children, debug, height, minHeight}) => {
  const FlexDivision = styled.div`
    align-items: center;
    display: flex;
    min-height: ${minHeight || '10em'};
    height: ${height || '100vh'};
    width: 100%;

    ${debug &&
      `background: pink;
         border: 1px solid black;`};
  `

  return (
    <FlexDivision className={className}>
      <Division>{children}</Division>
    </FlexDivision>
  )
}

export default Backgroundable(Hero)
