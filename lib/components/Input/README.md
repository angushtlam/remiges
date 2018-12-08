# Input
Input is an input component for user input. It is a wrapper over the HTML element `input`.

## Component
> Input is a Displayable and Paddable component.

| Prop Name  | Required?  | Type       | Description                         | Default |
| ---------- | ---------- | ---------- | ----------------------------------- | ------- |
| label      | No         | String     | A label above the input.            | `null`  |
| shy        | No         | Boolean    | Hides the label on input.           | `false` |

## Example
```javascript
const state = "Some state variable"
<Input placeholder="Placeholder" value={state} />
```
