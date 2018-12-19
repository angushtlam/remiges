import styled from '@emotion/styled'

const Paddable = Component => styled(Component)`
  ${props => {
    if (!props.padding) return
    if (Array.isArray(props.padding)) {
      const top =
        (props.padding && props.padding[0]) || props.theme.spacingNormal
      const right = props.padding[1] || props.theme.spacingNormal
      const bottom = props.padding[2] || top
      const left = props.padding[3] || right

      return `
          padding-top: ${top};
          padding-right: ${right};
          padding-bottom: ${bottom};
          padding-left: ${left};
        `
    } else {
      return `padding: ${
        props.padding === '0' ? props.padding : props.theme.spacingNormal
      };`
    }
  }};
`

export default Paddable
