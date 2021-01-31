Like the `flex` property, the `flex-flow` property is used to declare both the `flex-wrap` and `flex-direction` properties in one line.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
```

In the example above, we take two lines to accomplish what can be done with one.

```css
.container {
  display: flex;
  flex-flow: column wrap;
}
```

In the example above, the first value in the `flex-flow` declaration is a `flex-direction` value and the second is a `flex-wrap` value. All values for `flex-direction` and `flex-wrap` are accepted.

**Note:** The `flex-flow` property is declared on flex containers.