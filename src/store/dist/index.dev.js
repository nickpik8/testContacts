"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _app = _interopRequireDefault(require("firebase/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: function state() {},
  mutations: {},
  getters: {},
  actions: {
    login: function login(_ref, data) {
      var dispatch, commit;
      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _ref.dispatch, commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap(_app["default"].auth().signInWithEmailAndPassword(data.email, data.password));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    logout: function logout() {
      return regeneratorRuntime.async(function logout$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_app["default"].auth().signOut());

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  },
  modules: {}
});

exports["default"] = _default;