import React from 'react'
import {storiesOf} from '@storybook/react'
import {number, withKnobs} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import {ProgressList, ProgressListItem} from './index'
import Documentation from './README.md'

storiesOf('ProgressList', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with basic progress list', () => (
    <ProgressList completed={number('Completed Items', 4)}>
      <ProgressListItem>Item 1</ProgressListItem>
      <ProgressListItem>
        This item is much longer in width. This item is much longer in width.
        This item is much longer in width. This item is much longer in width.
      </ProgressListItem>
      <ProgressListItem>Item 3</ProgressListItem>
      <ProgressListItem>Item 4</ProgressListItem>
      <ProgressListItem>Item 5</ProgressListItem>
      <ProgressListItem>
        This item is much longer in width. This item is much longer in width.
      </ProgressListItem>
      <ProgressListItem>Item 7</ProgressListItem>
      <ProgressListItem>Item 8</ProgressListItem>
    </ProgressList>
  ))
