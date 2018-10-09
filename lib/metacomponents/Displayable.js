import styled from 'react-emotion'

const Displayable = Component =>
  styled(Component)`
    ${props => {
      if (props.display) {
        let property = ''
        for (let i = 0; i < props.display.length; i++) {
          const char = props.display.charAt(i)
          if (char === char.toUpperCase()) {
            property += '-'
          }
          property += property.toLowerCase()
        }

        return `display: ${property}`
      }

      return ''
    }};
  `

export default Displayable
