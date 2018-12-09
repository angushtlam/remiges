import React from 'react'
import {withOptions} from '@storybook/addon-options'
import {addDecorator, configure} from '@storybook/react'
import {createGlobalStyles} from 'lib/styles/globals'
import colors from 'lib/styles/colors'
import details from 'lib/styles/details'
import spacing from 'lib/styles/spacing'
import typography from 'lib/styles/typography'

// Dynamically look for all stories.js files in components.
const req = require.context('../components', true, /stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const globals = createGlobalStyles()

addDecorator(story => {
  return (
    <div>
      {globals}
      {story()}
    </div>
  )
})

addDecorator(
  withOptions({
    name: 'Remiges',
    theme: {
      mainBackground: colors.shadow,
      mainBorder: `0`,
      mainBorderColor: colors.blank,
      mainBorderRadius: '0',
      mainFill: colors.blank,
      barFill: colors.blank,
      inputFill: colors.shadow,
      mainTextFace: typography.sanSerif,
      mainTextColor: colors.print,
      mainTextSize: '16px',
      dimmedTextColor: colors.muted,
      highlightColor: colors.interactable,
      successColor: '#0edf62',
      failColor: '#ff3f3f',
      warnColor: 'orange',
      monoTextFace: typography.fixedWidth,
      layoutMargin: '0',
      overlayBackground: `rgba(0, 0, 0, 0.9)`,
    },
  })
)

configure(loadStories, module)
