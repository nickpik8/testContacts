"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;
var firebaseConfig = {
  apiKey: "AIzaSyC3ut4wruCHMg0vwgCSpoDXEACsZZL56z8",
  authDomain: "test-takeoff.firebaseapp.com",
  databaseURL: "https://test-takeoff.firebaseio.com",
  projectId: "test-takeoff",
  storageBucket: "test-takeoff.appspot.com",
  messagingSenderId: "1080999853691",
  appId: "1:1080999853691:web:445137d906e224c421acde"
};
var app;

_app["default"].initializeApp(firebaseConfig);

_app["default"].auth().onAuthStateChanged(function () {
  if (!app) {
    app = new _vue["default"]({
      router: _router["default"],
      store: _store["default"],
      render: function render(h) {
        return h(_App["default"]);
      }
    }).$mount('#app');
  }
});