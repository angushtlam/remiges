import React from 'react'
import {doc} from 'storybook-readme'
import {storiesOf} from '@storybook/react'
import Box from '../Box'
import Button from '../Button'
import Documentation from './README.md'

storiesOf('Button', module)
  .add('documentation', doc(Documentation))
  .add('with basic button', () => (
    <Box padding="0" width="100%">
      <Button>Button</Button>
      <Button>Submit</Button>
    </Box>
  ))
  .add('with basic button link', () => (
    <Box padding="0" width="100%">
      <Button to="#">I am a link that looks like a button!</Button>
    </Box>
  ))
  .add('with non-standard link components', () => {
    const NonStandardLink = ({children, className, to}) => (
      <a className={className} href={`#${to}`}>
        {children}
      </a>
    )

    return (
      <Box padding="0" width="100%">
        <Button to="it_works" using={NonStandardLink}>
          This is a styled non-standard button link.
        </Button>
      </Box>
    )
  })
