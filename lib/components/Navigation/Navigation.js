import React from 'react'
import styled from 'react-emotion'
import Paddable from 'lib/metacomponents/Paddable'
import {constructWithTheme} from 'lib/utils/components'

const LabelDivision = styled.div`
  color: ${props => props.theme.colorMuted};
  font-size: 0.9em;
  letter-spacing: ${props => props.theme.spaceHairline};
  margin-bottom: ${props => props.theme.spaceHalf};
  text-transform: uppercase;
`
const ItemsDivision = styled.div``

const Navigation = ({className, children, label}) => (
  <div className={className}>
    {label && <LabelDivision>{label}</LabelDivision>}
    <ItemsDivision>
      {children.map((child, i) => React.cloneElement(child, {key: i}))}
    </ItemsDivision>
  </div>
)

export default Paddable(constructWithTheme(Navigation))
