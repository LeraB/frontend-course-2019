// eslint-disable-next-line
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=function(e){var t=e.text,r=e.length;return t.length>=r},u=function(e){var t=e.text,r=e.length;return t.length<=r},o=function(e){var t=e.text;return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(t)},a=function(e){var t=e.text;return/^\+\d{2}[(]\d{3}[)]\d{3}-\d{2}-\d{2}$/.test(t)},l=function(e){var t=e.text,r=e.min,n=e.max;return Number(t)>=r&&Number(t)<=n},s=document.querySelector(".firstName"),i=document.querySelector(".lastName"),c=document.querySelector(".email"),d=document.querySelector(".phone"),m=document.querySelector(".age"),v=document.querySelector(".form"),f=document.querySelector(".validation-msg");v.addEventListener("submit",(function(e){e.preventDefault();var t=[],r=s.value?n({text:s.value,length:2})?!u({text:s.value,length:20})&&"To long name":"To short name":"Name is required";s.classList.toggle("error",!!r),r&&t.push(r);var v=i.value?n({text:i.value,length:2})?!u({text:i.value,length:20})&&"To long Last name":"To short Last name":"Last name is required";i.classList.toggle("error",!!v),v&&t.push(v);var g=c.value?!o({text:c.value})&&"Email is not valid":"Email is required";c.classList.toggle("error",!!g),g&&t.push(g);var p=d.value?!a({text:d.value})&&"Phone number is not valid":"Phone number is required";d.classList.toggle("error",!!p),p&&t.push(p);var x=!(!m.value||l({text:m.value,min:18,max:120}))&&"Age is not valid";m.classList.toggle("error",!!x),x&&t.push(x),t.length>0?(f.innerText=t.join(", "),f.classList.add("error-msg")):(f.innerText="Validation successful!",f.classList.add("success"),f.classList.remove("error-msg"))}))}]);
// eslint-disable-next-line
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJpc1ZhbGlkIiwidGV4dCIsImxlbmd0aCIsInRlc3QiLCJtaW4iLCJtYXgiLCJOdW1iZXIiLCJmaXJzdE5hbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZ2UiLCJ2YWxpZGF0aW9uTWVzc2FnZUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibWVzc2FnZXMiLCJmaXJzdE5hbWVNZXNzYWdlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicHVzaCIsImxhc3ROYW1lTWVzc2FnZSIsImVtYWlsTWVzc2FnZSIsInBob25lTWVzc2FnZSIsImFnZU1lc3NhZ2UiLCJpbm5lclRleHQiLCJqb2luIiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixF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aW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY29uc3QgaXNWYWxpZCA9IHtcbiAgICBtaW5MZW5ndGg6ICh7IHRleHQsIGxlbmd0aCB9OiB7IHRleHQ6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIgfSk6IGJvb2xlYW4gPT4gdGV4dC5sZW5ndGggPj0gbGVuZ3RoLFxuICAgIG1heExlbmd0aDogKHsgdGV4dCwgbGVuZ3RoIH06IHsgdGV4dDogc3RyaW5nLCBsZW5ndGg6IG51bWJlciB9KTogYm9vbGVhbiA9PiB0ZXh0Lmxlbmd0aCA8PSBsZW5ndGgsXG4gICAgcGF0dGVybjogKHsgdGV4dCwgcGF0dGVybiB9OiB7IHRleHQ6IHN0cmluZywgcGF0dGVybjogc3RyaW5nIH0pOiBib29sZWFuID0+IHRleHQuaW5jbHVkZXMocGF0dGVybiksXG4gICAgZW1haWw6ICh7IHRleHQgfTogeyB0ZXh0OiBzdHJpbmcgfSk6IGJvb2xlYW4gPT4gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKS8udGVzdCh0ZXh0KSxcbiAgICBwaG9uZTogKHsgdGV4dCB9OiB7dGV4dDogc3RyaW5nIH0pOiBib29sZWFuID0+IC9eXFwrXFxkezJ9WyhdXFxkezN9WyldXFxkezN9LVxcZHsyfS1cXGR7Mn0kLy50ZXN0KHRleHQpLFxuICAgIG51bWJlclJhbmdlOiAoeyB0ZXh0LCBtaW4sIG1heCB9OiB7IHRleHQ6IHN0cmluZyB8IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyfSk6IGJvb2xlYW4gPT4gTnVtYmVyKHRleHQpID49IG1pbiAmJiBOdW1iZXIodGV4dCkgPD0gbWF4LFxufTtcbiIsImltcG9ydCB7IGlzVmFsaWQgfSBmcm9tICcuL21vZHVsZSc7XG5cbmNvbnN0IGZpcnN0TmFtZSA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXJzdE5hbWUnKTtcbmNvbnN0IGxhc3ROYW1lID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhc3ROYW1lJyk7XG5jb25zdCBlbWFpbCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbCcpO1xuY29uc3QgcGhvbmUgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGhvbmUnKTtcbmNvbnN0IGFnZSA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ2UnKTtcbmNvbnN0IGZvcm0gPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuY29uc3QgdmFsaWRhdGlvbk1lc3NhZ2VFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZhbGlkYXRpb24tbXNnJyk7XG5cbnR5cGUgU3VibWl0RXZlbnQgPSBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudH1cblxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lRmllbGQoKTogc3RyaW5nIHwgZmFsc2Uge1xuICAgIGlmICghZmlyc3ROYW1lLnZhbHVlKSByZXR1cm4gJ05hbWUgaXMgcmVxdWlyZWQnO1xuICAgIGlmICghaXNWYWxpZC5taW5MZW5ndGgoeyB0ZXh0OiBmaXJzdE5hbWUudmFsdWUsIGxlbmd0aDogMiB9KSkgcmV0dXJuICdUbyBzaG9ydCBuYW1lJztcbiAgICBpZiAoIWlzVmFsaWQubWF4TGVuZ3RoKHsgdGV4dDogZmlyc3ROYW1lLnZhbHVlLCBsZW5ndGg6IDIwIH0pKSByZXR1cm4gJ1RvIGxvbmcgbmFtZSc7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZWxhc3ROYW1lRmllbGQoKTogc3RyaW5nIHwgZmFsc2Uge1xuICAgIGlmICghbGFzdE5hbWUudmFsdWUpIHJldHVybiAnTGFzdCBuYW1lIGlzIHJlcXVpcmVkJztcbiAgICBpZiAoIWlzVmFsaWQubWluTGVuZ3RoKHsgdGV4dDogbGFzdE5hbWUudmFsdWUsIGxlbmd0aDogMiB9KSkgcmV0dXJuICdUbyBzaG9ydCBMYXN0IG5hbWUnO1xuICAgIGlmICghaXNWYWxpZC5tYXhMZW5ndGgoeyB0ZXh0OiBsYXN0TmFtZS52YWx1ZSwgbGVuZ3RoOiAyMCB9KSkgcmV0dXJuICdUbyBsb25nIExhc3QgbmFtZSc7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsRmllbGQoKTogc3RyaW5nIHwgZmFsc2Uge1xuICAgIGlmKCFlbWFpbC52YWx1ZSkgcmV0dXJuICdFbWFpbCBpcyByZXF1aXJlZCc7XG4gICAgaWYgKCFpc1ZhbGlkLmVtYWlsKHsgdGV4dDogZW1haWwudmFsdWUgfSkpIHJldHVybiAnRW1haWwgaXMgbm90IHZhbGlkJztcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGhvbmVGaWVsZCgpOiBzdHJpbmcgfCBmYWxzZSB7XG4gICAgaWYgKCFwaG9uZS52YWx1ZSkgcmV0dXJuICdQaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnO1xuICAgIGlmICghaXNWYWxpZC5waG9uZSh7IHRleHQ6IHBob25lLnZhbHVlIH0pKSByZXR1cm4gJ1Bob25lIG51bWJlciBpcyBub3QgdmFsaWQnO1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBZ2VGaWVsZCgpOiBzdHJpbmcgfCBmYWxzZSB7XG4gICAgaWYgKGFnZS52YWx1ZSAmJiAhaXNWYWxpZC5udW1iZXJSYW5nZSh7IHRleHQ6IGFnZS52YWx1ZSwgbWluOiAxOCwgbWF4OiAxMjAgfSkpIHJldHVybiAnQWdlIGlzIG5vdCB2YWxpZCc7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlOiBTdWJtaXRFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG1lc3NhZ2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3QgZmlyc3ROYW1lTWVzc2FnZSA9IHZhbGlkYXRlTmFtZUZpZWxkKCk7XG4gICAgZmlyc3ROYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2Vycm9yJywgISFmaXJzdE5hbWVNZXNzYWdlKTtcbiAgICBpZiAoZmlyc3ROYW1lTWVzc2FnZSkgbWVzc2FnZXMucHVzaChmaXJzdE5hbWVNZXNzYWdlKTtcblxuICAgIGNvbnN0IGxhc3ROYW1lTWVzc2FnZSA9IHZhbGlkYXRlbGFzdE5hbWVGaWVsZCgpO1xuICAgIGxhc3ROYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2Vycm9yJywgISFsYXN0TmFtZU1lc3NhZ2UpO1xuICAgIGlmIChsYXN0TmFtZU1lc3NhZ2UpIG1lc3NhZ2VzLnB1c2gobGFzdE5hbWVNZXNzYWdlKTtcblxuICAgIGNvbnN0IGVtYWlsTWVzc2FnZSA9IHZhbGlkYXRlRW1haWxGaWVsZCgpO1xuICAgIGVtYWlsLmNsYXNzTGlzdC50b2dnbGUoJ2Vycm9yJywgISFlbWFpbE1lc3NhZ2UpO1xuICAgIGlmIChlbWFpbE1lc3NhZ2UpIG1lc3NhZ2VzLnB1c2goZW1haWxNZXNzYWdlKTtcblxuICAgIGNvbnN0IHBob25lTWVzc2FnZSA9IHZhbGlkYXRlUGhvbmVGaWVsZCgpO1xuICAgIHBob25lLmNsYXNzTGlzdC50b2dnbGUoJ2Vycm9yJywgISFwaG9uZU1lc3NhZ2UpO1xuICAgIGlmIChwaG9uZU1lc3NhZ2UpIG1lc3NhZ2VzLnB1c2gocGhvbmVNZXNzYWdlKTtcblxuICAgIGNvbnN0IGFnZU1lc3NhZ2UgPSB2YWxpZGF0ZUFnZUZpZWxkKCk7XG4gICAgYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2Vycm9yJywgISFhZ2VNZXNzYWdlKTtcbiAgICBpZiAoYWdlTWVzc2FnZSkgbWVzc2FnZXMucHVzaChhZ2VNZXNzYWdlKTtcblxuICAgIGlmIChtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlRWxlbWVudC5pbm5lclRleHQgPSBtZXNzYWdlcy5qb2luKCcsICcpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbXNnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VFbGVtZW50LmlubmVyVGV4dCA9ICdWYWxpZGF0aW9uIHN1Y2Nlc3NmdWwhJztcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yLW1zZycpO1xuXG4gICAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9