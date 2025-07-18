# Feather Wiki

A 58.163 kilobyte [quine](https://en.wikipedia.org/wiki/Quine_(computing)) for creating simple, self-contained wikis. The idea is that it's like [TiddlyWiki](https://tiddlywiki.com) but as small as possible.

Check out the [Documentation](https://feather.wiki) to see it in action and learn how to use it!

## Browser Compatibility

Feather Wiki will only run on browsers that support [ECMAScript 2015](https://caniuse.com/es6) (also known as ES6) features.

<details>
<summary>👨‍💻 Technical Talk: Supported Browsers</summary>

According to [this ECMAScript compatibility table](https://compat-table.github.io/compat-table/es6/), the following browser versions should definitely be able to run Feather Wiki version 1.3.0 and up without issues:

- Chrome 86+
- Edge 87+
- Firefox 88+
- iOS Safari 12+
- Opera 73+
- Opera Mobile 62+
- Safari 13+
- Samsung Internet for Android 12+

The chart linked above is incomplete, so if your browser is older than any of these, you _might_ still be able to run Feather Wiki, but you'll have to check yourself if it supports [features from ECMAScript 2015](https://caniuse.com/es6).

</details>

### Server-Saving

Feather Wiki includes code for saving to web servers that are set up in a particular way. It expects a `dav` header with any value to be returned by an `OPTIONS` call to the server at the same address as the Feather Wiki file is served. If the server looks compatible, Feather Wiki will display a "Save Wiki to Server" button above a "Save Wiki Locally" button.

When the user clicks the "Save Wiki to Server" button, Feather Wiki will send a `PUT` request to the server with a body that contains the full HTML output of the Feather Wiki file that would normally be downloaded to the computer. If you want password protection on your wiki (and I think you _should_), then you'll need to implement that in a way that the server can understand, whether by having the user log in on a different page and saving to a domain cookie or by using basic HTTP auth—the choice is yours.

After sending to the server, Feather Wiki expects either a success or failed response with an optional text message as the body to explain a failure. If not text is returned in the response body on a failure, it will simply display the status code in a message box, eg. "Save Failed! Status 403." On success, Feather Wiki will display "Saved."

You can see this functionality on [Tiddlyhost](https://tiddlyhost.com) or by using a [self-hosted nest](https://codeberg.org/Alamantus/FeatherWiki/src/branch/main/nests) from this repository!

## Plumage & Bones

Feather Wiki's CSS and JavaScript files are available separately from the full HTML, but it is important to note that the JavaScript currently expects both its code and the CSS to be _on the HTML page_ that is loaded _in full_ in order to save! Specifically, the contents of the `.js` file _must_ be in the HTML output inside of a `<script id="a">` script tag with the id as specified (`a`), and the contents of the `.css` _must_ be in the HTML output inside of a `<script id="s">` style tag with the id as specified (`s`). If you don't need to save your wiki, then you don't need to do this.

## Contribution

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for details on how you can help with the project. Details on adding non-English translations to Feather Wiki are included there.

If you want to support the developer monetarily, you can send one-time donations via <https://buymeacoffee.com/robbieantenesse> or <https://ko-fi.com/robbieantenesse>, or you can use <https://liberapay.com/robbieantenesse> to set up recurring donations. This is absolutely not required, but it's greatly appreciated!

## Development

Feather Wiki uses only a few JavaScript dependencies to function on the front end, but it requires more to develop.

To get your computer set up to develop:

1. Install [Git](https://git-scm.com)
1. Install [Node](https://nodejs.org)
1. Use a command line or terminal
1. Clone the git repo with `git clone https://codeberg.org/Alamantus/FeatherWiki.git`
1. Navigate to your cloned repo `cd FeatherWiki`
1. Run `npm install`
1. Run `npm start` and visit http://localhost:3000 in your browser
1. Start making changes to the JavaScript to update your build—you will need to refresh your browser to see your changes
  - Note: Changing the CSS doesn't automatically update the build, so you'll need to modify some JS or restart the script to see those changes

When you're ready to build, simply use the `npm run build` to build Feather Wiki.

To test a build, you can use `npm test` to build and serve the Server build on a local http server. The test script will allow
Feather Wiki to use the "Save Wiki to Server" button—the output gets saved to `develop/put-save.html` if you need
to check it.

### Details

Feather Wiki uses a modified version of [Choo](https://choo.io) as its [base JavaScript framework](./nanochoo.js), a subset of [JSON-Compress](https://github.com/Alamantus/JSON-Compress) for minifying JSON output, a customized [pell](https://jaredreich.com/pell/) for its [HTML editor](./helpers/ed.js), and a greatly customized [md.js](https://github.com/thysultan/md.js) for its [Markdown parsing](./helpers/md.js).

The overarching goal is to keep Feather Wiki as small as possible while still providing the most important features. Unfortunately, that's a pretty loose and fluid goal, but as long as you keep "as small as possible" in mind, you probably won't go too far astray.

## License Clarification

Feather Wiki is an HTML document containing a self-replicating JavaScript application for creating wiki-style websites whose content is also stored in the output.  
Copyright (C) 2022 [Robbie Antenesse](https://robbie.antenesse.net) \<dev@alamantus.com\>

Feather Wiki is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

Any content created by a user using any version of Feather Wiki is
the property of its creator. User-created data and the replicated
copies of Feather Wiki containing user-created data can be used and
distributed however their creator see fit. The GNU Affero General
Public License applies to the code that constitutes the Feather Wiki
application and NOT the content created by users of Feather Wiki
unless explicitly stated by the user within their own content.

Feather Wiki is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

A [copy of the GNU Affero General Public License](https://codeberg.org/Alamantus/FeatherWiki/src/branch/main/LICENSE)
is included in the source code of Feather Wiki. If not, see
https://www.gnu.org/licenses/.
