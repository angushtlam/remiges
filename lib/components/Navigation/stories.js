import React from 'react'
import {storiesOf} from '@storybook/react'
import {doc} from 'storybook-readme'
import {Column, Columns} from '../Columns'
import {Navigation, NavigationItem} from '../Navigation'
import Paragraph from '../Paragraph'
import Documentation from './README.md'

storiesOf('Navigation', module)
  .add('documentation', doc(Documentation))
  .add('with basic navigation', () => (
    <Navigation label="Some Links">
      <NavigationItem to="#">Link</NavigationItem>
      <NavigationItem to="#">Link</NavigationItem>
      <NavigationItem to="#">Link</NavigationItem>
      <NavigationItem>Hello</NavigationItem>
      <NavigationItem>Hello</NavigationItem>
      <NavigationItem>Hello</NavigationItem>
    </Navigation>
  ))
  .add('with fixed navigation', () => (
    <Columns>
      <Column fixed width="15em">
        <Navigation label="Some Links" padding>
          <NavigationItem to="#">Link</NavigationItem>
          <NavigationItem to="#">Link</NavigationItem>
          <NavigationItem to="#">Link</NavigationItem>
          <NavigationItem>Hello</NavigationItem>
          <NavigationItem>Hello</NavigationItem>
          <NavigationItem>Hello</NavigationItem>
        </Navigation>
      </Column>
      <Column>
        <Paragraph>
          Lorem ipsum dolor amet fam brooklyn banh mi keffiyeh cloud bread
          austin wolf vinyl lyft microdosing. Dreamcatcher succulents +1 fanny
          pack copper mug green juice gochujang VHS, adaptogen lyft four dollar
          toast vice. Forage lyft pug YOLO farm-to-table bespoke succulents
          biodiesel hexagon semiotics poutine. Farm-to-table chartreuse kombucha
          vape, iPhone schlitz church-key bespoke biodiesel ugh bushwick
          whatever.
        </Paragraph>
        <Paragraph>
          Fixie chillwave cred, prism edison bulb enamel pin plaid pitchfork meh
          typewriter hammock tofu tote bag occupy. Craft beer chia crucifix
          vaporware DIY letterpress raclette franzen distillery dreamcatcher
          pickled fashion axe. Fam XOXO tilde wolf knausgaard, leggings synth
          kombucha letterpress air plant. Kitsch fingerstache letterpress,
          tumeric farm-to-table everyday carry pitchfork fixie kogi. Bitters
          skateboard fixie messenger bag four dollar toast, hella knausgaard
          banjo distillery shoreditch. Authentic copper mug viral stumptown cred
          jianbing. Occupy poutine poke, adaptogen post-ironic drinking vinegar
          single-origin coffee tofu kitsch before they sold out pok pok craft
          beer.
        </Paragraph>
        <Paragraph>
          Selfies distillery try-hard, tofu kinfolk affogato cornhole actually
          mustache freegan umami mlkshk lomo schlitz quinoa. Cred neutra subway
          tile, air plant man braid fam semiotics trust fund chartreuse before
          they sold out echo park you probably haven't heard of them knausgaard.
          IPhone tumeric mumblecore neutra, cardigan yr quinoa gochujang mlkshk
          marfa. Portland schlitz kitsch chia craft beer readymade.
        </Paragraph>
        <Paragraph>
          Occupy 90's raw denim XOXO tbh activated charcoal. Vape unicorn
          pinterest tousled stumptown bicycle rights biodiesel scenester bespoke
          taxidermy palo santo ramps edison bulb. Health goth asymmetrical XOXO,
          vaporware celiac kinfolk butcher keffiyeh umami lo-fi plaid shaman
          chia. Dreamcatcher vice kitsch synth, kogi vaporware bicycle rights
          tumeric succulents la croix enamel pin paleo pork belly hashtag. Beard
          tacos pitchfork pok pok 90's migas asymmetrical hoodie. Everyday carry
          quinoa put a bird on it, raclette XOXO skateboard farm-to-table hot
          chicken YOLO hashtag keytar.
        </Paragraph>
      </Column>
    </Columns>
  ))
