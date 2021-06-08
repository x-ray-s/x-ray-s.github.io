(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{480:function(t,a,s){"use strict";s.r(a);var e=s(23),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"page-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-title"}},[t._v("#")]),t._v(" "+t._s(t.$page.title))]),t._v(" "),s("p",[t._v("准备好自动更新的静态服务")]),t._v(" "),s("p",[t._v("这里使用 "),s("code",[t._v("vue-cli-plugin-electron-builder")]),t._v(" 脚手架，配置与 "),s("code",[t._v("electron-builder")]),t._v(" 相似")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("pluginOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("electronBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("builderOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pulish "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    provider"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'generic'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_STATIC_SERVER'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("在本地测试开发时，可以创建一个名为 "),s("code",[t._v("dev-app-updater.yml")]),t._v("， 放置在编译目录"),s("code",[t._v("/dist_electron/")]),t._v("下，在开发模式下可以检查更新。")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" generic\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("channel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" latest\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("electron-updater")]),t._v(" 时，如果需要手动更新，需要配置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" autoUpdater "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron-updater'")]),t._v("\nautoUpdater"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoDownload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),s("p",[t._v("因为使用了 "),s("code",[t._v("vuex")]),t._v(" 和 "),s("code",[t._v("vuex-electron")]),t._v(", 所以需要在进程之间共享状态时，可以选择用 Store，也可以选择使用 ipcMain 与 webContents 进行传递数据。\n一般需要数据持久化的使用 Store, 因为是基于文件写入的。一些无状态的数据，使用进行通信比较简单，因为不需要考虑数据的初始化和重置。")])])}),[],!1,null,null,null);a.default=n.exports}}]);