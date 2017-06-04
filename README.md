## Installation

```bash
npm install
bundle install --path vendor/bundle
bower install
```

Then run `gulp` to start the local server with BrowserSync.

View locally after minifications `gulp serve:prod`

## Deploying to `gh-pages`
In order to publish your work run `gulp publish && gulp deploy` while on the master branch.

## Technical stuff to write posts

* images needs to be in jpg (width will not be higher than 800px).
* Thumb image needs to be 303x285.
* There need to be `<!-- more -->` tag for the teaser.
* Use title case for titles and headings  - run through [TitleCap](http://www.titlecapitalization.com/) for help (use Chicago Manual of Style).
* Add image by using the [thumbnail.html](https://github.com/Gizra/gizra.com/blame/256e690358c6d7b35363d2eaa5ab1a82ff61fd0a/src/_posts/2016-09-22-yesod-drupal.md#L159)
