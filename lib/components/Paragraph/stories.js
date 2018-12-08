import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import {doc} from 'storybook-readme'
import Documentation from './README.md'
import Paragraph from '../Paragraph'

storiesOf('Paragraph', module)
  .addDecorator(withKnobs)
  .add('documentation', doc(Documentation))
  .add('with text', () => (
    <Paragraph>
      {text(
        'Text',
        `Lorem ipsum dolor amet knausgaard four dollar toast poke, kogi fingerstache leggings stumptown retro bushwick raw denim green juice pork belly shabby chic lomo neutra. Echo park franzen prism brooklyn kombucha succulents. Chia single-origin coffee sriracha, lumbersexual small batch kinfolk poke. Mumblecore iPhone seitan lomo viral pork belly beard meditation vape. Unicorn bicycle rights raw denim hot chicken tacos single-origin coffee. Readymade yr photo booth, selvage everyday carry salvia whatever bespoke YOLO cloud bread gentrify. Kickstarter beard mumblecore live-edge shabby chic banh mi. Four loko pickled palo santo, green juice crucifix beard microdosing butcher gastropub art party semiotics mustache cray. Small batch bicycle rights crucifix, sriracha hammock normcore austin 3 wolf moon. 90's actually pitchfork lomo microdosing, everyday carry taxidermy vice hella banh mi street art pickled leggings crucifix. Tattooed vegan chambray +1. Flannel hexagon air plant polaroid ugh XOXO selfies shoreditch offal flexitarian poutine freegan pork belly. Selfies literally retro, iceland leggings celiac kogi dreamcatcher 90's. Tumblr health goth man braid, hammock occupy gluten-free kinfolk craft beer affogato +1 dreamcatcher brunch single-origin coffee. Cliche af migas selfies taiyaki.`
      )}
    </Paragraph>
  ))
  .add('with multiple paragraphs', () => (
    <div>
      <Paragraph>
        Lorem ipsum dolor amet knausgaard four dollar toast poke, kogi
        fingerstache leggings stumptown retro bushwick raw denim green juice
        pork belly shabby chic lomo neutra. Echo park franzen prism brooklyn
        kombucha succulents. Chia single-origin coffee sriracha, lumbersexual
        small batch kinfolk poke. Mumblecore iPhone seitan lomo viral pork belly
        beard meditation vape. Unicorn bicycle rights raw denim hot chicken
        tacos single-origin coffee. Readymade yr photo booth, selvage everyday
        carry salvia whatever bespoke YOLO cloud bread gentrify. Kickstarter
        beard mumblecore live-edge shabby chic banh mi. Four loko pickled palo
        santo, green juice crucifix beard microdosing butcher gastropub art
        party semiotics mustache cray. Small batch bicycle rights crucifix,
        sriracha hammock normcore austin 3 wolf moon. 90's actually pitchfork
        lomo microdosing, everyday carry taxidermy vice hella banh mi street art
        pickled leggings crucifix. Tattooed vegan chambray +1. Flannel hexagon
        air plant polaroid ugh XOXO selfies shoreditch offal flexitarian poutine
        freegan pork belly. Selfies literally retro, iceland leggings celiac
        kogi dreamcatcher 90's. Tumblr health goth man braid, hammock occupy
        gluten-free kinfolk craft beer affogato +1 dreamcatcher brunch
        single-origin coffee. Cliche af migas selfies taiyaki.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor amet knausgaard four dollar toast poke, kogi
        fingerstache leggings stumptown retro bushwick raw denim green juice
        pork belly shabby chic lomo neutra. Echo park franzen prism brooklyn
        kombucha succulents. Chia single-origin coffee sriracha, lumbersexual
        small batch kinfolk poke. Mumblecore iPhone seitan lomo viral pork belly
        beard meditation vape. Unicorn bicycle rights raw denim hot chicken
        tacos single-origin coffee. Readymade yr photo booth, selvage everyday
        carry salvia whatever bespoke YOLO cloud bread gentrify. Kickstarter
        beard mumblecore live-edge shabby chic banh mi. Four loko pickled palo
        santo, green juice crucifix beard microdosing butcher gastropub art
        party semiotics mustache cray. Small batch bicycle rights crucifix,
        sriracha hammock normcore austin 3 wolf moon. 90's actually pitchfork
        lomo microdosing, everyday carry taxidermy vice hella banh mi street art
        pickled leggings crucifix. Tattooed vegan chambray +1. Flannel hexagon
        air plant polaroid ugh XOXO selfies shoreditch offal flexitarian poutine
        freegan pork belly. Selfies literally retro, iceland leggings celiac
        kogi dreamcatcher 90's. Tumblr health goth man braid, hammock occupy
        gluten-free kinfolk craft beer affogato +1 dreamcatcher brunch
        single-origin coffee. Cliche af migas selfies taiyaki.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor amet knausgaard four dollar toast poke, kogi
        fingerstache leggings stumptown retro bushwick raw denim green juice
        pork belly shabby chic lomo neutra. Echo park franzen prism brooklyn
        kombucha succulents. Chia single-origin coffee sriracha, lumbersexual
        small batch kinfolk poke. Mumblecore iPhone seitan lomo viral pork belly
        beard meditation vape. Unicorn bicycle rights raw denim hot chicken
        tacos single-origin coffee. Readymade yr photo booth, selvage everyday
        carry salvia whatever bespoke YOLO cloud bread gentrify. Kickstarter
        beard mumblecore live-edge shabby chic banh mi. Four loko pickled palo
        santo, green juice crucifix beard microdosing butcher gastropub art
        party semiotics mustache cray. Small batch bicycle rights crucifix,
        sriracha hammock normcore austin 3 wolf moon. 90's actually pitchfork
        lomo microdosing, everyday carry taxidermy vice hella banh mi street art
        pickled leggings crucifix. Tattooed vegan chambray +1. Flannel hexagon
        air plant polaroid ugh XOXO selfies shoreditch offal flexitarian poutine
        freegan pork belly. Selfies literally retro, iceland leggings celiac
        kogi dreamcatcher 90's. Tumblr health goth man braid, hammock occupy
        gluten-free kinfolk craft beer affogato +1 dreamcatcher brunch
        single-origin coffee. Cliche af migas selfies taiyaki.
      </Paragraph>
    </div>
  ))
