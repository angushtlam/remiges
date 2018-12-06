import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Box from '../Box'
import Paragraph from '../Paragraph'
import Documentation from './README.md'

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with basic box', () => (
    <Box background="lightgray" padding>
      This is a box.
    </Box>
  ))
  .add('with horizontal centering', () => (
    <Box background="lightgray" padding>
      <Box background="pink" width="50%" horizontallyCenter>
        This is horizontally aligned.
      </Box>
    </Box>
  ))
  .add('with vertical centering', () => (
    <Box background="lightgray" height="10em" padding verticallyCenter>
      This is a box.
    </Box>
  ))
  .add('with horizontal and vertical centering', () => (
    <Box background="lightgray" height="10em" padding verticallyCenter>
      <Box horizontallyCenter>This is a box.</Box>
    </Box>
  ))
  .add('with children in vertical direction', () => (
    <Box padding>
      <Paragraph>One</Paragraph>
      <Paragraph>Two</Paragraph>
      <Paragraph>Three</Paragraph>
    </Box>
  ))
  .add('with children in horizontal direction', () => (
    <Box direction="horizontal" padding>
      <Paragraph>One</Paragraph>
      <Paragraph>Two</Paragraph>
      <Paragraph>Three</Paragraph>
    </Box>
  ))
  .add('with reading container', () => (
    <Box background="lightgray" padding>
      <Box background="pink" readingContainer padding>
        This is a box.
      </Box>
    </Box>
  ))
  .add('with content justified with space between', () => (
    <Box flex justifyContent="spaceBetween">
      <Box background="pink" padding>
        This is a box.
      </Box>
      <Box background="pink" padding>
        This is a box.
      </Box>
    </Box>
  ))
