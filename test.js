// load the entrypoint in node for simplicity.
// the same error happens when included in a page and loaded in a browser.
global.window = {};
require('./dist/entry1.js');