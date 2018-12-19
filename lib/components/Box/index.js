import styled from '@emotion/styled'
import Backgroundable from 'lib/metacomponents/Backgroundable'
import Displayable from 'lib/metacomponents/Displayable'
import Flexboxable from 'lib/metacomponents/Flexboxable'
import Paddable from 'lib/metacomponents/Paddable'
import Positionable from 'lib/metacomponents/Positionable'
import Sizable from 'lib/metacomponents/Sizable'
import {constructWithTheme} from 'lib/utils/components'

const Box = styled.div`
  ${props => {
    if (props.direction && props.direction === 'horizontal') {
      return `
        flex-direction: row;
        ${!(props.block || props.display || props.flex) && `display: flex`};
      `
    } else if (props.direction && props.direction === 'vertical') {
      return `
        flex-direction: column;
        ${!(props.block || props.display || props.flex) && `display: flex`};
      `
    }
  }};

  ${props =>
    props.readingContainer &&
    `
      margin: 0 auto;
      max-width: 55em;
      width: 100%;
    `};

  ${props =>
    props.horizontallyCenter &&
    `
      margin: 0 auto;
    `};

  ${props =>
    props.verticallyCenter &&
    `
      align-items: center;
      ${!(props.block || props.display || props.flex) && `display: flex`};
    `};
`

export default constructWithTheme(
  Backgroundable(Displayable(Flexboxable(Paddable(Positionable(Sizable(Box))))))
)
