# Switch 
Switch is a visually-indicative toggle between two possible states, flipped or not flipped.

## Component

| Prop Name  | Required?  | Type            | Description                          | Default |
| ---------- | ---------- | --------------- | ------------------------------------ | ------- |
| children   | No         | React.Node      | Children to render.                  | `null`  |
| disabled   | No         | Boolean         | Toggles the disabled visual          | `false` |
| flipped    | No         | Boolean         | Toggles the switch visual            | `false` |

## Example
```javascript
<Switch disabled={false} flipped={true} />
```
