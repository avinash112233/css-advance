We have referred to “two-dimensional grid-based layout” several times throughout this course.

There are two axes in a grid layout — the *column* (or block) axis and the *row* (or inline) axis.

The column axis stretches from top to bottom across the web page.

The row axis stretches from left to right across the web page.

In the following four exercises, we will learn and use properties that rely on an understanding of grid axes.

`justify-items` is a property that positions grid items along the inline, or row, axis. This means that it positions items from left to right across the web page.

`justify-items` accepts these values:

* `start` — aligns grid items to the left side of the grid area
* `end` — aligns grid items to the right side of the grid area
* `center` — aligns grid items to the center of the grid area
* `stretch` — stretches all items to fill the grid area

There are several other values that `justify-items` accepts, which you can read about on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout#Justifying_Items_on_the_Inline_or_Row_Axis). The definitions for these values can also be found in the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items#Values). It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

```html
<main>
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</main>
```

```css
main {
  display: grid;
  grid-template-columns: repeat(3, 400px);
  justify-items: center;
}
```

`Output`

![inline-flex image](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/justify-item.png)

In the example above, we use `justify-items` to adjust the positioning of some elements on this web page.

1. There is a grid container with three columns that are each 400 pixels wide.
2. The container has three grid items that do not have a specified width.
3. Without setting the `justify-items` property, these elements will span the width of the column they are in (400 pixels).
4. By setting the `justify-items` property to `center`, the `.card` `<div>`s will be centered inside of their columns. They will only be as wide as necessary to contain their content (the words Card 1, etc).
5. If we specify a width for the `.card` elements, they will not stretch the width of their column.
This property is declared on grid containers.