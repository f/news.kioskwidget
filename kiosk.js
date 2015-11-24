function NewsWidget(config) {
  console.log(config);
  var element = document.createElement("div");
  element.innerHTML = "<h1>Haberler "+Math.random()+"</h1>";
  return element;
}

Kiosk.registerWidget('news', NewsWidget);
