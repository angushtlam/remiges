import {css} from 'emotion'
import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import GlobalStyling from '../GlobalStyling'
import Paragraph from '../Paragraph'
import Theme from '../Theme'
import Documentation from './index.md'

storiesOf('GlobalStyling', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with custom global styling', () => {
    const styling = props => css`
      body {
        background-color: black;
        color: ${props.theme.colorInteractable};
      }
    `

    return (
      <GlobalStyling styles={styling}>
        <Paragraph>
          {`You will want to refresh the page after loading this
          story as this Global component will override the actual Global
          component used in Storybook.`}
        </Paragraph>
      </GlobalStyling>
    )
  })
  .add('with theme overriding variables in global styling', () => (
    <Theme theme={{colorPrint: 'red'}}>
      <GlobalStyling />
      <Paragraph>
        {`You will want to refresh the page after loading this
          story as this Global component will override the actual Global
          component used in Storybook.`}
      </Paragraph>
    </Theme>
  ))
