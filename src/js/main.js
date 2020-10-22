function callAll(jsfiles) {
  var src = document.createElement("script");
  src.setAttribute("type", "text/javascript");
  src.setAttribute("src", jsfiles);
  document.getElementsByTagName("body")[0].appendChild(src);
}
callAll("./src/js/scripts/barba.js");
callAll("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js");
callAll("./src/js/components/header.js");
