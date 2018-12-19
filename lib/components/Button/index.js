import {css} from '@emotion/core'
import {constructButtonWithStyling} from './util'

const styling = props => css`
  align-items: center;
  border: unset;
  background: unset;
  color: ${props.theme.colorInteractable};
  cursor: pointer;
  display: inline-flex;
  font-weight: ${props.theme.fontWeightBold};
  font-size: 1.1em;
  text-align: center;
  transition: color 0.2s ease;
  margin-bottom: 1px;
  margin-right: 1px;
  padding: ${props.theme.spacingThin};
  text-decoration: none;
  white-space: nowrap;

  :active,
  :hover {
    color: ${props.theme.colorInteracted};
  }

  ${props.pill &&
    `
    background-color: ${props.theme.colorInteractable};
    border: 0;
    border-radius: ${props.theme.roundedCornerInteractable};
    color: ${props.theme.colorShadow};
    padding: ${props.theme.spacingThin} ${props.theme.spacingNormal};
    transition: color 0.2s ease, background-color 0.2s ease;
  
    :active,
    :hover {
      background-color: ${props.theme.colorInteracted};
      color: ${props.theme.colorBlank};
    }
  `}
`

export default constructButtonWithStyling(styling)
