import React from 'react'
import {storiesOf} from '@storybook/react'
import {boolean, number, text, withKnobs} from '@storybook/addon-knobs'
import {Column, Columns} from '../Columns'
import Screen from '../Screen'

storiesOf('Columns', module)
  .addDecorator(withKnobs)
  .add('with example', () => {
    const debug = boolean('Show debug lines', true)
    const numOfColumns = number('Number of Columns', 4)
    const columns = []

    for (let i = 0; i < numOfColumns; i++) {
      columns.push(<Column>Column {i + 1}</Column>)
    }

    return (
      <Screen>
        <Columns debug={debug}>{columns}</Columns>
      </Screen>
    )
  })
  .add('with fixed width columns', () => {
    const debug = boolean('Show debug lines', true)
    const width = text('Width of Fixed Column', '10em')

    return (
      <Screen>
        <Columns debug={debug}>
          <Column width={width}>Fixed Column</Column>
          <Column>Auto Column</Column>
        </Columns>

        <Columns debug={debug}>
          <Column>Auto Column</Column>
          <Column width={width}>Fixed Column</Column>
        </Columns>

        <Columns debug={debug}>
          <Column>Auto Column</Column>
          <Column width={width}>Fixed Column</Column>
          <Column>Auto Column</Column>
        </Columns>
      </Screen>
    )
  })
  .add('with nested columns', () => {
    const debug = boolean('Show debug lines', true)

    return (
      <Screen>
        <Columns debug={debug}>
          <Column>Normal Column</Column>
          <Column>
            <Columns debug={debug}>
              <Column>Nested Column</Column>
              <Column>Nested Column</Column>
              <Column>Nested Column</Column>
            </Columns>
          </Column>
          <Column>
            <Columns debug={debug}>
              <Column>Nested Column</Column>
              <Column>Nested Column</Column>
              <Column>Nested Column</Column>
            </Columns>
          </Column>
        </Columns>
      </Screen>
    )
  })
