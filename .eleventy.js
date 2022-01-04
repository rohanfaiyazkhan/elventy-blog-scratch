const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const { DateTime } = require('luxon')
const CleanCSS = require('clean-css')
const { minify } = require('terser')
const markdownEmoji = require('markdown-it-emoji')
const markdownFootnotes = require('markdown-it-footnote')

String.prototype.stripSurroundingParagraphTag = function () {
  let output = this
  if (this.startsWith('<p>')) {
    output = output.slice(3)
  }

  if (this.endsWith('</p>')) {
    output = output.slice(0, -4)
  }

  return output
}

const MARKDOWN_OPTIONS = {
  html: true,
  breaks: true,
  linkify: true,
}

module.exports = (config) => {
  config.addPlugin(eleventyNavigationPlugin)
  config.addPlugin(pluginSyntaxHighlight)

  config.addPassthroughCopy('styles')
  config.addPassthroughCopy('img')
  config.addPassthroughCopy('video')

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    // Tweak for Turbolinks & Browserstack Compatibility
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match
        },
      },
    },
  })
  config.setDataDeepMerge(true)

  config.addFilter('readableDate', (dateObj) => {
    if (dateObj) {
      const date = DateTime.fromJSDate(dateObj).toFormat('dd LLL yyyy')

      return date
    }
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd')
  })

  // Get the first `n` elements of a collection.
  config.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n)
    }

    return array.slice(0, n)
  })

  config.addFilter('published', (posts) => {
    if (process.env.ELEVENTY_ENV !== 'development') {
      return posts.filter((post) => !post.data.draft)
    } else {
      return posts
    }
  })

  // Return the smallest number argument
  config.addFilter('min', (...numbers) => {
    return Math.min(...numbers)
  })

  config.addFilter('findCategoryTag', (tags) => {
    if (!tags) return undefined

    if (tags.includes('research')) return 'research'

    if (tags.includes('tech')) return 'tech'

    return undefined
  })

  config.addFilter('filterTags', (tags) => {
    return (tags || []).filter(
      (tag) => !['posts', 'research', 'tech'].includes(tag)
    )
  })

  config.addFilter('showPrimaryTag', (tag) => {
    return tag === 'research' ? 'ACADEMIC' : 'DEV'
  })

  config.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles
  })

  config.addShortcode('year', () => `${new Date().getFullYear()}`)

  config.addNunjucksAsyncFilter('jsmin', async function (code, callback) {
    try {
      const minified = await minify(code)
      callback(null, minified.code)
    } catch (err) {
      console.error('Terser error: ', err)
      // Fail gracefully.
      callback(null, code)
    }
  })

  config.addLayoutAlias('post', 'layouts/post.njk')
  config.addLayoutAlias('about', 'layouts/image-layout.njk')
  config.addLayoutAlias('base', 'layouts/base.njk')
  config.addLayoutAlias('blog', 'components/blog-post/blog-post.njk')
  config.addLayoutAlias('landing', 'layouts/landing.njk')

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt(MARKDOWN_OPTIONS)
    .use(markdownItAnchor, {
      permalink: true,
      permalinkClass: 'direct-link',
      permalinkSymbol: '#',
      level: 2,
    })
    .use(markdownEmoji)
    .use(markdownFootnotes)
  config.setLibrary('md', markdownLibrary)

  config.setFrontMatterParsingOptions({
    excerpt: true,
  })

  config.addFilter('toHTML', (str) => {
    return new markdownIt(MARKDOWN_OPTIONS).renderInline(str)
  })

  return {
    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: 'njk',

    // Opt-out of pre-processing global data JSON files: (default: `liquid`)
    dataTemplateEngine: false,
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
