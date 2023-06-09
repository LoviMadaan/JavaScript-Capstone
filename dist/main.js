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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_getFoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getFoods.js */ \"./src/modules/getFoods.js\");\n\n\nwindow.onload = (0,_modules_getFoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComments.js":
/*!************************************!*\
  !*** ./src/modules/addComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n\nconst addComment = async (itemId, username, comment) => {\n  try {\n    await fetch(`${_getComments_js__WEBPACK_IMPORTED_MODULE_0__.endpointId}${_getComments_js__WEBPACK_IMPORTED_MODULE_0__.endpointLink}/comments`, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: `item${itemId}`,\n        username,\n        comment\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8'\n      }\n    });\n    await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(itemId);\n  } catch (error) {\n    throw new Error('Failed to add like');\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n// const addComment = async (index, name, comment) => {\n//   await fetch(`${endpointId}${endpointLink}/comments`, {\n//     method: 'POST',\n//     body: JSON.stringify({\n//       item_id: `item${index}`,\n//       username: name,\n//       comment,\n//     }),\n//     headers: {\n//       'Content-type': 'application/json; charset=UTF-8',\n//     },\n//   });\n//   await getComments(index);\n// };\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/modules/addComments.js?");

/***/ }),

/***/ "./src/modules/addLike.js":
/*!********************************!*\
  !*** ./src/modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addLike = async mealIndex => {\n  try {\n    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');\n    const result = await response.json();\n    const data = result.meals;\n    const id = data[mealIndex].idMeal;\n    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eX8RQobbgVJKr0OGU90I/likes/', {\n      method: 'POST',\n      mode: 'cors',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        item_id: id\n      })\n    });\n    return response;\n  } catch (error) {\n    throw new Error('Failed to add like');\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/modules/addLike.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = () => document.querySelectorAll('.commentsList').length;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"endpointId\": () => (/* binding */ endpointId),\n/* harmony export */   \"endpointLink\": () => (/* binding */ endpointLink)\n/* harmony export */ });\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\n// Set the project ID and base link for the API\nconst endpointLink = 'wvPR2ICUAVsWRaiJfk1B';\nconst endpointId = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\n\n// Define an asynchronous function that fetches comments for a given item index\nconst getComments = async index => {\n  // Fetch the comments from the API for the given item index\n  const response = await fetch(`${endpointId}${endpointLink}/comments?item_id=item${index}`);\n  const arr = await response.json();\n\n  // Check if the array of comments is empty\n  const isEmpty = !arr.length;\n\n  // Get the div element to display the comments and clear its contents\n  const div = document.getElementById('CommentsDiv');\n  div.innerHTML = '';\n\n  // If the array of comments is not empty, create a paragraph element for each comment and append\n  if (!isEmpty) {\n    arr.forEach(({\n      username,\n      comment\n    }) => {\n      const paragraph = document.createElement('p');\n      paragraph.className = 'commentsList';\n      paragraph.innerHTML = `${username}: ${comment}`;\n      div.appendChild(paragraph);\n    });\n  }\n\n  // Update the number of comments displayed in the commentSection element\n  const commentSection = document.getElementById('comments');\n  commentSection.innerHTML = `Comments(${(0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()})`;\n};\n\n// Export the getCommentsfunction and the endpointLink and endpointId variables for use\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/getFoods.js":
/*!*********************************!*\
  !*** ./src/modules/getFoods.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _addLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addLike.js */ \"./src/modules/addLike.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _menuCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuCounter.js */ \"./src/modules/menuCounter.js\");\n\n\n\n\n\n// Asynchronous function to fetch and display food items\nconst getFoods = async () => {\n  // Fetching data from API\n  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');\n  const data = (await response.json()).meals;\n\n  // Selecting required DOM elements\n  const displayCard = document.querySelector('.displayCard');\n  const counterText = document.querySelector('.menuCounter');\n\n  // Looping through the data and creating HTML elements dynamically\n  data.forEach(async (meal, i) => {\n    const node = document.createElement('div');\n    node.className = 'food';\n    node.innerHTML = `\n      <img class=\"food-image\" src=${meal.strMealThumb} alt=\"a picture of a food\" />\n      <small class=\"title\">${meal.strMeal}</small>\n      <div class=\"detail-container\">\n        <button type=\"button\" class=\"comments\">Comments</button>\n        <small class=\"likes\"><span class=\"numberOfLikes\"> </span> <i class=\"fa-regular fa-heart heart\"></i></small>\n      </div>\n    `;\n    displayCard.appendChild(node);\n\n    // Selecting required child elements of the article node\n    const numberOfLikes = node.querySelector('.numberOfLikes');\n    const buttonComments = node.querySelector('.comments');\n    const likes = node.querySelector('.heart');\n\n    // Updating likes count of each food item\n    const updateLikes = async () => {\n      const data2 = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      const num = data2.find(json => json.item_id === meal.idMeal);\n      numberOfLikes.innerHTML = num !== undefined ? `${num.likes}` : '0';\n      return num.likes;\n    };\n\n    // Adding event listeners for comments and likes\n    buttonComments.addEventListener('click', () => (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i));\n    likes.addEventListener('click', async event => {\n      if (event.target.classList.contains('fa-regular')) {\n        likes.classList.remove('fa-regular');\n        likes.classList.add('fa-solid');\n        await (0,_addLike_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(i);\n        numberOfLikes.innerHTML = `${await updateLikes()}`;\n      } else {\n        likes.classList.add('fa-regular');\n        likes.classList.remove('fa-solid');\n      }\n    });\n    numberOfLikes.innerHTML = await updateLikes();\n  });\n\n  // Updating the food counter text\n  counterText.innerHTML = `(${(0,_menuCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()})`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFoods);\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/modules/getFoods.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eX8RQobbgVJKr0OGU90I/likes/');\n  return response.json();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/menuCounter.js":
