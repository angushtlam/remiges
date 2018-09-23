import React from 'react'
import styled from 'styled-components'

const Division = styled.div`
  margin: 0 auto;
`

const Hero = ({background, children, debug, height, minHeight}) => {
  const FlexDivision = styled.div`
    align-items: center;
    display: flex;
    min-height: ${minHeight || '10em'};
    height: ${height || '100vh'};
    width: 100%;

    ${background && `background: ${background}`};
    ${debug &&
      `background: pink;
         border: 1px solid black;`};
  `

  return (
    <FlexDivision>
      <Division>{children}</Division>
    </FlexDivision>
  )
}

export default Hero
