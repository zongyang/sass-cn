(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{195:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"扩展与继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展与继承","aria-hidden":"true"}},[s._v("#")]),s._v(" 扩展与继承")]),s._v(" "),a("vp-ad-top"),s._v(" "),a("p",[s._v("这是Sass最有用的特性之一。使用"),a("code",[s._v("@extend")]),s._v("可以让您从一个选择器到另一个选择器共享一组CSS属性。它有助于Sass保持DRY(Don't Repeat Yourself)。在我们的示例中，我们将创建"),a("code",[s._v("message\\errors\\warnings\\successes")]),s._v(" 继承自同一占位符类。占位符类是一种特殊类型的类，它只在被继承使用时才会被编译到css，这样可以保持编译后的CSS整洁。")]),s._v(" "),a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"SCSS"}},[a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 这段css将会被编译，因为message、success、error、warning中用到了%message-shared */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token placeholder"}},[s._v("%message-shared")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid #ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #333"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*  这段将不会被编译，因为没有被继承使用过 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token placeholder"}},[s._v("%equal-heights")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".message ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@extend")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token placeholder selector"}},[s._v("%message-shared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".success ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@extend")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token placeholder selector"}},[s._v("%message-shared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".error ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@extend")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token placeholder selector"}},[s._v("%message-shared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".warning ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@extend")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token placeholder selector"}},[s._v("%message-shared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),a("el-tab-pane",{attrs:{label:"Sass"}},[a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 这段css将会被编译，因为message、success、error、warning中用到了%message-shared */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("%message-shared")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid #ccc")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #333")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*  这段将不会被编译，因为没有被继承使用过 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("%equal-heights")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wrap")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".message")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@extend")]),s._v(" %message-shared")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".success")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@extend")]),s._v(" %message-shared")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".error")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@extend")]),s._v(" %message-shared")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".warning")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@extend")]),s._v(" %message-shared")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yellow")]),s._v("\n")])])])]),s._v(" "),a("el-tab-pane",{attrs:{label:"CSS"}},[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 这段css将会被编译，因为message、success、error、warning中用到了%message-shared */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".message, .success, .error, .warning")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid #ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #333"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".success")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".error")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".warning")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])],1),s._v(" "),a("p",[s._v("上面的代码告诉"),a("code",[s._v(".message、.success、.error")]),s._v("和"),a("code",[s._v(".warning")]),s._v("的行为类似于"),a("code",[s._v("%message-shared")]),s._v("。这意味着在出现"),a("code",[s._v("%message-shared")]),s._v("的任何地方，"),a("code",[s._v(".message、.success、.error")]),s._v("和"),a("code",[s._v(".warning")]),s._v("也会出现。神奇的事情发生在生成的CSS中，其中每个类都将获得与"),a("code",[s._v("%message-shared")]),s._v("相同的CSS属性。这有助于避免在HTML元素上编写多个类名。")]),s._v(" "),a("p",[s._v("除了Sass中的占位符类之外，您还可以扩展大多数简单的CSS选择器，但使用占位符是确保不需要扩展的类出现在css的最简便的方法，可以避免CSS中出现意外的选择器。")]),s._v(" "),a("p",[a("code",[s._v("%equal-heights")]),s._v("在CSS中不会被编译，因为"),a("code",[s._v("%equal-heights")]),s._v("没有被继承过。")])],1)},[],!1,null,null,null);t.default=n.exports}}]);