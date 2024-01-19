var MAINPLERDYURL = "https://a.plerdy.com/";
var mainScriptPlerdy = document.querySelector(
  '[src*="public/js/click/main.js"]'
);
var mainScriptPlerdy_host, mainScriptPlerdy_host_tracker;
if (mainScriptPlerdy) {
  try {
    let mainScriptPlerdy_url = new URL(mainScriptPlerdy.src);
    if (mainScriptPlerdy_url.host) {
      mainScriptPlerdy_host = mainScriptPlerdy_url.host;
    } else {
      mainScriptPlerdy_host = "a.plerdy.com";
    }
  } catch (err) {
    mainScriptPlerdy_host = "a.plerdy.com";
  }
} else {
  mainScriptPlerdy_host = "a.plerdy.com";
}
if (mainScriptPlerdy_host == "a.plerdy.com") {
  mainScriptPlerdy_host_tracker = "https://c.plerdy.com";
  mainScriptPlerdy_host = "https://" + mainScriptPlerdy_host;
  if (typeof _suid !== "undefined" && (_suid == 37113 || _suid * 1 >= 50000)) {
    mainScriptPlerdy_host_tracker = "https://f.plerdy.com";
  }
} else if (mainScriptPlerdy_host == "test.plerdy.com") {
  mainScriptPlerdy_host_tracker = "https://test.plerdy.com";
  mainScriptPlerdy_host = "https://" + mainScriptPlerdy_host;
} else if (mainScriptPlerdy_host == "d.plerdy.com") {
  mainScriptPlerdy_host_tracker = "https://d.plerdy.com";
  mainScriptPlerdy_host = "https://" + mainScriptPlerdy_host;
  if (typeof _suid !== "undefined" && _suid * 1 >= 41074) {
  }
} else if (mainScriptPlerdy_host == "plerdy.loc") {
  mainScriptPlerdy_host_tracker = "http://plerdy.loc";
  mainScriptPlerdy_host = "http://" + mainScriptPlerdy_host;
} else {
  mainScriptPlerdy_host_tracker = "https://tracker.plerdy.com";
  mainScriptPlerdy_host = "https://" + mainScriptPlerdy_host;
}
var plerdy_config = {
  plerdy_url0: mainScriptPlerdy_host + "/",
  plerdy_url_live: mainScriptPlerdy_host + "/",
  plerdy_url_save: mainScriptPlerdy_host_tracker + "/click/",
  plerdy_url_save_test: mainScriptPlerdy_host_tracker + "/click_test/",
};
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (fn, scope) {
    for (var i = 0, len = this.length; i < len; ++i) {
      fn.call(scope, this[i], i, this);
    }
  };
}
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
(function () {
  var global_plerdy_referrer = document.referrer;
  var denayPlerdyTrackData = true;
  if (global_plerdy_referrer.indexOf(".plerdy.com/panel/") > -1) {
    denayPlerdyTrackData = false;
  }
  if (
    denayPlerdyTrackData &&
    location.href.indexOf("plerdy.com") * 1 === -1 &&
    navigator &&
    navigator.doNotTrack &&
    (navigator.doNotTrack + "" === "1" || navigator.doNotTrack + "" === "yes")
  ) {
    console.log("do not track");
    return false;
  } else {
    function botCheck() {
      var botPattern =
        "(Lighthouse|googlebot/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis|pingdom)";
      var re = new RegExp(botPattern, "i");
      var userAgent = navigator.userAgent;
      if (userAgent.indexOf("Lighthouse") > -1) {
        return true;
      }
      if (
        userAgent.indexOf("Googlebot-PageSpeed") > -1 ||
        userAgent.indexOf("Insights") > -1 ||
        userAgent.indexOf("Chrome-Lighthouse") > -1
      ) {
        return true;
      }
      if (
        userAgent.indexOf("gtmetrix") > -1 ||
        userAgent.indexOf("GTmetrix") > -1
      ) {
        return true;
      }
      if (re.test(userAgent)) {
        return true;
      } else {
        return false;
      }
    }
    var resulrBoot = botCheck();
    if (!resulrBoot) {
      var plerdy_sD = document.createElement("script");
      plerdy_sD.type = "text/javascript";
      plerdy_sD.src = "https://c.plerdy.com/public/js/click/detector.js?v=31";
      try {
        document.getElementsByTagName("head")[0].appendChild(plerdy_sD);
      } catch (e) {}
      plerdy_sD.onload = function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://c.plerdy.com/public/js/click/main2.js?v=31";
        try {
          document.getElementsByTagName("head")[0].appendChild(s);
          if (
            _suid == 278 &&
            document.location.href.indexOf("free-account") > -1
          ) {
            var now = new Date();
            var time = now.getTime();
            var expireTime = time + 1000 * 600;
            now.setTime(expireTime);
            var ex = ";expires=" + now.toGMTString();
            document.cookie = "__fff=1; path=/; domain=plerdy.com" + ex;
          }
        } catch (e) {}
      };
    }
  }
})();
