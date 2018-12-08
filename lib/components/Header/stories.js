import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Documentation from './README.md'
import Header from '../Header'

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with text', () => <Header>{text('Text', 'Header')}</Header>)
  .add('with emojis', () => <Header>{text('Text', '🦉🦉🦉🌚')}</Header>)
