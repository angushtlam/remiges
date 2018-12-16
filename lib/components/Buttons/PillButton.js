import {css} from 'emotion'
import colors from 'lib/styles/colors'
import details from 'lib/styles/details'
import spacing from 'lib/styles/spacing'
import weights from 'lib/styles/weights'
import {constructButtonWithStyling} from './util'

const styling = css`
  align-items: center;
  background-color: ${colors.interactable};
  border: 0;
  border-radius: ${details.interactableRoundedCorner};
  color: ${colors.shadow};
  cursor: pointer;
  display: inline-flex;
  font-weight: ${weights.bold};
  font-size: 1.1em;
  text-align: center;
  transition: color 0.2s ease;
  margin-bottom: 1px;
  margin-right: 1px;
  padding: ${spacing.thin} ${spacing.normal};
  text-decoration: none;
  transition: background-color 0.2s ease;
  white-space: nowrap;

  :active,
  :hover {
    background-color: ${colors.interacted};
    color: ${colors.blank};
  }
`

export default constructButtonWithStyling(styling)
