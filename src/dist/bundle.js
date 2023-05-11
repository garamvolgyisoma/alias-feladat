/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst intToRoman_1 = __importDefault(__webpack_require__(/*! ./intToRoman */ \"./src/intToRoman.ts\"));\nconst app = document.getElementById(\"app\");\nconst numberInput = document.createElement(\"input\");\nnumberInput.setAttribute(\"type\", \"text\");\nnumberInput.setAttribute(\"data-testid\", \"numberInput\");\napp?.appendChild(numberInput);\nconst submitButton = document.createElement(\"button\");\nsubmitButton.setAttribute(\"data-testid\", \"submitButton\");\nsubmitButton.textContent = \"Convert\";\nsubmitButton.onclick = () => {\n    const userInput = numberInput.value.trim();\n    if (isNaN(Number(userInput))) {\n        alert(\"Invalid input!\");\n        return;\n    }\n    const uInputAsNum = Number(userInput);\n    if (uInputAsNum < 1 || uInputAsNum > 3999) {\n        alert(\"Input must be between 1 and 3999!\");\n        return;\n    }\n    if (uInputAsNum % 1 !== 0) {\n        alert(\"Input must be an integer!\");\n        return;\n    }\n    updateOutput((0, intToRoman_1.default)(uInputAsNum));\n    numberInput.value = '';\n};\napp?.appendChild(submitButton);\nconst outputP = document.createElement(\"p\");\napp?.appendChild(outputP);\nconst updateOutput = (newOutput) => {\n    outputP.innerHTML = newOutput;\n};\nconst headline = document.createElement(\"h1\");\nheadline.innerHTML = \"Type an integer between 1 and 3999 to convert it into a roman number!\";\napp?.prepend(headline);\n//styling\nif (app) {\n    document.body.style.margin = \"0\";\n    document.body.style.padding = \"0\";\n    document.body.style.width = \"100%\";\n    document.body.style.backgroundColor = \"burlywood\";\n    app.style.margin = \"2rem 4rem\";\n    app.style.display = \"flex\";\n    app.style.flexDirection = \"column\";\n    headline.style.fontSize = \"18px\";\n    headline.style.textAlign = \"center\";\n    numberInput.style.borderWidth = \"0\";\n    numberInput.style.textAlign = \"center\";\n    submitButton.style.borderWidth = \"0\";\n    outputP.style.fontSize = \"14px\";\n    outputP.style.textAlign = \"center\";\n}\n\n\n//# sourceURL=webpack://alias-feladat/./src/index.ts?");

/***/ }),

/***/ "./src/intToRoman.ts":
/*!***************************!*\
  !*** ./src/intToRoman.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst intToRoman = (input) => {\n    let nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];\n    let symbols = [\"I\", \"IV\", \"V\", \"IX\", \"X\", \"XL\", \"L\", \"XC\", \"C\", \"CD\", \"D\", \"CM\", \"M\"];\n    let i = 12;\n    let romanNum = \"\";\n    while (input > 0) {\n        let div = Math.floor(input / nums[i]);\n        input = input % nums[i];\n        while (div--) {\n            romanNum += symbols[i];\n        }\n        i--;\n    }\n    return romanNum;\n};\nexports[\"default\"] = intToRoman;\n\n\n//# sourceURL=webpack://alias-feladat/./src/intToRoman.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;