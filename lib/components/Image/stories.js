import React from 'react'
import {doc} from 'storybook-readme'
import {storiesOf} from '@storybook/react'
import Documentation from './index.md'
import Box from '../Box'
import Image from '../Image'
import OwlImage from 'lib/assets/owl.jpg'

storiesOf('Image', module)
  .add('documentation', doc(Documentation))
  .add('with basic image', () => <Image src={OwlImage} />)
  .add('with custom size', () => (
    <Image height="2em" width="10em" src={OwlImage} />
  ))
  .add('with image filling parent division', () => (
    <Box background="pink" height="10em" width="10em">
      <Image fillParent src={OwlImage} />
    </Box>
  ))
