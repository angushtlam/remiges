# Navbar
Navbar is a prominent horizontal navigation used to hold a collection of items for users to navigate.

## Components
Navbar are implemented using three components.
* Navbar - parent component that contains components relating to the Navbar
* NavbarBrand - child of a Navigation component, used to vertically center children components 
* NavbarNavigation - child of a Navigation component, holding Link children components

### Navbar
> Navbar is a Backgroundable and Positionable component.

| Prop Name   | Required?  | Type       | Description                                                | Default |
| ----------- | ---------- | ---------- | ---------------------------------------------------------- | ------- |
| children    | No         | React.Node | NavigationItem components to render                        | `null`  |

### NavbarBrand
> Navbar is a Backgroundable component.

| Prop Name | Required?  | Type       | Description                                                  | Default |
| --------- | ---------- | ---------- | ------------------------------------------------------------ | ------- |
| children  | No         | React.Node | Children components to render in NavbarBrand                 | `null`  |
| padding   | No         | String     | Padding for branding                                         | `null`  |

### NavbarNavigation
| Prop Name | Required?  | Type       | Description                                                  | Default |
| --------- | ---------- | ---------- | ------------------------------------------------------------ | ------- |
| children  | No         | React.Node | Link children components to render in NavbarNavigation       | `null`  |
| padding   | No         | String     | Padding for links                                            | `null`  |

## Example
```javascript
<Navbar>
  <NavbarBrand>Branding</NavbarBrand>
  <NavbarNavigation>
    <Link>Link</Link>
    <Link>Link</Link>
    <Link>Link</Link>
  </NavbarNavigation>
</Navbar>
```