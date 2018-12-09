# Theme
Theme is a wrapper over `react-emotion`'s ThemeProvider component. It supplies custom defaults as the default theme. Any values provided in the `theme` prop will override the default.

Additionally, new custom project-specific values can be set in `theme`.

## Component
| Prop Name  | Required?  | Type       | Description                         | Default |
| ---------- | ---------- | ---------- | ----------------------------------- | ------- |
| theme      | No         | Object     | Theme values.                       | `null`  |

## Example
```javascript
<Theme
  theme={{
    spacing: {
      normal: text('Padding', '2em'),
    },
  }}
>
  <Box background="pink" padding>
    Custom Padding
  </Box>
</Theme>
```
