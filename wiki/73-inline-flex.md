In the previous exercise, you might have observed that when we gave a div — a block level element — the `display` value of `flex`, it remained a block level element. What if we want multiple flex containers to display inline with each other?

If we didn’t want div elements to be block-level elements, we would use `display: inline`. Flexbox, however, provides the `inline-flex` value for the `display` attribute, which allows us to create flex containers that are also inline elements.

```html
<div class="container">
  <p>I’m inside of a flex container!</p>
  <p>A flex container’s children are flex items!</p>
</div>
<div class="container">
  <p>I’m also a flex item!</p>
  <p>Me too!</p>
</div>
```

```css
.container {
  width: 200px;
  height: 200px;
  display: inline-flex;
}
p{
   -moz-box-shadow:    inset 0 0 10px #e21f3f;
   -webkit-box-shadow: inset 0 0 10px #e21f3f;
    box-shadow:         inset 0 0 10px #e21f3f;
    padding:1rem 0rem;
}
```

`Output`

![inline-flex image](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/inline_flex.png)


In the example above, there are two container divs. Without a width, each div would stretch the entire width of the page. The paragraphs within each div would also display on top of each other because paragraphs are block-level elements.

When we change the value of the `display` property to `inline-flex`, the divs will display inline with each other if the page is wide enough. As we progress through this lesson, we will cover in more detail how flex items are displayed.

Notice that in the example above, the size of the flex container is set. Currently, the size of the parent container will override the size of its child elements. If the parent element is too small, the flex items will shrink to accommodate the parent container’s size. We’ll explain why in a later exercise.

```html
<div class="container">
  <div class="child">
    <h1>1</h1>
  </div>
  <div class="child">
    <h1>2</h1>
  </div>
</div>
```


```css
.container {
  width: 200px;
}

.child {
  display: inline-flex;
  width: 150px;
  height: auto;
  padding:1rem;
 -moz-box-shadow:    inset 0 0 10px #e21f3f;
 -webkit-box-shadow: inset 0 0 10px #e21f3f;
  box-shadow:         inset 0 0 10px #e21f3f;
}
```

`Output`

![inline-flex image](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/inline-flex-2.png)



In the example above, the `.child` divs will take up more width (300 pixels) than the `container` div allows (200 pixels). The `.child` divs will shrink to accommodate the container’s size. In later exercises, we will explore several ways to handle this.