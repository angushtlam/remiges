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
| label       | No         | String     | Optional informational label                               | `null` |

### NavigationItem
| Prop Name | Required?  | Type       | Description                                                  | Default |
| --------- | ---------- | ---------- | ------------------------------------------------------------ | ------- |
| children  | No         | React.Node | Children to render in NavigationItem                         | `null`  |
| to        | No         | Boolean    | Link of page to navigate to                                  | `null`  |

## Default Behaviors
The label is an optional prop that will not render anything if left empty.

## Example
Basic Navigation
```javascript
<Navigation label="Some Links">
  <NavigationItem to="#">Link</NavigationItem>
  <NavigationItem to="#">Link</NavigationItem>
  <NavigationItem to="#">Link</NavigationItem>
  <NavigationItem>Hello</NavigationItem>
  <NavigationItem>Hello</NavigationItem>
  <NavigationItem>Hello</NavigationItem>
</Navigation>
```
