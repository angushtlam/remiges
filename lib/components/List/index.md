# List
List is a component that displays a list.

## List
Lists are implemented using two components.
* List - parent component that contains ListItem components
* ListItem - child of a List component

### List
| Prop Name | Required?  | Type       | Description                             | Default |
| --------- | ---------- | ---------- | --------------------------------------- | ------- |
| children  | No         | React.Node | ListItem components to render           | `null`  |
| connected | No         | Boolean    | Connect the bullet points               | `null`  |
| filled    | No         | Boolean    | Fill the bullet points                  | `null`  |

### ListItem

| Prop Name | Required?  | Type       | Description                                                  | Default |
| --------- | ---------- | ---------- | ------------------------------------------------------------ | ------- |
| children  | No         | React.Node | Children to render in List                                   | `null`  |

## Example
Basic List
```javascript
<List>
  <ListItem>Item 1</ListItem>
  <ListItem>
    This item is much longer in width. This item is much longer in width.
    This item is much longer in width. This item is much longer in width.
  </ListItem>
  <ListItem>Item 3</ListItem>
  <ListItem>Item 4</ListItem>
  <ListItem>Item 5</ListItem>
  <ListItem>
    This item is much longer in width. This item is much longer in width.
  </ListItem>
  <ListItem>Item 7</ListItem>
  <ListItem>Item 8</ListItem>
</List>
```
