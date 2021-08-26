webpackHotUpdate("main",{

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: CardPlayfull, CardHorizontalImage */
/*! exports used: CardHorizontalImage, CardPlayfull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CardPlayfull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardHorizontalImage; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



var CardPlayfull = function CardPlayfull(_ref) {
  var cardBg = _ref.cardBg,
      imgSrc = _ref.imgSrc,
      imgAlt = _ref.imgAlt,
      cardHeader = _ref.cardHeader,
      headerColor = _ref.headerColor,
      cardTxt = _ref.cardTxt,
      cardTxtColor = _ref.cardTxtColor,
      cardLink = _ref.cardLink,
      cardLinkTxt = _ref.cardLinkTxt,
      cardLinkColor = _ref.cardLinkColor,
      imgBd = _ref.imgBd,
      children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
    className: "max-w-md py-4 px-8 " + cardBg + " shadow-lg rounded-lg my-20",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "flex justify-center md:justify-end -mt-16",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
        className: "w-20 h-20 object-cover rounded-full border-2 " + imgBd,
        src: "" + imgSrc,
        alt: "" + imgAlt
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h2", {
        className: headerColor + " text-3xl font-semibold",
        children: cardHeader
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
        className: "mt-2 " + cardTxtColor,
        children: cardTxt
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "flex justify-end mt-4",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
        href: "" + cardLink,
        className: "text-xl font-medium " + cardLinkColor,
        children: cardLinkTxt
      })
    })]
  });
};
CardPlayfull.displayName = "CardPlayfull";
var CardHorizontalImage = function CardHorizontalImage(_ref2) {
  var _jsx2;

  var cardBg = _ref2.cardBg,
      cardBd = _ref2.cardBd,
      imgSrc = _ref2.imgSrc,
      imgAlt = _ref2.imgAlt,
      avatar = _ref2.avatar,
      cardHeader = _ref2.cardHeader,
      headerColor = _ref2.headerColor,
      cardTxt = _ref2.cardTxt,
      cardTxtColor = _ref2.cardTxtColor,
      cardLink = _ref2.cardLink,
      cardLinkTxt = _ref2.cardLinkTxt,
      cardLinkColor = _ref2.cardLinkColor,
      imgBd = _ref2.imgBd,
      children = _ref2.children;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
    className: "flex items-center p-4 bg-white border-2 " + cardBd + " rounded-lg shadow-sm ",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", (_jsx2 = {
      alt: "mountain",
      className: "w-45 rounded-md border-2 max-h-60 " + imgBd,
      src: "" + imgSrc
    }, _jsx2["alt"] = "" + imgAlt, _jsx2)), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
      id: "body",
      className: "flex flex-col ml-5",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h4", {
        id: "name",
        className: "text-xl font-semibold mb-2 " + headerColor,
        children: cardHeader
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
        id: "job",
        className: cardTxtColor + " mt-2",
        children: cardTxt
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
        className: "flex mt-5",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
          alt: "avatar",
          className: "w-10 rounded-full border-2 max-h-6 " + imgBd,
          src: "" + avatar
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
          href: "" + cardLink,
          className: "ml-3 " + cardLinkColor,
          children: cardLinkTxt
        })]
      })]
    })]
  });
};
CardHorizontalImage.displayName = "CardHorizontalImage";
CardPlayfull.defaultProps = {
  imgSrc: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  imgAlt: 'image pictue',
  cardHeader: 'Card Header',
  headerColor: 'text-primary-500',
  cardTxt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt",
  cardTxtColor: "text-gray-600",
  cardLink: "#",
  cardLinkTxt: "John Doe",
  cardLinkColor: "text-secondary-500",
  cardBg: 'bg-white',
  imgBd: 'border-primary-500',
  children: 'Button',
  onClick: undefined
};
CardHorizontalImage.defaultProps = {
  imgSrc: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  avatar: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  imgAlt: 'image pictue',
  cardHeader: 'Card Header',
  headerColor: 'text-primary-500',
  cardTxt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt",
  cardTxtColor: "text-gray-600",
  cardLink: "#",
  cardLinkTxt: "John Doe",
  cardLinkColor: "text-secondary-500",
  cardBg: 'bg-white',
  imgBd: 'border-primary-500',
  children: 'Button',
  onClick: undefined
};
CardPlayfull.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CardPlayfull",
  "props": {
    "imgSrc": {
      "defaultValue": {
        "value": "'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'",
        "computed": false
      },
      "required": false
    },
    "imgAlt": {
      "defaultValue": {
        "value": "'image pictue'",
        "computed": false
      },
      "required": false
    },
    "cardHeader": {
      "defaultValue": {
        "value": "'Card Header'",
        "computed": false
      },
      "required": false
    },
    "headerColor": {
      "defaultValue": {
        "value": "'text-primary-500'",
        "computed": false
      },
      "required": false
    },
    "cardTxt": {
      "defaultValue": {
        "value": "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt\"",
        "computed": false
      },
      "required": false
    },
    "cardTxtColor": {
      "defaultValue": {
        "value": "\"text-gray-600\"",
        "computed": false
      },
      "required": false
    },
    "cardLink": {
      "defaultValue": {
        "value": "\"#\"",
        "computed": false
      },
      "required": false
    },
    "cardLinkTxt": {
      "defaultValue": {
        "value": "\"John Doe\"",
        "computed": false
      },
      "required": false
    },
    "cardLinkColor": {
      "defaultValue": {
        "value": "\"text-secondary-500\"",
        "computed": false
      },
      "required": false
    },
    "cardBg": {
      "defaultValue": {
        "value": "'bg-white'",
        "computed": false
      },
      "required": false
    },
    "imgBd": {
      "defaultValue": {
        "value": "'border-primary-500'",
        "computed": false
      },
      "required": false
    },
    "children": {
      "defaultValue": {
        "value": "'Button'",
        "computed": false
      },
      "required": false
    },
    "onClick": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "required": false
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["components/ui/Card.js"] = {
    name: "CardPlayfull",
    docgenInfo: CardPlayfull.__docgenInfo,
    path: "components/ui/Card.js"
  };
}

CardHorizontalImage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CardHorizontalImage",
  "props": {
    "imgSrc": {
      "defaultValue": {
        "value": "'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'",
        "computed": false
      },
      "required": false
    },
    "avatar": {
      "defaultValue": {
        "value": "'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'",
        "computed": false
      },
      "required": false
    },
    "imgAlt": {
      "defaultValue": {
        "value": "'image pictue'",
        "computed": false
      },
      "required": false
    },
    "cardHeader": {
      "defaultValue": {
        "value": "'Card Header'",
        "computed": false
      },
      "required": false
    },
    "headerColor": {
      "defaultValue": {
        "value": "'text-primary-500'",
        "computed": false
      },
      "required": false
    },
    "cardTxt": {
      "defaultValue": {
        "value": "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt\"",
        "computed": false
      },
      "required": false
    },
    "cardTxtColor": {
      "defaultValue": {
        "value": "\"text-gray-600\"",
        "computed": false
      },
      "required": false
    },
    "cardLink": {
      "defaultValue": {
        "value": "\"#\"",
        "computed": false
      },
      "required": false
    },
    "cardLinkTxt": {
      "defaultValue": {
        "value": "\"John Doe\"",
        "computed": false
      },
      "required": false
    },
    "cardLinkColor": {
      "defaultValue": {
        "value": "\"text-secondary-500\"",
        "computed": false
      },
      "required": false
    },
    "cardBg": {
      "defaultValue": {
        "value": "'bg-white'",
        "computed": false
      },
      "required": false
    },
    "imgBd": {
      "defaultValue": {
        "value": "'border-primary-500'",
        "computed": false
      },
      "required": false
    },
    "children": {
      "defaultValue": {
        "value": "'Button'",
        "computed": false
      },
      "required": false
    },
    "onClick": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "required": false
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["components/ui/Card.js"] = {
    name: "CardHorizontalImage",
    docgenInfo: CardHorizontalImage.__docgenInfo,
    path: "components/ui/Card.js"
  };
}

/***/ })

})
//# sourceMappingURL=main.6d5575c04695d75d238f.hot-update.js.map