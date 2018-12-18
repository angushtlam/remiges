import styled from 'react-emotion'
import Displayable from 'lib/metacomponents/Displayable'
import Sizable from 'lib/metacomponents/Sizable'
import {constructWithTheme} from 'lib/utils/components'

const Paragraph = styled.p`
  font-weight: ${props => props.theme.fontWeightNormal};
  font-size: 1em;
  line-height: 1.3em;
  margin-bottom: 1.5em;
  margin-top: 0;

  ${props =>
    !props.padding &&
    `
      &:last-child {
        margin-bottom: 0;
      }
    `}

  @media screen and (min-width: ${props => props.theme.breakpointMobile}) {
    line-height: 1.3em;
  }

  @media screen and (min-width: ${props =>
    props.theme.breakpointTabletPortrait}) {
    line-height: 1.35em;
  }

  @media screen and (min-width: ${props =>
    props.theme.breakpointTabletLandscape}) {
    line-height: 1.4em;
  }

  @media screen and (min-width: ${props => props.theme.breakpointDesktop}) {
    line-height: 1.45em;
  }

  @media screen and (min-width: ${props => props.theme.breakpointBigDesktop}) {
    line-height: 1.5em;
  }
`

export default Displayable(Sizable(constructWithTheme(Paragraph)))