/*!************************************!*\
  !*** ./src/modules/menuCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuCounter = () => document.querySelectorAll('.food').length;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuCounter);\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/modules/menuCounter.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addComments.js */ \"./src/modules/addComments.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n\n\nconst popSection = document.getElementById('popSection');\nconst popUp = async index => {\n  // Fetch data from the API\n  const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');\n  const json = await data.json();\n  const {\n    meals\n  } = json;\n  const mealData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals[index].idMeal}`);\n  const jsonMeal = await mealData.json();\n  const specificMeal = jsonMeal.meals[0];\n\n  // Create the popup container\n  const section = document.createElement('section');\n  section.className = 'popUp';\n  popSection.appendChild(section);\n  const popupContainer = document.createElement('div');\n  popupContainer.className = 'popupContainer';\n  section.appendChild(popupContainer);\n  // Create the close button\n  const closeBtn = document.createElement('button');\n  closeBtn.id = 'buttonX';\n  closeBtn.className = 'closeBtn';\n  closeBtn.innerHTML = '<i class=\"fa-solid fa-xmark\"></i>';\n  popupContainer.appendChild(closeBtn);\n\n  // Create the image and title\n  popupContainer.innerHTML += `\n    <img src=\"${meals[index].strMealThumb}\">\n    <h3>${meals[index].strMeal}</h3>\n  `;\n\n  // Create the paragraphs for area and category\n  const divPara = document.createElement('div');\n  divPara.className = 'divPara';\n  divPara.innerHTML += `\n    <p><strong>Area:</strong> ${specificMeal.strArea}</p>\n    <p><strong>Category:</strong> ${specificMeal.strCategory}</p>\n  `;\n  popupContainer.appendChild(divPara);\n\n  // Create the comments section\n  const div1 = document.createElement('div');\n  div1.className = 'commentsContainer';\n  div1.innerHTML += `\n    <h4 id=\"comments\">Comments(0)</h4>\n    <div id=\"CommentsDiv\" class=\"CommentsDiv\"></div>\n  `;\n  popupContainer.appendChild(div1);\n\n  // Create the form for adding comments\n  const addCommentHeader = document.createElement('h4');\n  addCommentHeader.innerHTML = 'Add Comments';\n  const form = document.createElement('form');\n  form.innerHTML = '<input type=\"text\" name=\"name\" id=\"username\" placeholder=\"Username\"><textarea name=\"comment\" id=\"textComment\" placeholder=\"Add Comments\" cols=\"30\" rows=\"5\"></textarea><button id=\"submit\" type=\"submit\">Comment</button>';\n  popupContainer.appendChild(addCommentHeader);\n  popupContainer.appendChild(form);\n\n  // Add event listener to close button and cardExternalArea\n  const closeBtn2 = document.querySelector('.closeBtn');\n  // const cardExternalArea = document.querySelector('.popUp');\n  closeBtn2.addEventListener('click', () => {\n    popSection.innerHTML = '';\n  });\n  // cardExternalArea.addEventListener('click', () => {\n  //   popSection.innerHTML = '';\n  // });\n  const submit = document.getElementById('submit');\n  submit.addEventListener('click', async e => {\n    e.preventDefault();\n    const username = document.getElementById('username').value;\n    const usercomment = document.getElementById('textComment').value;\n    if (username && usercomment) {\n      document.getElementById('username').value = '';\n      document.getElementById('textComment').value = '';\n      (0,_addComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index, username, usercomment);\n    } else {\n      const error = document.createElement('p');\n      error.className = 'error';\n      error.innerHTML = 'Please fill all the requirements';\n      setTimeout(() => error.remove(), 3000);\n      form.appendChild(error);\n      document.getElementById('textComment').insertAdjacentElement('afterend', error);\n    }\n  });\n  await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUp);\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/modules/popup.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Assets/background.jpg */ \"./src/Assets/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: 100% 120%;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\nbody::-webkit-scrollbar {\\r\\n  width: 12px;\\r\\n  height: 2em; /* width of the entire scrollbar */\\r\\n}\\r\\n\\r\\nbody::-webkit-scrollbar-track {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); /* color of the tracking area */\\r\\n}\\r\\n\\r\\nbody::-webkit-scrollbar-thumb {\\r\\n  background-color: goldenrod; /* color of the scroll thumb */\\r\\n  border-radius: 20px; /* roundness of the scroll thumb */\\r\\n  border: 3px solid #746c6c; /* creates padding around scroll thumb */\\r\\n}\\r\\n\\r\\n.navigation {\\r\\n  position: fixed;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\\r\\n  backdrop-filter: blur(10px);\\r\\n  z-index: 999;\\r\\n}\\r\\n\\r\\n.navigation .navImage {\\r\\n  width: 10rem;\\r\\n  height: 6rem;\\r\\n  margin-top: 0.5rem;\\r\\n  margin-bottom: 0.5rem;\\r\\n  border-bottom-right-radius: 70px;\\r\\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\\r\\n  border: 1px solid goldenrod;\\r\\n  overflow: hidden;\\r\\n  margin-left: 3rem;\\r\\n}\\r\\n\\r\\n.navImage img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.navList {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  text-transform: uppercase;\\r\\n  font-weight: 500;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.displayCard {\\r\\n  position: relative;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n  top: 150px;\\r\\n  padding-left: 2.5%;\\r\\n  width: 97%;\\r\\n  padding-bottom: 100px;\\r\\n  min-height: 60vh;\\r\\n}\\r\\n\\r\\n.navList li {\\r\\n  font-family: \\\"Poppins\\\", Arial, Helvetica, sans-serif;\\r\\n  font-size: 1.2rem;\\r\\n  margin-right: 3.5rem;\\r\\n}\\r\\n\\r\\n.navList li:first-child {\\r\\n  font-weight: bold;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.food {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 85%;\\r\\n  height: 385px;\\r\\n  border: 3px solid goldenrod;\\r\\n  box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\\r\\n  border-radius: 10px;\\r\\n  overflow: hidden;\\r\\n  margin-bottom: 40px;\\r\\n}\\r\\n\\r\\n.food:hover {\\r\\n  transform: scale(1.1);\\r\\n  transition-duration: 1s;\\r\\n}\\r\\n\\r\\n.food-image {\\r\\n  width: 96%;\\r\\n  height: 250px;\\r\\n  margin-top: 5px;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;\\r\\n  border: rgb(204, 219, 199) 1px solid;\\r\\n}\\r\\n\\r\\n.detail-container {\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.small {\\r\\n  margin: 5px 10px 0 15px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  font-family: \\\"Poppins\\\", Arial, Helvetica, sans-serif;\\r\\n  margin-top: 10px;\\r\\n  font-size: 1.5rem;\\r\\n  min-height: 70px;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  position: relative;\\r\\n  float: right;\\r\\n  right: 10px;\\r\\n  top: 18px;\\r\\n}\\r\\n\\r\\n.heart {\\r\\n  cursor: pointer;\\r\\n  color: rgb(124, 10, 10);\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  font-family: \\\"Poppins\\\", Arial, Helvetica, sans-serif;\\r\\n  font-size: 1.1rem;\\r\\n  cursor: pointer;\\r\\n  width: 140px;\\r\\n  height: 35px;\\r\\n  margin-top: 10px;\\r\\n  margin-bottom: 5px;\\r\\n  margin-right: 55px;\\r\\n  box-shadow: rgba(0, 0, 0, 0.17) 0 -23px 25px 0 inset, rgba(0, 0, 0, 0.15) 0 -36px 30px 0 inset, rgba(0, 0, 0, 0.1) 0 -79px 40px 0 inset, rgba(0, 0, 0, 0.06) 0 2px 1px, rgba(0, 0, 0, 0.09) 0 4px 2px, rgba(0, 0, 0, 0.09) 0 8px 4px, rgba(0, 0, 0, 0.09) 0 16px 8px, rgba(0, 0, 0, 0.09) 0 32px 16px;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n/* popup */\\r\\n\\r\\n.popUp {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: rgba(75, 80, 67, 0.616);\\r\\n  backdrop-filter: blur(5px);\\r\\n  z-index: 9999;\\r\\n}\\r\\n\\r\\n.popupContainer {\\r\\n  display: flex;\\r\\n  position: relative;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  font-family: \\\"Poppins\\\", Arial, Helvetica, sans-serif;\\r\\n  margin-top: 65px;\\r\\n  width: 60%;\\r\\n  max-height: 71vh;\\r\\n  overflow: auto;\\r\\n  background-color: rgb(3, 3, 3);\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.popupContainer::-webkit-scrollbar {\\r\\n  width: 12px;\\r\\n  height: 2em; /* width of the entire scrollbar */\\r\\n}\\r\\n\\r\\n.popupContainer::-webkit-scrollbar-track {\\r\\n  background: #18181800; /* color of the tracking area */\\r\\n}\\r\\n\\r\\n.popupContainer::-webkit-scrollbar-thumb {\\r\\n  background-color: #3330; /* color of the scroll thumb */\\r\\n  border-radius: 20px; /* roundness of the scroll thumb */\\r\\n  border: 3px solid #746c6c; /* creates padding around scroll thumb */\\r\\n}\\r\\n\\r\\n.popupContainer img {\\r\\n  transition-duration: 1s;\\r\\n  width: 60%;\\r\\n  height: 300px;\\r\\n  max-width: 490px;\\r\\n  max-height: 490px;\\r\\n  border-radius: 50px;\\r\\n}\\r\\n\\r\\n.popupContainer img:hover {\\r\\n  transform: scale(1.05);\\r\\n  transition-duration: 1s;\\r\\n}\\r\\n\\r\\n.popupContainer p {\\r\\n  text-align: center;\\r\\n  font-family: \\\"Poppins\\\", Arial, Helvetica, sans-serif;\\r\\n  max-width: 80%;\\r\\n}\\r\\n\\r\\n.closeBtn {\\r\\n  transition-duration: 0.5s;\\r\\n  position: sticky;\\r\\n  border: none;\\r\\n  font-size: 30px;\\r\\n  left: 93%;\\r\\n  top: 2%;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* .closeBtn:hover {\\r\\n  color: red;\\r\\n  transition-duration: 0.5s;\\r\\n} */\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  font-family: \\\"Poppins\\\", Arial, Helvetica, sans-serif;\\r\\n  padding: 8px;\\r\\n  border: 2px solid #575151;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.commentsContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 15px;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.CommentsDiv {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  gap: 5px;\\r\\n  padding-left: 20px;\\r\\n  height: 120px;\\r\\n  box-shadow: rgba(0, 0, 0, 0.45) 0 25px 20px -20px;\\r\\n  border: 3px solid goldenrod;\\r\\n  background: rgba(128, 128, 128, 0.425);\\r\\n  border-radius: 8px;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.CommentsDiv::-webkit-scrollbar {\\r\\n  width: 12px;\\r\\n  height: 2em; /* width of the entire scrollbar */\\r\\n}\\r\\n\\r\\n.CommentsDiv::-webkit-scrollbar-track {\\r\\n  background: #18181800; /* color of the tracking area */\\r\\n}\\r\\n\\r\\n.CommentsDiv::-webkit-scrollbar-thumb {\\r\\n  background-color: #3330; /* color of the scroll thumb */\\r\\n  border-radius: 20px; /* roundness of the scroll thumb */\\r\\n  border: 3px solid #746c6c; /* creates padding around scroll thumb */\\r\\n}\\r\\n\\r\\n.CommentsDiv p {\\r\\n  text-align: left;\\r\\n  font-family: \\\"Poppins\\\", Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\n.commentsLists {\\r\\n  font-family: \\\"Poppins\\\", Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\n.scrollDown {\\r\\n  color: #000;\\r\\n  font-size: 30px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.scrollDown:hover {\\r\\n  transition-duration: 0.5s;\\r\\n  color: rgb(95, 94, 94);\\r\\n}\\r\\n\\r\\n.divPara {\\r\\n  display: flex;\\r\\n  width: 80%;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n#submit {\\r\\n  font-family: \\\"Poppins\\\", Arial, Helvetica, sans-serif;\\r\\n  width: 50%;\\r\\n  margin-left: 25%;\\r\\n  border-radius: 50px;\\r\\n  margin-bottom: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  border: 2px solid goldenrod;\\r\\n  border-bottom: 2px solid transparent;\\r\\n  border-radius: 5px;\\r\\n  width: 99.71%;\\r\\n  height: 50px;\\r\\n  backdrop-filter: blur(20px);\\r\\n}\\r\\n\\r\\n.copyright {\\r\\n  margin-left: 2.3rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://JavaScript-Capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://JavaScript-Capstone/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://JavaScript-Capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JavaScript-Capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://JavaScript-Capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://JavaScript-Capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://JavaScript-Capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://JavaScript-Capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://JavaScript-Capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Assets/background.jpg":
/*!***********************************!*\
  !*** ./src/Assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"978a59f2b633e6837aab.jpg\";\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/Assets/background.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;