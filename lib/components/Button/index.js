import {css} from 'emotion'
import {constructButtonWithStyling} from './util'

const styling = props => css`
  align-items: center;
  border: unset;
  background: unset;
  color: ${props.theme.color50};
  cursor: pointer;
  display: inline-flex;
  font-weight: ${props.theme.fontWeightStrong};
  font-size: 1.1em;
  text-align: center;
  transition: color 0.2s ease;
  margin-bottom: 1px;
  margin-right: 1px;
  padding: ${props.theme.spaceHalf};
  text-decoration: none;
  white-space: nowrap;

  :active,
  :hover {
    color: ${props.theme.color60};
  }

  ${props.pill &&
    `
    background-color: ${props.theme.color50};
    border: 0;
    border-radius: ${props.theme.buttonBorderRadius};
    color: ${props.theme.color90};
    padding: ${props.theme.spaceHalf} ${props.theme.space};
    transition: color 0.2s ease, background-color 0.2s ease;
  
    :active,
    :hover {
      background-color: ${props.theme.color60};
      color: ${props.theme.color40};
    }
  `}
`

export default constructButtonWithStyling(styling, {
  buttonBorderRadius: '0.5em',
})
