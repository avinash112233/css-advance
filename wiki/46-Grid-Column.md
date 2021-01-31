The previous three properties also exist for columns. `grid-column-start`, `grid-column-end` and `grid-column` work identically to the row properties. These properties allow a grid item to span multiple columns.

When using these properties, we can use the keyword `span` to start or end a column or row relative to its other end. Look at how `span` is used in the code below:

```css
.item {
  grid-column: 4 / span 2;
}
```

This is telling the `item` element to begin in column four and take up two columns of space. So `item` would occupy columns four and five. It produces the same result as the following code blocks:

```css
.item {
  grid-column: 4 / 6;
}
```
```css
.item {
  grid-column-start: 4;
  grid-column-end: span 2;
}
```
```css
.item {
  grid-column-start: span 2;
  grid-column-end: 6;
}
```

`span` is a useful keyword, because it avoids off-by-one errors (miscalculating the ending grid line) you might make when determining the ending grid line of an element. If you know where you want your grid item to start and how long it should be, use `span`!

