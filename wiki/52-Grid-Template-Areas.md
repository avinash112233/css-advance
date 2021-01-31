The `grid-template-areas` property allows you to name sections of your web page to use as values in the `grid-row-start`, `grid-row-end`, `grid-col-start`,`grid-col-end`, and `grid-area` properties.

```html
<div class="container">
  <header>Welcome!</header>
  <nav>Links!</nav>
  <section class="info">Info!</section>
  <section class="services">Services!</section>
  <footer>Contact us!</footer>
</div>
```
```css
.container {
  display: grid;
  max-width: 900px;
  position: relative;
  margin: auto;
  border: 2px solid #000000;
  grid-template-areas:
    "head head"
    "nav nav"
    "info services"
    "footer footer";
  grid-template-rows: 300px 120px 800px 120px;
  grid-template-columns: 1fr 3fr;
}

header {
  padding: 1rem;
  grid-area: head;
  -moz-box-shadow: inset 0 0 10px #ff0000;
  -webkit-box-shadow: inset 0 0 10px #ff0000;
  box-shadow: inset 0 0 10px#ff0000;
}

nav {
  padding: 1rem;
  grid-area: nav;
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px #000000;
}

.info {
  padding: 1rem;
  grid-area: info;
  -moz-box-shadow: inset 0 0 10px #ff0000;
  -webkit-box-shadow: inset 0 0 10px #ff0000;
  box-shadow: inset 0 0 10px #ff0000;
}

.services {
  padding: 1rem;
  grid-area: services;
  -moz-box-shadow: inset 0 0 10px #ff0000;
  -webkit-box-shadow: inset 0 0 10px #ff0000;
  box-shadow: inset 0 0 10px #ff0000;
}

footer {
  padding: 1rem;
  grid-area: footer;
  -moz-box-shadow: inset 0 0 10px #ff0000;
  -webkit-box-shadow: inset 0 0 10px #ff0000;
  box-shadow: inset 0 0 10px #ff0000;
}
```
`Output`

![inline-flex image](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/Grid-Template-Areas.png)

You may want to expand this section of the website to view the code above more clearly.

1. In the example above, the HTML creates a web page with five distinct parts.
2. The `grid-template-areas` declaration in the `.container` rule set creates a 2-column, 4-row layout.
3. The `grid-template-rows` declaration specifies the height of each of the four rows from top to bottom: 300 pixels, 120 pixels, 800 pixels, and 120 pixels.
4. The `grid-template-columns` declaration uses the `fr` value to cause the left column to use one fourth of the available space on the page and the right column to use three-fourths of the available space on the page.
5. In each rule set below `.container`, we use the `grid-area` property to tell that section to cover the portion of the page specified. The `header` element spans the first row and both columns. The `nav` element spans the second row and both columns. The element with class `.info` spans the third row and left column. The element with class `.services` spans the third row and right column. The `footer` element spans the bottom row and both columns.
6. That’s it! An entire page laid out in 40 lines of code.

This property is declared on grid containers.

You can see what you’ll be building in this exercise [here](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/grid-template-area.png)