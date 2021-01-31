So far, we have been explicitly defining the dimensions and quantities of our grid elements using various properties. This works well in many cases, such as a landing page for a business website that will display a specific amount of information at all times.

However, there are instances in which we don’t know how much information we’re going to display. For example, consider online shopping. Often, these web pages include an option at the bottom of the search results to display a certain quantity of results or to display ALL the results on a single page. When displaying all  the results, the web developer can’t know in advance how many elements will be in the search results each time.

What happens if the developer has specified a 3-column, 5-row grid (for a total of 15 items), but the search results return 30?

In this case, Something called the **implicit grid** takes over. The implicit grid is an algorithm built into the specification for CSS Grid that determines the default behavior for the placement of elements when there are more elements than that can fit into the grid specified by the CSS.

The default behavior of the implicit grid is as follows: items fill up rows first, adding new rows as necessary. New grid rows will only be tall enough to contain the content within them. In the next exercise, you’ll learn how to change this default behavior.