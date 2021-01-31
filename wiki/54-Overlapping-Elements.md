Another powerful feature of CSS Grid Layout is the ability to easily overlap elements.

When overlapping elements, it is generally easiest to use grid line names and the `grid-area` property.

```html
<div class="container">
  <div class="info">Info!</div> 
  <img src="#" />
  <div class="services">Services!</div>
</div>
```

```css
.container {
  display: grid;
  grid-template: repeat(8, 200px) / repeat(6, 100px);
  border: 2px solid #000000;
}

.info {
  padding: 1rem 0;
  grid-area: 1 / 1 / 9 / 4;
  -moz-box-shadow: inset 0 0 10px #ff0000;
  -webkit-box-shadow: inset 0 0 10px #ff0000;
  box-shadow: inset 0 0 10px#ff0000;
}

.services {
  padding: 1rem 0;
  grid-area: 1 / 4 / 9 / 7;
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px#000000;
}

img {
  grid-area: 2 / 3 / 5 / 5;
  -moz-box-shadow: inset 0 0 10px #ff0000;
  -webkit-box-shadow: inset 0 0 10px #ff0000;
  box-shadow: inset 0 0 10px#ff0000;
  z-index: 5;
}

```

`Output`

![inline-flex image](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/Overlapping-Elements.png)

In the example above, there is a grid container with eight rows and six columns. There are three grid items within the container — a `<div>` with the class `info`, a `<div>` with the class `services`, and an image.

The `info` section covers all eight rows and the first three columns. The `services` section covers all eight rows and the last three columns.

The image spans the 2nd, 3rd, and 4th rows and the 3rd and 4th columns.

The z-index property tells the browser to render the image element on top of the `services` and `info` sections so that it is visible.