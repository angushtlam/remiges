# Button 
Button is a wrapper over the HTML `button` element. 

If the component has a `to` and/or `using` prop, the component will be rendered with an `a` element.

## Component
> Button is a Displayable and Sizable component.

| Prop Name  | Required?  | Type            | Description                          | Default |
| ---------- | ---------- | --------------- | ------------------------------------ | ------- |
| children   | No         | React.Node      | Children to render.                  | `null`  |
| rel        | No         | String          | The HTML rel arguments.              | `null`  |
| target     | No         | String          | The HTML target arguments.           | `null`  |
| to         | No         | String          | Location to go to.                   | `null`  |
| using      | No         | React.Component | External Link component to style.    | `null`  |

## Example
```javascript
<Button to="/">Button</Button>
```
