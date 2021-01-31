The properties that define the number of rows and columns in a grid can take a function as a value. `repeat()` is one of these functions. The `repeat()` function was created specifically for CSS Grid.

```css
.grid {
  display: grid;
  width: 300px;
  grid-template-columns: repeat(3, 100px);
}
```

The repeat function will duplicate the specifications for rows or columns a given number of times. In the example above, using the repeat function will make the grid have three columns that are each 100 pixels wide. It is the same as writing:

```css
grid-template-columns: 100px 100px 100px;
```

Repeat is particularly useful with `fr`. For example, `repeat(5, 1fr)` would split your table into five equal rows or columns.

Finally, the second parameter of `repeat()` can have multiple values.

```css
grid-template-columns: repeat(2, 20px 50px)
```

This code will create four columns where the first and third columns will be 20 pixels wide and the second and fourth will be 50 pixels wide.