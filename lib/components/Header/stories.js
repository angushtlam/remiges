import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import Header from '../Header'

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with text', () => <Header>{text('Text', 'Header')}</Header>)
  .add('with emojis', () => <Header>{text('Text', '🦉🦉🦉🌚')}</Header>)
