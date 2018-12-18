# Code
Code is a component that renders fixed width text. This component should replace
all cases of `pre` elements.

## Component

| Prop Name          | Required?  | Type       | Description                        | Default |
| ------------------ | ---------- | ---------- | ---------------------------------- | ------- |
| children           | No         | React.Node | Children to render in the center   | `null`  |

## Example
```javascript
<Code>
  {`You may want to escape code like this`}
</Code>
```
