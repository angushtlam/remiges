import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Box from '../Box'
import Documentation from './README.md'

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with basic box', () => <Box background="#eee">This is a box.</Box>)
  .add('with horizontal centering', () => (
    <Box background="#eee">
      <Box horizontallyCenter>This is a box.</Box>
    </Box>
  ))
  .add('with vertical centering', () => (
    <Box background="#eee" height="10em">
      <Box verticallyCenter>This is a box.</Box>
    </Box>
  ))
  .add('with horizontal and vertical centering', () => (
    <Box background="#eee" height="10em">
      <Box horizontallyCenter verticallyCenter>
        This is a box.
      </Box>
    </Box>
  ))
