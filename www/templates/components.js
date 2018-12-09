import React from 'react'
import styled from 'react-emotion'
import {graphql} from 'gatsby'

import {Box} from 'remiges'
import Screen from '../components/Screen'

const Iframe = styled.iframe`
  border: 0;
  height: calc(100vh - 3.05em);
  width: 100%;
`

const Components = ({data}) => {
  const component = data.markdownRemark
  return (
    <Screen noFooter>
      <Box padding={['2.8em', '0', '0', '0']}>
        <Iframe
          src={`https://angushtlam.github.io/remiges/storybook/?selectedKind=${
            component.fields.relativeDirectory
          }&selectedStory=documentation&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs`}
        />
      </Box>
    </Screen>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        relativeDirectory
      }
    }
  }
`

export default Components
