# Box
Box is the basic building block of block elements. This component should replace
all cases of `div` elements.

## Component
> Box is a Backgroundable and Sizable component.

| Prop Name          | Required?  | Type       | Description                        | Default |
| ------------------ | ---------- | ---------- | ---------------------------------- | ------- |
| children           | No         | React.Node | Children to render in the center   | `null`  |
| horizontallyCenter | No         | Boolean    | Center children horizontally       | `false` |
| verticallyCenter   | No         | Boolean    | Center children vertically         | `false` |

## Default Behaviors
All Box components are styled with `display: flex`.

## Example
```javascript
<Box background="pink" height="20em">
  <Box horizontallyCenter verticallyCenter>
    This is a box.
  </Box>
</Box>
```
