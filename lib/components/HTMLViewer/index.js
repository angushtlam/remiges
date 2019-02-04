import {css} from 'emotion'
import React from 'react'
import Box from 'lib/components/Box'
import Backgroundable from 'lib/metacomponents/Backgroundable'
import Displayable from 'lib/metacomponents/Displayable'
import Paddable from 'lib/metacomponents/Paddable'
import Sizable from 'lib/metacomponents/Sizable'
import {constructWithTheme} from 'lib/utils/components'

// Inspired by https://github.com/markdowncss/modest/blob/master/css/modest.css

const styling = props => css`
  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
    }

    abbr[title]:after {
      content: ' (' attr(title) ')';
    }

    a[href^='#']:after,
    a[href^='javascript:']:after {
      content: '';
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  font-weight: ${props.theme.fontWeightNormal};
  line-height: 1.3em;

  pre,
  code {
    font-family: ${props.theme.fontB};
  }

  pre {
    padding: 0.5rem;
    line-height: 1.25;
    overflow-x: auto;
  }

  a,
  a:visited {
    color: ${props.theme.color50};
    display: inline-block;
    font-weight: inherit;
    font-size: inherit;
  }

  a:active,
  a:hover,
  a:focus {
    transition: color 0.2s ease;
    color: ${props.theme.color60};
  }

  p {
    margin-bottom: 1.5em;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1.2;
  }

  h1 {
    font-size: 4em;
    margin: 0;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.75em;
  }

  h4 {
    font-size: 1.4em;
  }

  h5 {
    font-size: 1.2em;
  }

  h6 {
    font-size: 0.88rem;
  }

  small {
    font-size: 0.707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${props.theme.fontWeightStrong};
  }

  blockquote {
    border-left: 8px solid #fafafa;
    margin: 1em;
    padding: 1em;
  }

  pre,
  code {
    background-color: #fafafa;
  }

  .inject__table_wrapper {
    overflow-x: auto;
  }
`

const tableRegex = new RegExp('<table>', 'g')
const endTableRegex = new RegExp('</table>', 'g')

const HTMLViewer = props => {
  const {
    className,
    children,
    dangerouslySetInnerHTML,
    id,
    useHTMLAsIs,
    ...otherProps
  } = props

  if (dangerouslySetInnerHTML) {
    const html = useHTMLAsIs
      ? dangerouslySetInnerHTML.__html
      : dangerouslySetInnerHTML.__html
          .replace(tableRegex, '<div class="inject__table_wrapper"><table>')
          .replace(endTableRegex, '</table></div>')

    return (
      <Box
        className={className}
        css={styling(props)}
        dangerouslySetInnerHTML={{__html: html}}
        id={id}
        {...otherProps}
      />
    )
  }

  return (
    <Box className={className} css={styling(props)} id={id} {...otherProps}>
      {children}
    </Box>
  )
}
export default Backgroundable(
  Displayable(Paddable(Sizable(constructWithTheme(HTMLViewer))))
)
