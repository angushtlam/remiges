import styled from 'react-emotion'

const Paddable = Component => styled(Component)`
  ${props => {
    if (!props.padding) return
    if (Array.isArray(props.padding)) {
      const top = (props.padding && props.padding[0]) || props.theme.space
      const right = props.padding[1] || props.theme.space
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
        props.padding === true ? props.theme.space : props.padding
      };`
    }
  }};
`

export default Paddable
