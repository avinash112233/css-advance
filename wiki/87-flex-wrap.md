Sometimes, we don’t want our content to shrink to fit its container. Instead, we might want flex items to move to the next line when necessary. This can be declared with the `flex-wrap property`. The `flex-wrap` property can accept three values:

1. `wrap` — child elements of a flex container that don’t fit into a row will move down to the next line

2. `wrap-reverse` — the same functionality as `wrap`, but the order of rows within a flex container is reversed (for example, in a 2-row flexbox, the first row from a `wrap` container will become the second in `wrap-reverse` and the second row from the `wrap` container will become the first in `wrap-reverse`)

3. `nowrap` — prevents items from wrapping; this is the default value and is only necessary to override a wrap value set by a different CSS rule.

```html
<div class="container">
  <div class="item">
    <h1>We're going to wrap!</h1>
  </div>
  <div class="item">
    <h1>We're going to wrap!</h1>
  </div>
  <div class="item">
    <h1>We're going to wrap!</h1>
  </div>
</div>
```

```css
.container {
  display: inline-flex;
  flex-wrap: wrap;
  width: 250px;
  border: 2px solid #000000;
}

.item {
  width: 100px;
  height: 100px;
  padding-top:1rem;
  -moz-box-shadow: inset 0 0 10px #e21f3f;
  -webkit-box-shadow: inset 0 0 10px #e21f3f;
  box-shadow: inset 0 0 10px #e21f3f;
}
```

`Output`

![inline-flex image](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/flex-wrap.png)

In the example above, three flex items are contained by a parent flex container. The flex container is only 250 pixels wide so the three 100 pixel wide flex items cannot fit inline. The `flex-wrap: wrap;` setting causes the third, overflowing item to appear on a new line, below the other two item.

Note: The `flex-wrap` property is declared on flex containers.