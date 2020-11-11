(this["webpackJsonpunit-converter"]=this["webpackJsonpunit-converter"]||[]).push([[0],{106:function(e,a){},117:function(e){e.exports=JSON.parse('{"App.Title":"Einheitenumwandler"}')},118:function(e){e.exports=JSON.parse('{"App.Title":"Unit Converter"}')},129:function(e,a,t){e.exports=t(201)},134:function(e,a,t){},135:function(e,a,t){},136:function(e,a,t){},144:function(e,a){},150:function(e,a){},163:function(e,a,t){},201:function(e,a,t){"use strict";t.r(a);var r=t(1),l=t.n(r),n=t(10),o=t.n(n),c=(t(134),t(135),t(136),t(75)),s=t(241),i=t(251),m=t(233);function u(){return l.a.createElement(i.a,{p:1},l.a.createElement(m.a,{container:!0,justify:"center"},l.a.createElement(m.a,{item:!0},l.a.createElement("h1",{className:"text"},"Color Converter"))))}var C,v=t(250),d=t(27),h=t(54);!function(e){e.Hex="hex",e.Cmyk="cmyk",e.Hsl="hsl",e.Hsv="hsv",e.Rgb="rgb"}(C||(C={}));var p=C,E=t(17),b=t.n(E);function y(e,a){switch(a.type){case p.Hex:return/^#[0-9A-F]{0,6}$/i.test(a.payload.color)?a.payload.color:e;case p.Rgb:var t=Object(h.a)({},e),r=a.payload.index;return t.rgbColor[r]=a.payload.value,t.hexColor="#"+b.a.rgb.hex(t.rgbColor[0],t.rgbColor[1],t.rgbColor[2]),t.cmykColor=b.a.rgb.cmyk(t.rgbColor[0],t.rgbColor[1],t.rgbColor[2]),t.hslColor=b.a.rgb.hsl(t.rgbColor[0],t.rgbColor[1],t.rgbColor[2]),t.hsvColor=b.a.rgb.hsv(t.rgbColor[0],t.rgbColor[1],t.rgbColor[2]),t;case p.Cmyk:var l=Object(h.a)({},e),n=a.payload.index;return l.cmykColor[n]=a.payload.value,l.hexColor="#"+b.a.cmyk.hex(l.cmykColor[0],l.cmykColor[1],l.cmykColor[2],l.cmykColor[3]),l.rgbColor=b.a.cmyk.rgb(l.cmykColor[0],l.cmykColor[1],l.cmykColor[2],l.cmykColor[3]),l.hslColor=b.a.cmyk.hsl(l.cmykColor[0],l.cmykColor[1],l.cmykColor[2],l.cmykColor[3]),l.hsvColor=b.a.cmyk.hsv(l.cmykColor[0],l.cmykColor[1],l.cmykColor[2],l.cmykColor[3]),l;case p.Hsl:var o=Object(h.a)({},e),c=a.payload.index;return o.hslColor[c]=a.payload.value,o.hexColor="#"+b.a.hsl.hex(o.hslColor[0],o.hslColor[1],o.hslColor[2]),o.cmykColor=b.a.hsl.cmyk(o.hslColor[0],o.hslColor[1],o.hslColor[2]),o.rgbColor=b.a.hsl.rgb(o.hslColor[0],o.hslColor[1],o.hslColor[2]),o.hsvColor=b.a.hsl.hsv(o.hslColor[0],o.hslColor[1],o.hslColor[2]),o;case p.Hsv:var s=Object(h.a)({},e),i=a.payload.index;return s.hsvColor[i]=a.payload.value,s.hexColor="#"+b.a.hsv.hex(s.hsvColor[0],s.hsvColor[1],s.hsvColor[2]),s.cmykColor=b.a.hsv.cmyk(s.hsvColor[0],s.hsvColor[1],s.hsvColor[2]),s.hslColor=b.a.hsv.hsl(s.hsvColor[0],s.hsvColor[1],s.hsvColor[2]),s.rgbColor=b.a.hsv.rgb(s.hsvColor[0],s.hsvColor[1],s.hsvColor[2]),s;default:return e}}var g,f=l.a.createContext({}),x={hexColor:"#000000",rgbColor:[0,0,0],cmykColor:[0,0,0,100],hslColor:[0,0,0],hsvColor:[0,0,0]},k=function(e){var a=Object(r.useReducer)(y,x),t=Object(d.a)(a,2),n=t[0],o=t[1];return l.a.createElement(f.Provider,{value:{hexColor:n.hexColor,rgbColor:n.rgbColor,cmykColor:n.cmykColor,hslColor:n.hslColor,hsvColor:n.hsvColor,dispatch:o}},e.children)};function w(){return Object(r.useContext)(f)}!function(e){e.Light="light",e.Dark="dark"}(g||(g={}));var N=g,j=l.a.createContext({}),O=function(e){var a=Object(r.useState)(N.Light),t=Object(d.a)(a,2),n=t[0],o=t[1];return Object(r.useEffect)((function(){return document.documentElement.classList.add(n.toLocaleString()),function(){document.documentElement.classList.remove(n.toLocaleString())}}),[n]),l.a.createElement(j.Provider,{value:{theme:n,setTheme:o}},e.children)};function H(){return Object(r.useContext)(j)}function S(){var e=w(),a=function(e){if(e===N.Dark)return{labelColor:"white",inputColor:"white",backgroundColor:"#2d2d2d"}}(H().theme);return l.a.createElement(i.a,{p:2},l.a.createElement(m.a,{container:!0,justify:"center"},l.a.createElement(m.a,{item:!0},l.a.createElement(v.a,{variant:"outlined",InputProps:{style:{color:null===a||void 0===a?void 0:a.inputColor,backgroundColor:null===a||void 0===a?void 0:a.backgroundColor}},InputLabelProps:{style:{color:null===a||void 0===a?void 0:a.labelColor}},id:"outlined-basic",label:"Hex",value:e.hexColor,onChange:function(a){return e.dispatch({type:p.Hex,payload:{color:a.target.value}})}}))))}var P=t(72),D=t(237),R=t(238),L=t(76),B=t(239),I=t(240),z=t(205),V=t(112),F=t.n(V),M=t(236),U=t(111),A=t.n(U),T=t(74),W=t(110),J=t.n(W);function G(e){var a=Object(T.b)(),t=a.enqueueSnackbar,n=(a.closeSnackbar,w()),o=Object(r.useRef)(null);return l.a.createElement(m.a,{container:!0,spacing:1,justify:"center",alignItems:"center"},l.a.createElement(m.a,{item:!0},l.a.createElement("span",{ref:o},function(e,a){switch(e){case p.Rgb:return l.a.createElement("code",{className:"cssCode"},"rgb(".concat(a.rgbColor[0],", ").concat(a.rgbColor[1],", ").concat(a.rgbColor[2],");"));case p.Hsl:return l.a.createElement("code",{className:"cssCode"},"hsl(".concat(a.hslColor[0],", ").concat(a.hslColor[1],", ").concat(a.hslColor[2],");"));case p.Hsv:return l.a.createElement("code",{className:"cssCode"},"hsv(".concat(a.hsvColor[0],", ").concat(a.hsvColor[1],", ").concat(a.hsvColor[2],");"));case p.Cmyk:return l.a.createElement("code",{className:"cssCode"},"cmyk(".concat(a.cmykColor[0],", ").concat(a.cmykColor[1],", ").concat(a.cmykColor[2],", ").concat(a.cmykColor[3],");"));default:return l.a.createElement(l.a.Fragment,null)}}(e.type,n))),l.a.createElement(m.a,{item:!0},l.a.createElement(M.a,{"aria-label":"clippboard",className:"iconButton"},l.a.createElement(A.a,{className:"copyIcon",onClick:function(){var e,a;(a=null===(e=o.current)||void 0===e?void 0:e.innerText)&&(J()(a),t("Copied to clipboard",{variant:"success",autoHideDuration:1200}))}}))))}t(163);var K=function e(a,t,r,l){Object(P.a)(this,e),this.min=a,this.max=t,this.title=r,this.value=l};var Y=function(e){var a=w();return l.a.createElement(D.a,{className:"card"},l.a.createElement(R.a,{title:l.a.createElement("span",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},l.a.createElement(L.a,{className:"text"},e.title),l.a.createElement("div",{style:{backgroundColor:a.hexColor,width:"50px",height:"20px",borderRadius:"3px"}}))}),l.a.createElement(B.a,null,e.sliders.map((function(t,r){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement(L.a,{className:"text"},t.title),l.a.createElement(I.a,{color:"primary","aria-label":"outlined primary button group",style:{marginLeft:"auto"}},l.a.createElement(z.a,{size:"small",className:"changeValueButton",onClick:function(){t.value<255&&a.dispatch({type:e.type,payload:{index:r,value:t.value+1}})}},"+"),l.a.createElement(z.a,{size:"small",disabled:!0,className:"changeValueButtonDisabled"},t.value),l.a.createElement(z.a,{size:"small",className:"changeValueButton",onClick:function(){t.value>0&&a.dispatch({type:e.type,payload:{index:r,value:t.value-1}})}},"-"))),l.a.createElement(F.a,{className:"slider",key:r,value:t.value,min:t.min,max:t.max,onChange:function(t,l){a.dispatch({type:e.type,payload:{index:r,value:l}})},valueLabelDisplay:"auto","aria-labelledby":"non-linear-slider"}))}))),l.a.createElement(G,{type:e.type}))};function $(){var e=w();return l.a.createElement(i.a,{p:2,className:"colorCardsContainer"},l.a.createElement(m.a,{container:!0,spacing:4,justify:"center"},l.a.createElement(m.a,{item:!0,xs:12,sm:12,md:6,lg:3,xl:3},l.a.createElement(Y,{title:"RGB",text:"Mock",sliders:[new K(0,255,"Red",e.rgbColor[0]),new K(0,255,"Green",e.rgbColor[1]),new K(0,255,"Blue",e.rgbColor[2])],type:p.Rgb})),l.a.createElement(m.a,{item:!0,xs:12,sm:12,md:6,lg:3,xl:3},l.a.createElement(Y,{title:"HSL",text:"Mock",sliders:[new K(0,360,"Hue",e.hslColor[0]),new K(0,100,"Saturation",e.hslColor[1]),new K(0,100,"Lightness",e.hslColor[2])],type:p.Hsl})),l.a.createElement(m.a,{item:!0,xs:12,sm:12,md:6,lg:3,xl:3},l.a.createElement(Y,{title:"CMYK",text:"Mock",sliders:[new K(0,100,"Cyan",e.cmykColor[0]),new K(0,100,"Magenta",e.cmykColor[1]),new K(0,100,"Yellow",e.cmykColor[2]),new K(0,100,"Key",e.cmykColor[3])],type:p.Cmyk})),l.a.createElement(m.a,{item:!0,xs:12,sm:12,md:6,lg:3,xl:3},l.a.createElement(Y,{title:"HSV",text:"Mock",sliders:[new K(0,360,"Hue",e.hsvColor[0]),new K(0,100,"Saturation",e.hsvColor[1]),new K(0,100,"Value",e.hsvColor[2])],type:p.Hsv}))))}var q,Q=function(){return l.a.createElement(s.a,null,l.a.createElement(u,null),l.a.createElement(S,null),l.a.createElement($,null))},X=t(242),Z=t(243),_=t(244),ee=t(245),ae=t(246),te=t(247),re=t(113);!function(e){e.Px="px",e.Em="em",e.Rem="rem",e.Cm="cm",e.Pt="pt",e.In="in"}(q||(q={}));var le=q,ne=function(){function e(){Object(P.a)(this,e)}return Object(re.a)(e,[{key:"createData",value:function(e,a,t){switch(e){case le.Px:return{name:le.Px,px:a,rem:a/t,em:a/t,pt:.74999943307122*a};case le.Rem:return{name:le.Rem,px:a*t,rem:a,em:a,pt:11.99999092914*a};case le.Em:return{name:le.Em,px:a*t,rem:a,em:a,pt:11.99999092914*a};case le.Pt:return{name:le.Pt,px:1.33333*a,rem:.083333396325467*a,em:.083333396325467*a,pt:a}}}}]),e}();var oe=function(){var e=Object(r.useState)(1),a=Object(d.a)(e,2),t=a[0],l=a[1],n=Object(r.useState)(16),o=Object(d.a)(n,2),c=o[0],s=o[1],i=new ne;return{value:t,setValue:l,fontBaseSize:c,setFontBaseSize:s,rows:[i.createData(le.Px,t,c),i.createData(le.Rem,t,c),i.createData(le.Em,t,c),i.createData(le.Pt,t,c)]}};function ce(){var e=oe(),a=e.value,t=e.setValue,r=e.fontBaseSize,n=e.setFontBaseSize,o=e.rows;return l.a.createElement("div",{className:"entireContainer"},l.a.createElement(s.a,{maxWidth:"md",className:"unitContainer"},l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement(m.a,{container:!0,item:!0,xs:12,sm:4}),l.a.createElement(m.a,{container:!0,item:!0,xs:12,sm:4,justify:"center"},l.a.createElement("h1",{className:"title"},"Unit Converter")),l.a.createElement(m.a,{container:!0,item:!0,xs:12,sm:4})),l.a.createElement(m.a,{container:!0,spacing:2},l.a.createElement(m.a,{item:!0,xs:12,sm:6,container:!0,justify:"center"},l.a.createElement(v.a,{InputProps:{inputProps:{min:1}},id:"filled-basic",type:"number",variant:"filled",fullWidth:!0,label:"Value",margin:"dense",value:a,onChange:function(e){t(parseFloat(e.target.value))}})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,container:!0,justify:"center"},l.a.createElement(v.a,{InputProps:{inputProps:{min:1}},fullWidth:!0,label:"Default font size",id:"filled-basic",margin:"dense",variant:"filled",type:"number",value:r,onChange:function(e){n(parseInt(e.target.value))}}))),l.a.createElement(X.a,{style:{marginTop:"1%",borderRadius:"10px"},className:"tableContainer"},l.a.createElement(Z.a,{"aria-label":"simple table",className:"table"},l.a.createElement(_.a,{className:"tableHeader"},l.a.createElement(ee.a,{className:"tableRow"},l.a.createElement(ae.a,{style:{backgroundColor:"#81c784"},className:"tableCellHeader"},"Value: ".concat(a)),l.a.createElement(ae.a,{className:"tableCellHeader",align:"center"},"px"),l.a.createElement(ae.a,{className:"tableCellHeader",align:"center"},"rem"),l.a.createElement(ae.a,{className:"tableCellHeader",align:"center"},"em"),l.a.createElement(ae.a,{className:"tableCellHeader",align:"center"},"pt"))),l.a.createElement(te.a,null,o.map((function(e,a){var t=a%2===0?"tableCellEven":"tableCellOdd";return l.a.createElement(ee.a,{key:e.name},l.a.createElement(ae.a,{component:"th",scope:"row",className:"tableCellHeader"},e.name),l.a.createElement(ae.a,{align:"center",className:t},null===e||void 0===e?void 0:e.px),l.a.createElement(ae.a,{align:"center",className:t},null===e||void 0===e?void 0:e.rem),l.a.createElement(ae.a,{align:"center",className:t},null===e||void 0===e?void 0:e.em),l.a.createElement(ae.a,{align:"center",className:t},null===e||void 0===e?void 0:e.pt))})))))))}var se,ie=t(248),me=t(249),ue=t(116),Ce=t.n(ue);!function(e){e[e.UnitConverter=0]="UnitConverter",e[e.ColorConverter=1]="ColorConverter"}(se||(se={}));var ve=se,de=l.a.createContext({}),he=function(e){var a=Object(r.useState)(ve.ColorConverter),t=Object(d.a)(a,2),n=t[0],o=t[1];return l.a.createElement(de.Provider,{value:{activeComponent:n,setActiveComponent:o}},e.children)};function pe(){return Object(r.useContext)(de)}var Ee=t(115),be=t(114);function ye(){var e=H(),a=e.theme,t=e.setTheme;return l.a.createElement("span",{style:{display:"flex",marginLeft:"auto"}},a===N.Dark?l.a.createElement(be.a,{className:"settingsIcon",onClick:function(){t(N.Light)}}):l.a.createElement(Ee.a,{className:"settingsIcon",onClick:function(){t(N.Dark)}}))}function ge(){var e=pe();return l.a.createElement(l.a.Fragment,null,l.a.createElement(ie.a,{position:"static"},l.a.createElement(me.a,null,l.a.createElement(M.a,{edge:"start",color:"inherit","aria-label":"menu"},l.a.createElement(Ce.a,null)),l.a.createElement(z.a,{color:"inherit",onClick:function(){e.setActiveComponent(ve.UnitConverter)}},"Unit Converter"),l.a.createElement(z.a,{color:"inherit",onClick:function(){e.setActiveComponent(ve.ColorConverter)}},"Color Converter"),l.a.createElement(ye,null))))}var fe=Object(c.b)((function(){var e=pe();return l.a.createElement(l.a.Fragment,null,l.a.createElement(ge,null),function(e){switch(e){case ve.UnitConverter:return l.a.createElement(ce,null);case ve.ColorConverter:return l.a.createElement(k,null,l.a.createElement(Q,null),";");default:return l.a.createElement(ce,null)}}(e.activeComponent))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe={de:t(117),en:t(118)};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(c.a,{locale:"de",messages:xe.de},l.a.createElement(O,null,l.a.createElement(T.a,{maxSnack:3,anchorOrigin:{vertical:"top",horizontal:"center"}},l.a.createElement(he,null,l.a.createElement(fe,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[129,1,2]]]);
//# sourceMappingURL=main.83354d7b.chunk.js.map