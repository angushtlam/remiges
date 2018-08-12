import React from 'react'
import {storiesOf} from '@storybook/react'
import Header from '../Header'
import Link from '../Link'
import Paragraph from '../Paragraph'
import Screen from '../Screen'
import Subheader from '../Subheader'

storiesOf('Screen', module).add('with example page', () => (
  <Screen>
    <Header>Remiges</Header>
    <Subheader>A React UI Component library</Subheader>
    <Paragraph>
      Remiges is a React UI Component library built by <Link>@angusburg</Link>.
      This is a library created for my projects.
    </Paragraph>
    <Subheader>Why?</Subheader>
    <Paragraph>
      I prototype on a lot of React-based frontend projects that end up using a
      lot of the same styling. The worst part is to keep track of all the
      incremental improvements on the styling from project to project. So, for
      my sake, I'm going to create one library to keep all these changes.
    </Paragraph>
  </Screen>
))
