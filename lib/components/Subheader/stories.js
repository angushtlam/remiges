import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import Screen from '../Screen'
import Subheader from '../Subheader'

storiesOf('Subheader', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Screen>
      <Subheader>{text('Text', 'Subheader')}</Subheader>
    </Screen>
  ))
  .add('with emojis', () => (
    <Screen>
      <Subheader>{text('Text', '🦉🦉🦉🌚')}</Subheader>
    </Screen>
  ))
