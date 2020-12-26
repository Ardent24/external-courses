(() => {
  var n, e, t, r, o, a, i = {
    55: (n, e, t) => {
      "use strict";
      t(353), t(31);
      const r = t.p + "./img/user-avatar.e763618c7cb10258fabb7407b1877294.jpg";
      var o = function () {
        var n = "tasks", e = "id-count";
        localStorage.getItem(n) || (localStorage.setItem(n, JSON.stringify([{
          backlog: [{id: 0, title: "task1"}, {
            id: 1,
            title: "task2"
          }, {id: 2, title: "task3"}, {id: 3, title: "task4"}, {id: 4, title: "task5"}]
        }, {
          ready: [{id: 3, title: "task3"}, {
            id: 4,
            title: "task4"
          }]
        }, {inProgress: []}, {finished: []}])), localStorage.setItem(e, "5"));
        var t = localStorage.getItem("tasks");
        return {parseTasks: JSON.parse(t), idCount: +localStorage.getItem(e)}
      };
      const a = t.p + "./img/basket.22d5c928ac2c6b69d742ab9d79b56755.png";
      var i = function () {
        var n = document.querySelector(".active-task__js"), e = document.querySelector(".finish-task__js"), t = o();
        n.innerText = "", e.innerText = "";
        var r = 0;
        t.parseTasks.forEach((function (n) {
          return Object.keys(n).forEach((function (e) {
            n[e].forEach((function () {
              return r++
            }))
          }))
        })), n.innerText = r, e.innerText = 0
      }, s = function (n, e) {
        var t = n[0];
        t.querySelector(".main-block__btn").addEventListener("click", (function () {
          var r = document.createElement("input"), o = document.createElement("p");
          o.className = "main-block__txt", r.className = "main-block__inp", t.children[1].appendChild(o), o.appendChild(r), r.focus(), r.addEventListener("blur", (function () {
            return r.value ? (Object.values(e.parseTasks[0])[0].push({
              id: e.idCount += 1,
              title: r.value
            }), localStorage.setItem("id-count", e.idCount), localStorage.setItem("tasks", JSON.stringify(e.parseTasks)), r.remove(), i(), d(n)) : (r.remove(), d(n))
          }))
        }))
      }, l = function (n) {
        var e = o();
        e.parseTasks.forEach((function (t, r, o) {
          if (r !== n.length - 1) {
            var a = n[r + 1].querySelector(".main-block__btn"), i = document.createElement("ul");
            i.className = "main-block__list", a.disabled = !Object.values(t)[0].length, Object.values(t)[0].forEach((function (t) {
              var s = t.title, l = t.id, c = document.createElement("li");
              c.className = "main-block__item", c.innerText = s, c.setAttribute("data-id", l), i.appendChild(c), c.addEventListener("click", (function (t) {
                var i = Object.values(o[r])[0].findIndex((function (n) {
                  return +n.id == +t.target.getAttribute("data-id")
                })), s = {id: c.getAttribute("data-id"), title: c.innerText};
                Object.values(e.parseTasks[r])[0].splice(i, 1), Object.values(e.parseTasks[r + 1])[0].push(s), localStorage.setItem("tasks", JSON.stringify(e.parseTasks)), a.disabled = !1, d(n)
              }))
            })), a.addEventListener("click", (function () {
              i.classList.add("active")
            })), n[r + 1].insertAdjacentElement("beforeend", i)
          }
        }))
      }, c = function (n) {
        var e = o();
        e.parseTasks.forEach((function (t, r) {
          n[r].querySelector(".main-block__delete").addEventListener("click", (function (r) {
            r.preventDefault(), e.parseTasks.splice(t, 1), localStorage.setItem("tasks", JSON.stringify(e.parseTasks)), d(n)
          }))
        }))
      }, d = function (n) {
        var e = document.querySelector(".main__wrapper"), t = o();
        localStorage.setItem("id-count", t.idCount), localStorage.setItem("tasks", JSON.stringify(t.parseTasks)), e.innerHTML = "", t.parseTasks.forEach((function (n) {
          return Object.keys(n).forEach((function (t) {
            !function (n, e) {
              n.insertAdjacentHTML("beforeend", '\n    <div class="main-block" data-block="'.concat(e, '">\n     <a href="#" class="hover-opacity main-block__delete"><img src="').concat(a, '" class="main-block__pic" alt=""></a>\n    <header class="main-block__header">\n      <h2 class="main-block__title">').concat(e, '</h2>\n      <div class="main-block__box">\n       <button class="main-block__dots">\n        <span class="main-block__dot"></span>\n        <span class="main-block__dot"></span>\n        <span class="main-block__dot"></span>\n        </button>\n   \n      </div>\n      \n    </header>\n    <div class="main-block__body"></div>\n    <footer class="main-block__footer">\n      <button class="main-block__btn">\n        <svg class="main-block__icon">\n          <use xlink:href="#add-plus"></use>\n        </svg> Add card</button>\n    </footer>\n  </div>\n  '))
            }(e, t);
            var r = document.querySelector("[data-block=".concat(t, "] .main-block__body"));
            r.innerHTML = "", n[t].forEach((function (n) {
              var e = document.createElement("p");
              e.className = "main-block__txt", e.innerText = n.title, r.insertAdjacentElement("beforeend", e)
            }))
          }))
        })), c(n), l(n), s(n, t)
      };

      function p(n) {
        return function (n) {
          if (Array.isArray(n)) return f(n)
        }(n) || function (n) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(n)) return Array.from(n)
        }(n) || function (n, e) {
          if (!n) return;
          if ("string" == typeof n) return f(n, e);
          var t = Object.prototype.toString.call(n).slice(8, -1);
          "Object" === t && n.constructor && (t = n.constructor.name);
          if ("Map" === t || "Set" === t) return Array.from(n);
          if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return f(n, e)
        }(n) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function f(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r
      }

      var u, m, h, b, v, g, x, k, w, y = document.getElementById("app"),
        _ = document.getElementsByClassName("main-block");
      !function (n) {
        n.insertAdjacentHTML("afterend", '\n<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="d-none">\n  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" id="arrow">\n    <path d="M1.415.21L6 4.795 10.585.21 12 1.625l-6 6-6-6L1.415.21z" fill="#fff"></path>\n  </symbol>\n  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" id="title-icon">\n    <path\n      d="M37.266 11.602H17.578v1.406h19.688v-1.406zm0 10.195H17.578v1.406h19.688v-1.406zm0 10.195H17.578v1.406h19.688v-1.406zM11.953 10.195a1.41 1.41 0 011.406 1.407v1.406a1.41 1.41 0 01-1.406 1.406h-1.406a1.41 1.41 0 01-1.406-1.406v-1.406a1.41 1.41 0 011.406-1.407h1.406zm0-1.406h-1.406a2.82 2.82 0 00-2.813 2.813v1.406a2.82 2.82 0 002.813 2.812h1.406a2.82 2.82 0 002.813-2.812v-1.406a2.82 2.82 0 00-2.813-2.813zm0 11.601a1.41 1.41 0 011.406 1.407v1.406a1.41 1.41 0 01-1.406 1.406h-1.406a1.41 1.41 0 01-1.406-1.406v-1.406a1.41 1.41 0 011.406-1.406h1.406zm0-1.406h-1.406a2.82 2.82 0 00-2.813 2.813v1.406a2.82 2.82 0 002.813 2.813h1.406a2.82 2.82 0 002.813-2.813v-1.406a2.82 2.82 0 00-2.813-2.813zm0 11.602a1.41 1.41 0 011.406 1.406v1.406a1.41 1.41 0 01-1.406 1.407h-1.406a1.41 1.41 0 01-1.406-1.407v-1.406a1.41 1.41 0 011.406-1.406h1.406zm0-1.406h-1.406a2.82 2.82 0 00-2.813 2.812v1.406a2.82 2.82 0 002.813 2.813h1.406a2.82 2.82 0 002.813-2.813v-1.406a2.82 2.82 0 00-2.813-2.812z"\n      fill="#fff"></path>\n  </symbol>\n  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" id="add">\n    <path\n      d="M11 0C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11S17.1 0 11 0zm5 13h-3v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3H6c-1.1 0-2-.9-2-2s.9-2 2-2h3V6c0-1.1.9-2 2-2s2 .9 2 2v3h3c1.1 0 2 .9 2 2s-.9 2-2 2z"\n      fill="#000"></path>\n  </symbol>\n  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="add-plus">\n    <path d="M14 7H9V2a1 1 0 00-2 0v5H2a1 1 0 000 2h5v5a1 1 0 002 0V9h5a1 1 0 000-2z" fill="#5E6C84"></path>\n  </symbol>\n</svg>\n  ')
      }(y), function (n) {
        n.insertAdjacentHTML("afterbegin", '\n <header class="header">\n    <div class="header__wrapper wrapper">\n      <div class="header__box">\n        <svg class="header__box__icon">\n          <use xlink:href="#title-icon"></use>\n        </svg>\n        <h1 class="header-title">Awesome Kanban Board</h1>\n      </div>\n      <div class="header-users">\n        <button class="header-btn hover-opacity">\n          <svg class="header-btn__icon">\n            <use xlink:href="#add"></use>\n          </svg>\n          Create new list</button>\n        <div class="header-avatar hover-opacity header-avatar__js">\n          <img src="'.concat(r, '" class="header-avatar__pic" alt="avatar">\n          <svg class="header-avatar__icon">\n            <use xlink:href="#arrow"></use>\n          </svg>\n        </div>\n      </div>\n    </div>\n  </header>\n'))
      }(y), function (n) {
        var e = document.createElement("main"), t = document.createElement("div");
        e.className = "main", t.className = "main__wrapper wrapper", n.appendChild(e), e.appendChild(t)
      }(y), function (n) {
        n.insertAdjacentHTML("beforeend", '\n   <footer class="footer">\n    <div class="footer-wrapper wrapper">\n      <div class="footer-tasks">\n        <p class="footer-txt">Active tasks:\n          <span class="footer-txt__data active-task__js">N</span></p>\n        <p class="footer-txt">Finished tasks:\n          <span class="footer-txt__data finish-task__js">M</span></p>\n      </div>\n      <p class="footer-txt">Kanban Time <span class="footer-data"></span>\n      </p>\n    </div>\n  </footer>\n  ')
      }(y), u = function (n, e) {
        var t = o(), r = document.createElement("div"), a = document.createElement("div"),
          i = document.createElement("div"), s = document.createElement("button"), l = document.createElement("h2"),
          c = document.createElement("input");
        return r.className = "modal", a.className = "modal__block", i.className = "modal__container", s.className = "modal__close", l.className = "modal__title", c.className = "modal__input", s.innerHTML = "&times;", l.innerText = "Enter Board Name", c.placeholder = "Kanbane name", n.appendChild(r), r.appendChild(a), a.appendChild(i), i.appendChild(s), i.appendChild(l), i.appendChild(c), c.addEventListener("blur", (function () {
          var n = {};
          n[c.value] = [], c.value && (t.parseTasks.unshift(n), localStorage.setItem("tasks", JSON.stringify(t.parseTasks)), c.value = "", d(e)), r.classList.remove("active"), a.classList.remove("active")
        })), {
          open: function () {
            r.classList.add("active"), a.classList.add("active"), c.focus()
          }, close: function () {
            r.classList.remove("active"), a.classList.remove("active")
          }
        }
      }(y, _), document.querySelector(".header-btn").addEventListener("click", (function () {
        return u.open()
      })), document.addEventListener("click", (function (n) {
        document.querySelector(".modal__close").contains(n.target) && u.close()
      })), function (n) {
        var e = document.querySelector(".header-avatar__js"), t = e.querySelector(".header-avatar__icon"),
          r = document.querySelector(".header-dropdown");
        e.addEventListener("click", (function () {
          t.classList.contains("active") ? (t.classList.remove("active"), n.close()) : (t.classList.add("active"), n.open())
        })), document.addEventListener("click", (function (o) {
          r.contains(o.target) || e.contains(o.target) || (t.classList.remove("active"), n.close())
        }))
      }((m = document.querySelector(".header-users"), (h = document.createElement("ul")).classList.add("header-dropdown"), h.insertAdjacentHTML("afterbegin", '\n        <li class="header-dropdown__item"><a class="header-dropdown__link" href="#">My account</a></li>\n        <li class="header-dropdown__item"><a class="header-dropdown__link" href="#">My tasks</a></li>\n        <li class="header-dropdown__item"><a class="header-dropdown__link" href="#">Log out</a></li>\n  '), m.appendChild(h), {
        open: function () {
          return h.classList.add("active")
        }, close: function () {
          return h.classList.remove("active")
        }
      })), v = p([(b = new Date).getHours(), b.getMinutes(), b.getSeconds()]), g = v[0], x = v[1], k = v[2], w = document.querySelector(".footer-data"), x <= 9 && (x = "0" + x), w.innerText = "".concat(g, ":").concat(x, ":").concat(k), setInterval((function () {
        k <= 9 && (k = "0" + k), w.innerText = "".concat(g, ":").concat(x, ":").concat(k), ++k > 59 && (k = 0, ++x <= 9 && (x = "0" + x)), x > 59 && (x = 0, g++)
      }), 1e3), i(), d(_)
    }, 562: (n, e, t) => {
      "use strict";
      t.r(e), t.d(e, {default: () => a});
      var r = t(476), o = t.n(r)()((function (n) {
        return n[1]
      }));
      o.push([n.id, "@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5vAw.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5Q.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9vAw.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlvAw.ttf) format('truetype');\n}\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\na,\nstrong,\nol,\nul,\nli,\nform,\nlabel,\ntable,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\nfooter,\nheader,\nnav,\noutput,\naudio,\nvideo,\naddress {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-style: normal;\n}\na {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: none;\n}\n:focus {\n  outline: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  min-width: 300px;\n  line-height: 1;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-rendering: optimizeLegibility;\n  -webkit-text-decoration-skip: objects;\n          text-decoration-skip: objects;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: transparent;\n}\na {\n  text-decoration: none;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  color: black;\n}\nul {\n  list-style-type: none;\n}\nbutton {\n  cursor: pointer;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\niframe {\n  border: none;\n}\nimg {\n  display: block;\n  border: none;\n  max-width: 100%;\n  height: auto;\n  -ms-interpolation-mode: bicubic;\n}\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: inherit;\n}\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  cursor: pointer;\n  -webkit-appearance: none;\n}\ntextarea {\n  resize: none;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: none;\n}\nlegend {\n  display: block;\n  padding: 0;\n  white-space: normal;\n}\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\ntextarea {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\nbutton {\n  outline: none;\n  border: none;\n  background-color: transparent;\n}\n.header {\n  background-color: #0067A3;\n  padding: 1rem 0;\n}\n.header-wrapper {\n  margin: 0 auto;\n}\n.header__box {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.header__box__icon {\n  max-width: 2.3rem;\n  max-height: 2.3rem;\n  display: inline-block;\n  position: absolute;\n  left: -2.8rem;\n}\n.header-title {\n  font-size: clamp(1.5rem, 2.5vw, 2rem);\n  font-weight: normal;\n  color: #FFFFFF;\n  text-shadow: 1px 1px 1px black;\n}\n.header-users {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 270px;\n  width: 100%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n}\n.header-btn {\n  background: #FFFFFF;\n  border-radius: 5px;\n  font-size: 18px;\n  color: #000000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 12px;\n  padding-right: 20px;\n  max-height: 35px;\n  height: 100%;\n}\n.header-btn__icon {\n  display: inline-block;\n  width: 1.3rem;\n  height: 1.3rem;\n  margin-right: 13px;\n}\n.header-avatar {\n  position: relative;\n  cursor: pointer;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.header-avatar__pic {\n  border-radius: 50%;\n}\n.header-avatar__icon {\n  display: inline-block;\n  width: 10px;\n  height: 8px;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%) rotate(0deg);\n          transform: translateY(-50%) rotate(0deg);\n  right: -14px;\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n}\n.header-avatar__icon.active {\n  -webkit-transform: translateY(-50%) rotate(180deg);\n          transform: translateY(-50%) rotate(180deg);\n}\n.main {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  overflow-x: scroll;\n}\n.main::-webkit-scrollbar {\n  height: 10px;\n  background-color: white;\n  width: 20px;\n}\n.main::-webkit-scrollbar-thumb {\n  background-color: #CBCBCB;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  border: 10px solid transparent;\n}\n.main::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  background-color: #f9f9fd;\n  width: 20px;\n  padding: 200px 300px;\n}\n.main::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n.main__wrapper {\n  padding-top: 1.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  width: 100%;\n}\n.main-block {\n  background-color: #EBECF0;\n  border-radius: 10px;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 280px;\n          flex: 0 0 280px;\n  width: 100%;\n  margin-right: 2rem;\n  position: relative;\n}\n.main-block__header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 1rem;\n  padding: 1.2rem 12px;\n}\n.main-block__title {\n  font-size: clamp(1rem, 2.5vw, 1.2rem);\n  color: #000000;\n  font-weight: normal;\n  text-transform: capitalize;\n}\n.main-block__dots {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  padding: 10px 5px;\n}\n.main-block__dots:hover > * {\n  background-color: #0067A3;\n}\n.main-block__dot {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background-color: #000000;\n  margin: 0 2px;\n  display: inline-block;\n  -webkit-transition: background-color 0.5s;\n  transition: background-color 0.5s;\n}\n.main-block__txt {\n  background: #FFFFFF;\n  border-radius: 5px;\n  font-size: clamp(1rem, 2.5vw, 1.2rem);\n  line-height: 21px;\n  color: #000000;\n  padding: 0.5rem;\n  cursor: pointer;\n  position: relative;\n  padding: 10px;\n  min-height: 43px;\n  margin: 0 12px 1rem 12px;\n}\n.main-block__list {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  background-color: #EBECF0;\n  border-radius: 10px;\n  padding: 10px 12px;\n  margin-top: 1rem;\n  opacity: 0;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-transform: translate(0px, -80px);\n          transform: translate(0px, -80px);\n  z-index: -1;\n}\n.main-block__list.active {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transform: translate(0px, 0px);\n          transform: translate(0px, 0px);\n  z-index: 1;\n}\n.main-block__list:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  right: 25px;\n  top: -3px;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  margin-top: -6px;\n  border-width: 6px 0 6px 6px;\n  border-style: solid;\n  border-color: transparent #EBECF0;\n}\n.main-block__item {\n  border-bottom: 1px solid #0067A3;\n  padding: 0.5rem;\n  cursor: pointer;\n  -webkit-transition: color 0.5s;\n  transition: color 0.5s;\n  font-size: 15px;\n  color: #000000;\n}\n.main-block__item:hover {\n  color: #0067A3;\n}\n.main-block__item:last-child {\n  border-bottom: 1px solid transparent;\n}\n.main-block__inp {\n  font-size: clamp(1rem, 2.5vw, 1.2rem);\n  line-height: 21px;\n  border: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  padding: 10px;\n}\n.main-block__close {\n  position: absolute;\n  right: 3px;\n  top: 7px;\n  padding: 5px;\n}\n.main-block__footer {\n  padding-top: 7px;\n}\n.main-block__btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: clamp(1rem, 2.5vw, 1.2rem);\n  color: #5E6C84;\n  -webkit-transition: color 0.2s;\n  transition: color 0.2s;\n  margin: 0 12px 12px;\n  padding: 5px;\n  cursor: default;\n}\n.main-block__btn:not([disabled]):hover {\n  color: #0067A3;\n  cursor: pointer;\n}\n.main-block__btn:not([disabled]):hover .main-block__icon path {\n  fill: #0067A3;\n}\n.main-block__btn:not([disabled]):active {\n  color: white;\n}\n.main-block__btn:not([disabled]):active .main-block__icon {\n  fill: white;\n}\n.main-block__icon {\n  display: inline-block;\n  fill: #5E6C84;\n  width: 14px;\n  height: 14px;\n  margin-right: 4px;\n  -webkit-transition: fill 0.2s;\n  transition: fill 0.2s;\n}\n.main-block__box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.main-block__delete {\n  position: absolute;\n  right: 0.3rem;\n  top: 0.3rem;\n}\n.footer {\n  background-color: #0067A3;\n  position: relative;\n}\n.footer-tasks {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 340px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n.footer-txt {\n  font-size: clamp(1rem, 2.5vw, 1.2rem);\n  color: #FFFFFF;\n  padding: 1rem 0;\n}\n.footer-txt__data {\n  text-transform: uppercase;\n}\n.header-dropdown {\n  position: absolute;\n  top: 50px;\n  background-color: white;\n  border-radius: 10px;\n  right: -14px;\n  -webkit-box-shadow: -3px 3px 4px black;\n          box-shadow: -3px 3px 4px black;\n  padding: 0.5rem 0;\n  -webkit-transform: translateY(-100px) scale(0);\n          transform: translateY(-100px) scale(0);\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  opacity: 0;\n}\n.header-dropdown.active {\n  z-index: 1;\n  -webkit-transform: translateY(0) scale(1);\n          transform: translateY(0) scale(1);\n  opacity: 1;\n}\n.header-dropdown__item:nth-child(2n) {\n  border-top: 1px solid #0067A3;\n  border-bottom: 1px solid #0067A3;\n}\n.header-dropdown__link {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 0.5rem 1rem;\n  display: inline-block;\n}\n.header-dropdown__link:hover {\n  color: #0079BF;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0);\n  opacity: 0;\n  z-index: -1;\n  -webkit-transition: background 0.2s ease-in;\n  transition: background 0.2s ease-in;\n}\n.modal.active {\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 1;\n  z-index: 1;\n}\n.modal__block {\n  max-width: 600px;\n  background: #fff;\n  border-radius: 12px;\n  margin: 0 auto;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: -webkit-transform 0.2s ease-in;\n  transition: -webkit-transform 0.2s ease-in;\n  transition: transform 0.2s ease-in;\n  transition: transform 0.2s ease-in, -webkit-transform 0.2s ease-in;\n}\n.modal__block.active {\n  -webkit-transform: translateY(200px);\n          transform: translateY(200px);\n}\n.modal__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.modal__close {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  border-bottom: 1px solid #eeeeee;\n  width: 100%;\n  font-size: 1.3rem;\n  cursor: pointer;\n  padding: 5px 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.modal__close:hover {\n  color: #0067A3;\n}\n.modal__title {\n  font-size: 1.5rem;\n  color: #0067A3;\n  font-size: clamp(1.5rem, 2.5vw, 2rem);\n  font-weight: normal;\n  text-shadow: 1px 1px 1px black;\n  margin-bottom: 2rem;\n  margin-top: 2rem;\n}\n.modal__input {\n  margin-bottom: 3rem;\n  background: #FFFFFF;\n  border-radius: 5px;\n  font-size: clamp(1rem, 2.5vw, 1.2rem);\n  line-height: 21px;\n  color: #0067A3;\n  padding: 0.5rem;\n  cursor: pointer;\n  position: relative;\n  padding: 10px;\n  min-height: 43px;\n  border: 2px solid #0067A3;\n}\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  height: 100%;\n  font-family: 'Roboto', sans-serif;\n  background: #0079BF;\n  min-width: 300px;\n}\n.wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n.d-none {\n  display: none;\n}\n.wrapper {\n  padding-left: 4rem;\n  padding-right: 1.4rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.hover-opacity {\n  opacity: 1;\n  cursor: pointer;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.hover-opacity:hover {\n  opacity: 0.6;\n}\n.hover-color {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.hover-color:hover {\n  color: #0079BF;\n}\n", ""]);
      const a = o
    }, 476: n => {
      "use strict";
      n.exports = function (n) {
        var e = [];
        return e.toString = function () {
          return this.map((function (e) {
            var t = n(e);
            return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t
          })).join("")
        }, e.i = function (n, t, r) {
          "string" == typeof n && (n = [[null, n, ""]]);
          var o = {};
          if (r) for (var a = 0; a < this.length; a++) {
            var i = this[a][0];
            null != i && (o[i] = !0)
          }
          for (var s = 0; s < n.length; s++) {
            var l = [].concat(n[s]);
            r && o[l[0]] || (t && (l[2] ? l[2] = "".concat(t, " and ").concat(l[2]) : l[2] = t), e.push(l))
          }
        }, e
      }
    }, 353: n => {
      n.exports = '<!doctype html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <link rel="icon" href="favicon.ico" type="image/icon"> <title>Kanban</title> </head> <body> <div class="wrap" id="app"></div> </body> </html>'
    }, 31: (n, e, t) => {
      "use strict";
      var r = t(892), o = t.n(r), a = t(562), i = {insert: "head", singleton: !1}, s = o()(a.default, i);
      if (!a.default.locals || n.hot.invalidate) {
        var l = a.default.locals;
        n.hot.accept(562, (e => {
          a = t(562), function (n, e, t) {
            if (!n && e || n && !e) return !1;
            var r;
            for (r in n) if ((!t || "default" !== r) && n[r] !== e[r]) return !1;
            for (r in e) if (!(t && "default" === r || n[r])) return !1;
            return !0
          }(l, a.default.locals, void 0) ? (l = a.default.locals, s(a.default)) : n.hot.invalidate()
        }))
      }
      n.hot.dispose((function () {
        s()
      }));
      a.default.locals
    }, 892: (n, e, t) => {
      "use strict";
      var r, o = function () {
        return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
      }, a = function () {
        var n = {};
        return function (e) {
          if (void 0 === n[e]) {
            var t = document.querySelector(e);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
              t = t.contentDocument.head
            } catch (n) {
              t = null
            }
            n[e] = t
          }
          return n[e]
        }
      }(), i = [];

      function s(n) {
        for (var e = -1, t = 0; t < i.length; t++) if (i[t].identifier === n) {
          e = t;
          break
        }
        return e
      }

      function l(n, e) {
        for (var t = {}, r = [], o = 0; o < n.length; o++) {
          var a = n[o], l = e.base ? a[0] + e.base : a[0], c = t[l] || 0, d = "".concat(l, " ").concat(c);
          t[l] = c + 1;
          var p = s(d), f = {css: a[1], media: a[2], sourceMap: a[3]};
          -1 !== p ? (i[p].references++, i[p].updater(f)) : i.push({
            identifier: d,
            updater: b(f, e),
            references: 1
          }), r.push(d)
        }
        return r
      }

      function c(n) {
        var e = document.createElement("style"), r = n.attributes || {};
        if (void 0 === r.nonce) {
          var o = t.nc;
          o && (r.nonce = o)
        }
        if (Object.keys(r).forEach((function (n) {
          e.setAttribute(n, r[n])
        })), "function" == typeof n.insert) n.insert(e); else {
          var i = a(n.insert || "head");
          if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          i.appendChild(e)
        }
        return e
      }

      var d, p = (d = [], function (n, e) {
        return d[n] = e, d.filter(Boolean).join("\n")
      });

      function f(n, e, t, r) {
        var o = t ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
        if (n.styleSheet) n.styleSheet.cssText = p(e, o); else {
          var a = document.createTextNode(o), i = n.childNodes;
          i[e] && n.removeChild(i[e]), i.length ? n.insertBefore(a, i[e]) : n.appendChild(a)
        }
      }

      function u(n, e, t) {
        var r = t.css, o = t.media, a = t.sourceMap;
        if (o ? n.setAttribute("media", o) : n.removeAttribute("media"), a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), n.styleSheet) n.styleSheet.cssText = r; else {
          for (; n.firstChild;) n.removeChild(n.firstChild);
          n.appendChild(document.createTextNode(r))
        }
      }

      var m = null, h = 0;

      function b(n, e) {
        var t, r, o;
        if (e.singleton) {
          var a = h++;
          t = m || (m = c(e)), r = f.bind(null, t, a, !1), o = f.bind(null, t, a, !0)
        } else t = c(e), r = u.bind(null, t, e), o = function () {
          !function (n) {
            if (null === n.parentNode) return !1;
            n.parentNode.removeChild(n)
          }(t)
        };
        return r(n), function (e) {
          if (e) {
            if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
            r(n = e)
          } else o()
        }
      }

      n.exports = function (n, e) {
        (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = o());
        var t = l(n = n || [], e);
        return function (n) {
          if (n = n || [], "[object Array]" === Object.prototype.toString.call(n)) {
            for (var r = 0; r < t.length; r++) {
              var o = s(t[r]);
              i[o].references--
            }
            for (var a = l(n, e), c = 0; c < t.length; c++) {
              var d = s(t[c]);
              0 === i[d].references && (i[d].updater(), i.splice(d, 1))
            }
            t = a
          }
        }
      }
    }
  }, s = {};

  function l(n) {
    if (s[n]) return s[n].exports;
    var e = s[n] = {id: n, exports: {}}, t = {id: n, module: e, factory: i[n], require: l};
    return l.i.forEach((function (n) {
      n(t)
    })), e = t.module, t.factory.call(e.exports, e, e.exports, t.require), e.exports
  }

  l.m = i, l.c = s, l.i = [], l.n = n => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return l.d(e, {a: e}), e
  }, l.d = (n, e) => {
    for (var t in e) l.o(e, t) && !l.o(n, t) && Object.defineProperty(n, t, {enumerable: !0, get: e[t]})
  }, l.hu = n => n + "." + l.h() + ".hot-update.js", l.miniCssF = n => "main.undefined.css", l.hmrF = () => "main." + l.h() + ".hot-update.json", l.h = () => "14de43572d180cc6a41e", l.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), n = {}, l.l = (e, t, r) => {
    if (n[e]) n[e].push(t); else {
      var o, a;
      if (void 0 !== r) for (var i = document.getElementsByTagName("script"), s = 0; s < i.length; s++) {
        var c = i[s];
        if (c.getAttribute("src") == e) {
          o = c;
          break
        }
      }
      o || (a = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, l.nc && o.setAttribute("nonce", l.nc), o.src = e), n[e] = [t];
      var d = (t, r) => {
        o.onerror = o.onload = null, clearTimeout(p);
        var a = n[e];
        if (delete n[e], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((n => n(r))), t) return t(r)
      }, p = setTimeout(d.bind(null, void 0, {type: "timeout", target: o}), 12e4);
      o.onerror = d.bind(null, o.onerror), o.onload = d.bind(null, o.onload), a && document.head.appendChild(o)
    }
  }, l.r = n => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(n, "__esModule", {value: !0})
  }, (() => {
    var n, e, t, r, o = {}, a = l.c, i = [], s = [], c = "idle";

    function d(n) {
      c = n;
      for (var e = 0; e < s.length; e++) s[e].call(null, n)
    }

    function p(n) {
      if (0 === e.length) return n();
      var t = e;
      return e = [], Promise.all(t).then((function () {
        return p(n)
      }))
    }

    function f(n) {
      if ("idle" !== c) throw new Error("check() is only allowed in idle status");
      return d("check"), l.hmrM().then((function (r) {
        if (!r) return d(h() ? "ready" : "idle"), null;
        d("prepare");
        var o = [];
        return e = [], t = [], Promise.all(Object.keys(l.hmrC).reduce((function (n, e) {
          return l.hmrC[e](r.c, r.r, r.m, n, t, o), n
        }), [])).then((function () {
          return p((function () {
            return n ? m(n) : (d("ready"), o)
          }))
        }))
      }))
    }

    function u(n) {
      return "ready" !== c ? Promise.resolve().then((function () {
        throw new Error("apply() is only allowed in ready status")
      })) : m(n)
    }

    function m(n) {
      n = n || {}, h();
      var e = t.map((function (e) {
        return e(n)
      }));
      t = void 0;
      var o, a = e.map((function (n) {
        return n.error
      })).filter(Boolean);
      if (a.length > 0) return d("abort"), Promise.resolve().then((function () {
        throw a[0]
      }));
      d("dispose"), e.forEach((function (n) {
        n.dispose && n.dispose()
      })), d("apply");
      var i = function (n) {
        o || (o = n)
      }, s = [];
      return e.forEach((function (n) {
        if (n.apply) {
          var e = n.apply(i);
          if (e) for (var t = 0; t < e.length; t++) s.push(e[t])
        }
      })), o ? (d("fail"), Promise.resolve().then((function () {
        throw o
      }))) : r ? m(n).then((function (n) {
        return s.forEach((function (e) {
          n.indexOf(e) < 0 && n.push(e)
        })), n
      })) : (d("idle"), Promise.resolve(s))
    }

    function h() {
      if (r) return t || (t = []), Object.keys(l.hmrI).forEach((function (n) {
        r.forEach((function (e) {
          l.hmrI[n](e, t)
        }))
      })), r = void 0, !0
    }

    l.hmrD = o, l.i.push((function (m) {
      var h, b, v, g = m.module, x = function (t, r) {
        var o = a[r];
        if (!o) return t;
        var s = function (e) {
          if (o.hot.active) {
            if (a[e]) {
              var s = a[e].parents;
              -1 === s.indexOf(r) && s.push(r)
            } else i = [r], n = e;
            -1 === o.children.indexOf(e) && o.children.push(e)
          } else console.warn("[HMR] unexpected require(" + e + ") from disposed module " + r), i = [];
          return t(e)
        }, l = function (n) {
          return {
            configurable: !0, enumerable: !0, get: function () {
              return t[n]
            }, set: function (e) {
              t[n] = e
            }
          }
        };
        for (var f in t) Object.prototype.hasOwnProperty.call(t, f) && "e" !== f && Object.defineProperty(s, f, l(f));
        return s.e = function (n) {
          return function (n) {
            switch (c) {
              case"ready":
                return d("prepare"), e.push(n), p((function () {
                  d("ready")
                })), n;
              case"prepare":
                return e.push(n), n;
              default:
                return n
            }
          }(t.e(n))
        }, s
      }(m.require, m.id);
      g.hot = (h = m.id, b = g, v = {
        _acceptedDependencies: {},
        _declinedDependencies: {},
        _selfAccepted: !1,
        _selfDeclined: !1,
        _selfInvalidated: !1,
        _disposeHandlers: [],
        _main: n !== h,
        _requireSelf: function () {
          i = b.parents.slice(), n = h, l(h)
        },
        active: !0,
        accept: function (n, e) {
          if (void 0 === n) v._selfAccepted = !0; else if ("function" == typeof n) v._selfAccepted = n; else if ("object" == typeof n && null !== n) for (var t = 0; t < n.length; t++) v._acceptedDependencies[n[t]] = e || function () {
          }; else v._acceptedDependencies[n] = e || function () {
          }
        },
        decline: function (n) {
          if (void 0 === n) v._selfDeclined = !0; else if ("object" == typeof n && null !== n) for (var e = 0; e < n.length; e++) v._declinedDependencies[n[e]] = !0; else v._declinedDependencies[n] = !0
        },
        dispose: function (n) {
          v._disposeHandlers.push(n)
        },
        addDisposeHandler: function (n) {
          v._disposeHandlers.push(n)
        },
        removeDisposeHandler: function (n) {
          var e = v._disposeHandlers.indexOf(n);
          e >= 0 && v._disposeHandlers.splice(e, 1)
        },
        invalidate: function () {
          switch (this._selfInvalidated = !0, c) {
            case"idle":
              t = [], Object.keys(l.hmrI).forEach((function (n) {
                l.hmrI[n](h, t)
              })), d("ready");
              break;
            case"ready":
              Object.keys(l.hmrI).forEach((function (n) {
                l.hmrI[n](h, t)
              }));
              break;
            case"prepare":
            case"check":
            case"dispose":
            case"apply":
              (r = r || []).push(h)
          }
        },
        check: f,
        apply: u,
        status: function (n) {
          if (!n) return c;
          s.push(n)
        },
        addStatusHandler: function (n) {
          s.push(n)
        },
        removeStatusHandler: function (n) {
          var e = s.indexOf(n);
          e >= 0 && s.splice(e, 1)
        },
        data: o[h]
      }, n = void 0, v), g.parents = i, g.children = [], i = [], m.require = x
    })), l.hmrC = {}, l.hmrI = {}
  })(), l.p = "", e = (n, e, t, r) => {
    var o = document.createElement("link");
    return o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = a => {
      if (o.onerror = o.onload = null, "load" === a.type) t(); else {
        var i = a && ("load" === a.type ? "missing" : a.type), s = a && a.target && a.target.href || e,
          l = new Error("Loading CSS chunk " + n + " failed.\n(" + s + ")");
        l.code = "CSS_CHUNK_LOAD_FAILED", l.type = i, l.request = s, o.parentNode.removeChild(o), r(l)
      }
    }, o.href = e, document.head.appendChild(o), o
  }, t = (n, e) => {
    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
      var o = (i = t[r]).getAttribute("data-href") || i.getAttribute("href");
      if ("stylesheet" === i.rel && (o === n || o === e)) return i
    }
    var a = document.getElementsByTagName("style");
    for (r = 0; r < a.length; r++) {
      var i;
      if ((o = (i = a[r]).getAttribute("data-href")) === n || o === e) return i
    }
  }, r = [], o = [], a = n => ({
    dispose: () => {
      for (var n = 0; n < r.length; n++) {
        var e = r[n];
        e.parentNode && e.parentNode.removeChild(e)
      }
      r.length = 0
    }, apply: () => {
      for (var n = 0; n < o.length; n++) o[n].rel = "stylesheet";
      o.length = 0
    }
  }), l.hmrC.miniCss = (n, i, s, c, d, p) => {
    d.push(a), n.forEach((n => {
      var a = l.miniCssF(n), i = l.p + a;
      const s = t(a, i);
      s && c.push(new Promise(((t, a) => {
        var l = e(n, i, (() => {
          l.as = "style", l.rel = "preload", t()
        }), a);
        r.push(s), o.push(l)
      })))
    }))
  }, (() => {
    var n, e, t, r, o = {179: 0}, a = {};

    function i(n) {
      return new Promise(((e, t) => {
        a[n] = e;
        var r = l.p + l.hu(n), o = new Error;
        l.l(r, (e => {
          if (a[n]) {
            a[n] = void 0;
            var r = e && ("load" === e.type ? "missing" : e.type), i = e && e.target && e.target.src;
            o.message = "Loading hot update chunk " + n + " failed.\n(" + r + ": " + i + ")", o.name = "ChunkLoadError", o.type = r, o.request = i, t(o)
          }
        }))
      }))
    }

    function s(a) {
      function i(n) {
        for (var e = [n], t = {}, r = e.map((function (n) {
          return {chain: [n], id: n}
        })); r.length > 0;) {
          var o = r.pop(), a = o.id, i = o.chain, c = l.c[a];
          if (c && (!c.hot._selfAccepted || c.hot._selfInvalidated)) {
            if (c.hot._selfDeclined) return {type: "self-declined", chain: i, moduleId: a};
            if (c.hot._main) return {type: "unaccepted", chain: i, moduleId: a};
            for (var d = 0; d < c.parents.length; d++) {
              var p = c.parents[d], f = l.c[p];
              if (f) {
                if (f.hot._declinedDependencies[a]) return {
                  type: "declined",
                  chain: i.concat([p]),
                  moduleId: a,
                  parentId: p
                };
                -1 === e.indexOf(p) && (f.hot._acceptedDependencies[a] ? (t[p] || (t[p] = []), s(t[p], [a])) : (delete t[p], e.push(p), r.push({
                  chain: i.concat([p]),
                  id: p
                })))
              }
            }
          }
        }
        return {type: "accepted", moduleId: n, outdatedModules: e, outdatedDependencies: t}
      }

      function s(n, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          -1 === n.indexOf(r) && n.push(r)
        }
      }

      l.f && delete l.f.jsonpHmr, n = void 0;
      var c = {}, d = [], p = {}, f = function (n) {
        console.warn("[HMR] unexpected require(" + n.id + ") to disposed module")
      };
      for (var u in e) if (l.o(e, u)) {
        var m, h = e[u], b = !1, v = !1, g = !1, x = "";
        switch ((m = h ? i(u) : {
          type: "disposed",
          moduleId: u
        }).chain && (x = "\nUpdate propagation: " + m.chain.join(" -> ")), m.type) {
          case"self-declined":
            a.onDeclined && a.onDeclined(m), a.ignoreDeclined || (b = new Error("Aborted because of self decline: " + m.moduleId + x));
            break;
          case"declined":
            a.onDeclined && a.onDeclined(m), a.ignoreDeclined || (b = new Error("Aborted because of declined dependency: " + m.moduleId + " in " + m.parentId + x));
            break;
          case"unaccepted":
            a.onUnaccepted && a.onUnaccepted(m), a.ignoreUnaccepted || (b = new Error("Aborted because " + u + " is not accepted" + x));
            break;
          case"accepted":
            a.onAccepted && a.onAccepted(m), v = !0;
            break;
          case"disposed":
            a.onDisposed && a.onDisposed(m), g = !0;
            break;
          default:
            throw new Error("Unexception type " + m.type)
        }
        if (b) return {error: b};
        if (v) for (u in p[u] = h, s(d, m.outdatedModules), m.outdatedDependencies) l.o(m.outdatedDependencies, u) && (c[u] || (c[u] = []), s(c[u], m.outdatedDependencies[u]));
        g && (s(d, [m.moduleId]), p[u] = f)
      }
      e = void 0;
      for (var k, w = [], y = 0; y < d.length; y++) {
        var _ = d[y];
        l.c[_] && l.c[_].hot._selfAccepted && p[_] !== f && !l.c[_].hot._selfInvalidated && w.push({
          module: _,
          require: l.c[_].hot._requireSelf,
          errorHandler: l.c[_].hot._selfAccepted
        })
      }
      return {
        dispose: function () {
          var n;
          t.forEach((function (n) {
            delete o[n]
          })), t = void 0;
          for (var e, r = d.slice(); r.length > 0;) {
            var a = r.pop(), i = l.c[a];
            if (i) {
              var s = {}, p = i.hot._disposeHandlers;
              for (y = 0; y < p.length; y++) p[y].call(null, s);
              for (l.hmrD[a] = s, i.hot.active = !1, delete l.c[a], delete c[a], y = 0; y < i.children.length; y++) {
                var f = l.c[i.children[y]];
                f && ((n = f.parents.indexOf(a)) >= 0 && f.parents.splice(n, 1))
              }
            }
          }
          for (var u in c) if (l.o(c, u) && (i = l.c[u])) for (k = c[u], y = 0; y < k.length; y++) e = k[y], (n = i.children.indexOf(e)) >= 0 && i.children.splice(n, 1)
        }, apply: function (n) {
          for (var e in p) l.o(p, e) && (l.m[e] = p[e]);
          for (var t = 0; t < r.length; t++) r[t](l);
          for (var o in c) if (l.o(c, o)) {
            var i = l.c[o];
            if (i) {
              k = c[o];
              for (var s = [], f = [], u = 0; u < k.length; u++) {
                var m = k[u], h = i.hot._acceptedDependencies[m];
                if (h) {
                  if (-1 !== s.indexOf(h)) continue;
                  s.push(h), f.push(m)
                }
              }
              for (var b = 0; b < s.length; b++) try {
                s[b].call(null, k)
              } catch (e) {
                a.onErrored && a.onErrored({
                  type: "accept-errored",
                  moduleId: o,
                  dependencyId: f[b],
                  error: e
                }), a.ignoreErrored || n(e)
              }
            }
          }
          for (var v = 0; v < w.length; v++) {
            var g = w[v], x = g.module;
            try {
              g.require(x)
            } catch (e) {
              if ("function" == typeof g.errorHandler) try {
                g.errorHandler(e)
              } catch (t) {
                a.onErrored && a.onErrored({
                  type: "self-accept-error-handler-errored",
                  moduleId: x,
                  error: t,
                  originalError: e
                }), a.ignoreErrored || n(t), n(e)
              } else a.onErrored && a.onErrored({
                type: "self-accept-errored",
                moduleId: x,
                error: e
              }), a.ignoreErrored || n(e)
            }
          }
          return d
        }
      }
    }

    self.webpackHotUpdate = (n, t, o) => {
      for (var i in t) l.o(t, i) && (e[i] = t[i]);
      o && r.push(o), a[n] && (a[n](), a[n] = void 0)
    }, l.hmrI.jsonp = function (n, o) {
      e || (e = {}, r = [], t = [], o.push(s)), l.o(e, n) || (e[n] = l.m[n])
    }, l.hmrC.jsonp = function (a, c, d, p, f, u) {
      f.push(s), n = {}, t = c, e = d.reduce((function (n, e) {
        return n[e] = !1, n
      }), {}), r = [], a.forEach((function (e) {
        l.o(o, e) && void 0 !== o[e] && (p.push(i(e)), n[e] = !0)
      })), l.f && (l.f.jsonpHmr = function (e, t) {
        n && !l.o(n, e) && l.o(o, e) && void 0 !== o[e] && (t.push(i(e)), n[e] = !0)
      })
    }, l.hmrM = () => {
      if ("undefined" == typeof fetch) throw new Error("No browser support: need fetch API");
      return fetch(l.p + l.hmrF()).then((n => {
        if (404 !== n.status) {
          if (!n.ok) throw new Error("Failed to fetch update manifest " + n.statusText);
          return n.json()
        }
      }))
    }
  })(), l(55)
})();