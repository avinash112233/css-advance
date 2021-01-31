In all of our grids so far, there hasn’t been any space between the items in our grid. The CSS properties `grid-row-gap` and `grid-column-gap` will put blank space between every row and column in the grid.

```css
.grid {
  display: grid;
  width: 320px;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
}
```

It is important to note that `grid-gap` does not add space at the beginning or end of the grid. In the example code, our grid will have three columns with two ten-pixel gaps between them.

Let’s quickly calculate how wide these columns are. Remember that using `fr` considers all of the available space. The grid is 320 pixels wide and 20 of those pixels are taken up by the two grid gaps. Therefore each column takes a piece of the 300 available pixels. Each column gets `1fr`, so the columns are evenly divided into thirds (or 100 pixels each).

Finally, there is a CSS property `grid-gap` that can set the row and column gap at the same time. `grid-gap: 20px 10px;` will set the distance between rows to 20 pixels and the distance between columns to 10 pixels. Unlike other CSS grid properties, this shorthand does not take a `/` between values! If only one value is given, it will set the column gap and the row gap to that value.