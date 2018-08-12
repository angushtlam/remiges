import React from 'react'
import {render} from 'react-dom'
import {Header, Paragraph, Screen, Subheader} from 'remiges'

const App = () => (
  <Screen>
    <Header>Remiges</Header>
    <Subheader>A React UI Component library</Subheader>
    <Paragraph>
      Remiges is a React UI Component library built by @angusburg.
    </Paragraph>
  </Screen>
)

render(<App />, document.getElementById('app'))
