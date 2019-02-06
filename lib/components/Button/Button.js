import {css} from 'emotion'
import {constructButtonWithStyling} from './util'

const styling = props => css`
  align-items: center;
  background: unset;
  border: unset;
  border-radius: ${props.theme.buttonBorderRadius};
  color: ${props.theme.buttonColor};
  cursor: pointer;
  display: inline-flex;
  font-weight: ${props.theme.buttonFontWeight};
  font-size: 1.1em;
  text-align: center;
  transition: ${props.theme.buttonTransition};
  margin-bottom: 1px;
  margin-right: 1px;
  padding: ${props.theme.buttonPadding};
  text-decoration: none;
  white-space: nowrap;

  :active,
  :hover {
    color: ${props.theme.buttonColorInteracted};
  }

  ${props.pill &&
    `
    background-color: ${props.theme.buttonBackgroundColor};
    border: ${props.theme.buttonPillBorder};
    color: ${props.theme.buttonPillColor};
    padding: ${props.theme.spaceHalf} ${props.theme.space};
    transition: ${props.theme.buttonPillTransition};
  
    :active,
    :hover {
      background-color: ${props.theme.buttonBackgroundColorInteracted};
      color: ${props.theme.buttonPillColorInteracted};
    }
  `}
`

export default constructButtonWithStyling(styling, theme => ({
  buttonBackgroundColor: theme.color50,
  buttonBackgroundColorInteracted: theme.color40,
  buttonBorderRadius: theme.roundInteractable,
  buttonColor: theme.color50,
  buttonColorInteracted: theme.color60,
  buttonFontWeight: theme.fontWeightStrong,
  buttonPadding: theme.spaceHalf,
  buttonPillBorder: '0',
  buttonPillColor: theme.color90,
  buttonPillColorInteracted: theme.color80,
  buttonPillTransition: 'color 0.2s ease, background-color 0.2s ease',
  buttonTransition: 'color 0.2s ease',
}))
