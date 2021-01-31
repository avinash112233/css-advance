Now that elements can wrap to the next line, we might have multiple rows of flex items within the same container. In a previous exercise, we used the `align-items` property to space flex items from the top to the bottom of a flex container. `align-items` is for aligning elements within a single row. If a flex container has multiple rows of content, we can use `align-content` to space the rows from top to bottom.

`align-content` accepts six values:

1. `flex-start` — all rows of elements will be positioned at the top of the parent container with no extra space between.
2. `flex-end` — all rows of elements will be positioned at the bottom of the parent container with no extra space between.
3. `center` — all rows of elements will be positioned at the center of the parent element with no extra space between.
4. `space-between` — all rows of elements will be spaced evenly from the top to the bottom of the container with no space above the first or below the last.
5. `space-around` — all rows of elements will be spaced evenly from the top to the bottom of the container with the same amount of space at the top and bottom and between each element.
6. `stretch` — if a minimum height or no height is specified, the rows of elements will stretch to fill the parent container from top to bottom (default value).

```html
<div class="container">
  <div class="child">
    <h1>1</h1>
  </div>
  <div class="child">
    <h1>2</h1>
  </div>
  <div class="child">
    <h1>3</h1>
  </div>
  <div class="child">
    <h1>4</h1>
  </div>
</div>
```

```css
.container {
  display: flex;
  width: 400px;
  height: 400px;
  flex-wrap: wrap;
  align-content: space-around;
  border:1px solid #000;
}

.child {
  width: 150px;
  height: 150px;
  -moz-box-shadow: inset 0 0 10px #ff0000;
  -webkit-box-shadow: inset 0 0 10px #ff0000;
  box-shadow: inset 0 0 10px #ff0000;
}
```

`Output`

![inline-flex image](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/align_content.png)

In the example above, there are four flex items inside of a flex container. The flex items are set to be 150 pixels wide each, but the parent container is only 400 pixels wide. This means that no more than two elements can be displayed inline. The other two elements will wrap to the next line and there will be two rows of divs inside of the flex container. The `align-content` property is set to the value of `space-around`, which means the two rows of divs will be evenly spaced from top to bottom of the parent container with equal space before the first row and after the second, with double space between the rows.

Now, we will see each of the properties in action!

**Note:** The `align-content` property is declared on flex containers.