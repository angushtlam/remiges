# Columns
Columns are used to divide content horizontally.

## Components
Columns are implemented using two components.
* Columns - parent component that contains Column components
* Column - child of a Columns component

### Columns
| Prop Name | Required?  | Type       | Description                         | Default |
| --------- | ---------- | ---------- | ----------------------------------- | ------- |
| children  | No         | React.Node | Column components to render         | `null`  |
| debug     | No         | Boolean    | Enable debug styling                | `false` |

### Column
> Column is a Paddable component.

| Prop Name | Required?  | Type       | Description                                                  | Default |
| --------- | ---------- | ---------- | ------------------------------------------------------------ | ------- |
| children  | No         | React.Node | Children to render in Column                                 | `null`  |
| fixed     | No         | Boolean    | Determines if the column is fixed, akin to `position: fixed` | `false` |
| width     | No         | String     | The width of the column                                      | `null`  |

## Default Behaviors
Column widths and fixed columns do not apply in smaller breakpoints.

The width of the column is divided evenly with the other sibling columns.

## Example
Basic Columns
```javascript
<Columns>
  <Column>I am a column</Column>
  <Column>I am a column</Column>
  <Column>I am a column</Column>
</Columns>
```

Fixed Width Columns
```javascript
<Columns>
  <Column fixed>I am a fixed column</Column>
  <Column>I am a column</Column>
</Columns>
```

Padded Columns
```javascript
<Columns>
  <Column padding="1.2rem">I'm padded!</Column>
</Columns>
```

Nested Columns
```javascript
<Columns>
  <Column>
    <Columns>
      <Column>I'm nested!</Column>
      <Column>I'm nested!</Column>
    </Columns>
  </Column>
  <Columns>
    <Column>I'm nested!</Column>
  </Columns>
</Columns>
```