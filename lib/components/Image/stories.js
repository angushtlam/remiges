import React from 'react'
import {storiesOf} from '@storybook/react'
import Box from '../Box'
import Image from '../Image'
import OwlImage from 'lib/assets/owl.jpg'

storiesOf('Image', module)
  .add('with basic image', () => <Image src={OwlImage} />)
  .add('with custom size', () => (
    <Image height="2em" width="10em" src={OwlImage} />
  ))
  .add('with image filling parent division', () => (
    <Box background="pink" height="10em" width="10em">
      <Image fillParent src={OwlImage} />
    </Box>
  ))
