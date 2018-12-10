import React from 'react'
import {storiesOf} from '@storybook/react'
import {boolean, withKnobs} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import {List, ListItem} from './index'
import Documentation from './index.md'

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with basic bullet list', () => (
    <List
      connected={boolean('Connected', false)}
      filled={boolean('Filled', false)}
    >
      <ListItem>Item 1</ListItem>
      <ListItem>
        This item is much longer in width. This item is much longer in width.
        This item is much longer in width. This item is much longer in width.
      </ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
      <ListItem>
        This item is much longer in width. This item is much longer in width.
      </ListItem>
      <ListItem>Item 7</ListItem>
      <ListItem>Item 8</ListItem>
    </List>
  ))
