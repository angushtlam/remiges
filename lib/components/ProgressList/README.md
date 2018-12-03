# ProgressList
ProgressList is a component that includes a visual on the left to display completed items. This is best used for tasks that need to be completed in order.

## ProgressList
ProgressLists are implemented using two components.
* ProgressList - parent component that contains ProgressListItem components
* ProgressListItem - child of a ProgressList component

### ProgressList
| Prop Name | Required?  | Type       | Description                         | Default |
| --------- | ---------- | ---------- | ----------------------------------- | ------- |
| children  | No         | React.Node | ProgressListItem components to render   | `null`  |
| completed | No         | Number     | Number of completed items to highlight  | `null`  |

### ProgressListItem

| Prop Name | Required?  | Type       | Description                                                  | Default |
| --------- | ---------- | ---------- | ------------------------------------------------------------ | ------- |
| children  | No         | React.Node | Children to render in ProgressList                           | `null`  |

## Example
Basic ProgressList
```javascript
<ProgressList progress={4}>
  <ProgressListItem>Item 1</ProgressListItem>
  <ProgressListItem>
    This item is much longer in width. This item is much longer in width.
    This item is much longer in width. This item is much longer in width.
  </ProgressListItem>
  <ProgressListItem>Item 3</ProgressListItem>
  <ProgressListItem>Item 4</ProgressListItem>
  <ProgressListItem>Item 5</ProgressListItem>
  <ProgressListItem>
    This item is much longer in width. This item is much longer in width.
  </ProgressListItem>
  <ProgressListItem>Item 7</ProgressListItem>
  <ProgressListItem>Item 8</ProgressListItem>
</ProgressList>
```
