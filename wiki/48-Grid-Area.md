We’ve already been able to use `grid-row` and `grid-column` as shorthand for properties like `grid-row-start` and `grid-row-end`. We can refactor even more using the property `grid-area`. This property will set the starting and ending positions for both the rows and columns of an item.

```css
.item {
  grid-area: 2 / 3 / 4 / span 5;
}
```

`grid-area` takes four values separated by slashes. The order is important! This is how `grid-area` will interpret those values.

1. `grid-row-start`
2. `grid-column-start`
3. `grid-row-end`
4. `grid-column-end`

In the above example, the item will occupy rows two and three and columns three through eight.
Using `grid-area` is an easy way to place items exactly where you want them in a grid.

