(this.webpackJsonpwebcomics=this.webpackJsonpwebcomics||[]).push([[0],{27:function(e,n,t){e.exports=t(42)},42:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(16),c=t.n(o),i=t(5),s=t(2);function l(){var e=Object(i.a)(["\n    body {\n        margin: 0;\n        background: ",";\n    }\n"]);return l=function(){return e},e}var u={colors:{primary:"#222831",secondary:"#00b8a9",alternative:"#f6416c",background:"#ffde7d"},font:"Fira Sans",fontSizes:{small:"1em",medium:"2em",large:"3em"}},p=Object(s.b)(l(),u.colors.background),m=function(e){var n=e.children;return r.a.createElement(s.a,{theme:u},r.a.createElement(p,null),n)},f=t(6),b=t(11),d=t.n(b),g=t(20),h={readFile:function(e){return new Promise((function(n,t){window.loadArchiveFormats(["rar","zip","tar"],(function(){window.archiveOpenFile(e,"",(function(e,a){a&&t(a),n(e)}))}))}))},getImages:function(){var e=Object(g.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.entries.filter((function(e){if(e.name.endsWith("jpg")||e.name.endsWith("jpeg")||e.name.endsWith("png"))return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getImage:function(e){return new Promise((function(n,t){e.readData((function(a,r){r&&t(r);var o,c=new Blob([a],{type:(o=e.name,(o=o.toLowerCase()).endsWith(".jpeg")||o.endsWith(".jpg")?"image/jpeg":o.endsWith(".png")?"image/png":o.endsWith(".bmp")?"image/bmp":o.endsWith(".webp")?"image/webp":o.endsWith(".gif")?"image/gif":"image/jpeg")}),i=URL.createObjectURL(c);n(i)}))}))}},v=t(26);function x(){var e=Object(i.a)(["\n    text-align: center;\n    height: 100vh;\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 0px 40px;\n    color: ",";\n    font-weight: 700;\n    font-family: '","';\n    font-size: ",";\n\n    i {\n        font-size: ",";\n    }\n\n    p {\n        margin-bottom: 0;\n    }\n\n    .description {\n        margin: 0;\n        font-size: 0.7em;\n    }\n"]);return x=function(){return e},e}var j=s.c.div(x(),(function(e){return e.theme.colors.alternative}),(function(e){return e.theme.font}),(function(e){return e.theme.fontSizes.medium}),(function(e){return e.theme.fontSizes.large})),k=t(43),y=Object(s.d)((function(e){var n=Object(k.a)().t;return r.a.createElement(j,e.getRootProps(),r.a.createElement("i",{className:"bx bx-upload"}),r.a.createElement("input",e.getInputProps()),e.isDragActive?r.a.createElement("p",{className:"text"},n("Drop the files here ...")):r.a.createElement("p",{className:"text"},n("Drag 'n' drop some files here, or click to select files")),r.a.createElement("p",{className:"description"},n("(We only accept .rar, .zip, .cbr and .cbz)")))}));function E(){var e=Object(i.a)(["\n    position: fixed;\n    bottom: 0;\n    background: #eee;\n    width: 100%;\n    padding: 10px 0;\n    text-align: center;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;\n\n    button {\n        border: none;\n\n        &:focus {\n            outline: none;\n        }\n\n        i {\n            font-size: 2em;\n        }\n    }\n\n    p {\n        margin: 0;\n        display: inline-block;\n        vertical-align: super;\n    }\n"]);return E=function(){return e},e}function z(){var e=Object(i.a)(["\n    width: 100%;\n"]);return z=function(){return e},e}var w=s.c.img(z()),O=s.c.div(E()),W=Object(s.d)((function(e){var n=Object(a.useState)(0),t=Object(f.a)(n,2),o=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{src:e.image}),r.a.createElement(O,null,r.a.createElement("button",{onClick:function(){return function(){if(0!==o){var n=o-1;c(n),e.loadImage(n)}}()}},r.a.createElement("i",{className:"bx bxs-chevron-left"})),r.a.createElement("p",null,o,"/",e.totalPages),r.a.createElement("button",{onClick:function(){return function(){if(o!==e.totalPages){var n=o+1;c(n),e.loadImage(n)}}()}},r.a.createElement("i",{className:"bx bxs-chevron-right"}))))}));function S(){var e=Object(i.a)(["\n    animation: rotate 2s linear infinite;\n    z-index: 2;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -25px 0 0 -25px;\n    width: 50px;\n    height: 50px;\n\n    & .path {\n        stroke: ",";\n        stroke-linecap: round;\n        animation: dash 1.5s ease-in-out infinite;\n      }\n\n      @keyframes rotate {\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n      \n      @keyframes dash {\n        0% {\n          stroke-dasharray: 1, 150;\n          stroke-dashoffset: 0;\n        }\n        50% {\n          stroke-dasharray: 90, 150;\n          stroke-dashoffset: -35;\n        }\n        100% {\n          stroke-dasharray: 90, 150;\n          stroke-dashoffset: -124;\n        }\n      }\n"]);return S=function(){return e},e}var D=s.c.svg(S(),(function(e){return e.theme.colors.alternative})),I=Object(s.d)((function(e){return r.a.createElement(D,{className:"spinner",viewBox:"0 0 50 50"},r.a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}))})),N=Object(s.d)((function(e){var n=Object(k.a)().t;return r.a.createElement(j,null,r.a.createElement("i",{className:"bx bx-error"}),r.a.createElement("p",null,n("Some error happens")),r.a.createElement("p",{className:"description"},n("Maybe the file type is not supported (We only accept .rar, .zip, .cbr and .cbz)")))})),P=function(e){var n=Object(a.useState)(),t=Object(f.a)(n,2),o=t[0],c=t[1],i=Object(a.useState)(),s=Object(f.a)(i,2),l=s[0],u=s[1],p=Object(a.useState)(),m=Object(f.a)(p,2),b=m[0],d=m[1],g=Object(a.useState)(!1),x=Object(f.a)(g,2),j=x[0],k=x[1],E=Object(a.useCallback)((function(e){k(!0),h.readFile(e[0]).then((function(e){h.getImages(e).then((function(e){c(e),k(!1)}))})).catch(d)}),[]),z=Object(v.a)({onDrop:E}),w=z.getRootProps,O=z.getInputProps,S=z.isDragActive,D=function(e){k(!0),h.getImage(o[e]).then((function(e){u(e),k(!1)}))};return Object(a.useEffect)((function(){o&&D(0)}),[o]),b?r.a.createElement(N,null):r.a.createElement(r.a.Fragment,null,j&&r.a.createElement(I,null),o?r.a.createElement(W,{image:l,totalPages:o.length,loadImage:D}):r.a.createElement(y,{getRootProps:w,getInputProps:O,isDragActive:S}))},F=t(12),A=t(25),M=t(7);F.a.use(A.a).use(M.e).init({resources:{en:{translations:{"Drag 'n' drop some files here, or click to select files":"Drag 'n' drop some files here, or click to select files","Drop the files here ...":"Drop the files here ...","(We only accept .rar, .zip, .cbr and .cbz)":"(We only accept .rar, .zip, .cbr and .cbz)","Maybe the file type is not supported (We only accept .rar, .zip, .cbr and .cbz)":"Maybe the file type is not supported (We only accept .rar, .zip, .cbr and .cbz)"}},es:{translations:{"Drag 'n' drop some files here, or click to select files":"Arrastra alg\xfan comic aqu\xed o haz click para seleccionar el archivo","Drop the files here ...":"Suelta el archivo aqu\xed ...","(We only accept .rar, .zip, .cbr and .cbz)":"(Solo aceptamos archivos: .rar, .zip, .cbr and .cbz)","Maybe the file type is not supported (We only accept .rar, .zip, .cbr and .cbz)":"Quiz\xe1s este tipo de archivo no es soportado (Solo aceptamos archivos .rar, .zip, .cbr and .cbz)"}}},fallbackLng:"en",debug:!1,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1}});F.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null,r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.80ed17f7.chunk.js.map