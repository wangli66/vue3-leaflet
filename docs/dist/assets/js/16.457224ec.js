(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{361:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));a(123),a(61),a(31),a(6),a(363),a(90),a(91),a(206),a(364),a(122);var s=a(362);function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(s.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},362:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a(122);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},363:function(t,e,a){var s=a(2),n=a(3),l=a(19),r=a(32).f,o=a(8),c=n((function(){r(1)}));s({target:"Object",stat:!0,forced:!o||c,sham:!o},{getOwnPropertyDescriptor:function(t,e){return r(l(t),e)}})},364:function(t,e,a){var s=a(2),n=a(8),l=a(124).f;s({target:"Object",stat:!0,forced:Object.defineProperties!==l,sham:!n},{defineProperties:l})},496:function(t,e,a){"use strict";a.r(e);var s=a(361),n={name:"component-doc",components:{"render-demo-0":Object(s.a)({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[[e("l-map",{staticStyle:{height:"400px"},attrs:{center:[30.724719,114.169496],zoom:12}},[e("l-tile-layer",{attrs:{url:this.tileUrl,options:this.options}}),this._v(" "),e("l-marker",{attrs:{latlng:[30.724719,114.169496]}},[e("l-popup",[this._v("hello!"),e("br"),this._v("这是一个slot的写法")])],1),this._v(" "),e("l-popup",{attrs:{latlng:[30.724719,114.209496],content:this.content}})],1)]],2)},staticRenderFns:[]},{data:function(){return{tileUrl:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}",options:{foo:"bar"},content:'<p style="color:red;">Hello world!<br />This is a nice popup.</p>'}}})}},l=a(18),r=Object(l.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("温馨提醒")]),t._v(" "),a("p",[t._v("使用时，经常与带坐标的图层一起使用，如 marker： marker.bindPopup(popupContent).openPopup();")])]),t._v(" "),a("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[a("template",{slot:"demo"},[[a("render-demo-0")]],2),t._v(" "),a("template",{slot:"source"},[a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-map")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":center")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[30.724719,114.169496]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":zoom")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-tile-layer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":url")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tileUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":options")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-tile-layer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-marker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":latlng")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[30.724719,114.169496]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-popup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("这是一个slot的写法"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-popup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-marker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-popup")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":latlng")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[30.724719,114.209496]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-popup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tileUrl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<p style=\"color:red;\">Hello world!<br />This is a nice popup.</p>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),a("h2",{attrs:{id:"属性说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性说明"}},[t._v("#")]),t._v(" 属性说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("latlng")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("latlng,array,object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[0,0]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("popup 显示的坐标位置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string,function,htmlElement")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("popup 显示的内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("layer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object|Layer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("想要插入的图层")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("options")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("具体见下表")])])])]),t._v(" "),a("h3",{attrs:{id:"options-说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-说明"}},[t._v("#")]),t._v(" Options 说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("maxWidth")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("300")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("弹窗的最大宽度，单位为像素")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("minWidth")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("50")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("弹窗的最小宽度，单位为像素")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("maxHeight")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("null")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果设置，如果内容超过此高度时，则在弹出窗口中显示滚动条。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("autoPan")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果您不希望地图进行平移动画以适应打开的弹出窗口， 请将其设置为 false。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("autoPanPaddingTopLeft")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Point")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("null")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("执行自动平移后，弹窗和地图视图左上角之间的边距。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("autoPanPaddingBottomRight")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Point")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("null")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("执行自动平移后，弹窗和地图视图右下角之间的边距。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("autoPanPadding")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Point")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Point(5, 5)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("相当于将左上角和右下角的自动平移填充设置为相同的值。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("keepInView")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果你想防止用户在屏幕打开时弹出屏幕上的弹出窗口，将其设置为 true.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("closeButton")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("弹窗中是否存在关闭按钮")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("autoClose")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果在打开另一个弹窗时，是否自动关闭之前的弹窗.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("closeOnEscapeKey")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Set it to "),a("code",[t._v("false")]),t._v(" if you want to override the default behavior of the ESC key for closing of the popup.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("closeOnClick")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("*")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果要覆盖用户在地图上单击的弹出窗口关闭的默认行为，请设置它。默认为 Map 的 closePopupOnClick 选项。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("className")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("String")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("''")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("要分配给弹窗的自定义的 css 类名")])])])]),t._v(" "),a("h2",{attrs:{id:"方法说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法说明"}},[t._v("#")]),t._v(" 方法说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("方法名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("getLatLng()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("LatLng")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回弹窗的地理坐标点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("setLatLng(<LatLng> *latlng*)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("this")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设定当弹窗打开时所在的地理坐标点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("getContent()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("String | HTMLElement")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回弹窗的内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("setContent(<String | HTMLElement | Function> _htmlContent_)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("this")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设定弹窗的 html 内容.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("getElement()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("String | HTMLElement")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("getContent()方法的别名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("update()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("null")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("更新弹出内容，布局和位置。用于在更改内容之后更新弹出 窗口，例如图像加载。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("isOpen()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当弹窗时打开的时候则返回 true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("bringToFront()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("this")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将当前的弹窗设置在另外的弹窗之前")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("bringToBack()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("this")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将当前的弹窗设置在另外的弹窗之前")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("openOn(<Map> *map*)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("this")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("添加弹窗到地图并关闭前一个.与 map.openPopup(popup)操 作一样")])])])]),t._v(" "),a("h2",{attrs:{id:"事件说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件说明"}},[t._v("#")]),t._v(" 事件说明")]),t._v(" "),a("p",[t._v("具体事件的使用和详情，可以参考 leaflet 的文档")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("add")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Event")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Fired after the layer is added to a map")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("remove")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Event")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Fired after the layer is removed from a map")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("popupopen")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("PopupEvent")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Fired when a popup bound to this layer is opened")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("popupclose")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("PopupEvent")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Fired when a popup bound to this layer is closed")])])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);