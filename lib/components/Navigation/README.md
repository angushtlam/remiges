# Navigation
Navigation is used to hold a collection of items with the intent for navigation.

## Components
Navigations are implemented using two components.
* Navigation - parent component that contains NavigationItem components
* NavigationItem - child of a Navigation component

### Navigation
| Prop Name   | Required?  | Type       | Description                                                | Default |
| ----------- | ---------- | ---------- | ---------------------------------------------------------- | ------- |
| children    | No         | React.Node | NavigationItem components to render                        | `null`  |
| horizontal  | No         | Boolean    | Determines if component is in a horizontal layout.         | `false` |

### NavigationItem
| Prop Name | Required?  | Type       | Description                                                  | Default |
| --------- | ---------- | ---------- | ------------------------------------------------------------ | ------- |
| children  | No         | React.Node | Children to render in NavigationItem                         | `null`  |
| divider   | No         | Boolean    | Determines if the NavigationItem is a divider                | `null`  |

## Default Behaviors
Navigation defaults to a vertical layout.

Items in a horizontal layout will be given a left and right margin of 0.5em. It
is currently not configurable.

## Example
Basic Navigation
```javascript
<Navigation>
  <NavigationItem>
    <Link to="#">Link</Link>
  </NavigationItem>
  <NavigationItem>
    <Link to="#">Link</Link>
  </NavigationItem>
  <NavigationItem>
    <Link to="#">Link</Link>
  </NavigationItem>
  <NavigationItem divider />
  <NavigationItem>Hello</NavigationItem>
  <NavigationItem>Hello</NavigationItem>
  <NavigationItem>Hello</NavigationItem>
</Navigation>
```

Horizontal Navigation
```javascript
<Navigation horizontal>
  <NavigationItem>Hello</NavigationItem>
  <NavigationItem>Hello</NavigationItem>
  <NavigationItem>Hello</NavigationItem>
</Navigation>
```
