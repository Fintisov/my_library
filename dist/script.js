/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function () {
  let {
    headActive = "accordion__head--active",
    contentActive = "accordion__content--active"
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on("click", () => {
      this[i].classList.toggle(headActive);
      this[i].nextElementSibling.classList.toggle(contentActive);
      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = `${this[i].nextElementSibling.scrollHeight + 40}px`;
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};

/***/ }),

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector(".carousel__inner")).width;
    const slides = this[i].querySelectorAll(".carousel__item");
    const slidesField = this[i].querySelector(".carousel__slides");
    const dots = this[i].querySelectorAll(".carousel__indicator li");
    slidesField.style.width = `${100 * slides.length}%`;
    slides.forEach(elem => elem.style.width = width);
    let offset = 0;
    let slideIndex = 0;
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="next"]')).on("click", e => {
      e.preventDefault();
      if (offset === +width.replace(/\D/g, "") * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.replace(/\D/g, "");
      }
      slidesField.style.transform = `translateX(-${offset}px)`;
      if (slideIndex === slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
      dots.forEach(elem => elem.classList.remove("active"));
      dots[slideIndex].classList = "active";
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="prev"]')).on("click", e => {
      e.preventDefault();
      if (offset === 0) {
        offset = +width.replace(/\D/g, "") * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, "");
      }
      slidesField.style.transform = `translateX(-${offset}px)`;
      if (slideIndex === 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }
      dots.forEach(elem => elem.classList.remove("active"));
      dots[slideIndex].classList = "active";
    });
    const indicators = this[i].querySelectorAll(".carousel__indicator > li");
    indicators.forEach(elem => {
      elem.addEventListener("click", event => {
        let currentSlideNum = Array.from(indicators).findIndex(item => item === event.target);
        offset = +width.replace(/\D/g, "") * currentSlideNum;
        slideIndex = currentSlideNum;
        slidesField.style.transform = `translateX(-${offset}px)`;
        dots.forEach(elem => elem.classList.remove("active"));
        dots[currentSlideNum].classList = "active";
      });
    });
  }
};

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).attr("id");
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-drop-id = ${id}]`).fadeToggle(100);
    });
  }
};

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (target) {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      const id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).attr("data-target");
      document.body.style.overflow = "hidden";
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`${id}`).fadeIn(300);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`${id} [data-close]`).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(id).fadeOut(500);
        document.body.style.overflow = "";
        if (target) {
          document.querySelector(id).remove();
        }
      });
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".modal").click(e => {
        if (e.target.classList.contains("modal")) {
          Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(id).fadeOut(500);
          document.body.style.overflow = "";
          if (target) {
            setTimeout(() => {
              document.querySelector(id).remove();
            }, 500);
          }
        }
      });
    });
  }
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function () {
  let {
    text,
    btn
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (let i = 0; i < this.length; i++) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));
    modal.innerHTML = `
             <div class="modal__dialog">
                <div class="modal__content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal__header">
                        <h4 class="modal__title">${text.title}</h4>
                    </div>
    
                    <div class="modal__body">
                        ${text.body};
                    </div>
                    <div class="modal__footer"></div>
                </div>
            </div>
        `;
    const buttons = [];
    for (let j = 0; j < btn.settings.length; j++) {
      const [btnText, btnClassName, btnClose, btnCallBackFun] = [...btn.settings[j]];
      const button = document.createElement("button");
      button.textContent = btnText;
      button.classList.add("btn", ...btnClassName);
      if (btnClose) {
        button.setAttribute("data-close", "");
      }
      if (btnCallBackFun && typeof btnCallBackFun === "function") {
        button.addEventListener("click", btnCallBackFun);
      }
      buttons.push(button);
    }
    modal.querySelector(".modal__footer").append(...buttons);
    document.body.appendChild(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute("data-targer")).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on("click", () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass("tab__item--active").sibling().removeClass("tab__item--active").closest(".tab").find(".tab__content").removeClass("tab__content--active").eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass("tab__content--active");
    });
  }
};

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector);
};
$.prototype.init = function (selector) {
  if (!selector) {
    return this;
  }
  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};
$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/request */ "./src/js/lib/services/request.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/carousel */ "./src/js/lib/components/carousel.js");













/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  if (!content) {
    return this[0].innerHTML;
  } else {
    for (let i = 0; i < this.length; i++) {
      this[i].innerHTML = content;
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function () {
  let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  const swap = this[i];
  const objLength = Object.keys(this);
  for (let i = 0; i < objLength.length; i++) {
    delete this[objLength[i]];
  }
  this[0] = swap;
  this.length = 1;
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parentElement = [...this[0].parentElement.children];
  return parentElement.findIndex(item => {
    return item === this[0];
  });
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  const copyObj = Object.assign({}, this);
  let counter = 0;
  const clearThis = () => {
    let thisLength = Object.keys(this);
    for (let i = 0; i < thisLength.length; i++) {
      delete this[thisLength[i]];
    }
  };
  clearThis();
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length === 0) continue;
    for (let i = 0; i < arr.length; i++) {
      this[counter] = arr[i];
      counter++;
    }
  }
  this.length = counter;
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].closest(selector)) continue;
    this[counter] = this[i].closest(selector);
    counter++;
  }
  for (let i = counter; i < this.length; i++) {
    delete this[i];
  }
  this.length = counter;
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.sibling = function () {
  let counter = 0;
  const copyObj = Object.assign({}, this);
  const clearThis = () => {
    let thisLength = Object.keys(this);
    for (let i = 0; i < thisLength.length; i++) {
      delete this[thisLength[i]];
    }
  };
  clearThis();
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentElement.children;
    for (let k = 0; k < arr.length; k++) {
      if (copyObj[i] === arr[k]) continue;
      this[counter] = arr[k];
      counter++;
    }
  }
  this.length = counter;
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.attr = function (attributeName, value) {
  if (!attributeName) return this;
  for (let i = 0; i < this.length; i++) {
    if (!value) {
      if (!this[i].getAttribute || !this[i].getAttribute(attributeName)) {
        continue;
      }
      return this[i].getAttribute(attributeName);
    } else {
      if (!this[i].setAttribute) continue;
      this[i].setAttribute(attributeName, value);
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.attrRemove = function (attributeName) {
  if (!attributeName) return this;
  for (let i = 0; i < this.length; i++) {
    if (this[i].removeAttribute) {
      continue;
    }
    this[i].removeAttribute(attributeName);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.attrToggle = function (attributeName) {
  let valueFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  let valueSecond = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  if (!attributeName || !valueFirst) return this;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].setAttribute) continue;
    if (this[i].hasAttribute(attributeName)) {
      if (this[i].getAttribute(attributeName) === valueFirst) {
        this[i].setAttribute(attributeName, valueSecond);
      } else {
        this[i].setAttribute(attributeName, valueFirst);
      }
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (var _len = arguments.length, className = new Array(_len), _key = 0; _key < _len; _key++) {
    className[_key] = arguments[_key];
  }
  if (!className) return this;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    this[i].classList.add(...className);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (var _len2 = arguments.length, className = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    className[_key2] = arguments[_key2];
  }
  if (!className) return this;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    this[i].classList.remove(...className);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  if (!className) return this;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    if (this[i].classList.contains(className)) {
      this[i].classList.remove(className);
    } else {
      this[i].classList.add(className);
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.containsClass = function (className) {
  if (!className) return this;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    return this[i].classList.contains(className);
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    this[i].style.display = "";
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    this[i].style.display = "none";
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleDisplay = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    this[i].style.display = window.getComputedStyle(this[i]).display === "none" ? "" : "none";
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callback, fin) {
  let timeStart = null;
  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }
    let timeElapsed = time - timeStart;
    let completion = Math.min(timeElapsed / duration, 1);
    callback(completion);
    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === "function") {
        fin();
      }
    }
  }
  return _animateOverTime;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration) {
  let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "block";
  let fin = arguments.length > 2 ? arguments[2] : undefined;
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display;
    let _fadeIn = completion => {
      this[i].style.opacity = completion;
    };
    const animate = this.animateOverTime(duration, _fadeIn, fin);
    requestAnimationFrame(animate);
  }
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration, fin) {
  for (let i = 0; i < this.length; i++) {
    let _fadeOut = completion => {
      this[i].style.opacity = 1 - completion;
      if (completion === 1) {
        this[i].style.display = "none";
      }
    };
    const animate = this.animateOverTime(duration, _fadeOut, fin);
    requestAnimationFrame(animate);
  }
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (duration, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === "none") {
      this.fadeIn(duration, display, fin);
    } else {
      this.fadeOut(duration, display, fin);
    }
  }
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (handler, callback) {
  if (!handler || !callback) return this;
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(handler, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (handler, callback) {
  if (!handler || !callback) return this;
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(handler, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (callback) {
  if (!callback) {
    this[0].click();
  } else {
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener("click", callback);
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/services/request.js":
/*!****************************************!*\
  !*** ./src/js/lib/services/request.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url) {
  let dataTypeAnswer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text";
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  switch (dataTypeAnswer) {
    case "json":
      {
        return await res.json();
      }
    case "text":
      {
        return await res.text();
      }
    case "blob":
      {
        return await res.blob();
      }
  }
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url, data) {
  let dataTypeAnswer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "text";
  const res = await fetch(url, {
    method: "POST",
    body: data
  });
  switch (dataTypeAnswer) {
    case "json":
      {
        return await res.json();
      }
    case "text":
      {
        return await res.text();
      }
    case "blob":
      {
        return await res.blob();
      }
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
/* harmony import */ var _lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/core */ "./src/js/lib/core.js");


Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])("#first").on("click", () => {
  Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])("div").eq(1).fadeOut(800);
});
Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])("[data-count='second']").on("click", () => {
  Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])("div").eq(2).fadeOut(800);
});
Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])("button").eq(2).on("click", () => {
  Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])(".container > div").fadeOut(800);
});
Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])(".dropdown-toggle").dropdown();
Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-toggle="modal"]').modal();
Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])("#trigger").click(() => Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])("#trigger").createModal({
  text: {
    title: "Modal title",
    text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae cumque eaque in ipsa
                labore quo quod reprehenderit? Aperiam aut doloremque ea inventore vitae voluptatum? Adipisci
                aliquid dolor error quod!`
  },
  btn: {
    settings: [["Close", ["btn", "btn-danger"], true], ["Save changes", ["btn", "btn-success", "ml-10"], false, () => {
      alert("Save changes");
    }], ["Another BTN", ["btn", "btn-warning", "ml-10"], false, () => {
      alert("Stop");
    }]]
  }
}));
Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])("[data-tab-panel] .tab__item").tab();
Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])(".accordion__head").accordion();

// $().get("https://jsonplaceholder.typicode.com/posts", "json")
//     .then(res => console.log(res));

Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])(".carousel").carousel();

/***/ })

/******/ });
//# sourceMappingURL=script.js.map