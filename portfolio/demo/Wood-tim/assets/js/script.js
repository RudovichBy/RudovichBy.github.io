/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./wood-tim/src/js/modules/burgerMenu.js":
/*!***********************************************!*\
  !*** ./wood-tim/src/js/modules/burgerMenu.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const burgerMenu = (menu, openBtn, linksNav, overlay_nav) => {
  const mobileMenu = document.querySelector(menu),
        button = document.querySelector(openBtn),
        links = document.querySelectorAll(linksNav),
        overlay = document.querySelector(overlay_nav);
  button.addEventListener('click', e => {
    e.preventDefault();
    toggleMenu();
  }); //Закрываем меню при клике по ссылке

  links.forEach(item => {
    item.addEventListener('click', () => toggleMenu());
  });
  overlay.addEventListener('click', () => {
    toggleMenu();
  });

  function toggleMenu() {
    mobileMenu.classList.toggle('burger-menu_active'); // overlay.classList.toggle('burger-menu_overlay-active');
  }
};

{
  // window.onscroll = function () {
  // 	myFunction()
  // };
  let navbar = document.getElementById("navbar");
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (burgerMenu);

/***/ }),

/***/ "./wood-tim/src/js/modules/scrolling.js":
/*!**********************************************!*\
  !*** ./wood-tim/src/js/modules/scrolling.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//**************************плавный скрол**************************	
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);

  if (upElem !== null) {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 500) {
        upElem.classList.add('animated', 'fadeIn');
        upElem.classList.remove('fadeOut');
      } else {
        upElem.classList.add('fadeOut');
        upElem.classList.remove('fadeIn');
      }
    });
    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        let widthTop = document.documentElement.scrollTop,
            hash = this.hash,
            toBlock = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);

        function step(time) {
          if (start === null) {
            start = time;
          }

          let progress = time - start,
              r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
          document.documentElement.scrollTo(0, r);

          if (r != widthTop + toBlock) {
            requestAnimationFrame(step);
          } else {
            location.hash = hash;
          }
        }
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling); // scrolling('.pageup');

/***/ }),

/***/ "./wood-tim/src/js/modules/scrollingicator.js":
/*!****************************************************!*\
  !*** ./wood-tim/src/js/modules/scrollingicator.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//========================Scroll Indicator========================
const scrollingicator = () => {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = winScroll / height * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (scrollingicator); // Код html & CSS

{
  /* <div class="progress-container">
  <div class="progress-bar" id="myBar"></div>
  </div>
  
  .progress - container {
  width: 100%;
  height: 3px;
  }
  
  
  .progress-bar {
  height: 3px;
  background: linear-gradient(to right, #2052c9, #21a5dd);
  width: 0%;
  } */
}

/***/ }),

/***/ "./wood-tim/src/js/modules/tabs.js":
/*!*****************************************!*\
  !*** ./wood-tim/src/js/modules/tabs.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const tabs = function (headerSelector, tabSelector, contentSelector, activeClass) {
  let display = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'flex';
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

  if (header !== null && tab.length !== 0 && content.length !== 0) {
    function hideTabContent() {
      content.forEach(item => {
        item.style.display = 'none';
        item.classList.remove('animated');
        item.classList.remove('fade');
        item.style.display = 'none';
      });
      tab.forEach(item => {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent() {
      let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      content[i].style.display = display;
      content[i].classList.add('animated');
      content[i].classList.add('fade');
      tab[i].classList.add(activeClass);
    } // function showResetContent() {
    // 	if (window.screen.availWidth > 539) {
    // 		content.forEach(item => {
    // 			item.style.display = display;
    // 		});
    // 	}
    // }


    hideTabContent();
    showTabContent(); // showResetContent();

    header.addEventListener('click', e => {
      const target = e.target;

      if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./wood-tim/src/js/main.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scrollingicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrollingicator */ "./wood-tim/src/js/modules/scrollingicator.js");
/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burgerMenu */ "./wood-tim/src/js/modules/burgerMenu.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrolling */ "./wood-tim/src/js/modules/scrolling.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ "./wood-tim/src/js/modules/tabs.js");




window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  (0,_modules_scrollingicator__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__["default"])('.mobile_menu', '.burger-menu_button', '.nav_item', '.burger-menu_overlay');
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_2__["default"])('.pageup');
  let mySwiper = new Swiper('.swiper', {
    loop: true,
    speed: 900,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])('.product ', '.product_toggle', '.product_toggle-collum', 'product_toggle-active');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map