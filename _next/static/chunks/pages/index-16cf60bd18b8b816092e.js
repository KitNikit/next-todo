(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3854:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var r=e(5893);function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function i(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=e(7294),c=function(){var n=(0,a.useState)(""),t=n[0],e=n[1],o=(0,a.useState)([]),c=o[0],u=o[1];return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("h1",{className:"container__title",children:["Next JS ToDo List: ",c.length?c.length:"no business"]}),(0,r.jsxs)("form",{className:"container__form",children:[(0,r.jsx)("input",{className:"container__input",type:"text",value:t,placeholder:"Enter a todo item",onChange:function(n){n.preventDefault(),e(n.target.value)}}),(0,r.jsx)("button",{className:"container__btn",onClick:function(n){n.preventDefault(),0!==t.length&&(u([t].concat(i(c))),e(""))},children:"Submit"})]}),(0,r.jsx)("ol",{className:"container__list",children:c.length>=1?c.map((function(n,t){return(0,r.jsxs)("li",{children:[n,(0,r.jsx)("button",{onClick:function(t){t.preventDefault(),function(n){u(i(c.filter((function(t){return t!=n}))))}(n)},children:"Delete"})]},t)})):"Enter a todo item"})]})}},8581:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(3854)}])}},function(n){n.O(0,[774,888,179],(function(){return t=8581,n(n.s=t);var t}));var t=n.O();_N_E=t}]);