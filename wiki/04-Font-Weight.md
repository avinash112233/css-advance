You’ve probably noticed **bold** text in websites you use, especially in news or text-heavy sites. It’s common to bold important headings or keywords. In CSS, we can style bold text with the `font-weight` property.

If we want to `bold` text in a web page, we can set the `font-weight` to bold.

```css
p {
  font-weight: bold;
}
```

If we want to ensure that text is not bold, we can set the `font-weight` to `normal`.

```css
p {
  font-weight: normal;
}
```

By default, the `font-weight` of most text elements is set to `normal`. Some elements, like headers, have built-in bold styling. A good approach is to check to see if the the text element has any default styling, and use the `font-weight` property accordingly.

The `font-weight` property can also be assigned a number value to style text on a numeric scale ranging from 100 to 900. Valid values are multiples of 100 within this range such as `200` or `500`.

When using numeric weights, there are a number of default font weights that we can use:

1. `400` is the default `font-weight` of most text.
2. `700` signifies a bold `font-weight`.
3. `300` signifies a light `font-weight`.

Let’s take a look at an example of how numeric fonts are used.
```css
header {
  font-weight: 800;
}

footer {
  font-weight: 200;
}
```

Here, the header would appear as a deep bold, while the footer would appear rather light.

It’s important to note that not all fonts can be assigned a numeric `font-weight`. You can look up the font you are using to see which `font-weight` values are available.