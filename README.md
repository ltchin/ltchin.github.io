README.md

Building off of 
* [this tutorial](https://hugo-mini-course.netlify.app/sections/)
* [this theme](https://xmin.yihui.org/about/)
* and visual inspiration from [this Jekyll site](https://jmcglone.com)

Helpful resources for dev:
* [Tutorial for Hugo folder structure](https://jpdroege.com/blog/hugo-file-organization/)
* [this Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Tutorial for converting from Bootstrap to CSS Grid](https://hacks.mozilla.org/2017/04/replace-bootstrap-layouts-with-css-grid/)
* `assets` are only loaded when they are needed. `static` is always loaded.
	* images that are directly linked to should be in `static` while images that are processed should be in `assets`. 
	* Images that are processed from `assets` may need a server restart in order to see the proper changes, due to caching. 
	* If things are stored in `assets`, you may need to do a brute force call of them to get them in the cache.
* [The idea of the "microcommit"](https://www.industriallogic.com/blog/whats-this-about-micro-commits/)

Notes
* `<head>` is for indexing only, not for visible changes
* edit config.yaml for deciding which theme to use
* Run "hugo --gc --minify" to prevent excessive amounts of whitespace in the generated html
* Use ctrl+shift+R to force cache to refresh for CSS
* There is a bug that doesn't let you do shortcodes and markdown within inner, so unfortunately this means no Markdown within my toggle galleries
* For some reason, the default github pages action does not work so we have to do the docs compilation approach instead