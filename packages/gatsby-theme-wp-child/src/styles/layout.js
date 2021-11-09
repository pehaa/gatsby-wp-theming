export const contentStyles = {
  '.blocks-gallery-grid': {
    maxWidth: '100%',
    'figure > a': {
      maxW: '100%',
    },
    '.gatsby-image-wrapper': {
      h: '100%',
    },
  },
  '.entry-content .wp-audio-shortcode, .entry-content > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.wp-block-separator), *[class*=inner-container] > *:not(.entry-content):not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.wp-block-separator)':
    {
      mx: 'auto',
      maxWidth: (theme) => theme.sizes.defaultContent,
      px: 4,
    },
  '.alignwide': {
    mx: 'auto',
    maxWidth: (theme) => theme.sizes.wideContent,
  },
  '.alignfull': {
    mx: 'auto',
    width: 'auto',
    maxWidth: (theme) => theme.sizes.fullContent,
  },
  '.entry-content ul:not(.blocks-gallery-grid), .entry-content ol': {
    pl: 6,
  },
}
