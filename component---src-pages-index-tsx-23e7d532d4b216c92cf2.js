(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{QeBL:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),i=n("K5F9"),s=n("Wbzz"),a=n("dEtu"),c=(n("E9XD"),n("7O5W")),o=n("17x9"),l=n.n(o),u=n("q1tI"),d=n.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function O(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function x(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),i=h(t.slice(0,r)),s=t.slice(r+1).trim();return i.startsWith("webkit")?e[(n=i,n.charAt(0).toUpperCase()+n.slice(1))]=s:e[i]=s,e}),{})}var y=!1;try{y=!0}catch(q){}function v(e){return null===e?null:"object"===f(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?j({},e,t):{}}function w(e){var t=e.forwardedRef,n=p(e,["forwardedRef"]),r=n.icon,i=n.mask,s=n.symbol,a=n.className,o=n.title,l=v(r),u=g("classes",[].concat(O(function(e){var t,n=e.spin,r=e.pulse,i=e.fixedWidth,s=e.inverse,a=e.border,c=e.listItem,o=e.flip,l=e.size,u=e.rotation,d=e.pull,f=(j(t={"fa-spin":n,"fa-pulse":r,"fa-fw":i,"fa-inverse":s,"fa-border":a,"fa-li":c,"fa-flip-horizontal":"horizontal"===o||"both"===o,"fa-flip-vertical":"vertical"===o||"both"===o},"fa-".concat(l),null!=l),j(t,"fa-rotate-".concat(u),null!=u&&0!==u),j(t,"fa-pull-".concat(d),null!=d),j(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(n)),O(a.split(" ")))),d=g("transform","string"==typeof n.transform?c.c.transform(n.transform):n.transform),f=g("mask",v(i)),b=Object(c.a)(l,m({},u,{},d,{},f,{symbol:s,title:o}));if(!b)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var h=b.abstract,x={ref:t};return Object.keys(n).forEach((function(e){w.defaultProps.hasOwnProperty(e)||(x[e]=n[e])})),N(h[0],x)}w.displayName="FontAwesomeIcon",w.propTypes={border:l.a.bool,className:l.a.string,mask:l.a.oneOfType([l.a.object,l.a.array,l.a.string]),fixedWidth:l.a.bool,inverse:l.a.bool,flip:l.a.oneOf(["horizontal","vertical","both"]),icon:l.a.oneOfType([l.a.object,l.a.array,l.a.string]),listItem:l.a.bool,pull:l.a.oneOf(["right","left"]),pulse:l.a.bool,rotation:l.a.oneOf([0,90,180,270]),size:l.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l.a.bool,symbol:l.a.oneOfType([l.a.bool,l.a.string]),title:l.a.string,transform:l.a.oneOfType([l.a.string,l.a.object]),swapOpacity:l.a.bool},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var N=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var i=(n.children||[]).map((function(n){return e(t,n)})),s=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=x(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[h(t)]=r}return e}),{attrs:{}}),a=r.style,c=void 0===a?{}:a,o=p(r,["style"]);return s.attrs.style=m({},s.attrs.style,{},c),t.apply(void 0,[n.tag,m({},s.attrs,{},o)].concat(O(i)))}.bind(null,d.a.createElement);var k=function(e){var t=e.icon,n=e.name,i=e.url,s=t.split(" ");return Object(r.jsx)(a.OutboundLink,{href:i,alt:n+" link",children:Object(r.jsx)(w,{icon:s})})};var S=function(e){var t=e.personalInformation,n=t.firstName,i=t.lastName,s=t.address,c=t.email,o=t.socialLinks;return Object(r.jsx)("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about",children:Object(r.jsxs)("div",{className:"w-100",children:[Object(r.jsxs)("h1",{className:"mb-0",children:[n,Object(r.jsx)("span",{className:"text-primary",children:i})]}),Object(r.jsxs)("div",{className:"subheading mb-5",children:[s+" - ",Object(r.jsx)(a.OutboundLink,{href:"mailto:"+c,children:c})]}),Object(r.jsx)("p",{className:"lead mb-5",children:"I have always been passionate about computers, and how technology can bring the world closer. That was the reason why I walked down the path of Software Development. Besides my studies, I have worked in a lot of Agile teams of up to 10 people, delivering high quality responsive web applications on different platforms (PHP, NodeJS) for clients in different industries (retail, sports, and education.)"}),Object(r.jsx)("div",{className:"social-icons",children:o.map((function(e){var t=e.icon,n=e.name,i=e.url;return Object(r.jsx)(k,{icon:t,name:n,url:i},n)}))})]})})};var I=function(){var e=Object(s.useStaticQuery)("971228977").site.siteMetadata.personalInformation;return Object(r.jsx)(S,{personalInformation:e})};var P=function(e){var t=["fab",e.name];return Object(r.jsx)("li",{className:"list-inline-item",children:Object(r.jsx)(w,{icon:t})})};var A=function(e){var t=e.title,n=e.companyName,i=e.description,s=e.duration,a=e.techIcons,c=e.technologies;return Object(r.jsxs)("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5",children:[Object(r.jsxs)("div",{className:"resume-content",children:[Object(r.jsx)("h3",{className:"mb-0",children:t}),Object(r.jsx)("div",{className:"subheading mb-3",children:n}),Object(r.jsx)("ul",{children:i.map((function(e){return Object(r.jsx)("li",{children:e},e)}))}),Object(r.jsx)("h4",{children:"Technologies involved:"}),Object(r.jsx)("ul",{children:c.map((function(e){return Object(r.jsx)("li",{children:e},e)}))}),Object(r.jsx)("ul",{className:"list-inline dev-icons",children:a.map((function(e){return Object(r.jsx)(P,{name:e},e)}))})]}),Object(r.jsx)("div",{className:"resume-date text-md-right",children:Object(r.jsx)("span",{className:"text-primary",children:s})})]})};var E=function(e){var t=e.experiences;return Object(r.jsx)("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience",children:Object(r.jsxs)("div",{className:"w-100",children:[Object(r.jsx)("h2",{className:"mb-5",children:"Experience"}),t.map((function(e){var t=e.title,n=e.companyName,i=e.description,s=e.duration,a=e.techIcons,c=e.technologies;return Object(r.jsx)(A,{title:t,companyName:n,description:i,duration:s,techIcons:a,technologies:c},n)}))]})})};var z=function(){var e=Object(s.useStaticQuery)("1306808193").site.siteMetadata.personalInformation.experience;return Object(r.jsx)(E,{experiences:e})};var T=function(e){var t=e.institute,n=e.degree,i=e.major,s=e.duration;return Object(r.jsxs)("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5",children:[Object(r.jsxs)("div",{className:"resume-content",children:[Object(r.jsx)("h3",{className:"mb-0",children:t}),Object(r.jsx)("div",{className:"subheading mb-3",children:n}),Object(r.jsx)("div",{children:i})]}),Object(r.jsx)("div",{className:"resume-date text-md-right",children:Object(r.jsx)("span",{className:"text-primary",children:s})})]})};var L=function(e){var t=e.education;return Object(r.jsx)("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education",children:Object(r.jsxs)("div",{className:"w-100",children:[Object(r.jsx)("h2",{className:"mb-5",children:"Education"}),t.map((function(e){var t=e.institute,n=e.degree,i=e.major,s=e.duration;return Object(r.jsx)(T,{institute:t,degree:n,major:i,duration:s},t)}))]})})};var D=function(){var e=Object(s.useStaticQuery)("3564179333").site.siteMetadata.personalInformation.education;return Object(r.jsx)(L,{education:e})};function Q(e){var t=e.title,n=e.description,i=e.url,s=i?Object(r.jsx)(a.OutboundLink,{href:i,children:Object(r.jsx)("strong",{children:t+":"})}):Object(r.jsx)("strong",{children:t+":"});return Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"fa-li fa fa-tasks text-warning"}),Object(r.jsxs)("p",{children:[s," "+n]})]})}Q.defaultProps={url:""};var W=Q;var C=function(e){var t=e.projects;return Object(r.jsx)("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"projects",children:Object(r.jsxs)("div",{className:"w-100",children:[Object(r.jsx)("h2",{className:"mb-5",children:"Projects"}),Object(r.jsx)("ul",{className:"fa-ul mb-0",children:t.map((function(e){var t=e.title,n=e.description,i=e.url;return Object(r.jsx)(W,{title:t,description:n,url:i},t)}))})]})})};var M=function(){var e=Object(s.useStaticQuery)("3599503583").site.siteMetadata.personalInformation.projects;return Object(r.jsx)(C,{projects:e})};var F=function(e){var t=e.title,n=e.description;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"subheading mb-3",children:t}),Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})};var J=function(e){var t=e.skills,n=e.techStack;return Object(r.jsx)("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills",children:Object(r.jsxs)("div",{className:"w-100",children:[Object(r.jsx)("h2",{className:"mb-5",children:"Skills and Proficiency"}),t.map((function(e){var t=e.title,n=e.description;return Object(r.jsx)(F,{title:t,description:n},t)})),Object(r.jsx)("ul",{className:"list-inline dev-icons",children:n.map((function(e){return Object(r.jsx)(P,{name:e},e)}))})]})})};var U=function(){var e=Object(s.useStaticQuery)("3155893477").site.siteMetadata.personalInformation,t=e.skills,n=e.techStack;return Object(r.jsx)(J,{skills:t,techStack:n})};t.default=function(){var e=[{id:"about",content:Object(r.jsx)(I,{})},{id:"experience",content:Object(r.jsx)(z,{})},{id:"education",content:Object(r.jsx)(D,{})},{id:"skills",content:Object(r.jsx)(U,{})},{id:"projects",content:Object(r.jsx)(M,{})}];return Object(r.jsx)(i.a,{sections:e})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-23e7d532d4b216c92cf2.js.map