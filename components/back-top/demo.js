webpackJsonp([45,197],{613:function(n,s,a){n.exports={basic:a(1370),custom:a(1371)}},1370:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(376),a(375)),o=t(p),e=a(1),c=t(e),u=a(2);t(u);n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The most basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/back-top/demo/basic.md",id:"components-back-top-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> BackTop <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>BackTop</span> <span class="token punctuation" >/></span></span>\n    Scroll down to see the bottom right gray button<span class="token punctuation" >.</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(o["default"],null),"Scroll down to see the bottom right gray button.")}}},1371:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(376),a(375)),o=t(p),e=a(1),c=t(e),u=a(2);t(u);n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u81ea\u5b9a\u4e49\u56de\u5230\u9876\u90e8\u6309\u94ae\u7684\u6837\u5f0f\uff0c\u9650\u5236\u5bbd\u9ad8\uff1a",["code","40px * 40px"],"\u3002"]],"en-US":[["p","You can customize the style of the button, just note the size limit: no more than ",["code","40px * 40px"],"."]]},meta:{order:1,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u6837\u5f0f","en-US":"Custom style"},filename:"components/back-top/demo/custom.md",id:"components-back-top-demo-custom"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> BackTop <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> style <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  height<span class="token punctuation" >:</span> <span class="token number" >40</span><span class="token punctuation" >,</span>\n  width<span class="token punctuation" >:</span> <span class="token number" >40</span><span class="token punctuation" >,</span>\n  lineHeight<span class="token punctuation" >:</span> <span class="token string" >\'40px\'</span><span class="token punctuation" >,</span>\n  borderRadius<span class="token punctuation" >:</span> <span class="token number" >4</span><span class="token punctuation" >,</span>\n  backgroundColor<span class="token punctuation" >:</span> <span class="token string" >\'#57c5f7\'</span><span class="token punctuation" >,</span>\n  color<span class="token punctuation" >:</span> <span class="token string" >\'#fff\'</span><span class="token punctuation" >,</span>\n  textAlign<span class="token punctuation" >:</span> <span class="token string" >\'center\'</span><span class="token punctuation" >,</span>\n  fontSize<span class="token punctuation" >:</span> <span class="token number" >20</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>BackTop</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> bottom<span class="token punctuation" >:</span> <span class="token number" >100</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>style<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>UP<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>BackTop</span><span class="token punctuation" >></span></span>\n    Scroll down to see the bottom right blue button<span class="token punctuation" >.</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n={height:40,width:40,lineHeight:"40px",borderRadius:4,backgroundColor:"#57c5f7",color:"#fff",textAlign:"center",fontSize:20};return c["default"].createElement("div",null,c["default"].createElement(o["default"],{style:{bottom:100}},c["default"].createElement("div",{style:n},"UP")),"Scroll down to see the bottom right blue button.")}}}});