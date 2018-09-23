import React from 'react'
import {storiesOf} from '@storybook/react'
import {boolean, text, withKnobs} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Hero from '../Hero'
import Screen from '../Screen'
import OwlImage from '~/assets/owl.jpg'
import Documentation from './README.md'

storiesOf('Hero', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with basic hero', () => {
    const debug = boolean('Show debug', true)
    return (
      <Screen>
        <Hero debug={debug}>{text('Text', 'I am a hero.')}</Hero>
      </Screen>
    )
  })
  .add('with custom height', () => {
    const debug = boolean('Show debug', true)
    const height = text('Height', '10em')
    return (
      <Screen>
        <Hero debug={debug} height={height}>
          I am a {height} hero.
        </Hero>
      </Screen>
    )
  })
  .add('with image background', () => {
    const debug = boolean('Show debug', false)
    return (
      <Screen>
        <Hero background={`url(${OwlImage}) repeat repeat`} debug={debug}>
          I am a hero with style.
        </Hero>
      </Screen>
    )
  })
