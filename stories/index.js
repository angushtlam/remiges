import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Label from '../lib/components/Label'

storiesOf('Label', module)
  .add('with text', () => (
    <Label onClick={action('clicked')}>Hello Button</Label>
  ))
  .add('with some emoji', () => (
    <Label onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Label>
  ))
