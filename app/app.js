var path = require("path");

window.resizeScrollViews = function resizeScrollViews () {
	var w = window,
	d = document,
	e = d.documentElement,
	g = d.getElementsByTagName('body')[0],
	//    x = w.innerWidth || e.clientWidth || g.clientWidth,
	y = w.innerHeight|| e.clientHeight|| g.clientHeight;

	var el = document.getElementsByClassName("clusterize-scroll");
	for (var i = 0; i < el.length; i++) {
		el[i].setAttribute("style","max-height:" + (y - 130) + "px");
	}
};

window.addEventListener("resize", window.resizeScrollViews);

var ApplicationController = require("./app.controller.js");
var applicationController = new ApplicationController({nodeModulesFolder: __dirname });
window.Clusterize = require("clusterize.js");

window.onload = function appLoad() {
	if (applicationController.initialize()){

		applicationController.loadCSS(path.join(__dirname, "node_modules", "font-awesome", "css", "font-awesome.min.css"));
		applicationController.loadCSS(path.join(__dirname, "node_modules", "clusterize.js", "clusterize.css"));

		applicationController.events.emit("init-main-menu", applicationController);
		/*var menu = Menu.buildFromTemplate(applicationController.mainMenu);
		Menu.setApplicationMenu(menu);*/
		applicationController.events.emit("init-gui", applicationController);
		applicationController.events.on("core-init-done", function(){});
	}
};