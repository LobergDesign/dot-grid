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
npm install @lobergdesign/dot-grid
```

Then import in your CSS/SCSS:

```css
@import '@lobergdesign/dot-grid';
```

Or in your HTML:

```html
<link
  rel="stylesheet"
  href="node_modules/@lobergdesign/dot-grid/dist/grid.min.css"
/>
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@lobergdesign/dot-grid@latest/dist/grid.min.css"
/>
```

## 🚀 Quick Start

### Basic Grid

```html
<div class="grid-w">
  <div class="grid-r">
    <div class="grid-c-12 grid-c-md-6 grid-c-lg-4">Column 1</div>
    <div class="grid-c-12 grid-c-md-6 grid-c-lg-4">Column 2</div>
    <div class="grid-c-12 grid-c-md-6 grid-c-lg-4">Column 3</div>
  </div>
</div>
```

### Fluid/Auto Grid (No Breakpoints Needed!)

```html
<div class="grid-w">
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

- `.grid-w` - Centers content with max-width and responsive padding

#### Grid Container

- `.grid-r` - Creates a 12-column grid container with container query support

### Column Classes

#### Basic Columns

```html
<div class="grid-c-1">...</div>
<!-- Spans 1 column -->
<div class="grid-c-6">...</div>
<!-- Spans 6 columns (50%) -->
<div class="grid-c-12">...</div>
<!-- Spans 12 columns (100%) -->
```

All classes from `.grid-c-1` through `.grid-c-12` are available.

#### Container Query Responsive (Modern, Recommended)

Responds to the **container width**, not viewport:

```html
<div class="grid-c-12 grid-c-sm-6 grid-c-md-4 grid-c-lg-3">
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
<div class="grid-c-vp-md-6 grid-c-vp-lg-4">Responds to viewport size</div>
```

### Column Positioning

#### Start Position

```html
<div class="grid-c-3 grid-c-start-4">Starts at column 4, spans 3 columns</div>
```

Responsive start positions:

```html
<div class="grid-c-6 grid-c-start-md-7 grid-c-start-lg-4">
  Different start positions at different sizes
</div>
```

### Gap Utilities

```html
<!-- Remove all gaps -->
<div class="grid-r no-gap">...</div>
```

### Subgrid

Perfect alignment for nested grids:

```html
<div class="grid-r">
  <div class="grid-c-12 grid-r-subgrid">
    <!-- These inherit the parent's column tracks -->
    <div class="grid-c-4">Aligned 1</div>
    <div class="grid-c-4">Aligned 2</div>
    <div class="grid-c-4">Aligned 3</div>
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
<div class="grid-r-fluid-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Also available: grid-r-fluid-3, grid-r-fluid-4 -->
```

#### RAM Pattern (Repeat Auto Minmax)

```html
<div class="grid-r-ram" style="--col-min: 250px">
  <div>Equal column 1</div>
  <div>Equal column 2</div>
  <div>Equal column 3</div>
</div>
```

#### Other Fluid Patterns

- `.grid-r-intrinsic` - Columns size based on content
- `.grid-r-even` - Even columns sharing space equally
- `.grid-r-dense` - Fills gaps in the grid (masonry style)

### Content Placement

Align content within a column:

```html
<!-- Pattern: place-{vertical}-{horizontal} -->
<div class="grid-c-6 place-t-l">Top Left</div>
<div class="grid-c-6 place-c-c">Center Center</div>
<div class="grid-c-6 place-b-r">Bottom Right</div>
```

**Vertical options:** `t` (top), `c` (center), `b` (bottom)
**Horizontal options:** `l` (left), `c` (center), `r` (right)

### Flexbox Utilities

For flex-based alignment within columns:

```html
<div class="grid-c-12 justify-between">
  <span>Left</span>
  <span>Right</span>
</div>
```

Available: `.justify-start`, `.justify-end`, `.justify-center`, `.justify-between`, `.justify-around`, `.justify-evenly`

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
<div class="grid-c-min">Shrinks to min content</div>
<div class="grid-c-max">Expands to max content</div>
<div class="grid-c-fit">Fits content</div>
<div class="grid-c-auto">Auto-sized</div>
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
  --grid-w-max-width: 1400px;
  --grid-w-width: 95vw;

  /* Customize fluid layouts */
  --grid-auto-min: 300px; /* For grid-auto-fit */
  --grid-c-min-width: 250px; /* For grid-c-fluid */
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
  xxl: 1600px,
);

@use '@lobergdesign/dot-grid/src/grid';
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

### New Features (Additive)

- Subgrid support
- Fluid layout utilities
- More gap utilities
- Aspect ratio utilities
- Display utilities
- CSS custom properties

## 📄 License

MIT © Jean Loberg
