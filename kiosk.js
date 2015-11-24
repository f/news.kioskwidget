function NewsWidget(config) {
  console.log(config);
  var element = document.createElement("div");
  element.innerHTML = "merhaba";
  return element;
}

Kiosk.registerWidget('news', NewsWidget);
