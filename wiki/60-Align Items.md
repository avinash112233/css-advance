
In the previous two exercises, we learned how to position grid items and grid columns from left to right across the page. Below, we’ll learn how to position grid items from top to bottom!

`align-items` is a property that positions grid items along the block, or column axis. This means that it positions items from top to bottom.

`align-items` accepts these values:

* `start` — aligns grid items to the top side of the grid area
* `end` — aligns grid items to the bottom side of the grid area
* `center` — aligns grid items to the center of the grid area
* `stretch` — stretches all items to fill the grid area
There are several other values that `align-items` accepts, which you can read about on the [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout#Aligning_items_on_the_block_or_column_Axis) Network. The definitions for these values can also be found in the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items#Values). It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

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
  grid-template-rows: repeat(3, 400px);
  align-items: center;
  background:#ff0000;
  padding:1rem;
  
}

.card{
  padding:1rem;
  background:#000;
  color:#fff;
  
}

```
`Output` : Image 1

![align items](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/align-items-1.png)

`Output` : Image 2
                                     
![align items](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/align-items.png)
                                     


In the example above, we use `align-items` to adjust the positioning of some elements on this web page.

1. There is a grid container with three rows that are 400 pixels tall.
2. The container has three grid items that do not have a specified width.
3. Without setting the `align-items` property, these elements will span the height of the row they are in (400 pixels).(See Image 1)
4. By setting the `align-items` property to `center`, the `.card` `<div>`s will be centered vertically inside of their rows. They will only be as tall as necessary to contain their content (the words "Card 1", "Card 2" etc).(See Image 2)
5. If we specify a height for the `.card` elements (for eg: 400 px in this case), they will not stretch the height of their row even if `align-items: stretch;` is set.

This property is declared on grid containers.