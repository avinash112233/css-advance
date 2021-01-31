The `justify-items` and `align-items` properties specify how all grid items contained within a single container will position themselves along the row and column axes, respectively.

`justify-self` specifies how an individual element should position itself with respect to the row axis. This property will override `justify-items` for any item on which it is declared.

`align-self` specifies how an individual element should position itself with respect to the column axis. This property will override `align-items` for any item on which it is declared.

They both accept these four properties: 

* `start` — positions grid items on the left side (in case of `justify-self`) or top (in case of `align-self`) of the grid area
* `end` — positions grid items on the right side (in case of `justify-self`) or bottom (in case of `align-self`) of the grid area
* `center` — positions grid items on the center (in case of `justify-self` and `align-self`)of the grid area
* `stretch` — positions grid items to fill the grid area (default)

`align-self` and `justify-self` accept the same values as `align-items` and `justify-items`. You can read about these values on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout#Aligning_the_grid_tracks_on_the_block_or_column_axis). The definitions for these values can also be found in the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self#Values). It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

