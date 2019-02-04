import React from 'react'
import {
  Box,
  Button,
  Column,
  Columns,
  GridList,
  GridListItem,
  Header,
  Hero,
  Input,
  Label,
  Link,
  List,
  ListItem,
  Paragraph,
  ProgressList,
  ProgressListItem,
  Subheader,
  Switch,
  defaultTheme as theme,
} from 'remiges'
import Screen from '../components/Screen'

class StylesPage extends React.Component {
  constructor() {
    super()

    this.state = {
      listConnected: true,
      listFilled: false,
      progressListCompleted: 4,
      switch1: true,
      switch2: false,
      textInput1: '',
      textInput2: '',
      textInput3: '',
    }
  }

  render() {
    const {
      listConnected,
      listFilled,
      progressListCompleted,
      switch1,
      switch2,
      textInput1,
      textInput2,
      textInput3,
    } = this.state

    return (
      <Screen>
        <Box width="100%" padding={['3.6em', '0', '0', '0']}>
          <Box padding={['0', theme.space]}>
            <Header>This is Remiges</Header>
            <Paragraph>
              A React component UI kit for rapidly prototyping React project
              ideas.
            </Paragraph>
          </Box>

          <Columns padding>
            <Column>
              <Button pill>Pill Button</Button>
              <Button>Button</Button>
              <Button>Another Button</Button>
              <br />
              <Button>Cancel</Button>
              <Button>Previous</Button>
              <Button>Next</Button>
              <Button pill>Buy</Button>
              <Button pill>Sell</Button>
              <br />
              <br />
              <Link>Link 1</Link> <Link>Link 2</Link> <Link>Link 3</Link>
            </Column>
            <Column>
              <Input
                onChange={({target: {value}}) => {
                  this.setState({textInput1: value})
                }}
                placeholder="Text Input with Placeholder"
                value={textInput1}
              />
              <br />
              <Input
                label="Labeled Input"
                onChange={({target: {value}}) => {
                  this.setState({textInput2: value})
                }}
                placeholder="Text Input Placeholder"
                value={textInput2}
              />
              <br />
              <Input
                label="Shy Labeled Input"
                onChange={({target: {value}}) => {
                  this.setState({textInput3: value})
                }}
                placeholder="Text Input Placeholder"
                shy
                value={textInput3}
              />
            </Column>
            <Column>
              <Box verticallyCenter>
                <Label>Dummy Switch</Label>
                <Switch
                  flipped={switch1}
                  onClick={() => {
                    this.setState({switch1: !switch1})
                  }}
                />
              </Box>
              <Box verticallyCenter>
                <Label>Another Switch</Label>
                <Switch
                  flipped={switch2}
                  onClick={() => {
                    this.setState({switch2: !switch2})
                  }}
                />
              </Box>
              <Box verticallyCenter>
                <Label>Disabled</Label>
                <Switch disabled />
              </Box>

              <Box verticallyCenter>
                <Label>Flipped</Label>
                <Switch disabled flipped />
              </Box>
            </Column>
          </Columns>

          <Hero height="30em">
            <Header color={theme.color90}>Hero</Header>
            <Paragraph
              color={theme.color90}
            >{`Lorem ipsum dolor amet knausgaard`}</Paragraph>
          </Hero>
          <Box>
            <Columns padding>
              <Column>
                <Header>Header</Header>
                <Subheader>Subheader</Subheader>
                <Paragraph>
                  {`Lorem ipsum dolor amet knausgaard four dollar toast poke, kogi
                  fingerstache leggings stumptown retro bushwick raw denim green
                  juice pork belly shabby chic lomo neutra. Echo park franzen
                  prism brooklyn kombucha succulents. Chia single-origin coffee
                  sriracha, lumbersexual small batch kinfolk poke. Mumblecore
                  iPhone seitan lomo viral pork belly beard meditation vape.
                  Unicorn bicycle rights raw denim hot chicken tacos
                  single-origin coffee.`}
                </Paragraph>
              </Column>
              <Column>
                This is just a normal column.
                <br />
                <br />
                <Columns>
                  <Column>Nested Column</Column>
                  <Column>Nested Column</Column>
                  <Column>Nested Column</Column>
                </Columns>
                <br />
                <br />
                <Columns>
                  <Column>Nested Column</Column>
                  <Column>Nested Column</Column>
                  <Column>Nested Column</Column>
                  <Column>Nested Column</Column>
                </Columns>
                <br />
                <br />
                <Columns>
                  <Column width="60%">60% Width Column</Column>
                  <Column>Nested Column</Column>
                  <Column>Nested Column</Column>
                </Columns>
                <br />
                <br />
                <Columns>
                  <Column width="15%">15% Width Column</Column>
                  <Column width="50%">50% Width Column</Column>
                  <Column>Nested Column</Column>
                </Columns>
              </Column>
            </Columns>
          </Box>
        </Box>
        <Columns padding>
          <Column>
            <Box verticallyCenter>
              <Label>Connected</Label>
              <Switch
                flipped={listConnected}
                onClick={() => {
                  this.setState({listConnected: !listConnected})
                }}
              />
            </Box>
            <Box verticallyCenter>
              <Label>Filled</Label>
              <Switch
                flipped={listFilled}
                onClick={() => {
                  this.setState({listFilled: !listFilled})
                }}
              />
            </Box>
            <List connected={listConnected} filled={listFilled}>
              <ListItem>Item 1</ListItem>
              <ListItem>
                This item is much longer in width. This item is much longer in
                width. This item is much longer in width. This item is much
                longer in width.
              </ListItem>
              <ListItem>Item 3</ListItem>
              <List>
                <ListItem>Nested Item 1</ListItem>
                <ListItem>Nested Item 2</ListItem>
                <List>
                  <ListItem>Nested Item 1</ListItem>
                  <ListItem>Nested Item 2</ListItem>
                  <ListItem>Nested Item 3</ListItem>
                </List>
                <ListItem>Nested Item 3</ListItem>
              </List>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
              <ListItem>
                This item is much longer in width. This item is much longer in
                width.
              </ListItem>
              <ListItem>Item 7</ListItem>
              <ListItem>Item 8</ListItem>
            </List>
          </Column>
          <Column>
            <Button
              onClick={() => {
                this.setState({
                  progressListCompleted: progressListCompleted - 1,
                })
              }}
            >
              Previous
            </Button>
            <Button
              onClick={() => {
                this.setState({
                  progressListCompleted: progressListCompleted + 1,
                })
              }}
            >
              Next
            </Button>

            <ProgressList completed={progressListCompleted}>
              <ProgressListItem>Item 1</ProgressListItem>
              <ProgressListItem>
                {`This item is much longer in width. This item is much longer in
                width. This item is much longer in width. This item is much
                longer in width.`}
              </ProgressListItem>
              <ProgressListItem>Item 3</ProgressListItem>
              <ProgressListItem>Item 4</ProgressListItem>
              <ProgressListItem>Item 5</ProgressListItem>
              <ProgressListItem>
                {`This item is much longer in width. This item is much longer in
                width.`}
              </ProgressListItem>
              <ProgressListItem>Item 7</ProgressListItem>
              <ProgressListItem>Item 8</ProgressListItem>
            </ProgressList>
          </Column>
        </Columns>
        <Box padding>
          <GridList>
            <GridListItem>
              <Box background="lavender" width="100%" padding>
                {`This is a GridList. It dynamically rearranges columns based on parent division width.`}
              </Box>
            </GridListItem>
            <GridListItem>
              <Box background="lavender" width="100%" padding>
                {`This item is much longer in width. This item is much longer in
                width. This item is much longer in width. This item is much
                longer in width.`}
              </Box>
            </GridListItem>
            <GridListItem>
              <Box background="lavender" width="100%" padding>
                Item 3
              </Box>
            </GridListItem>
            <GridListItem>
              <Box background="lavender" width="100%" padding>
                Item 4
              </Box>
            </GridListItem>
            <GridListItem>
              <Box background="lavender" width="100%" padding>
                Item 5
              </Box>
            </GridListItem>
            <GridListItem>
              <Box background="lavender" width="100%" padding>
                {`This item is much longer in width. This item is much longer in
                width.`}
              </Box>
            </GridListItem>
            <GridListItem>
              <Box background="lavender" width="100%" padding>
                Item 7
              </Box>
            </GridListItem>
            <GridListItem>
              <Box background="lavender" width="100%" padding>
                Item 8
              </Box>
            </GridListItem>
          </GridList>
        </Box>
      </Screen>
    )
  }
}

export default StylesPage
