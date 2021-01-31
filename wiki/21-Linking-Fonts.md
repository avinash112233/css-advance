With the number of fonts available with modern typography, it is unrealistic to expect users to have all fonts installed on their computers. New fonts are often centralized in directories made available for public use. We refer to these fonts as non-user fonts.

[Google Fonts](https://fonts.google.com/) is one such directory of thousands of open-source fonts, available for free use. Google Fonts gives us a way to retrieve the link for a single font, multiple fonts, or multiple fonts with the `font-weight` and `font-style` properties.

We’ll show you where to add this link in the next exercise.

![](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/linkingfonts.mp4)

The video demonstrates how to retrieve the link for a single font, multiple fonts, and multiple fonts of various numeric font weights and font styles.

When we have the link to the font of our choice, we can add the font to the `<head>` section of the HTML document, using the `<link>` tag and the `href`.

Let’s take a look at a few examples:

1. A single linked font, using `Droid Serif` as an example:

```html
<head>
  <link href="https://fonts.googleapis.com/css?family=Droid+Serif" type="text/css" rel="stylesheet">
</head>
```

2. Multiple linked fonts, using the `Droid Serif` and `Playfair Display` fonts as an example:

```html
<head>
  <link href="https://fonts.googleapis.com/css?family=Droid+Serif|Playfair+Display" type="text/css" rel="stylesheet">
</head>
```

3. Multiple linked fonts, along with weights and styles. Here `Droid Serif` has font weights of `400`, `700`, and `700i`, while `Playfair Display` has font weights of `400`, `700`, and `900i`:

```html
<head>
  <link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,700i|Playfair+Display:400,700,900i" rel="stylesheet">
</head>
```

Once a font is linked, we can create CSS selectors to target elements, just as we do with other fonts.