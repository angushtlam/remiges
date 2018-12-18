import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Documentation from './index.md'
import Box from '../Box'
import Theme from '../Theme'

storiesOf('Theme', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with custom theme', () => (
    <Theme
      theme={{
        spacingNormal: text('Padding', '2em'),
      }}
    >
      <Box background="pink" padding>
        Custom Padding
      </Box>
    </Theme>
  ))
  .add('with default values', () => (
    <Theme>
      <Box background="pink" padding>
        Custom Padding
      </Box>
    </Theme>
  ))
