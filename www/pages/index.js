import React from 'react'
import {
  Box,
  Column,
  Columns,
  Header,
  Hero,
  Button,
  Paragraph,
  Subheader,
} from 'remiges'
import Screen from '../components/Screen'

const IndexPage = () => (
  <Screen>
    <Hero height="30em">
      <Header>Remiges</Header>
      <Paragraph>React UI Component Kit</Paragraph>
    </Hero>
    <Box horizontallyCenter readingContainer>
      <Columns padding>
        <Column>
          <Subheader>Why?</Subheader>
          <Paragraph>
            I prototype on a lot of React-based frontend projects that end up
            using a lot of the same styling. The worst part is to keep track of
            all the incremental improvements on the styling from project to
            project. So, for my sake, I'm going to create one library to hold
            all of these changes and make it easier to reuse my own stylings
            across my projects.
          </Paragraph>
        </Column>
        <Column width="60%">
          <Subheader>Get Started</Subheader>
          <Button to="/storybook" target="_blank">
            Storybook
          </Button>
        </Column>
      </Columns>
    </Box>
  </Screen>
)

export default IndexPage
