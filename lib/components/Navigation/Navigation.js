import React from 'react'
import styled from 'react-emotion'
import NavigationItem from './NavigationItem'
import Paddable from '~/metacomponents/Paddable'
import colors from '~/styles/colors'
import spacing from '~/styles/spacing'

const LabelDivision = styled.div`
  color: ${colors.muted};
  font-size: 0.9em;
  letter-spacing: ${spacing.divider};
  margin-bottom: ${spacing.thin};
  text-transform: uppercase;
`
const ItemsDivision = styled.div``

const Navigation = ({className, children, label}) => {
  const validatedChildren = children.filter(child => {
    if (!React.isValidElement(child) || child.type !== NavigationItem) {
      throw new Error('Child element is not a valid NavigationItem component.')
    }

    return true
  })

  return (
    <div className={className}>
      {label && <LabelDivision>{label}</LabelDivision>}
      <ItemsDivision>
        {validatedChildren.map((child, i) =>
          React.cloneElement(child, {key: i})
        )}
      </ItemsDivision>
    </div>
  )
}

export default Paddable(Navigation)
