import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Box from '../Box'
import Image from '../Image'
import {Link} from '../Link'
import {Navbar, NavbarBrand, NavbarNavigation} from '../Navbar'
import Paragraph from '../Paragraph'
import Documentation from './index.md'
import OwlImage from 'lib/assets/owl.jpg'
import {defaultTheme as theme} from 'lib/utils/theming'

storiesOf('Navbar', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with basic navbar', () => (
    <Navbar>
      <NavbarBrand>
        <Link to="#test">Branding</Link>
      </NavbarBrand>
      <NavbarNavigation>
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
      </NavbarNavigation>
    </Navbar>
  ))
  .add('with image branding', () => (
    <Navbar>
      <NavbarBrand padding="0">
        <Link height="100%" to="#test">
          <Image fillParent src={OwlImage} />
        </Link>
      </NavbarBrand>
      <NavbarNavigation>
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
      </NavbarNavigation>
    </Navbar>
  ))
  .add('with multiple navigations', () => (
    <Navbar>
      <NavbarNavigation>
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
      </NavbarNavigation>
      <NavbarBrand>Branding</NavbarBrand>
      <NavbarNavigation>
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
      </NavbarNavigation>
    </Navbar>
  ))
  .add('with fixed navbar', () => (
    <Box>
      <Navbar background="#eee" fixed>
        <NavbarBrand>Branding</NavbarBrand>
        <NavbarNavigation>
          <Link>Link</Link>
          <Link>Link</Link>
          <Link>Link</Link>
        </NavbarNavigation>
      </Navbar>
      <Box
        padding={[theme.spaceThick, theme.space, theme.space, theme.space]}
        direction="vertical"
      >
        <Paragraph>
          {`Lorem ipsum dolor amet fam brooklyn banh mi keffiyeh cloud bread
          austin wolf vinyl lyft microdosing. Dreamcatcher succulents +1 fanny
          pack copper mug green juice gochujang VHS, adaptogen lyft four dollar
          toast vice. Forage lyft pug YOLO farm-to-table bespoke succulents
          biodiesel hexagon semiotics poutine. Farm-to-table chartreuse kombucha
          vape, iPhone schlitz church-key bespoke biodiesel ugh bushwick
          whatever.`}
        </Paragraph>
        <Paragraph>
          {`Fixie chillwave cred, prism edison bulb enamel pin plaid pitchfork meh
          typewriter hammock tofu tote bag occupy. Craft beer chia crucifix
          vaporware DIY letterpress raclette franzen distillery dreamcatcher
          pickled fashion axe. Fam XOXO tilde wolf knausgaard, leggings synth
          kombucha letterpress air plant. Kitsch fingerstache letterpress,
          tumeric farm-to-table everyday carry pitchfork fixie kogi. Bitters
          skateboard fixie messenger bag four dollar toast, hella knausgaard
          banjo distillery shoreditch. Authentic copper mug viral stumptown cred
          jianbing. Occupy poutine poke, adaptogen post-ironic drinking vinegar
          single-origin coffee tofu kitsch before they sold out pok pok craft
          beer.`}
        </Paragraph>
        <Paragraph>
          {`Selfies distillery try-hard, tofu kinfolk affogato cornhole actually
          mustache freegan umami mlkshk lomo schlitz quinoa. Cred neutra subway
          tile, air plant man braid fam semiotics trust fund chartreuse before
          they sold out echo park you probably haven't heard of them knausgaard.
          IPhone tumeric mumblecore neutra, cardigan yr quinoa gochujang mlkshk
          marfa. Portland schlitz kitsch chia craft beer readymade.`}
        </Paragraph>
        <Paragraph>
          {`Occupy 90's raw denim XOXO tbh activated charcoal. Vape unicorn
          pinterest tousled stumptown bicycle rights biodiesel scenester bespoke
          taxidermy palo santo ramps edison bulb. Health goth asymmetrical XOXO,
          vaporware celiac kinfolk butcher keffiyeh umami lo-fi plaid shaman
          chia. Dreamcatcher vice kitsch synth, kogi vaporware bicycle rights
          tumeric succulents la croix enamel pin paleo pork belly hashtag. Beard
          tacos pitchfork pok pok 90's migas asymmetrical hoodie. Everyday carry
          quinoa put a bird on it, raclette XOXO skateboard farm-to-table hot
          chicken YOLO hashtag keytar.`}
        </Paragraph>
      </Box>
    </Box>
  ))
