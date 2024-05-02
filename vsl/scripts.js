function verificarLarguraDaTela() {
  const isMobile = /Android|iPhone/i.test(navigator.userAgent);
  const isSmallScreen = window.innerWidth <= 800;
  
  if (isMobile || isSmallScreen) {
  } else {
        window.location.href = "about:blank";
  }
}
window.addEventListener('load', verificarLarguraDaTela);    



window.onload = function () {
  var links = document.getElementsByTagName("a");
  for (var i = 0, n = links.length; i < n; i++) {
      var href = links[i].href.trim() +
              (links[i].href.indexOf("?") > 0 ? '&' : '?') +
              document.location.search.replace('?', '').toString();
      links[i].href = href;
  }
}



(function(b) {
  var a = {
     version: "0.0.1",
     history_api: typeof history.pushState !== "undefined",
     init: function() {
       b.location.hash = "#no-back";
       a.configure();
     },
     hasChanged: function() {
       if (b.location.hash == "#no-back") {
         b.location.hash = "#";
         b.location.href = "https://sistemaliberadoagora.online/op_br1"; //LINK PARA REDIRECIONAR AQUI
       }
     },
     checkCompat: function() {
       if (b.addEventListener) {
         b.addEventListener("hashchange", a.hasChanged, false);
       } else {
         if (b.attachEvent) {
           b.attachEvent("onhashchange", a.hasChanged);
         } else {
           b.onhashchange = a.hasChanged;
         }
       }
     },
     configure: function() {
       if (b.location.hash == "#no-back") {
         if (this.history_api) {                        
                history.pushState(null, "", "#");
           } else {
             b.location.hash = "#";
              b.location.href = "https://sistemaliberadoagora.online/op_br1"; //LINK PARA REDIRECIONAR AQUI
           }
         }
         a.checkCompat();
         a.hasChanged();
       }
     };
     if (typeof define === "function" && define.amd) {
       define(function() {
         return a;
       });
     } else {
       if (typeof module === "object" && module.exports) {
         module.exports = a;
       } else {
         b.noback = a;
       }
     }
     a.init();
   }(window));


