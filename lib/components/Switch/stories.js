import React from 'react'
import {doc} from 'storybook-readme'
import {withKnobs, boolean} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'
import Switch from '../Switch'
import Documentation from './index.md'

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with basic switch', () => (
    <Switch
      disabled={boolean('Disabled', false)}
      flipped={boolean('Flipped', false)}
    />
  ))
