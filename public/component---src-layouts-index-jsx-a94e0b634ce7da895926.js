webpackJsonp([0x486811019d936800,0x36dfee11ec260a00],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/klee8/Workspace/kevinkiklee.com/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/klee8/Workspace/kevinkiklee.com/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/klee8/Workspace/kevinkiklee.com/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/klee8/Workspace/kevinkiklee.com/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/klee8/Workspace/kevinkiklee.com/node_modules/babel-preset-stage-0/lib/index.js","/Users/klee8/Workspace/kevinkiklee.com/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},r=o("./node_modules/react/react.js"),l=s(r),a=o("./src/layouts/index.jsx"),i=s(a),u=o("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),c=s(u);t.default=function(e){return l.default.createElement(i.default,n({},e,c.default))},e.exports=t.default},"./node_modules/css-loader/lib/css-base.js":function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(s[r]=!0)}for(n=0;n<t.length;n++){var l=t[n];"number"==typeof l[0]&&s[l[0]]||(o&&!l[2]?l[2]=o:o&&(l[2]="("+l[2]+") and ("+o+")"),e.push(l))}},e}},"./src/layouts/index.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"*{box-sizing:border-box}html{height:100%}body{margin:0;padding:20px}",""])},"./src/layouts/index.jsx":function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=o("./node_modules/react/react.js"),i=s(a),u=o("./node_modules/react-helmet/lib/Helmet.js"),c=s(u),d=o("./data/SiteConfig.js"),f=s(d);o("./src/layouts/index.css");var p=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=f.default.pathPrefix?f.default.pathPrefix:"/",o=this.props.location.pathname.replace(t,"").replace("/",""),s="";if(""===o)s="Home";else if("tags/"===o)s="Tags";else if("categories/"===o)s="Categories";else if("about/"===o)s="About";else if(o.includes("posts"))s="Article";else if(o.includes("tags/")){var n=o.replace("tags/","").replace("/","").replace("-"," ");s="Tagged in "+e(n)}else if(o.includes("categories/")){var r=o.replace("categories/","").replace("/","").replace("-"," ");s=""+e(r)}return s},t.prototype.render=function(){var e=this.props.children;return i.default.createElement("div",null,i.default.createElement(c.default,null,i.default.createElement("title",null,f.default.siteTitle+" |  "+this.getLocalTitle()),i.default.createElement("meta",{name:"description",content:f.default.siteDescription})),e())},t}(i.default.Component);t.default=p,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-jsx-a94e0b634ce7da895926.js.map