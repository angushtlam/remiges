# Hero
Hero is a large banner visual that takes up the significant screen real estate
with minimal content. Children content is horizontall and vertically centered.

## Component
> Hero is a Backgroundable component.

| Prop Name  | Required?  | Type       | Description                         | Default |
| ---------- | ---------- | ---------- | ----------------------------------- | ------- |
| background | No         | String     | The background of the component.    | `null`  |
| children   | No         | React.Node | Children to render in the center.   | `null`  |
| debug      | No         | Boolean    | Enable debug styling                | `false` |
| height     | No         | String     | The height of the hero              | `100vh` |
| minHeight  | No         | String     | The minimum height of the hero      | `10em`  |

## Default Behaviors
For background, there is no CSS applied if the field is left empty.

## Example
```javascript
// import Image from './some_image.jpg'
<Hero background={`url(${Image}) repeat repeat`} minHeight="10em" height="30em">
  I am a hero.
</Hero>
```
