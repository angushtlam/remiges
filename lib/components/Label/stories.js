import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Documentation from './index.md'
import Label from '../Label'

storiesOf('Label', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with text', () => <Label>{text('Text', 'Label')}</Label>)
  .add('with emojis', () => <Label>{text('Text', '🦉🦉🦉🌚')}</Label>)
