In previous exercise, we learned that all flex items shrink proportionally when the flex container is too small. However, if the parent container is larger than necessary then the flex items will not stretch by default. The `flex-grow` property allows us to specify if items should grow to fill a container and also which items should grow proportionally more or less than others.

```html
<div class="container">
  <div class="side">
    <h1>I’m on the side of the flex container!</h1>
  </div>
  <div class="center">
    <h1>I'm in the center of the flex container!</h1>
  </div>
  <div class="side">
    <h1>I'm on the other side of the flex container!</h1>
  </div>
</div>
```

```css
.container {
  display: flex;
}

.side {
  width: 100px;
  flex-grow: 1;
 -moz-box-shadow:    inset 0 0 10px #000000;
 -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow:         inset 0 0 10px #000000;
  padding:1rem 0rem;
}

.center {
  width: 100px;
  flex-grow: 2;
 -moz-box-shadow: inset 0 0 10px #e21f3f;
 -webkit-box-shadow: inset 0 0 10px #e21f3f;
  box-shadow: inset 0 0 10px #e21f3f;
  padding:1rem 0rem;
}

```

`Output`

![flex-grow](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/flex-grow.png)

In the example above, the `.container` div has a display value of `flex`, so its three child divs will be positioned next to each other. If there is additional space in the `.container` div (in this case, if it is wider than 300 pixels), the flex items will grow to fill it. The `.center` div will stretch twice as much as the `.side` divs. For example, if there were 60 additional pixels of space, the `center` div would absorb 30 pixels and the `side` divs would absorb 15 pixels each.

If a `max-width` is set for an element, it will not grow larger than that even if there is more space for it to absorb.

All of the previous properties we have learned are declared on flex containers, or the parent elements. This property — `flex-grow` — is the first we have learned that is declared on flex items.