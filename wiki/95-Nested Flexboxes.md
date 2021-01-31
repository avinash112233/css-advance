So far, we’ve had multiple flex containers on the same page to explore flex item positioning. It is also possible to position flex containers inside of one another.

```html
<div class="container">
  <div class="left">
    <img class="small" src="#"/>
    <img class="small" src="#"/>
    <img class="small" src="#" />
  </div>
  <div class="right">
    <img class="large" src="#" />
  </div>
</div>
```

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
}

.left {
  display: inline-flex;
  flex: 2 1 200px;
  flex-direction: column;
}

.right {
  display: inline-flex;
  flex: 1 2 400px;
  align-items: center;
}

.small {
  height: 200px;
  width: auto;
  -moz-box-shadow: inset 0 0 10px #ff0000;
  -webkit-box-shadow: inset 0 0 10px #ff0000;
  box-shadow: inset 0 0 10px #ff0000;
}

.large {
  height: 600px;
  width: auto;
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px #000000;
}
```

`Output`

![flex-shrink](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/nested-flexbox.jpg)

In the example above, a div with three smaller images will display from top to bottom on the left of the page (`.left`). There is also a div with one large image that will display on the right side of the page (`.right`). The left div has a smaller `flex-basis` but stretches to fill more extra space; the right div has a larger `flex-basis` but stretches to fill less extra space. Both divs are flex items and flex containers. The items have properties that dictate how they will be positioned in the parent container and how their flex item children will be positioned in them.