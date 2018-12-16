import {css} from 'emotion'
import colors from 'lib/styles/colors'
import spacing from 'lib/styles/spacing'
import weights from 'lib/styles/weights'
import {constructButtonWithStyling} from './util'

const styling = css`
  align-items: center;
  border: unset;
  background: unset;
  color: ${colors.interactable};
  cursor: pointer;
  display: inline-flex;
  font-weight: ${weights.bold};
  font-size: 1.1em;
  text-align: center;
  transition: color 0.2s ease;
  margin-bottom: 1px;
  margin-right: 1px;
  padding: ${spacing.thin};
  text-decoration: none;
  white-space: nowrap;

  :active,
  :hover {
    color: ${colors.interacted};
  }
`

export default constructButtonWithStyling(styling)
