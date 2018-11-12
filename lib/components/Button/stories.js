import React from 'react'
import {doc} from 'storybook-readme'
import {storiesOf} from '@storybook/react'
import Button from '../Button'
import Documentation from './README.md'

storiesOf('Button', module)
  .add('documentation', doc(Documentation))
  .add('with basic button', () => (
    <div>
      <Button>I am a button!</Button>
      <Button to="#">I am a link that looks like a button!</Button>
    </div>
  ))
  .add('with non-standard link components', () => {
    const NonStandardLink = ({children, className, to}) => (
      <a className={className} href={`#${to}`}>
        {children}
      </a>
    )

    return (
      <Button to="it_works" using={NonStandardLink}>
        This is a styled non-standard button link.
      </Button>
    )
  })
