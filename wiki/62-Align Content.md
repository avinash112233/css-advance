In the previous exercise, we positioned grid items within their rows. `align-content` positions the rows along the column axis, or from top to bottom.

It accepts these positional values:

* start — aligns the grid to the top of the grid container
* end — aligns the grid to the bottom of the grid container
* center — centers the grid vertically in the grid container
* stretch — stretches the grid items to increase the size of the grid to expand vertically across the container
* space-around — includes an equal amount of space on each side of a grid element, resulting in double the amount of space between 2 consecutive elements as there is space before the first and after the last element
* space-between — includes an equal amount of space between grid items and no space at either end
* space-evenly — places an even amount of space between grid items and at either end

There are several other values that `align-content` accepts, which you can read about on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout#Aligning_the_grid_tracks_on_the_block_or_column_axis). The definitions for these values can also be found in the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content#Values). It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

```html
<main>
  <div class="top container">Top</div>
  <div class="bottom container">Bottom</div>
</main>
```
```css
main {
  display: grid;
  height: 600px;
  rows: 200px 200px;
  grid-template-areas: "top"
                       "bottom"; 
  align-content: center;
  background: #000;
}

.container{
    background:#ff0000;
    padding:1rem;
    border:1px solid #fff;
}


```
![align content](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/align-content.png)

1. In the example above, the grid container is 600 pixels tall, but we only specified two rows that are 200 pixels each. This will leave 200 pixels of unused space in the grid container.
2. `align-content: center;` positions the rows in the center of the grid, leaving 100 pixels at the top and 100 pixels at the bottom of the grid.

   This property is declared on grid containers.