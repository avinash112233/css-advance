We can use the property `grid-row` as shorthand for `grid-row-start` and `grid-row-end`. The following two code blocks will produce the same output:

```css
.item {
  grid-row-start: 4;
  grid-row-end: 6;
}
.item {
  grid-row: 4 / 6;
}
```

This code should look similar to the way `grid-template` is shorthand for `grid-template-rows` and `grid-template-columns`. In this case, the starting row goes before the “/“ and the ending row goes after it. Again, the ending row is exclusive; this grid item will occupy rows four and five.

When an item spans multiple rows or columns using these properties, it will also include the `grid-gap` if any exists. For example, if an item spans two rows of height 100 pixels and there is a ten-pixel grid-gap, then the item will have a total height of 210 pixels.