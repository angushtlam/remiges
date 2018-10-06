import styled from 'react-emotion'
import spacing from '~/styles/spacing'

const Paddable = Component => {
  return styled(Component)`
    ${props => {
      console.log(props.padding)
      console.log(Array.isArray(props.padding))
      if (Array.isArray(props.padding)) {
        const top = (props.padding && props.padding[0]) || spacing.normal
        const right = props.padding[1] || spacing.normal
        const bottom = props.padding[2] || top
        const left = props.padding[3] || right

        return `
          padding-top: ${top};
          padding-right: ${right};
          padding-bottom: ${bottom};
          padding-left: ${left};
        `
      } else {
        return `padding: ${props.padding || spacing.normal};`
      }
    }};
  `
}

export default Paddable
