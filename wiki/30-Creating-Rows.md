We’ve learned how to define the number of columns in our grid explicitly. To specify the number and size of the rows, we are going to use the property `grid-template-rows`.

This property is almost identical to `grid-template-columns`. Take a look at the code below to see both properties in action.

```css
.grid {
  display: grid;
  width: 1000px;
  height: 500px;
  grid-template-columns: 100px 200px;
  grid-template-rows: 10% 20% 600px;
}
```

This grid has two columns and three rows. `grid-template-rows` defines the number of rows and sets each row’s height. In this example, the first row is 50 pixels tall (10% of 500), the second row is 100 pixels tall (20% of 500), and the third row is 600 pixels tall.

When using percentages in these two properties, remember that rows are defined as a percentage of the grid’s height, and columns are defined as a percentage of its width.