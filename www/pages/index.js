import {Link as GatsbyLink} from 'gatsby'
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
  defaultTheme as theme,
} from 'remiges'
import Screen from '../components/Screen'

const IndexPage = () => (
  <Screen>
    <Hero
      background={theme.colorAccent}
      height="25em"
      padding={['2.8em', '0', '0', '0']}
    >
      <Header color={theme.colorBlank}>Remiges</Header>
      <Paragraph color={theme.colorBlank}>React UI Component Kit</Paragraph>
    </Hero>
    <Box horizontallyCenter readingContainer>
      <Columns padding>
        <Column>
          <Subheader>Why?</Subheader>
          <Paragraph>
            {`I prototype on a lot of React-based frontend projects that end up
            using a lot of the same styling. The worst part is to keep track of
            all the incremental improvements on the styling from project to
            project. So, for my sake, I'm going to create one library to hold
            all of these changes and make it easier to reuse my own stylings
            across my projects.`}
          </Paragraph>
        </Column>
        <Column width="60%">
          <Subheader>Get Started</Subheader>
          <Button to="/components" using={GatsbyLink} pill>
            Components
          </Button>
        </Column>
      </Columns>
    </Box>
  </Screen>
)

export default IndexPage
