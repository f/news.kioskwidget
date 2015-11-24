function NewsWidget(config) {
  var element = document.createElement("div");
  element.innerHTML = "merhaba";
  return element;
}

Kiosk.registerWidget('news', NewsWidget);
