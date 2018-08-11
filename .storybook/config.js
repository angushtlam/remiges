import {configure} from '@storybook/react'

// Dynamically look for all stories.js files in components.
const req = require.context('../src/components', true, /stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
