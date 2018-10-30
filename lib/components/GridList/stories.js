import React from 'react'
import {storiesOf} from '@storybook/react'
import {doc} from 'storybook-readme'
import {GridList, GridListItem} from './index'
import Documentation from './README.md'

storiesOf('GridList', module)
  .add('documentation', doc(Documentation))
  .add('with basic grid list', () => (
    <GridList>
      <GridListItem>Item 1</GridListItem>
      <GridListItem>
        This item is much longer in width. This item is much longer in width.
        This item is much longer in width. This item is much longer in width.
      </GridListItem>
      <GridListItem>Item 3</GridListItem>
      <GridListItem>Item 4</GridListItem>
      <GridListItem>Item 5</GridListItem>
      <GridListItem>
        This item is much longer in width. This item is much longer in width.
      </GridListItem>
      <GridListItem>Item 7</GridListItem>
      <GridListItem>Item 8</GridListItem>
    </GridList>
  ))
