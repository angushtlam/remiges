import React from 'react'
import {css} from 'react-emotion'
import Backgroundable from '~/metacomponents/Backgroundable'
import Displayable from '~/metacomponents/Displayable'
import Paddable from '~/metacomponents/Paddable'
import Sizable from '~/metacomponents/Sizable'
import breakpoints from '~/styles/breakpoints'
import colors from '~/styles/colors'
import typography from '~/styles/typography'
import weights from '~/styles/weights'

const styling = css`
  // Inspired by https://github.com/markdowncss/modest/blob/master/css/modest.css
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

  font-weight: ${weights.normal};
  font-size: 1em;
  line-height: 1.3em;

  @media screen and (min-width: ${breakpoints.mobile}) {
    line-height: 1.3em;
  }

  @media screen and (min-width: ${breakpoints.tabletPortrait}) {
    line-height: 1.35em;
  }

  @media screen and (min-width: ${breakpoints.tabletLandscape}) {
    line-height: 1.4em;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    line-height: 1.45em;
  }

  @media screen and (min-width: ${breakpoints.bigDesktop}) {
    line-height: 1.5em;
  }

  pre,
  code {
    font-family: ${typography.fixedWidth};
  }

  pre {
    padding: 0.5rem;
    line-height: 1.25;
    overflow-x: auto;
  }

  a,
  a:visited {
    color: ${colors.interactable};
    display: inline-block;
    font-weight: inherit;
    font-size: inherit;
  }

  a:active,
  a:hover,
  a:focus {
    transition: color 0.2s ease;
    color: ${colors.interacted};
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
    font-weight: 700;
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

const HTMLViewer = ({
  className,
  children,
  dangerouslySetInnerHTML,
  id,
  useHTMLAsIs,
}) => {
  if (dangerouslySetInnerHTML) {
    const html = !!useHTMLAsIs
      ? dangerouslySetInnerHTML.__html
      : dangerouslySetInnerHTML.__html
          .replace(tableRegex, '<div class="inject__table_wrapper"><table>')
          .replace(endTableRegex, '</table></div>')

    return (
      <div
        className={`${className} ${styling}`}
        dangerouslySetInnerHTML={{__html: html}}
        id={id}
      />
    )
  }

  return (
    <div className={`${className} ${styling}`} id={id}>
      {children}
    </div>
  )
}
export default Backgroundable(Displayable(Paddable(Sizable(HTMLViewer))))
