# Box
Box is the basic building block of block elements. This component should replace
all cases of `div` elements.

## Component
> Box is a Backgroundable, Displayable, Paddable, and Sizable component.

| Prop Name          | Required?  | Type       | Description                        | Default |
| ------------------ | ---------- | ---------- | ---------------------------------- | ------- |
| children           | No         | React.Node | Children to render in the center   | `null`  |
| direction          | No         | String     | Flex direction settings            | `null`  |
| horizontallyCenter | No         | Boolean    | Center children horizontally       | `false` |
| limitedWidth       | No         | Boolean    | Contain component width to 55em    | `false` |
| verticallyCenter   | No         | Boolean    | Center children vertically         | `false` |

## Default Behaviors
All Box components are styled with `display: flex`.

The `direction` prop takes the strings `horizontal` or `vertical`.

## Example
```javascript
<Box background="pink" height="20em">
  <Box horizontallyCenter verticallyCenter>
    This is a box.
  </Box>
</Box>
```
