import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import Header from '../Header'
import Link from '../Link'
import Paragraph from '../Paragraph'
import Screen from '../Screen'
import Subheader from '../Subheader'

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .add('component', () => <Link>{text('Text', `This is a link!`)}</Link>)
  .add('with example inlines', () => (
    <Screen>
      <Header>
        Here comes a link! <Link>{text('Text', `This is a link!`)}</Link> The
        link is over there!
      </Header>
      <Subheader>
        Here comes a link! <Link>{text('Text', `This is a link!`)}</Link> The
        link is over there!
      </Subheader>
      <Paragraph>
        Here comes a link! <Link>{text('Text', `This is a link!`)}</Link> The
        link is over there!
      </Paragraph>
    </Screen>
  ))
