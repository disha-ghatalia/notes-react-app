(this["webpackJsonpnotes-react-app"]=this["webpackJsonpnotes-react-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(8),i=n.n(o),s=(n(15),n(10)),r=n(4),d=n(9),l=n.n(d),j=(n(16),n(3)),u=n(7),b=n(0),h=function(e){var t=e.activeNote,n=e.onUpdateNote;return t?Object(b.jsx)("div",{className:"add-note",children:Object(b.jsx)("div",{className:"edit-note",children:Object(b.jsx)("textarea",{id:"content",placeholder:"Write your note here...",value:t.content,onChange:function(e){return function(e,c){var a;n(Object(u.a)(Object(u.a)({},t),{},(a={},Object(j.a)(a,e,c),Object(j.a)(a,"lastModified",Date.now()),a)))}("content",e.target.value)}})})}):Object(b.jsx)("div",{className:"no-active-note",children:"Click on the Add button to add a new note"})},O=function(e){var t=e.notes,n=e.onAddNote,c=e.onDeleteNote,a=e.activeNote,o=e.setActiveNote,i=(e.search,e.handleSearch);return i=function(e){e.target.value},Object(b.jsxs)("div",{className:"mainlist",children:[Object(b.jsx)("div",{className:"search-notes",children:Object(b.jsx)("input",{id:"search-bar",placeholder:"search...",onChange:i})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:n,children:"Add"})}),Object(b.jsx)("div",{className:"all-notes",children:t.map((function(e,t){var n=e.id,i=e.content,s=e.lastModified;return Object(b.jsxs)("div",{className:"single-note ".concat(n===a&&"active"),onClick:function(){return o(n)},children:[Object(b.jsx)("div",{className:"note-delete",children:Object(b.jsx)("button",{onClick:function(e){return c(n)},className:"delete-note",children:"Delete"})}),Object(b.jsx)("p",{children:i.length<1?"Write your note here...":i}),Object(b.jsxs)("small",{className:"note-date",children:["Last Modified",": ",new Date(s).toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit"})]})]})}))})]})};var v=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(!1),i=Object(r.a)(o,2),d=i[0],j=i[1],u=Object(c.useState)(""),v=Object(r.a)(u,2),f=(v[0],v[1],Object(c.useState)([])),N=Object(r.a)(f,2);return N[0],N[1],Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"NotesApp"}),Object(b.jsx)(h,{activeNote:n.find((function(e){return e.id===d})),onUpdateNote:function(e){var t=n.map((function(t){return t.id===e.id?e:t}));a(t)}}),Object(b.jsx)(O,{notes:n,onAddNote:function(){var e={id:l()(),content:"",lastModified:Date.now()};a([e].concat(Object(s.a)(n))),j(e.id)},onDeleteNote:function(e){a(n.filter((function(t){return t.id!==e})))},activeNote:d,setActiveNote:j,handleSearch:function(e){var t=e;a(n.filter((function(e){e.content.toLowerCase().includes(t.toLowerCase())})))}})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.40966b22.chunk.js.map