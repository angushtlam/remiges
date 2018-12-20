# Global
Global is a component that injects global styling into the page document. You
should only have one Global component in your application.

## Component

| Prop Name     | Required?  | Type                    | Description                               | Default |
| ------------- | ---------- | ----------------------- | ----------------------------------------- | ------- |
| children      | No         | React.Node              | Children to render in the center          | `null`  |
| styles        | No         | props => Emotion Styles | Function that returns additional stylings | `null`  |

## Example
```javascript
<React.Fragment>
  <Global styles={props => css``}/>
  /* Your application */
</React.Fragment>
```
