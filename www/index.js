import React from 'react'
import {render} from 'react-dom'
import {
  Box,
  Column,
  Columns,
  Header,
  Hero,
  Link,
  Navbar,
  NavbarBrand,
  NavbarNavigation,
  Navigation,
  NavigationItem,
  Paragraph,
  Subheader,
  setupGlobalStyles,
  colors,
} from 'remiges'

setupGlobalStyles()

const App = () => (
  <Box direction="vertical" padding="0">
    <Navbar background={colors.shadow}>
      <NavbarBrand>Remiges</NavbarBrand>
      <NavbarNavigation>
        <Link to="https://github.com/angusburg/remiges" target="_blank">
          Fork me on GitHub!
        </Link>
      </NavbarNavigation>
    </Navbar>
    <Columns>
      <Column width="12em">
        <Navigation label="Remiges">
          <NavigationItem to="#">Introduction</NavigationItem>
        </Navigation>
      </Column>
      <Column>
        <Header>Remiges</Header>
        <Subheader>A React UI Component library</Subheader>
        <Paragraph>
          Remiges is a React UI Component library built by{' '}
          <Link to="https://github.com/angusburg" target="_blank">
            @angusburg
          </Link>
          . This is a library created for my projects.
        </Paragraph>
        <Subheader>Why?</Subheader>
        <Paragraph>
          I prototype on a lot of React-based frontend projects that end up
          using a lot of the same styling. The worst part is to keep track of
          all the incremental improvements on the styling from project to
          project. So, for my sake, I'm going to create one library to hold all
          of these changes and make it easier to reuse my own stylings across my
          projects.
        </Paragraph>
      </Column>
    </Columns>
  </Box>
)

render(<App />, document.getElementById('app'))
