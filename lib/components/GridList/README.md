# GridList
GridList is a component that layouts out a list of items in a grid.

## GridList
GridLists are implemented using two components.
* GridList - parent component that contains GridListItem components
* GridListItem - child of a GridList component

### GridList
| Prop Name | Required?  | Type       | Description                         | Default |
| --------- | ---------- | ---------- | ----------------------------------- | ------- |
| children  | No         | React.Node | GridListItem components to render   | `null`  |

### GridListItem

| Prop Name | Required?  | Type       | Description                                                  | Default |
| --------- | ---------- | ---------- | ------------------------------------------------------------ | ------- |
| children  | No         | React.Node | Children to render in GridList                               | `null`  |

## Default Behaviors
GridList will lay out GridListItems in columns of:
- Four at 1200px or greater
- Three between 900px and 1199px
- Two between 600px and 899px
- One at 599px or fewer

## Example
Basic GridList
```javascript
<GridList>
  <GridListItem>I am a column</GridListItem>
  <GridListItem>I am a column</GridListItem>
  <GridListItem>I am a column</GridListItem>
</GridList>
```
