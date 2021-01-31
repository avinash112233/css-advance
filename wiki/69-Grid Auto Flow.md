In addition to setting the dimensions of implicitly-added rows and columns, we can specify the order in which they are rendered.

`grid-auto-flow` specifies whether new elements should be added to rows or columns.

`grid-auto-flow` accepts these values:

* `row` — specifies the new elements should fill rows from left to right and create new rows when there are too many elements (default)
* `column` — specifies the new elements should fill columns from top to bottom and create new columns when there are too many elements
* `dense` — this keyword invokes an algorithm that attempts to fill holes earlier in the grid layout if smaller elements are added

You can pair `row` and `column` with `dense`, like this: `grid-auto-flow: row dense;`.

This property is declared on grid containers.