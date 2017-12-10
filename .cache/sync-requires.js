// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/klee8/Workspace/kevinkiklee.com/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/klee8/Workspace/kevinkiklee.com/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/klee8/Workspace/kevinkiklee.com/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/klee8/Workspace/kevinkiklee.com/.cache/json/layout-index.json"),
  "404.json": require("/Users/klee8/Workspace/kevinkiklee.com/.cache/json/404.json"),
  "layout-index.json": require("/Users/klee8/Workspace/kevinkiklee.com/.cache/json/layout-index.json"),
  "index.json": require("/Users/klee8/Workspace/kevinkiklee.com/.cache/json/index.json"),
  "layout-index.json": require("/Users/klee8/Workspace/kevinkiklee.com/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/klee8/Workspace/kevinkiklee.com/.cache/json/page-2.json"),
  "layout-index.json": require("/Users/klee8/Workspace/kevinkiklee.com/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/klee8/Workspace/kevinkiklee.com/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": preferDefault(require("/Users/klee8/Workspace/kevinkiklee.com/.cache/layouts/index.js"))
}