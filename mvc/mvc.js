(function(w, d, undefined) {
  var _viewElement = null;
  var _defaultRoute = null;
  var mvc = function() {
    //mapping object for the routes
    this._routeMap = {};
  };
  var routeObject = function(_controller, _route, _template) {
    this.controller = _controller;
    this.route = _route;
    this.template = _template;
  };
  mvc.prototype.AddRoute = function(controller, route, template) {
    this._routeMap[route] = new routeObject(controller, route, template);
  };
  mvc.prototype.Initialize = function() {
    var startMvcDelegate = startMvc.bind(this);
    _viewElement = d.querySelector("[view]");
    if (!_viewElement) return;

    _defaultRoute = this._routeMap[
      Object.getOwnPropertyNames(this._routeMap)[0]
    ];

    //start the Mvc manager
    w.onhashchange = startMvcDelegate;
    startMvcDelegate();
  };
})(window, document);
