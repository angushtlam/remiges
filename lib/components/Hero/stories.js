import React from 'react'
import {storiesOf} from '@storybook/react'
import {text, withKnobs} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Hero from '../Hero'
import OwlImage from 'lib/assets/owl.jpg'
import Documentation from './index.md'

storiesOf('Hero', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with basic hero', () => (
    <Hero background="pink">{text('Text', 'I am a hero.')}</Hero>
  ))
  .add('with custom height', () => {
    const height = text('Height', '10em')
    return (
      <Hero background="pink" height={height}>
        I am a {height} hero.
      </Hero>
    )
  })
  .add('with image background', () => {
    return (
      <Hero background={`url(${OwlImage}) repeat repeat`}>
        I am a hero with style.
      </Hero>
    )
  })
