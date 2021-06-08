(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{556:function(t,s,e){"use strict";e.r(s);var a=e(23),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"page-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-title"}},[t._v("#")]),t._v(" "+t._s(t.$page.title))]),t._v(" "),e("h3",{attrs:{id:"html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),e("p",[t._v("Downloading resources in HTML5: "),e("code",[t._v("a[download]")]),t._v(" [https://developers.google.com/web/updates/2011/08/Downloading-resources-in-HTML5-a-download]")]),t._v(" "),e("p",[t._v("做需求发现个问题，文件下载不了，直接打开预览了，但是知道肯定是没设置 "),e("code",[t._v("content-disposition")]),t._v(" 属性，但是不知道为什么 "),e("code",[t._v("download")]),t._v(" 不起作用。")]),t._v(" "),e("p",[t._v("看了一眼 "),e("a",{attrs:{href:"https://html.spec.whatwg.org/dev/links.html#downloading-resources",target:"_blank",rel:"noopener noreferrer"}},[t._v("spec"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("In cross-origin situations, the download attribute has to be combined with the "),e("code",[t._v("Content-Disposition")]),t._v(" HTTP header, specifically with the attachment disposition type, to avoid the user being warned of possibly nefarious activity. (This is to protect users from being made to download sensitive personal or confidential information without their full understanding.)")])]),t._v(" "),e("p",[t._v("应该是如果资源跨域那么 "),e("code",[t._v("download")]),t._v(" 和 "),e("code",[t._v("content-disposition")]),t._v(" 必须一起使用。")]),t._v(" "),e("h3",{attrs:{id:"css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),e("p",[t._v("在移动端浏览器中，如果有自动隐藏地址栏功能，那么当地址栏可见时，"),e("code",[t._v("100vh")]),t._v(" 会出现 Y 轴滚动条。")]),t._v(" "),e("p",[t._v("解决方法：")]),t._v(" "),e("ol",[e("li",[t._v("使用继承")]),t._v(" "),e("li",[t._v("使用 "),e("code",[t._v("window.innerHeight")]),t._v(" 配合 "),e("code",[t._v("CSS Variable")])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// First we get the viewport height and we multiple it by 1% to get a value for a vh unit")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" vh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Then we set the value in the --vh custom property to the root of the document")]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--vh'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("vh"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("px")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".selector")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--vh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1vh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * 100"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("参考:")]),t._v(" "),e("ul",[e("li",[t._v("https://chanind.github.io/javascript/2019/09/28/avoid-100vh-on-mobile-web.html")]),t._v(" "),e("li",[t._v("https://developers.google.com/web/fundamentals/native-hardware/fullscreen")])])])}),[],!1,null,null,null);s.default=n.exports}}]);