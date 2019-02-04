import React from 'react'
import {addDecorator, configure} from '@storybook/react'
import {Global} from 'lib/components/Global'

// Dynamically look for all stories.js files in components.
const req = require.context('../components', true, /stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(renderStory => (
  <div>
    <Global />
    {renderStory()}
  </div>
))

configure(loadStories, module)
