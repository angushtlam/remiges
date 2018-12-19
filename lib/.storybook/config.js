import React from 'react'
import {addDecorator, configure} from '@storybook/react'
import {createGlobalStyles} from 'lib/styles/globals'

// Dynamically look for all stories.js files in components.
const req = require.context('../components', true, /stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const Global = createGlobalStyles()

addDecorator(story => {
  return (
    <div>
      <Global />
      {story()}
    </div>
  )
})

configure(loadStories, module)
