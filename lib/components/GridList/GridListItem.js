import React from 'react'
import styled from '@emotion/styled'
import Box from '../Box'
import TrackedDimensionPureComponent from '~/abstracts/TrackedDimensionPureComponent'
import spacing from '~/styles/spacing'

const Division = styled.div`
  display: flex;
  padding-bottom: ${spacing.normal};
  width: 100%;

  ${props => {
    if (props.gridListWidth >= 1400) {
      return `
        width: 25%;
        padding-right: ${spacing.normal};

        &:nth-child(4n + 4) {
          padding-right: 0;
        }
      `
    } else if (props.gridListWidth >= 900) {
      return `
        width: 33.33%;
        padding-right: ${spacing.normal};

        &:nth-child(3n + 3) {
          padding-right: 0;
        }
      `
    } else if (props.gridListWidth >= 600) {
      return `
        width: 50%;

        &:nth-child(2n + 1) {
          padding-right: ${spacing.normal};
        }
      `
    }
  }};
`

class GridListItem extends TrackedDimensionPureComponent {
  render() {
    const {children, gridListWidth} = this.props

    return (
      <Division gridListWidth={gridListWidth}>
        <Box width="100%" flex>
          {children}
        </Box>
      </Division>
    )
  }
}

export default GridListItem
