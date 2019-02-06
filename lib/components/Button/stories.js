import React from 'react'
import {doc} from 'storybook-readme'
import {storiesOf} from '@storybook/react'
import Box from '../Box'
import Button from './Button'
import Documentation from './index.md'

storiesOf('Button', module)
  .add('documentation', doc(Documentation))
  .add('with basic button', () => (
    <Box>
      <Button>Button</Button>
      <Button>Submit</Button>
    </Box>
  ))
  .add('with basic button link', () => (
    <Button to="#">I am a link that looks like a button!</Button>
  ))
  .add('with non-standard link components', () => {
    const NonStandardLink = ({children, className, to}) => (
      <a className={className} href={`#${to}`}>
        {children}
      </a>
    )

    return (
      <Box>
        <Button to="it_works" using={NonStandardLink}>
          Non-standard button link.
        </Button>
        <Button to="it_works" using={NonStandardLink} pill>
          Non-standard button pill link.
        </Button>
      </Box>
    )
  })
  .add('with pill button', () => (
    <Box>
      <Button pill>Button</Button>
      <Button pill>Submit</Button>
    </Box>
  ))
