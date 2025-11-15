// PurgeCSS Configuration for dot-grid
// This is an example configuration for end-users
// Copy this to your project root and customize as needed

module.exports = {
  content: [
    // Scan your source files for class names
    './src/**/*.{html,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.html',
    // Add more paths as needed
  ],

  css: [
    // Path to your compiled dot-grid CSS
    './node_modules/@lobergdesign/dot-grid/dist/grid.css',
    // Or if you import the source:
    // './path/to/compiled/css/with/dot-grid.css'
  ],

  // Safelist: patterns that should never be purged
  safelist: {
    // Safelist all dot-grid core classes
    standard: [
      'grid-w',
      'grid-r',
      'no-gap',
      'hidden',
    ],

    // Safelist patterns using regex
    greedy: [
      // Grid column classes: grid-c-1 through grid-c-12
      /^grid-c-\d{1,2}$/,

      // Grid column start: grid-c-start-1 through grid-c-start-12
      /^grid-c-start-\d{1,2}$/,

      // Responsive column classes: grid-c-sm-6, grid-c-md-4, etc.
      /^grid-c-(sm|md|lg|xl|xxl)-\d{1,2}$/,

      // Responsive start: grid-c-start-sm-1, etc.
      /^grid-c-start-(sm|md|lg|xl|xxl)-\d{1,2}$/,

      // Viewport-based: grid-c-vp-md-6, etc.
      /^grid-c-vp-(sm|md|lg|xl|xxl)-\d{1,2}$/,
      /^grid-c-start-vp-(sm|md|lg|xl|xxl)-\d{1,2}$/,

      // Subgrid classes
      /^grid-[rc]-subgrid$/,

      // Fluid row classes
      /^grid-r-(fluid-[234]|ram|intrinsic|even|dense|flexible)$/,

      // Grid auto classes
      /^grid-auto-(fit|fill)$/,

      // Placement utilities: place-t-l, place-c-c, etc.
      /^place-[tcb]-[lcr]$/,

      // Justify utilities
      /^justify-(start|end|center|between|around|evenly|space-).*$/,

      // Sizing utilities
      /^grid-c-(min|max|fit|auto|fluid)$/,

      // Display utilities (responsive)
      /^(hidden|block|grid|flex)-(sm|md|lg|xl|xxl)$/,
      /^(hidden|block|grid|flex)-vp-(sm|md|lg|xl|xxl)$/,
    ],
  },

  // Extract dynamic class names from JavaScript strings
  defaultExtractor: (content) => {
    // Match class names in strings, including dynamically generated ones
    return content.match(/[A-Za-z0-9-_:/]+/g) || [];
  },
};
