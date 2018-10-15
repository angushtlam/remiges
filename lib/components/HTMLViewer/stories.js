import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import HTMLViewer from '../HTMLViewer'
import Documentation from './README.md'
import OwlImage from '~/assets/owl.jpg'

storiesOf('HTMLViewer', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with basic html viewer', () => (
    <HTMLViewer>
      <h1>Hello</h1>
      <p>
        Hello, it's me. I was wondering if after all these years you'd like to
        meet To go over everything. They say that time's supposed to heal ya,
        but I ain't done much healing. Hello, can you hear me? I'm in California
        dreaming about who we used to be. When we were younger and free. I've
        forgotten how it felt before the world fell at our feet.
      </p>
      <blockquote>They say that time's supposed to heal ya</blockquote>
      <p>
        but I ain't done much healing. Hello, can you hear me? I'm in California
        dreaming about who we used to be When we were younger and free I've
        forgotten how it felt before the world fell at our feet
      </p>
      <p>
        <img src={OwlImage} />
      </p>
      <p>
        <code>
          console.log('There's such a difference between us. And a million
          miles.')
        </code>
      </p>
      <p>
        <a href="#">Hello from the other side</a> I must've called a thousand
        times
      </p>
      <h3 />
    </HTMLViewer>
  ))
  .add('with dangerously set inner html', () => {
    const html = `<h1>Hello</h1>
    <p>
      Hello, it's me. I was wondering if after all these years you'd like to
      meet To go over everything. They say that time's supposed to heal ya,
      but I ain't done much healing. Hello, can you hear me? I'm in
      California dreaming about who we used to be. When we were younger and
      free. I've forgotten how it felt before the world fell at our feet.
    </p>
    <blockquote>They say that time's supposed to heal ya</blockquote>
    <p>
      but I ain't done much healing. Hello, can you hear me? I'm in
      California dreaming about who we used to be When we were younger and
      free I've forgotten how it felt before the world fell at our feet
    </p>
    <p>
      <img src="${OwlImage}" />
    </p>
    <p>
      <code>
        console.log('There's such a difference between us. And a million
        miles.')
      </code>
    </p>
    <p>
      <a href="#">Hello from the other side</a> I must've called a thousand
      times
    </p>
    <h3 />`
    return <HTMLViewer dangerouslySetInnerHTML={{__html: html}} />
  })
