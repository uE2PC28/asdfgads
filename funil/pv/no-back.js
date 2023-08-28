// NO-BACK
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
                if (b.location.search == null || b.location.search == undefined || b.location.search ==
                    '') {
                    b.location.href = "https://go.perfectpay.com.br/PPU38CN0MBO";
                } else {
                    if (location.search.indexOf("src") > -1) {
                        var partes = location.search.slice(1).split('&');
                        var data = {};
                        var new_search = '?';
                        partes.forEach(function(parte) {
                            var chaveValor = parte.split('=');
                            var chave = chaveValor[0];
                            var valor = chaveValor[1];
                            data[chave] = valor;
                        });
                        data.src = data.src + "-->back_home";
                        new_search += JSON.stringify(data).replace(/[{}"]/g, "").replace(/[:]/g, "=")
                            .replace(/[,]/g, "&");

                        b.location.href = "https://go.perfectpay.com.br/PPU38CN0MBO" + new_search;
                    } else {
                        b.location.href = "https://go.perfectpay.com.br/PPU38CN0MBO" + b.location.search + "&src=back_oferta";
                    }
                }
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
                    // b.location.hash = "#";
                    if (b.location.search == null || b.location.search == undefined || b.location.search ==
                        '') {
                        b.location.href = " ";
                    } else {
                        if (location.search.indexOf("src") > -1) {
                            var partes = location.search.slice(1).split('&');
                            var data = {};
                            var new_search = '?';
                            partes.forEach(function(parte) {
                                var chaveValor = parte.split('=');
                                var chave = chaveValor[0];
                                var valor = chaveValor[1];
                                data[chave] = valor;
                            });
                            data.src = data.src + "-->back_home";
                            new_search += JSON.stringify(data).replace(/[{}"]/g, "").replace(/[:]/g, "=")
                                .replace(/[,]/g, "&");

                            b.location.href = "https://go.perfectpay.com.br/PPU38CN0MBO" + new_search;
                        } else {
                            b.location.href = "https://go.perfectpay.com.br/PPU38CN0MBO" + b.location.search + "&src=back_oferta";
                        }
                    }
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