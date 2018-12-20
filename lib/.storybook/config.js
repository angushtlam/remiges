import React from 'react'
import {addDecorator, configure} from '@storybook/react'
import GlobalStyling from 'lib/components/GlobalStyling'

// Dynamically look for all stories.js files in components.
const req = require.context('../components', true, /stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(renderStory => (
  <div>
    <GlobalStyling />
    {renderStory()}
  </div>
))

configure(loadStories, module)
