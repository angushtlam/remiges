import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Code from '../Code'
import Documentation from './index.md'

storiesOf('Code', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with basic code', () => <Code>{`<Code>This is a box.</Code>`}</Code>)
