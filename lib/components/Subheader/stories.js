import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Documentation from './README.md'
import Subheader from '../Subheader'

storiesOf('Subheader', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with text', () => <Subheader>{text('Text', 'Subheader')}</Subheader>)
  .add('with emojis', () => <Subheader>{text('Text', '🦉🦉🦉🌚')}</Subheader>)
