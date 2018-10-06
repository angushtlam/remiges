import React from 'react'
import {addDecorator, configure} from '@storybook/react'
import {setupGlobalStyles} from '~/styles/globals'

// Dynamically look for all stories.js files in components.
const req = require.context('../components', true, /stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => {
  setupGlobalStyles()
  return <div>{story()}</div>
})

configure(loadStories, module)
