The `flex` property provides a convenient way for specifying how elements stretch and shrink, while simplifying the CSS required. The `flex` property allows you to declare `flex-grow`, `flex-shrink`, and `flex-basis` all in one line.

Note: The `flex` property is different from the `flex` value used for the `display` property.

```css
.big {
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 150px;
}

.small {
  flex-grow: 1;
  flex-shrink: 2;
  flex-basis: 100px;
}
```


In the example above, all elements with class `big` will grow twice as much as elements with class `small`. Keep in mind, this doesn’t mean `big` items will be twice as big as `small` items, they’ll just take up more of the extra space.

The CSS below declares these three properties in one line.

```css
.big {
  flex: 2 1 150px;
}

.small {
  flex: 1 2 100px;
}
```

In the example above, we use the `flex` property to declare the values for `flex-grow`, `flex-shrink`, and `flex-basis` (in that order) all in one line.

```css
.big {
 flex: 2 1;
}
```

In the example above, we use the `flex` property to declare `flex-grow` and `flex-shrink`, but not `flex-basis`.

```css
.small {
  flex: 1 20px;
}
```

In the example above, we use the `flex` property to declare `flex-grow` and `flex-basis`. Note that there is no way to set only `flex-shrink` and `flex-basis` using 2 values.

The **flex.html** has two flex containers, each with three flex items. In **flex.css**, examine the values for each of these items. Notice that the `flex-grow` and `flex-basis` values are set for the blue divs.

Stretch the browser window to increase its width. Observe that once the top outer `div`s reach 100 pixels wide, they begin to grow faster than the top center `div`. Also notice that once the bottom center `div` reaches 100 pixels wide, it begins to grow faster than the outer `div`s.

Now, shrink the browser window and notice that once the top center `div` reaches 50 pixels wide it begins to shrink faster than the outer `div`s and when the bottom outer divs reach 75 pixels, they begin to shrink faster than the center `div`.