import styled from '@emotion/styled'

const Fixedable = Component =>
  styled(Component)`
    ${props =>
      props.fixed &&
      `
        position: fixed;
        width: 100%;
      `};
  `

export default Fixedable
