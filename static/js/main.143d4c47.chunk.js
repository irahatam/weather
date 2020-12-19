(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{37:function(e,a,c){},38:function(e,a,c){},64:function(e,a,c){"use strict";c.r(a);var t=c(1),n=c(0),r=c.n(n),s=c(29),i=c.n(s),h=(c(37),c(15)),l=c(3),j=(c(38),c(19)),o=c(30),d=c.n(o);var m=function(){return Object(t.jsxs)("header",{className:"Header",children:[Object(t.jsx)("div",{children:Object(t.jsx)("h1",{children:" Matahari's Weather App "})}),Object(t.jsxs)("nav",{children:[Object(t.jsx)("a",{href:"/?city=Jakarta",children:" Jakarta "}),Object(t.jsx)("a",{href:"/?city=Yokohama",children:" Yokohama "}),Object(t.jsx)("a",{href:"/?city=Tokyo",children:" Tokyo "}),Object(t.jsx)("a",{href:"/?city=Holmes Chapel",children:" Holmes Chapel "}),Object(t.jsx)("a",{href:"/?city=New York",children:" New York "})]})]})},b=c(9),u=c(10);var O=function(e){switch(e.weatherType){case"clear sky":return Object(t.jsx)(b.a,{icon:u.d});case"light rain":return Object(t.jsx)(b.a,{icon:u.b});case"overcast clouds":return Object(t.jsx)(b.a,{icon:u.c});case"few clouds":case"broken clouds":return Object(t.jsx)(b.a,{icon:u.a});case"moderate rain":return Object(t.jsx)(b.a,{icon:u.b});default:return Object(t.jsx)(b.a,{icon:u.e})}};var p=function(){var e=Object(l.f)(),a=Object(n.useState)(null),c=Object(j.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)("Jakarta"),h=Object(j.a)(i,2),o=h[0],b=h[1];Object(n.useEffect)((function(){d.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(o,"&units=metric&appid=").concat("7e36d76354fcaf2557bf7ddf78b3d5e6")).then((function(e){var a=e.data;s(a)})).catch((function(e){console.warn(e)}))}),[o]),Object(n.useEffect)((function(){var a=e.location.search,c=new URLSearchParams(a).get("city");c&&b(c)}),[e]);var u=Object(n.useMemo)((function(){var e="",a="",c="",t="",n="",s="",i="";return r&&(e="".concat(r.clouds.all,"%"),a="".concat(Math.round(r.main.temp),"\xb0C"),c="".concat(Math.round(r.main.temp_max),"\xb0C"),t="".concat(r.main.humidity,"%"),n="".concat(Math.round(r.main.temp_min),"\xb0C"),s="".concat(r.weather[0].description),i="".concat(r.wind.speed," mph")),{cloudiness:e,currentTemp:a,highTemp:c,humidity:t,lowTemp:n,weatherType:s,windSpeed:i}}),[r]),p=u.cloudiness,x=u.currentTemp,f=u.highTemp,w=u.humidity,N=u.lowTemp,v=u.weatherType,T=u.windSpeed;return console.log("weatherData",r),Object(t.jsxs)("div",{className:"body",children:[Object(t.jsx)(m,{}),Object(t.jsxs)("main",{className:"Home",children:[Object(t.jsxs)("h2",{children:["Weather in ",Object(t.jsx)("span",{className:"Highlight",children:o})]}),Object(t.jsxs)("div",{className:"WeatherInfo",children:[Object(t.jsxs)("div",{className:"WeatherInfo_Basic",children:[Object(t.jsx)("div",{className:"WeatherInfo_Image",children:Object(t.jsx)(O,{weatherType:v})}),Object(t.jsx)("p",{className:"WeatherInfo_Type",children:v}),Object(t.jsx)("h3",{className:"Label",children:"current temperature:"}),Object(t.jsx)("p",{className:"WeatherInfo_Temperature",children:x})]}),Object(t.jsxs)("div",{className:"WeatherInfo_Extra",children:[Object(t.jsxs)("div",{className:"WeatherInfo_Extra_Column",children:[Object(t.jsx)("h3",{className:"Label",children:"high temperature:"}),Object(t.jsx)("p",{className:"WeatherInfo_Temperature_Small",children:f}),Object(t.jsx)("h3",{className:"Label",children:"low temperature: "}),Object(t.jsx)("p",{className:"WeatherInfo_Temperature_Small",children:N}),Object(t.jsx)("h3",{className:"Label",children:"wind speed:"}),Object(t.jsx)("p",{className:"WeatherInfo_Temperature_Small",children:T})]}),Object(t.jsxs)("div",{className:"WeatherInfo_Extra_Column",children:[Object(t.jsx)("h3",{className:"Label",children:"cloudiness:"}),Object(t.jsx)("p",{className:"WeatherInfo_Temperature_Small",children:p}),Object(t.jsx)("h3",{className:"Label",children:"humidity:"}),Object(t.jsx)("p",{className:"WeatherInfo_Temperature_Small",children:w})]})]})]})]})]})};var x=function(){return Object(t.jsx)(h.a,{children:Object(t.jsx)(l.c,{children:Object(t.jsx)(l.a,{path:"/",children:Object(t.jsx)(p,{})})})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(a){var c=a.getCLS,t=a.getFID,n=a.getFCP,r=a.getLCP,s=a.getTTFB;c(e),t(e),n(e),r(e),s(e)}))};i.a.render(Object(t.jsx)(r.a.StrictMode,{children:Object(t.jsx)(x,{})}),document.getElementById("root")),f()}},[[64,1,2]]]);
//# sourceMappingURL=main.143d4c47.chunk.js.map