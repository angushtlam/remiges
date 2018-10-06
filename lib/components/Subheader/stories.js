import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import Subheader from '../Subheader'

storiesOf('Subheader', module)
  .addDecorator(withKnobs)
  .add('with text', () => <Subheader>{text('Text', 'Subheader')}</Subheader>)
  .add('with emojis', () => <Subheader>{text('Text', '🦉🦉🦉🌚')}</Subheader>)
