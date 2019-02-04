import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Global from './Global'
import Paragraph from '../Paragraph'
import Theme from '../Theme'
import Documentation from './index.md'

storiesOf('Global', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with custom global styling', () => {
    const styling = props => `
      body {
        background-color: black;
        color: ${props.theme.color70};
      }
    `

    return (
      <Global styles={styling}>
        <Paragraph>
          {`You will want to refresh the page after loading this
          story as this Global component will override the actual Global
          component used in Storybook.`}
        </Paragraph>
      </Global>
    )
  })
  .add('with theme overriding variables in global styling', () => (
    <Theme theme={{color0: 'red'}}>
      <Global />
      <Paragraph>
        {`You will want to refresh the page after loading this
          story as this Global component will override the actual Global
          component used in Storybook.`}
      </Paragraph>
    </Theme>
  ))
