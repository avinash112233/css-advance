There are other ways to link non-user fonts that don’t require the use of the `<link>` tag in the HTML document. CSS offers a way to import fonts directly into stylesheets with the `@font-face` property.

To load fonts with the `@font-face` property:

1. Instead of using the font’s link in the HTML document, enter the link into the URL bar in the browser.
2. The browser will load the CSS rules. You will need to focus on the rules that are directly labeled as `/* latin */`. Some of the latin rules are on separate lines. You will need each of these.
3. Copy each of the CSS rules labeled latin, and paste the rules from the browser to the top of **typography.css**.

It is important to stress the need to copy the `@font-face` rules to the top of the stylesheet for the font to load correctly in the project.

Checkout the link for the `Space Mono` font with normal (`400`) and bold (`700`) `font-weight`s.You can find the direct link to the font [here](https://fonts.googleapis.com/css?family=Space+Mono:400,700/).

We can then use the fonts in the stylesheets as you would use any other font. Let’s practice loading an external font in our stylesheets using the `@font-face` property, and using the font to style our page.

While Google Fonts and other resources can broaden font selection, you may wish to use an entirely different font or abstain from using a font from an external service.

We can modify our `@font-face` rule to use local font files as well. We can supply the user with the desired font family and host it along with our site instead of depending on a different site.

```css
@font-face {
  font-family: "Roboto";
  src: url(fonts/Roboto.woff2) format('woff2'),
       url(fonts/Roboto.woff) format('woff'),
       url(fonts/Roboto.tff) format('truetype');
}
```

Here, you’ll notice:

1. The main difference is the use of a relative filepath instead of a web URL.

2. We add a format for each file to specify which font to use. Different browsers support different font types, so providing multiple font file options will support more browsers.

As of now `.woff2` appears to be the way of the future, due to greatly reduced file sizes and improved performance, but many browsers still don’t support it. There are lots of great sources to find fonts to use locally, such as [Font Squirrel](https://www.fontsquirrel.com/).
