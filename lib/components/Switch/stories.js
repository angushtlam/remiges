import React from 'react'
import {doc} from 'storybook-readme'
import {withKnobs, boolean} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'
import Box from '../Box'
import Switch from '../Switch'
import Documentation from './README.md'

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with basic switch', () => (
    <Switch label="Label" flipped={boolean('Flipped', false)} />
  ))
