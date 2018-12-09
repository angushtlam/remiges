import React from 'react'
import {storiesOf} from '@storybook/react'
import {doc} from 'storybook-readme'
import Box from '../Box'
import {GridList, GridListItem} from './index'
import Documentation from './index.md'

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
  .add('with custom children grid list', () => (
    <GridList>
      <GridListItem>
        <Box background="pink" width="100%" padding>
          Item 1
        </Box>
      </GridListItem>
      <GridListItem>
        <Box background="pink" width="100%" padding>
          This item is much longer in width. This item is much longer in width.
          This item is much longer in width. This item is much longer in width.
        </Box>
      </GridListItem>
      <GridListItem>
        <Box background="pink" width="100%" padding>
          Item 3
        </Box>
      </GridListItem>
      <GridListItem>
        <Box background="pink" width="100%" padding>
          Item 4
        </Box>
      </GridListItem>
      <GridListItem>
        <Box background="pink" width="100%" padding>
          Item 5
        </Box>
      </GridListItem>
      <GridListItem>
        <Box background="pink" width="100%" padding>
          This item is much longer in width. This item is much longer in width.
        </Box>
      </GridListItem>
      <GridListItem>
        <Box background="pink" width="100%" padding>
          Item 7
        </Box>
      </GridListItem>
      <GridListItem>
        <Box background="pink" width="100%" padding>
          Item 8
        </Box>
      </GridListItem>
    </GridList>
  ))
  .add('with grid list in reading container', () => (
    <Box background="lightgrey" horizontallyCenter readingContainer padding>
      <GridList>
        <GridListItem>
          <Box background="pink" width="100%" padding>
            Item 1
          </Box>
        </GridListItem>
        <GridListItem>
          <Box background="pink" width="100%" padding>
            This item is much longer in width. This item is much longer in
            width. This item is much longer in width. This item is much longer
            in width.
          </Box>
        </GridListItem>
        <GridListItem>
          <Box background="pink" width="100%" padding>
            Item 3
          </Box>
        </GridListItem>
        <GridListItem>
          <Box background="pink" width="100%" padding>
            Item 4
          </Box>
        </GridListItem>
        <GridListItem>
          <Box background="pink" width="100%" padding>
            Item 5
          </Box>
        </GridListItem>
        <GridListItem>
          <Box background="pink" width="100%" padding>
            This item is much longer in width. This item is much longer in
            width.
          </Box>
        </GridListItem>
        <GridListItem>
          <Box background="pink" width="100%" padding>
            Item 7
          </Box>
        </GridListItem>
        <GridListItem>
          <Box background="pink" width="100%" padding>
            Item 8
          </Box>
        </GridListItem>
      </GridList>
    </Box>
  ))
