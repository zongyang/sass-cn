(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{181:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sass-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass-list","aria-hidden":"true"}},[t._v("#")]),t._v(" sass:list")]),t._v(" "),a("el-collapse",[a("el-collapse-item",{attrs:{title:"兼容性"}},[a("p",[t._v("Dart Sass "),a("Badge",{attrs:{text:"unreleased",vertical:"middle"}}),t._v(" "),a("span",{staticClass:"sa-ver-divider"},[t._v("|")]),t._v("LibSass  ✗"),a("span",{staticClass:"sa-ver-divider"},[t._v("|")]),t._v("Ruby Sass  ✗")],1),t._v(" "),a("p",[t._v("目前只有Dart Sass支持使用"),a("code",[t._v("@use")]),t._v("加载内置模块。其它的实现用户必须使用全局名称来调用函数。")])])],1),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("在Sass中，每个映射可看做是一个列表，映射中的每个键/值可视为的列表中的一个元素。例如，"),a("code",[t._v("(1: 2, 3: 4)")]),t._v("等同于"),a("code",[t._v("(1 2, 3 4)")]),t._v("。因此，所有列表函数也适用于映射!")]),t._v(" "),a("p",[t._v("单个值也算作列表。"),a("code",[t._v("1px")]),t._v("可以看做是包含值"),a("code",[t._v("1px")]),t._v("的列表，即"),a("code",[t._v("[1px]")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"list-append"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-append","aria-hidden":"true"}},[t._v("#")]),t._v(" list.append()")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("包含函数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("list.append($list, $val, $separator: auto)")])]),t._v(" "),a("li",[a("code",[t._v("append($list, $val, $separator: auto)")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("返回值：")]),a("a",{attrs:{href:"/api/Values/Lists"}},[t._v("list")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("$list")]),t._v("的副本末尾加上"),a("code",[t._v("$val")]),t._v("，返回这个副本。")]),t._v(" "),a("p",[a("code",[t._v("$separator")]),t._v("表示列表分隔符，值只能是"),a("code",[t._v("comma,space,auto")]),t._v("，comma表示分号，space表示空格，auto为默认值，不允许使用其他值。"),a("code",[t._v("$separator = auto")]),t._v("时，返回的列表将使用与"),a("code",[t._v("$list")]),t._v("相同的分隔符（如果"),a("code",[t._v("$list")]),t._v("没有分隔符，则使用空格）。")]),t._v(" "),a("br"),t._v(" "),a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"SCSS"}},[a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10px 20px 30px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// blue, red, green")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 30px 40px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10px 20px (30px 40px)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$separator")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" comma"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10px, 20px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$separator")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" space"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// blue red green")]),t._v("\n")])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:"Sass"}},[a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.append(10px 20px, 30px)  // 10px 20px 30px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.append((blue, red), green)  // blue, red, green")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.append(10px 20px, 30px 40px)  // 10px 20px (30px 40px)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.append(10px, 20px, $separator: comma)  // 10px, 20px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.append((blue, red), green, $separator: space)  // blue red green")]),t._v("\n")])])])])],1)],1)]),t._v(" "),a("h2",{attrs:{id:"list-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-index","aria-hidden":"true"}},[t._v("#")]),t._v(" list.index()")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("包含函数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("list.index($list, $value)")])]),t._v(" "),a("li",[a("code",[t._v("index($list, $value)")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("返回值：")]),a("a",{attrs:{href:"/api/Values/Numbers"}},[t._v("number")]),t._v(" | "),a("a",{attrs:{href:"/api/Values/Null"}},[t._v("null")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("p",[t._v("返回"),a("code",[t._v("$value")]),t._v("在"),a("code",[t._v("$list")]),t._v("中的索引值。")]),t._v(" "),a("p",[t._v("如果没有找到，则返回"),a("a",{attrs:{href:"/api/Values/Null"}},[t._v("null")]),t._v("。如果"),a("code",[t._v("$list")]),t._v("中有多个"),a("code",[t._v("$value")]),t._v("，则返回第一次出现的索引。")]),t._v(" "),a("br"),t._v(" "),a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"SCSS"}},[a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" solid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dashed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// null")]),t._v("\n")])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:"Sass"}},[a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.index(1px solid red, 1px)  // 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.index(1px solid red, solid)  // 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.index(1px solid red, dashed)  // null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("list.")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is-bracketed")]),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("($list)")]),t._v("\n")])])])])],1)],1)]),t._v(" "),a("h2",{attrs:{id:"list-is-bracketed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-is-bracketed","aria-hidden":"true"}},[t._v("#")]),t._v(" list.is-bracketed()")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("包含函数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("list.is-bracketed($list)")])]),t._v(" "),a("li",[a("code",[t._v("is-bracketed($list)")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("返回值：")]),a("a",{attrs:{href:"/api/Values/Booleans"}},[t._v("boolean")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("p",[t._v("判断"),a("code",[t._v("$list")]),t._v("中是否有方括号。")]),t._v(" "),a("br"),t._v(" "),a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"SCSS"}},[a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is-bracketed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1px 2px 3px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is-bracketed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("[1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 2px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 3px]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:"Sass"}},[a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.is-bracketed(1px 2px 3px)  // false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.is-bracketed([1px, 2px, 3px])  // true")]),t._v("\n")])])])])],1)],1)]),t._v(" "),a("h2",{attrs:{id:"list-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-join","aria-hidden":"true"}},[t._v("#")]),t._v(" list.join()")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("包含函数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("list.join($list1, $list2, $separator: auto, $bracketed: auto)")])]),t._v(" "),a("li",[a("code",[t._v("join($list1, $list2, $separator: auto, $bracketed: auto)")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("返回值：")]),a("a",{attrs:{href:"/api/Values/Lists"}},[t._v("list")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("p",[t._v("返回一个新列表，其中包含"),a("code",[t._v("$list1")]),t._v("和"),a("code",[t._v("$list2")]),t._v("中所有的元素。")]),t._v(" "),a("p",[a("code",[t._v("$separator")]),t._v("表示返回新列表的分隔符，值只能是"),a("code",[t._v("comma,space,auto")]),t._v("，comma表示分号，space表示空格，auto为默认值，不允许使用其他值。"),a("code",[t._v("$separator = auto")]),t._v("时，返回的新列表使用与"),a("code",[t._v("$list1")]),t._v("相同的分隔符；否则使用"),a("code",[t._v("$list2")]),t._v("；如果"),a("code",[t._v("$list1,$list2")]),t._v("都没有分隔符，则使用空格。")]),t._v(" "),a("p",[a("code",[t._v("$bracketed")]),t._v("用于控制返回的新列表是否有方括号，值只能是"),a("code",[t._v("true,false,auto")]),t._v("，true表示有方括号，false表示没有，auto为默认值。"),a("code",[t._v("$separator = auto")]),t._v("时，返回的新列表的方括号结果与"),a("code",[t._v("$list1")]),t._v("一致。\n"),a("br")]),t._v(" "),a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"SCSS"}},[a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 30px 40px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10px 20px 30px 40px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("#abc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #def"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// blue, red, #abc, #def")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10px 20px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$separator")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" comma"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10px, 20px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("#abc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #def"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$separator")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" space"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// blue red #abc #def")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("[10px]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [10px 20px]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bracketed")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [10px 20px]")]),t._v("\n")])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:"Sass"}},[a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.join(10px 20px, 30px 40px)  // 10px 20px 30px 40px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.join((blue, red), (#abc, #def))  // blue, red, #abc, #def")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.join(10px, 20px)  // 10px 20px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.join(10px, 20px, comma)  // 10px, 20px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.join((blue, red), (#abc, #def), space)  // blue red #abc #def")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.join([10px], 20px)  // [10px 20px]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.join(10px, 20px, $bracketed: true)  // [10px 20px]")]),t._v("\n")])])])])],1),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",[t._v("因为单个值是也是列表，所以"),a("code",[t._v("list.join()")]),t._v("是可以在其末尾添加值的。这是不推荐的，因为如果该值是一个列表，它将被连接起来，这可能不是您所期望的。")]),t._v(" "),a("p",[t._v("使用"),a("a",{attrs:{href:"#list-append"}},[t._v("list.append()")]),t._v("将单个值添加到列表中。"),a("code",[t._v("list.join()")]),t._v("只用于将两个列表合并为一个列表。")])])],1)]),t._v(" "),a("h2",{attrs:{id:"list-length"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-length","aria-hidden":"true"}},[t._v("#")]),t._v(" list.length()")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("包含函数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("list.length($list)")])]),t._v(" "),a("li",[a("code",[t._v("length($list)")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("返回值：")]),a("a",{attrs:{href:"/api/Values/Lists"}},[t._v("list")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("p",[t._v("返回"),a("code",[t._v("$list")]),t._v("的长度。也可以返回映射的键值对个数。\n"),a("br")]),t._v(" "),a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"SCSS"}},[a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px 20px 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:"Sass"}},[a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.length(10px)  // 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.length(10px 20px 30px)  // 3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.length((width: 10px, height: 20px))  // 2")]),t._v("\n")])])])])],1)],1)]),t._v(" "),a("h2",{attrs:{id:"list-separator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-separator","aria-hidden":"true"}},[t._v("#")]),t._v(" list.separator()")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("包含函数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("list.separator($list)")])]),t._v(" "),a("li",[a("code",[t._v("list-separator($list)")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("返回值：")]),a("router-link",{attrs:{to:"/api/Values/Strings.html#带引号的字符串"}},[t._v("unquoted string ")])],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("p",[t._v("返回"),a("code",[t._v("$list")]),t._v("的分隔符，值为"),a("code",[t._v("space,comma")]),t._v("。如果"),a("code",[t._v("$list")]),t._v("没有分隔符，则返回"),a("code",[t._v("sapce")]),t._v("。")]),t._v(" "),a("br"),t._v(" "),a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"SCSS"}},[a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("separator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1px 2px 3px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// space")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("separator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 2px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 3px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// comma")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("separator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helvetica'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// space")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("separator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// space")]),t._v("\n")])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:"Sass"}},[a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.separator(1px 2px 3px)  // space")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.separator(1px, 2px, 3px)  // comma")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.separator('Helvetica')  // space")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.separator(())  // space")]),t._v("\n")])])])])],1)],1)]),t._v(" "),a("h2",{attrs:{id:"list-nth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-nth","aria-hidden":"true"}},[t._v("#")]),t._v(" list.nth()")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("包含函数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("list.nth($list, $n)")])]),t._v(" "),a("li",[a("code",[t._v("nth($list, $n)")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("返回值：")]),t._v(" *")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("p",[t._v("返回在"),a("code",[t._v("$list")]),t._v("第"),a("code",[t._v("$n")]),t._v("个元素，从1开始计数。如果"),a("code",[t._v("$n")]),t._v("是负数，则从"),a("code",[t._v("$list")]),t._v("末尾开始计数。如果找不到，则抛错。")]),t._v(" "),a("br"),t._v(" "),a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"SCSS"}},[a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px 12px 16px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("[line1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line3]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// line3")]),t._v("\n")])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:"Sass"}},[a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.nth(10px 12px 16px, 2)  // 12px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.nth([line1, line2, line3], -1)  // line3")]),t._v("\n")])])])])],1)],1)]),t._v(" "),a("h2",{attrs:{id:"list-set-nth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-set-nth","aria-hidden":"true"}},[t._v("#")]),t._v(" list.set-nth()")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("包含函数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("list.set-nth($list, $n, $value)")])]),t._v(" "),a("li",[a("code",[t._v("set-nth($list, $n, $value)")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("返回值：")]),t._v(" "),a("a",{attrs:{href:"/api/Values/Lists"}},[t._v("list")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("p",[t._v("返回"),a("code",[t._v("$list")]),t._v("的副本，将副本中第"),a("code",[t._v("$n")]),t._v("个值替换为"),a("code",[t._v("$value")]),t._v("。如果"),a("code",[t._v("$n")]),t._v("是负数，则从"),a("code",[t._v("$list")]),t._v("末尾开始计数。如果找不到，则抛错。")]),t._v(" "),a("br"),t._v(" "),a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"SCSS"}},[a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set-nth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px 20px 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 2em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2em 20px 30px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set-nth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px 20px 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 8em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10px, 20px, 8em")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set-nth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Helvetica"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Arial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sans-serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Roboto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Helvetica, Arial, Roboto")]),t._v("\n")])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:"Sass"}},[a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.set-nth(10px 20px 30px, 1, 2em); // 2em 20px 30px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.set-nth(10px 20px 30px, -1, 8em); // 10px, 20px, 8em")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.set-nth((Helvetica, Arial, sans-serif), 3, Roboto); // Helvetica, Arial, Roboto")]),t._v("\n")])])])])],1)],1)]),t._v(" "),a("h2",{attrs:{id:"list-zip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-zip","aria-hidden":"true"}},[t._v("#")]),t._v(" list.zip()")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("包含函数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("list.zip($lists...)")])]),t._v(" "),a("li",[a("code",[t._v("zip($lists...)")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("返回值：")]),t._v(" "),a("a",{attrs:{href:"/api/Values/Lists"}},[t._v("list")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("p",[t._v("将"),a("code",[t._v("$lists")]),t._v("中的每个列表合并为子列表的单个列表。")]),t._v(" "),a("p",[t._v("返回列表中的每个元素包含"),a("code",[t._v("$list")]),t._v("中该位置的所有元素。返回的列表与"),a("code",[t._v("$lists")]),t._v("中最短的列表一样长。")]),t._v(" "),a("p",[t._v("返回的列表用逗号分隔，子列表用空格分隔。")]),t._v(" "),a("br"),t._v(" "),a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"SCSS"}},[a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px 50px 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" short mid long"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10px short, 50px mid, 100px long")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@debug")]),t._v(" list."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px 50px 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" short mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10px short, 50px mid")]),t._v("\n")])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:"Sass"}},[a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.zip(10px 50px 100px, short mid long)  // 10px short, 50px mid, 100px long")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@debug")]),t._v(" list.zip(10px 50px 100px, short mid)  // 10px short, 50px mid")]),t._v("\n")])])])])],1)],1)])],1)},[],!1,null,null,null);s.default=n.exports}}]);