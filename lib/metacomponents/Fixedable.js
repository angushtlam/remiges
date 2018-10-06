import styled from 'react-emotion'

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
