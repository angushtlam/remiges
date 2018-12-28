# Image
Image is a wrapper over the HTML `img` element.

## Component
> Image is a Backgroundable, Displayable, Flexboxable, and Sizable component.

| Prop Name  | Required?  | Type       | Description                          | Default |
| ---------- | ---------- | ---------- | ------------------------------------ | ------- |
| fillParent | No         | Boolean    | Fill parent height and adjust width. | `false` |
| horizontallyCenter | No         | Boolean    | Center children horizontally | `false` |
| src        | No         | String     | The image to display.                | `null`  |

## Example
```javascript
// import Image from './some_image.jpg'
<Image src={Image} />
```
