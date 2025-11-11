# dot-grid

A modern, flexible 12-column CSS Grid system with container queries, fluid layouts, and subgrid support.

## ✨ Features

- **Modern CSS Grid** - Built on native CSS Grid (not flexbox or floats)
- **Container Queries** - Responsive classes based on container size, not viewport
- **Fluid Layouts** - Auto-responsive utilities that adapt without breakpoints
- **Subgrid Support** - Perfect alignment for nested grids
- **CSS Custom Properties** - Easy customization via CSS variables
- **Cascade Layers** - Better specificity control
- **Logical Properties** - Automatic RTL support
- **Zero JavaScript** - Pure CSS solution
- **28KB / 19KB minified** - Lightweight and performant

## 📦 Installation

### npm

```bash
npm install dot-grid
```

Then import in your CSS/SCSS:

```css
@import 'dot-grid';
```

Or in your HTML:

```html
<link rel="stylesheet" href="node_modules/dot-grid/dist/grid.min.css">
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/dot-grid@latest/dist/grid.min.css">
```

## 🚀 Quick Start

### Basic Grid

```html
<div class="wrap">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">Column 1</div>
    <div class="col-12 col-md-6 col-lg-4">Column 2</div>
    <div class="col-12 col-md-6 col-lg-4">Column 3</div>
  </div>
</div>
```

### Fluid/Auto Grid (No Breakpoints Needed!)

```html
<div class="wrap">
  <div class="grid-auto-fit">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <!-- Automatically wraps based on available space -->
  </div>
</div>
```

## 📖 Documentation

### Core Classes

#### Container

- `.wrap` - Centers content with max-width and responsive padding

#### Grid Container

- `.row` - Creates a 12-column grid container with container query support

### Column Classes

#### Basic Columns

```html
<div class="col-1">...</div>  <!-- Spans 1 column -->
<div class="col-6">...</div>  <!-- Spans 6 columns (50%) -->
<div class="col-12">...</div> <!-- Spans 12 columns (100%) -->
```

All classes from `.col-1` through `.col-12` are available.

#### Container Query Responsive (Modern, Recommended)

Responds to the **container width**, not viewport:

```html
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
  Responsive column
</div>
```

**Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `xxl`: 1536px

#### Viewport-based Responsive (Alternative)

If you need viewport-based responsive behavior instead:

```html
<div class="col-vp-md-6 col-vp-lg-4">
  Responds to viewport size
</div>
```

### Column Positioning

#### Start Position

```html
<div class="col-3 col-start-4">
  Starts at column 4, spans 3 columns
</div>
```

Responsive start positions:

```html
<div class="col-6 col-start-md-7 col-start-lg-4">
  Different start positions at different sizes
</div>
```

### Gap Utilities

```html
<!-- Different gap sizes -->
<div class="row gap-none">...</div>  <!-- No gap -->
<div class="row gap-xs">...</div>    <!-- 0.5rem -->
<div class="row gap-sm">...</div>    <!-- 1rem -->
<div class="row gap-md">...</div>    <!-- clamp(1rem, 2vw, 2rem) - default -->
<div class="row gap-lg">...</div>    <!-- 3rem -->
<div class="row gap-xl">...</div>    <!-- 4rem -->

<!-- Directional gaps -->
<div class="row gap-b-none">...</div>       <!-- No row gap -->
<div class="row gap-sides-none">...</div>   <!-- No column gap -->
```

Responsive gaps:

```html
<div class="row gap-sm gap-md-lg gap-lg-xl">
  Different gaps at different sizes
</div>
```

### Subgrid

Perfect alignment for nested grids:

```html
<div class="row">
  <div class="col-12 row-subgrid">
    <!-- These inherit the parent's column tracks -->
    <div class="col-4">Aligned 1</div>
    <div class="col-4">Aligned 2</div>
    <div class="col-4">Aligned 3</div>
  </div>
</div>
```

### Fluid/Automatic Layouts

#### Auto-fit Grid

Automatically fits as many columns as possible:

```html
<div class="grid-auto-fit">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <!-- Items wrap automatically when space runs out -->
</div>

<!-- Customize minimum column width -->
<div class="grid-auto-fit" style="--grid-auto-min: 300px">
  <div>Wider items</div>
</div>
```

#### Fluid Row Patterns

```html
<!-- Adapts to 2 columns on larger screens -->
<div class="row-fluid-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Also available: row-fluid-3, row-fluid-4 -->
```

#### RAM Pattern (Repeat Auto Minmax)

