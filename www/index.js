import React from 'react'
import {render} from 'react-dom'
import {
  Box,
  Button,
  Column,
  Columns,
  Header,
  HTMLViewer,
  Link,
  Navbar,
  NavbarBrand,
  NavbarNavigation,
  Navigation,
  NavigationItem,
  Paragraph,
  Subheader,
  createGlobalStyles,
} from 'remiges'
import BoxDocumentation from '~/components/Box/README.md'
import ButtonDocumentation from '~/components/Button/README.md'
import ColumnsDocumentation from '~/components/Columns/README.md'
import GridListDocumentation from '~/components/GridList/README.md'
import HeaderDocumentation from '~/components/Header/README.md'
import HeroDocumentation from '~/components/Hero/README.md'
import HTMLViewerDocumentation from '~/components/HTMLViewer/README.md'
import ImageDocumentation from '~/components/Image/README.md'
import LinkDocumentation from '~/components/Link/README.md'
import NavbarDocumentation from '~/components/Navbar/README.md'
import NavigationDocumentation from '~/components/Navigation/README.md'
import ParagraphDocumentation from '~/components/Paragraph/README.md'
import ProgressListDocumentation from '~/components/ProgressList/README.md'
import SubheaderDocumentation from '~/components/Subheader/README.md'
import SwitchDocumentation from '~/components/Switch/README.md'

const globals = createGlobalStyles()

const App = () => (
  <Box>
    {globals}
    <Navbar fixed>
      <NavbarBrand>
        <Link to="#">
          <strong>Remiges</strong>
        </Link>
      </NavbarBrand>
      <NavbarNavigation>
        <Link to="https://github.com/angushtlam/remiges" target="_blank">
          Fork me on GitHub!
        </Link>
      </NavbarNavigation>
    </Navbar>
    <Box readingContainer padding={['2.8em', 0, 0, 0]}>
      <Columns padding>
        <Column width="15em" fixed>
          <Navigation label="Remiges">
            <NavigationItem to="#introduction">Introduction</NavigationItem>
          </Navigation>
          <Navigation label="Components">
            <NavigationItem to="#components__box">Box</NavigationItem>
            <NavigationItem to="#components__button">Button</NavigationItem>
            <NavigationItem to="#components__columns">Columns</NavigationItem>
            <NavigationItem to="#components__gridlist">GridList</NavigationItem>
            <NavigationItem to="#components__header">Header</NavigationItem>
            <NavigationItem to="#components__hero">Hero</NavigationItem>
            <NavigationItem to="#components__htmlviewer">
              HTMLViewer
            </NavigationItem>
            <NavigationItem to="#components__image">Image</NavigationItem>
            <NavigationItem to="#components__link">Link</NavigationItem>
            <NavigationItem to="#components__navbar">Navbar</NavigationItem>
            <NavigationItem to="#components__navigation">
              Navigation
            </NavigationItem>
            <NavigationItem to="#components__paragraph">
              Paragraph
            </NavigationItem>
            <NavigationItem to="#components__progresslist">
              ProgressList
            </NavigationItem>
            <NavigationItem to="#components__subheader">
              Subheader
            </NavigationItem>
            <NavigationItem to="#components__switch">Switch</NavigationItem>
          </Navigation>
        </Column>
        <Column>
          <Header id="introduction">Remiges</Header>
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
            project. So, for my sake, I'm going to create one library to hold
            all of these changes and make it easier to reuse my own stylings
            across my projects.
          </Paragraph>
          <Header>Components</Header>
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: BoxDocumentation}}
            id="components__box"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: ButtonDocumentation}}
            id="components__button"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: ColumnsDocumentation}}
            id="components__columns"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: GridListDocumentation}}
            id="components__gridlist"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: HeaderDocumentation}}
            id="components__header"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: HeroDocumentation}}
            id="components__hero"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: HTMLViewerDocumentation}}
            id="components__htmlviewer"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: ImageDocumentation}}
            id="components__image"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: LinkDocumentation}}
            id="components__link"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: NavbarDocumentation}}
            id="components__navbar"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: NavigationDocumentation}}
            id="components__navigation"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: ParagraphDocumentation}}
            id="components__paragraph"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: ProgressListDocumentation}}
            id="components__progresslist"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: SubheaderDocumentation}}
            id="components__subheader"
            padding="0"
          />
          <HTMLViewer
            dangerouslySetInnerHTML={{__html: SwitchDocumentation}}
            id="components__switch"
            padding="0"
          />
        </Column>
      </Columns>
    </Box>
  </Box>
)

render(<App />, document.getElementById('app'))
