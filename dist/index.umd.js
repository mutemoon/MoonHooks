!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("use-immer")):"function"==typeof define&&define.amd?define(["exports","use-immer"],e):e((n||self).moonHooks={},n.useImmer)}(this,function(n,e){var t=function(n){var t=e.useImmer(n),i=t[0],u=t[1];return{list:i,update:function(n,e){u(function(t){var i=t.find(n);i&&e(i)})},delete:function(n){u(i.filter(function(e){return!n(e)}))},findOne:function(n){return i.find(n)},findMany:function(n){return i.filter(n)},push:function(n){u(function(e){e.push(n)})},pop:function(){u(function(n){n.pop()})}}};function i(){return i=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},i.apply(this,arguments)}n.useList=t,n.useListWithId=function(n){var e=t(n);return i({},e,{updateById:function(n,t){e.update(function(e){return e.id===n},t)},deleteById:function(n){e.delete(function(e){return e.id===n})},deleteByItem:function(n){var t=n.id;e.delete(function(n){return n.id===t})},findById:function(n){return e.findOne(function(e){return e.id===n})},findManyById:function(n){return e.findMany(function(e){return e.id===n})}})}});
//# sourceMappingURL=index.umd.js.map