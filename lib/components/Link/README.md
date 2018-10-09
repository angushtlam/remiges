# Link 
Link is a wrapper over the HTML `a` element. 

## Component
> Link is a Displayable and Sizable component.

| Prop Name  | Required?  | Type            | Description                          | Default |
| ---------- | ---------- | --------------- | ------------------------------------ | ------- |
| children   | No         | React.Node      | Children to render.                  | `null`  |
| rel        | No         | String          | The HTML rel arguments.              | `null`  |
| target     | No         | String          | The HTML target arguments.           | `null`  |
| to         | No         | String          | Location to go to.                   | `null`  |
| using      | No         | React.Component | External Link component to style.    | `null`  |

## Example
```javascript
<Link to="/">Link</Link>
```
