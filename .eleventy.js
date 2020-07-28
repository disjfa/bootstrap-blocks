const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("build");
  eleventyConfig.addPassthroughCopy("screenshot");
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addFilter("myFilter", function (myVariable, lang= 'html') {

    let html = Prism.highlight(myVariable, Prism.languages[lang], lang);
    html = `<pre class="language-${lang}"><code class="language-${lang}">${html}</code></pre>`;

    return myVariable + html;
  });

  return {
    pathPrefix: "/bootstrap-blocks",

    dir: {
      input: "_site",
      output: "dist"
    }
  };
};