```html
<div class="row-ram" style="--col-min: 250px">
  <div>Equal column 1</div>
  <div>Equal column 2</div>
  <div>Equal column 3</div>
</div>
```

#### Other Fluid Patterns

- `.row-intrinsic` - Columns size based on content
- `.row-even` - Even columns sharing space equally
- `.row-dense` - Fills gaps in the grid (masonry style)

### Content Placement

Align content within a column:

```html
<!-- Pattern: place-{vertical}-{horizontal} -->
<div class="col-6 place-t-l">Top Left</div>
<div class="col-6 place-c-c">Center Center</div>
<div class="col-6 place-b-r">Bottom Right</div>
```

**Vertical options:** `t` (top), `c` (center), `b` (bottom)
**Horizontal options:** `l` (left), `c` (center), `r` (right)

### Flexbox Utilities

For flex-based alignment within columns:

```html
<div class="col-12 justify-between">
  <span>Left</span>
  <span>Right</span>
</div>
```

Available: `.justify-start`, `.justify-end`, `.justify-center`, `.justify-between`, `.justify-around`, `.justify-evenly`

### Aspect Ratio

```html
<div class="col-4 aspect-square">Square</div>
<div class="col-8 aspect-video">16:9 Video</div>
<div class="col-6 aspect-4-3">4:3</div>
```

### Display Utilities

```html
<!-- Static -->
<div class="hidden">Always hidden</div>

<!-- Responsive (container-based) -->
<div class="hidden-md">Hidden on medium+ containers</div>
<div class="block-lg">Shows as block on large+ containers</div>

<!-- Responsive (viewport-based) -->
<div class="hidden-vp-md">Hidden on medium+ viewports</div>
```

### Sizing Utilities

```html
<div class="col-min">Shrinks to min content</div>
<div class="col-max">Expands to max content</div>
<div class="col-fit">Fits content</div>
<div class="col-auto">Auto-sized</div>
```

### Order

```html
<div class="col-6 order-last">Appears last</div>
<div class="col-6 order-first">Appears first</div>
```

## 🎨 Customization

Override CSS custom properties in your own stylesheet:

```css
:root {
  /* Change default gap */
  --grid-gap: 1.5rem;

  /* Change column count (affects all calculations) */
  --grid-columns: 16;

  /* Change container max width */
  --grid-wrap-max-width: 1400px;
  --grid-wrap-width: 95vw;

  /* Customize gap scale */
  --grid-gap-sm: 0.75rem;
  --grid-gap-lg: 4rem;

  /* Customize fluid layouts */
  --grid-auto-min: 300px; /* For grid-auto-fit */
  --col-min-width: 250px;  /* For col-fluid */
}
```

### Using SCSS Source

For advanced customization, import the SCSS source:

```scss
// Override variables before import
$grid-columns: 16;
$grid-gap-default: 2rem;
$breakpoints: (
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1600px
);

@use 'dot-grid/src/grid';
```

## 🌐 Browser Support

- **Container Queries:** Chrome 105+, Safari 16+, Firefox 110+ (Feb 2023+)
- **Subgrid:** Chrome 117+, Safari 16+, Firefox 71+ (2023+)
- **CSS Grid:** All modern browsers (2017+)
- **Cascade Layers:** Chrome 99+, Safari 15.4+, Firefox 97+ (2022+)

For older browsers, the basic grid system will still work. Container queries will fall back to mobile-first behavior.

## 📝 Examples

See the `/examples` directory for complete working examples:

- `basic.html` - Core grid features
- `container-queries.html` - Container query responsive layouts
- `fluid-layout.html` - Auto-responsive fluid grids
- `subgrid.html` - Subgrid alignment examples

## 🆚 Migration from Original CodePen

### Breaking Changes

1. **Container queries by default** - Responsive classes now use `@container` instead of `@media`
   - **Migration:** Use `.col-vp-{size}-{num}` if you need viewport-based behavior

2. **Placement utilities fixed** - `align-items: top` → `align-items: start`
   - **Migration:** No action needed, now uses correct CSS values

3. **New breakpoints** - Added `xxl` (1536px), adjusted `lg` from 1025px to 1024px
   - **Migration:** Update breakpoints in your HTML if using exact pixel values

### New Features (Additive)

- Subgrid support
- Fluid layout utilities
- More gap utilities
- Aspect ratio utilities
- Display utilities
- CSS custom properties

## 📄 License

MIT © Jean Loberg

## 🤝 Contributing

Issues and pull requests welcome at [github.com/lobergdesign/dot-grid](https://github.com/lobergdesign/dot-grid)
