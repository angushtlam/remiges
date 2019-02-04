import React from 'react'
import styled from 'react-emotion'
import Box from 'lib/components/Box'
import {constructWithTheme} from 'lib/utils/components'

const Division = styled.div`
  display: flex;
  padding-bottom: ${props => props.theme.space};
  width: 100%;

  ${props => {
    if (props.gridListWidth >= 1400) {
      return `
        width: 25%;
        padding-right: ${props.theme.space};

        &:nth-child(4n + 4) {
          padding-right: 0;
        }
      `
    } else if (props.gridListWidth >= 900) {
      return `
        width: 33.33%;
        padding-right: ${props.theme.space};

        &:nth-child(3n + 3) {
          padding-right: 0;
        }
      `
    } else if (props.gridListWidth >= 600) {
      return `
        width: 50%;

        &:nth-child(2n + 1) {
          padding-right: ${props.theme.space};
        }
      `
    }
  }};
`

class GridListItem extends React.Component {
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

export default constructWithTheme(GridListItem)
