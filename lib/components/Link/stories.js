import React from 'react'
import {doc} from 'storybook-readme'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import Header from '../Header'
import Link from '../Link'
import Paragraph from '../Paragraph'
import Subheader from '../Subheader'
import Documentation from './index.md'

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with example', () => <Link>{text('Text', `This is a link!`)}</Link>)
  .add('with inline links', () => (
    <div>
      <Header>
        Here comes a link! <Link>{text('Text', `This is a link!`)}</Link> The
        link is over there!
      </Header>
      <Subheader>
        Here comes a link! <Link>{text('Text', `This is a link!`)}</Link> The
        link is over there!
      </Subheader>
      <Paragraph>
        Here comes a link! <Link>{text('Text', `This is a link!`)}</Link> The
        link is over there!
      </Paragraph>
    </div>
  ))
  .add('with non-standard link components', () => {
    const NonStandardLink = ({children, className, to}) => (
      <a className={className} href={`#${to}`}>
        {children}
      </a>
    )

    return (
      <Link to="it_works" using={NonStandardLink}>
        This is a styled non-standard link.
      </Link>
    )
  })
