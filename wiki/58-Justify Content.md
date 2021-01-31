In the previous exercise, we learned how to position elements within their columns. In this exercise, we will learn how to position a grid within its parent element.

We can use `justify-content` to position the entire grid along the row axis.

It accepts these values:

* `start` — aligns the grid to the left side of the grid container
* `end` — aligns the grid to the right side of the grid container
* `center` — centers the grid horizontally in the grid container
* `stretch` — stretches the grid items to increase the size of the grid to expand horizontally across the container
* `space-around` — includes an equal amount of space on each side of a grid element, resulting in double the amount of space between 2 consecutive elements as there is space before the first and after the last element
* `space-between` — includes an equal amount of space between grid items and no space at either end
* `space-evenly` — places an even amount of space between grid items and at either end

There are several other values that `justify-content` accepts, which you can read about on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout#Aligning_the_grid_tracks_on_the_block_or_column_axis). The definitions for these values can also be found in the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content#Values). It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

```html
<main>
  <div class="left">Left</div>
  <div class="right">Right</div>
</main>
```

```css
main {
  display: grid;
  width: 1000px;
  grid-template-columns: 300px 300px;
  grid-template-areas: "left right"; 
  justify-content: center;
  border:1px solid black;
  height:200px;
  color:#fff;
}

.left{
  background:#ff0000;
}

.right{
  background:#000;
}
```
![justify-content](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/justify-content.png)

1. In the example above, the grid container is 1000 pixels wide, but we only specified two columns that are 300 pixels each. This will leave 400 pixels of unused space in the grid container.
2. `justify-content: center;` positions the columns in the center of the grid, leaving 200 pixels on the right and 200 pixels on the left of the grid.

This property is declared on grid containers.