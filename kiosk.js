function NewsWidget(config) {
  console.log(config);
  var element = document.createElement("div");
  element.innerHTML = "merhaba :) " + config.show_items + " haber gosteriliyor";
  return element;
}

Kiosk.registerWidget('news', NewsWidget);
