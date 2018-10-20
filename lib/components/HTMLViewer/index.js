import React from 'react'
import {css} from 'react-emotion'
import Backgroundable from '~/metacomponents/Backgroundable'
import Displayable from '~/metacomponents/Displayable'
import Paddable from '~/metacomponents/Paddable'
import Sizable from '~/metacomponents/Sizable'
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

  line-height: 1.6;

  pre,
  code {
    font-family: ${typography.fixedWidth};
  }

  pre {
    padding: 0.5rem;
    line-height: 1.25;
    overflow-x: scroll;
  }

  a,
  a:visited {
    color: ${colors.interactable};
    display: inline-block;
    font-weight: inherit;
    font-size: inherit;
  }

  a:active {
    color: #2980b9;
  }

  a:hover,
  a:focus {
    transition: transform 0.4s ease;
    transform: translateY(-0.1em);
  }

  p {
    font-weight: ${weights.normal};
    margin-bottom: 1.5em;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1 {
    margin-top: 0;
    font-size: 3.998rem;
  }

  h2 {
    font-size: 2.827rem;
  }

  h3 {
    font-size: 1.999rem;
  }

  h4 {
    font-size: 1.414rem;
  }

  h5 {
    font-size: 1.121rem;
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

  html {
    font-size: 18px;
    max-width: 100%;
  }

  body {
    color: #444;
    margin: 0 auto;
    max-width: 48rem;
    line-height: 1.45;
    padding: 0.25rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  h1,
  h2,
  h3 {
    border-bottom: 2px solid #fafafa;
    margin-bottom: 1.15rem;
    padding-bottom: 0.5rem;
  }

  blockquote {
    border-left: 8px solid #fafafa;
    padding: 1em;
  }

  pre,
  code {
    background-color: #fafafa;
  }
`

const HTMLViewer = ({className, children, dangerouslySetInnerHTML, id}) => (
  <div
    className={`${className} ${styling}`}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    id={id}
  >
    {children}
  </div>
)

export default Backgroundable(Displayable(Paddable(Sizable(HTMLViewer))))
