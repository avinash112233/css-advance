Just as the `flex-grow` property proportionally stretches flex items, the `flex-shrink` property can be used to specify which elements will shrink and in what proportions.

You may have noticed in earlier exercises that flex items shrank when the flex container was too small, even though we had not declared the property. This is because the default value of `flex-shrink` is `1`. However, flex items do not grow unless the `flex-grow` property is declared because the default value of `flex-grow` is `0`.

```html
<div class="container">
  <div class="side">
    <h1>I'm on the side of the flex container!</h1>
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
  width: 240px;
  height: auto;
  border:2px solid #000000;
}

.side {
  width: 100px;
  padding:1rem 0rem;
  flex-shrink: 1;
 -moz-box-shadow:    inset 0 0 10px #000000;
 -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow:         inset 0 0 10px #000000;

}

.center {
  width: 100px;
  padding:1rem 0rem;
  flex-shrink: 2;
 -moz-box-shadow:    inset 0 0 10px #e21f3f;
 -webkit-box-shadow: inset 0 0 10px #e21f3f;
  box-shadow:         inset 0 0 10px #e21f3f; 
}
```
`Output`

![flex-shrink](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/flex-shrink.jpg)

In the example above, the `.center` div will shrink twice as much as the `.side` divs if the `.container` div is too small to fit the elements within it. The content is 60 pixels  large for the flex container that surrounds it, the `.center` div is shrink by 30 pixels and the outer divs are shrink by 15 pixels each. Margins are unaffected by `flex-grow` and `flex-shrink`.

Keep in mind, minimum and maximum widths will take precedence over `flex-grow` and `flex-shrink`. As with `flex-grow`, `flex-shrink` will only be employed if the parent container is too small or the browser is adjusted

.