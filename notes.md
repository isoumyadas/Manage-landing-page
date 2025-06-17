## Why we have used font: inherit ?

- To reset all the font sizes like h1,h2,h3
- As we should not see any font sizes as h1 to h6, we should use classes for styling them.

```css
* {
  margin: 0;
  padding: 0;
  font: inherit;
}
```

## Why we have used height: 100% in html,body?

- To avoid the double scrollbar.

  ```css
  html,
  body {
    height: 100%;
  }
  ```

## Why to use em's in media queries

- It's the only unit that's consistent across all the browsers and operating systems when you're zooming in & out.

- Usually, 1em = 16px (if the root font-size is not changed).
  So 50em = 50 × 16px = 800px.

- That means: The styles inside this media query will apply when the viewport is at least 800px wide.

```css
@media (min-width: 50em) {
  .even-columns {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
}
```

- em units scale with the user's font size settings.
- If a user increases their base font size (for vision issues), 50em adapts to that.
- Example: if root font-size is changed to 20px, 50em = 1000px.
  This makes your layout more accessible and responsive to user preferences.
- Using em for media queries makes breakpoints relative to typography, not screen size.
- This means your layout scales smoothly with the text size.
