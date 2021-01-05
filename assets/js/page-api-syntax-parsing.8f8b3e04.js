(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{227:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析","aria-hidden":"true"}},[s._v("#")]),s._v(" 解析")]),s._v(" "),t("vp-ad-top"),s._v(" "),t("p",[s._v("Sass样式表从Unicode代码点序列解析。它是直接解析的，不需要首先转换为令牌流。")]),s._v(" "),t("h2",{attrs:{id:"输入代码的编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入代码的编码","aria-hidden":"true"}},[s._v("#")]),s._v(" 输入代码的编码")]),s._v(" "),t("p",[s._v("兼容性：Dart Sass ✗"),t("span",{staticClass:"sa-ver-divider"},[s._v("|")]),s._v("LibSass  ✓"),t("span",{staticClass:"sa-ver-divider"},[s._v("|")]),s._v("Ruby Sass  ✓")]),s._v(" "),t("blockquote",[t("p",[s._v("Dart Sass目前只支持UTF-8编码。因此，将所有Sass样式表编码为UTF-8是最安全的。")])]),s._v(" "),t("p",[s._v("通常情况下，一个文件最初只能作为字节序列使用，必须将其解码为Unicode。Sass的解码过程如下:")]),s._v(" "),t("ul",[t("li",[s._v("如果字节序列以U+FEFF字节顺序标记的UTF-8或UTF-16编码开始，则使用相应的编码。")]),s._v(" "),t("li",[s._v("如果字节序列以纯ASCII字符串"),t("code",[s._v("@charset")]),s._v("开始，那么Sass使用CSS算法的第2步确定编码，以确定"),t("a",{attrs:{href:"https://drafts.csswg.org/css-syntax-3/#input-byte-stream",target:"_blank",rel:"noopener noreferrer"}},[s._v("fallback encoding"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("li",[s._v("否则，使用UTF-8。")])]),s._v(" "),t("h2",{attrs:{id:"解析错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析错误","aria-hidden":"true"}},[s._v("#")]),s._v(" 解析错误")]),s._v(" "),t("p",[s._v("当Sass在样式表中遇到无效语法时，解析将失败，并向用户提供关于无效语法的位置和无效原因的信息。")]),s._v(" "),t("p",[s._v("注意，这与CSS不同，CSS指定如何从大多数错误中恢复，而不是立即失败。这是SCSS严格来说不是CSS超集的少数情况之一。然而，让Sass用户立即看到错误要比让错误通过CSS输出有用得多。")]),s._v(" "),t("p",[s._v("可以通过特定实现的api访问解析错误的位置。例如，在Dart Sass中，您可以访问"),t("a",{attrs:{href:"https://pub.dartlang.org/documentation/sass/latest/sass/SassException/span.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("SassException.span"),t("OutboundLink")],1),s._v("在Node Sass和Dart Sass的JS API中，您可以访问"),t("a",{attrs:{href:"https://github.com/sass/node-sass#error-object",target:"_blank",rel:"noopener noreferrer"}},[s._v("file、line、column"),t("OutboundLink")],1),s._v("属性。")])],1)},[],!1,null,null,null);a.default=r.exports}}]);