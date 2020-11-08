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
  state: {
    email: null
  },
  mutations: {
    setEmail: function setEmail(state, userEmail) {
      state.email = userEmail;
    }
  },
  getters: {
    getEmail: function getEmail(state) {
      return state.email;
    }
  },
  actions: {
    login: function login(_ref, data) {
      var dispatch, commit;
      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _ref.dispatch, commit = _ref.commit;
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(_app["default"].auth().signInWithEmailAndPassword(data.email, data.password));

            case 4:
              dispatch('setUserEmail');
              _context.next = 12;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0.message);
              alert('Неверный логин или пароль, проверьте правильность введенных данных!');
              throw _context.t0;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 7]]);
    },
    logout: function logout() {
      return regeneratorRuntime.async(function logout$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_app["default"].auth().signOut());

            case 3:
              _context2.next = 9;
              break;

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              throw _context2.t0;

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 5]]);
    },
    setUserEmail: function setUserEmail(_ref2) {
      var dispatch = _ref2.dispatch,
          commit = _ref2.commit;
      commit('setEmail', _app["default"].auth().currentUser.email);
    }
  },
  modules: {}
});

exports["default"] = _default;