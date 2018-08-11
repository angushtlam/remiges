import React from 'react'
import {storiesOf} from '@storybook/react'
import Header from '../Header'
import Screen from '../Screen'
import Subheader from '../Subheader'

storiesOf('Screen', module).add('with example page', () => (
  <Screen>
    <Header>Remiges</Header>
    <Subheader>A React UI Component library</Subheader>
  </Screen>
))
