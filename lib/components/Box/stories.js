import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Box from '../Box'
import Screen from '../Screen'
import Documentation from './README.md'

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with basic box', () => (
    <Screen>
      <Box background="#eee">This is a box.</Box>
    </Screen>
  ))
  .add('with horizontal centering', () => (
    <Screen>
      <Box background="#eee">
        <Box horizontallyCenter>This is a box.</Box>
      </Box>
    </Screen>
  ))
  .add('with vertical centering', () => (
    <Screen>
      <Box background="#eee" height="10em">
        <Box verticallyCenter>This is a box.</Box>
      </Box>
    </Screen>
  ))
  .add('with horizontal and vertical centering', () => (
    <Screen>
      <Box background="#eee" height="10em">
        <Box horizontallyCenter verticallyCenter>
          This is a box.
        </Box>
      </Box>
    </Screen>
  ))
