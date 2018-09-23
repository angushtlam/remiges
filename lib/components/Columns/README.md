# Columns
Columns are used to divide content horizontally.

## Components
Columns are implemented using two components.

### Columns
Columns is a parent component that contains Column components.

### Column
> Column is a Paddable component.

Column is the child of a Columns component. By default, the width of the column
is divided evenly with the other sibling columns.

| Prop Name | Required?  | Type       | Description                         |
| --------- | ---------- | ---------- | ----------------------------------- |
| debug     | No         | Boolean    | Enable debug styling                |
| fixed     | No         | Boolean    | Determines if the position is fixed |
| width     | No         | String     | The width of the column             |

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