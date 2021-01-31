In the previous two exercises, the dimensions of the divs were determined by heights and widths set with CSS. Another way of specifying the width of a flex item is with the `flex-basis` property. `flex-basis` allows us to specify the width of an item before it stretches or shrinks.

```html
<div class="container">
  <div class="side">
    <h1>Left side!</h1>
  </div>
  <div class="center">
    <h1>Center!</h1>
  </div>
  <div class="side">
    <h1>Right side!</h1>
  </div>
</div>
```

```css
.container {
  display: flex;
  border: 2px solid #000000;
}

.side {
  padding: 1rem 0;
  flex-grow: 1;
  flex-basis: 100px;
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px #000000;
}

.center {
  padding: 1rem 0;
  flex-grow: 2;
  flex-basis: 150px;
  -moz-box-shadow: inset 0 0 10px #e21f3f;
  -webkit-box-shadow: inset 0 0 10px #e21f3f;
  box-shadow: inset 0 0 10px #e21f3f;
}
```

`Output`

![inline-flex image](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/flex-basis.png)

In the example above, the `.side` divs will be 100 pixels wide and the `.center` div will be 150 pixels wide if the `.container` div has just the right amount of space (350 pixels, plus a little extra for margins and borders). If the `.container` div is larger, the `.center` div will absorb twice as much space as the `.side` divs.

The same would hold true if we assigned `flex-shrink` values to the divs above as well.