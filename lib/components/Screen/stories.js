import React from 'react'
import {storiesOf} from '@storybook/react'
import Header from '../Header'
import Paragraph from '../Paragraph'
import Screen from '../Screen'
import Subheader from '../Subheader'

storiesOf('Screen', module).add('with example page', () => (
  <Screen>
    <Header>Remiges</Header>
    <Subheader>A React UI Component library</Subheader>
    <Paragraph>
      Remiges is a React UI Component library built by @angusburg.
    </Paragraph>
  </Screen>
))
