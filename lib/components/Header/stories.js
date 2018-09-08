import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import Header from '../Header'
import Screen from '../Screen'

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Screen>
      <Header>{text('Text', 'Header')}</Header>
    </Screen>
  ))
  .add('with emojis', () => (
    <Screen>
      <Header>{text('Text', '🦉🦉🦉🌚')}</Header>
    </Screen>
  ))
