import React from 'react'
import {storiesOf} from '@storybook/react'
import {text, withKnobs} from '@storybook/addon-knobs'
import Input from '../Input'

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('with text input', () => (
    <Input
      readOnly
      placeholder="I am a placeholder"
      value={text('Input Value', '')}
    />
  ))
  .add('with labeled text input', () => (
    <Input
      readOnly
      label="Label"
      placeholder="I am a placeholder"
      value={text('Input Value', '')}
    />
  ))
  .add('with shy text input', () => (
    <Input
      readOnly
      label="Label"
      placeholder="I am a placeholder"
      shy
      value={text('Input Value', '')}
    />
  ))
