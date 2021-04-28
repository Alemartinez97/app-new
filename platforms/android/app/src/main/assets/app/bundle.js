require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. You can learn more about the \nNativeScript core theme at https://github.com/nativescript/theme\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/default.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "},{"type":"comment","comment":"\nThe following CSS rule changes the font size of all Buttons that have the\n\"-primary\" class modifier.\n"},{"type":"rule","selectors":["Button.-primary"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _item_item_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/item/item-detail.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/register/register.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/search/search.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/result/result.component.ts");
/* harmony import */ var _result_result_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/result/result-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/home/home.component.ts");










var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "result/:search", component: _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"] },
    { path: "result", component: _result_result_detail_component__WEBPACK_IMPORTED_MODULE_8__["ResultDetailComponent"] },
    { path: "search", component: _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"] },
    { path: "items", component: _item_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"] },
    { path: "item/:id", component: _item_item_detail_component__WEBPACK_IMPORTED_MODULE_3__["ItemDetailComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\n<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __importDefault(__webpack_require__("./app/app.component.html")).default
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/item/item-detail.component.ts");
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/register/register.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/search/search.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/result/result.component.ts");
/* harmony import */ var _result_result_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/result/result-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/home/home.component.ts");



//import { YoutubePlayerModule } from "nativescript-youtubeplayer-inline/angular";










//import   {  PinchToZoomDirective  }  from  "./pinch-to-zoom.directive" ;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"],
                _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__["ItemDetailComponent"],
                _item_items_component__WEBPACK_IMPORTED_MODULE_6__["ItemsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"],
                _result_result_detail_component__WEBPACK_IMPORTED_MODULE_11__["ResultDetailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Menu\" class=\"action-bar\">\n    <ActionItem\n    [nsRouterLink]=\"['/items']\"\n    android.systemIcon=\"menuitem_background\"\n    android.position=\"actionBar\"\n    ></ActionItem>\n    <ActionItem\n    [nsRouterLink]=\"['/search']\"\n    android.systemIcon=\"ic_menu_search\"\n    ></ActionItem>\n  <ActionItem \n  [nsRouterLink]=\"['/items']\"\n  android.systemIcon=\"ic_menu_today\">\n  </ActionItem>\n</ActionBar>\n<BottomNavigation>\n  <TabStrip>\n    <TabStripItem class=\"navigation__item\">\n      <Label  text=\"Home\" [nsRouterLink]=\"['/items']\"></Label>\n    </TabStripItem>\n    <TabStripItem class=\"navigation__item\">\n      <Label text=\"Browse\"></Label>\n    </TabStripItem>\n    <TabStripItem class=\"navigation__item\">\n      <Label text=\"Search\"></Label>\n    </TabStripItem>\n  </TabStrip>\n\n  <TabContentItem>\n    <page-router-outlet name=\"homeTab\"></page-router-outlet>\n  </TabContentItem>\n\n  <TabContentItem>\n    <page-router-outlet name=\"browseTab\"></page-router-outlet>\n  </TabContentItem>\n\n  <TabContentItem>\n    <page-router-outlet name=\"searchTab\"></page-router-outlet>\n  </TabContentItem>\n</BottomNavigation>\n"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.onDrawerButtonTap = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./app/home/home.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/item/item-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n    background-color: chartreuse;\n    margin: 15 15 0;\n  }\n  .card-layout {\n    padding: 20;\n    border-radius: 13em/3em;\n  }\n  .card-layout .h1 {\n    margin-bottom: 15;\n  }\n  .logo {\n    margin-bottom: 0;\n    width: 100%;\n    height: 250;\n    border-radius: 13em/3em;\n  }\n  .h2 {\n    font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .date {\n    font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n    font-size: 15px;\n    font-weight: bold;\n  }\n  \n.my-button {\n    background-color:  chartreuse;\n    border-color: darkolivegreen;\n    border-radius: 20;\n    border-width: 1;\n    color: whitesmoke;\n    font-size: 18;\n    font-weight: bold;\n} \n"

/***/ }),

/***/ "./app/item/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Detalle\">\n  <NavigationButton android.systemIcon=\"ic_menu_back\" (tap)=\"goBack()\"></NavigationButton>\n  <ActionItem android.systemIcon=\"ic_menu_share\" (tap)=\"onShare()\"></ActionItem>\n</ActionBar>\n<GridLayout>\n  <ScrollView class=\"page\">\n    <StackLayout>\n      <!-- On Android the card view plugin requires adding an external library\n\t\t\t\ttherefore it can't be demoed on Playground. You will have to download this project\n\t\t\t\tand build it locally to try it on Android -->\n      <CardView class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\">\n        <StackLayout class=\"card-layout\">\n          <Label class=\"h2\" [text]=\"item.title\" textWrap=\"true\"></Label>\n          <!-- <AbsoluteLayout class=\"zoom\" [visibility]=\"isItemVisible ? 'visible' : 'collapsed'\"><ImageZoom [src]=\"item.imageUrl\"  [visibility]=\"isItemVisible ? 'visible' : 'collapsed'\" maxZoom=\"5\" minZoom=\"2\" zoomScale=\"3\"></ImageZoom></AbsoluteLayout> -->\n          <!-- <ImageZoom [src]=\"item.imageUrl\"  stretch=\"aspectFill\"\n          backgroundColor=\"#ddd\" width=\"100%\" height=\"500\"  maxZoom=\"5\" minZoom=\"2\" zoomScale=\"3\"></ImageZoom> -->\n          <Image class=\"logo\" [src]=\"item.imageUrl\" stretch=\"aspectFill\" pinchToZoom backgroundColor=\"#ddd\"></Image>\n          <Label class=\"body\" textWrap=\"true\" [text]=\"item.description\">\n          </Label>\n          <!-- <VideoPlayer\n            src=\"https://itsontheway.s3.amazonaws.com/Subscribe+te+y+ayudanos+a+mejor+el+canal.mp4\"\n            autoplay=\"false\"\n            controls=\"true\"\n            height=\"3000\"\n            fill=\"aspectFill\"\n            scaleY=\"1.2\"\n            scaleX=\"1.2\"\n          ></VideoPlayer> -->\n          <Label class=\"date\" textWrap=\"true\" [text]=\"item.publishedAt | date: 'yyyy/MM/dd'\"></Label>\n          <Button class=\"body\" textWrap=\"true\" (tap)=\"onClick()\" text=\"Fuente\" class=\"my-button\"></Button>\n        </StackLayout>\n      </CardView>\n    </StackLayout>\n  </ScrollView>\n</GridLayout>"

/***/ }),

/***/ "./app/item/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_social_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/nativescript-social-share/social-share.js");
/* harmony import */ var nativescript_social_share__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_social_share__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/item/item.service.ts");






Object(_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["registerElement"])("ImageZoom", function () { return __webpack_require__("./node_modules/@happones/nativescript-image-zoom/image-zoom.js").ImageZoom; });

var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, route, routerExtensions) {
        this.itemService = itemService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.items = [];
        this.item = [];
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.itemService.getItems().subscribe(function (response) {
            _this.items = response;
            _this.item = _this.items.articles.filter(function (item) { return item._id === id; })[0];
        }, function (error) { return console.error(error); });
    };
    ItemDetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    ItemDetailComponent.prototype.onClick = function () {
        _nativescript_core__WEBPACK_IMPORTED_MODULE_2__["Utils"].openUrl(this.item.sourceUrl);
    };
    ItemDetailComponent.prototype.onShare = function () {
        nativescript_social_share__WEBPACK_IMPORTED_MODULE_4__["shareText"](this.item.sourceUrl);
    };
    ItemDetailComponent.ctorParameters = function () { return [
        { type: _item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __importDefault(__webpack_require__("./app/item/item-detail.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/item/item-detail.component.css")).default]
        }),
        __metadata("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./app/item/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core__WEBPACK_IMPORTED_MODULE_2__);



var ItemService = /** @class */ (function () {
    function ItemService(http, _page) {
        this.http = http;
        this._page = _page;
    }
    ItemService.prototype.getItems = function () {
        return this.http.get("https://api.jornalia.net/api/v1/articles?apiKey=f36f0dc2f3204a3c821130384e208604");
    };
    ItemService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _nativescript_core__WEBPACK_IMPORTED_MODULE_2__["Page"] }
    ]; };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _nativescript_core__WEBPACK_IMPORTED_MODULE_2__["Page"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./app/item/items.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: chartreuse;\n  margin: 15 15 0;\n}\n.card-layout {\n  padding: 20;\n  border-radius: 13em/3em;\n}\n.card-layout .h1 {\n  margin-bottom: 15;\n}\n.logo {\n  margin-bottom: 0;\n  width: 100%;\n  height: 250;\n  border-radius: 13em/3em;\n}\n.button2{\n background: aqua; \n border-radius: 13em/3em;\n color: white;\n}\n.h2 {\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n}\n.button {\n  color: white;\n  background-color: chartreuse;\n  border-radius: 13em/3em;\n}\n.date {\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-size: 15px;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./app/item/items.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\n  <ActionBar title=\"Ultimas Noticias\">\n    <ActionItem android.systemIcon=\"ic_menu_search\" [nsRouterLink]=\"['/search']\"></ActionItem>\n    <ActionItem text=\"Cerrar sesión\" (tap)=\"onLogout()\" ios.systemIcon=\"16\" ios.position=\"right\"\n      android.position=\"popup\">\n    </ActionItem>\n  </ActionBar>\n</Page.actionBar>\n\n<GridLayout>\n  <ScrollView class=\"page\" row=\"5\">\n    <StackLayout>\n      <CardView *ngFor=\"let item of items.articles\" class=\"card\" elevation=\"40\"  radius=\"10\" ios:shadowRadius=\"3\">\n        <StackLayout class=\"card-layout\" [nsRouterLink]=\"['/item', item._id]\">\n          <Label class=\"h2\" [text]=\"item.title\" textWrap=\"true\"></Label>\n          <!-- <ImageZoom [src]=\"item.imageUrl\" maxZoom=\"5\" minZoom=\"2\"></ImageZoom> -->\n          <Image class=\"logo\" [src]=\"item.imageUrl\" backgroundColor=\"black\" width=\"100%\" height=\"300\"></Image>\n          <!-- <VideoPlayer\n          src=\"https://itsontheway.s3.amazonaws.com/Subscribe+te+y+ayudanos+a+mejor+el+canal.mp4\"\n          autoplay=\"false\"\n          loop=\"true\"\n          controls=\"true\"\n          height=\"3000\"\n          fill=\"true\"\n          scaleY=\"1.2\"\n          scaleX=\"1.2\"\n        ></VideoPlayer> -->\n          <Label class=\"date\" textWrap=\"true\" [text]=\"item.publishedAt | date: 'yyyy/MM/dd'\">\n          </Label>\n          <GridLayout columns=\"auto,auto,auto,auto\" horizontalAlignment=\"center\" paddingBottom=\"10\">\n            <!-- <Button #swipeleft class=\"btn fa\" col=\"0\" [text]=\"'fa-times' | fonticon\"></Button> -->\n            <Button #swiperight [class]=\"classCss\" col=\"3\"  text=\"Me Gusta\" (tap)=\"onClick($event,item._id)\"></Button>\n          </GridLayout>\n        </StackLayout>\n      </CardView>\n    </StackLayout>\n  </ScrollView>\n</GridLayout>"

/***/ }),

/***/ "./app/item/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/item/item.service.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/utils/api.js");




// registerElement(
//     "ImageZoom",
//     () => require("@happones/nativescript-image-zoom").ImageZoom
// );


var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemsService, route, routerExtensions) {
        this.itemsService = itemsService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.items = [];
        this.classCss = "button";
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.itemsService.getItems().subscribe(function (response) {
            _this.items = response;
        }, function (error) { return console.log(error); });
    };
    ItemsComponent.prototype.onClick = function (args, id_new) {
        var user = Object(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__["getString"])("user");
        var value = {
            user: user,
            id: id_new,
        };
        alert(JSON.stringify(value));
        if (this.classCss === "button2") {
            this.classCss = "button";
            _utils_api__WEBPACK_IMPORTED_MODULE_5__["default"]._delete("/like", id_new)
                .then(function (result) {
                console.info(result);
            })
                .catch(function (err) {
                console.error(err);
            });
        }
        else {
            this.classCss = "button2";
            _utils_api__WEBPACK_IMPORTED_MODULE_5__["default"].post("/like", value)
                .then(function (result) {
                console.info(result);
            })
                .catch(function (err) {
                console.error(err);
            });
        }
    };
    ItemsComponent.prototype.onLogout = function () {
        Object(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__["clear"])();
        this.routerExtensions.navigate(["/login"]);
    };
    ItemsComponent.prototype.goBanck = function () {
        this.routerExtensions.back();
    };
    ItemsComponent.ctorParameters = function () { return [
        { type: _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __importDefault(__webpack_require__("./app/item/items.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/item/items.component.css")).default]
        }),
        __metadata("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".flexboxLayout {\n    justify-content: center;\n    align-items: center;\n    background-size: cover;\n    background-color: greenyellow;\n    border-radius: 13em/3em;\n  }\n  .stackLayout {\n    width: 300;\n    padding: 10 16;\n    background-color:rgba(0, 60, 255, 0.157);\n    border-radius: 13em/3em;\n  }\n  Button, TextField {\n    border-radius: 13em/3em;\n  }\n  .btn-primary {\n    background-color:honeydew;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .dark {\n    background-color: #301217;\n  }\n  .dark TextField {\n    color:  cornflowerblue;\n  }"

/***/ }),

/***/ "./app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout class=\"flexboxLayout\">\n  <StackLayout class=\"stackLayout\">\n    <TextField\n      hint=\"Correo\"\n      keyboardType=\"email\"\n      autocorrect=\"false\"\n      autocapitalizationType=\"none\"\n      [(ngModel)]=\"user.email\"\n      class=\"input input-border\"\n    ></TextField>\n    <TextField\n      hint=\"Contraseña\"\n      secure=\"true\"\n      [(ngModel)]=\"user.password\"\n      class=\"input input-border\"\n    ></TextField>\n\n    <Button\n      text=\"Iniciar sesión\"\n      class=\"btn btn-primary\"\n      (tap)=\"submit()\"\n    ></Button>\n    <Button   class=\"btn btn-primary\" [nsRouterLink]=\"['/register']\" text=\"Crear Cuenta\"></Button>\n  </StackLayout>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/login/login.service.ts");
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/login/login.model.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(utilityService, routerExtensions) {
        this.utilityService = utilityService;
        this.routerExtensions = routerExtensions;
        this.user = new _login_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.user.email = "";
        this.user.password = "";
        this.user.fullname = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        var value = {
            email: this.user.email,
            password: this.user.password,
        };
        this.utilityService
            .login(value)
            .then(function (result) {
            if (result.data.token) {
                var token = result.data.token.replace(/[ '"]+/g, " ");
                Object(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__["setString"])("token", token);
                Object(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__["setString"])("user", _this.user.email);
                alert("Usuario " + _this.user.email + " inicio  sesión con exito ");
                _this.routerExtensions.navigate(["/items"]);
            }
            // setString("user", this.user.email);
            // alert(
            //     "Usuario " + this.user.email + " inicio  sesión con exito "
            // );
            // this.routerExtensions.navigate(["/items"]);
        })
            .catch(function (err) {
            alert("El usuario " +
                _this.user.email +
                " no inicio   sesión  " +
                err);
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./app/login/login.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.hasEmail = function () {
        return this.email != "";
    };
    return User;
}());



/***/ }),

/***/ "./app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/api.js");


var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.login = function (user) {
        return _utils_api__WEBPACK_IMPORTED_MODULE_1__["default"].post("/login", user);
    };
    LoginService.prototype.logout = function () {
        // BackendService.token = "";
        // this.database.closedbConnection();
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".flexboxLayout {\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  background-color: greenyellow;\n  border-radius: 13em/3em;\n}\n.stackLayout {\n  width: 300;\n  padding: 10 16;\n  background-color: rgba(0, 60, 255, 0.157);\n  border-radius: 13em/3em;\n}\nButton,\nTextField {\n  border-radius: 13em/3em;\n}\n.btn-primary {\n  background-color: honeydew;\n  margin-left: 0;\n  margin-right: 0;\n}\n.dark {\n  background-color: #301217;\n}\n.dark TextField {\n  color: cornflowerblue;\n}\n.validation {\n  color: red;\n}\n"

/***/ }),

/***/ "./app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Crear Usuario\"> </ActionBar>\n<FlexboxLayout class=\"flexboxLayout\">\n  <StackLayout class=\"stackLayout\">\n    <TextField\n      hint=\"Nombre completo\"\n      [(ngModel)]=\"user.fullname\"\n      class=\"input input-border\"\n    ></TextField>\n    <TextField\n      hint=\"Correo\"\n      keyboardType=\"email\"\n      autocorrect=\"false\"\n      autocapitalizationType=\"none\"\n      [(ngModel)]=\"user.email\"\n      class=\"input input-border\"\n    ></TextField>\n    <Label\n      class=\"validation\"\n      [visibility]=\"correctEmail ? 'visible' : 'collapse'\"\n      text=\"El correo esta mal escrito\"\n    ></Label>\n    <!-- <Label *ngIf=\"hasEmailErrors()\" class=\"eloha-font-semibold m-t-2 login-field-label color-danger font-size-md\" row=\"2\" [text]=\"getEmailError()\"></Label> -->\n    <TextField\n      hint=\"Contraseña\"\n      secure=\"true\"\n      [(ngModel)]=\"user.password\"\n      class=\"input input-border\"\n    ></TextField>\n    <TextField\n      hint=\"Confirmar Contraseña\"\n      secure=\"true\"\n      [(ngModel)]=\"user.password2\"\n      class=\"input input-border\"\n    ></TextField>\n    <Label\n      class=\"validation\"\n      [visibility]=\"elementModel ? 'visible' : 'collapse'\"\n      text=\"Las contraseñas no coinciden\"\n    ></Label>\n    <Button\n      text=\"Crear Cuenta\"\n      class=\"btn btn-primary\"\n      (tap)=\"submit()\"\n    ></Button>\n    <Button  class=\"btn btn-primary\"  [nsRouterLink]=\"['/login']\" text=\"E iniciar sesión\"></Button>\n  </StackLayout>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nativescript_core_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var _nativescript_core_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/register/register.service.ts");
/* harmony import */ var _register_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/register/register.model.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(utilityService, page, routerExtensions) {
        this.utilityService = utilityService;
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.page.actionBarHidden = true;
        this.user = new _register_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.user.email = "";
        this.user.password = "";
        this.user.password2 = "";
        this.user.fullname = "";
        this.elementModel = false;
        this.correctEmail = false;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.cofirmPassword = function () {
        if (this.user.password !== this.user.password2) {
            this.elementModel = true;
            return;
        }
        this.elementModel = false;
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        var value = {
            // name:this.user.fullname,
            email: this.user.email,
            password: this.user.password,
        };
        this.cofirmPassword();
        var valueBoolean = this.utilityService.isValidEmail(this.user.email);
        if (!valueBoolean) {
            this.correctEmail = true;
            return;
        }
        else {
            this.correctEmail = false;
        }
        if (!this.correctEmail && !this.elementModel) {
            this.utilityService
                .register(value)
                .then(function (result) {
                alert("Usuario " + _this.user.email + " se registro con exito ");
                _this.routerExtensions.navigate(["/login"]);
            })
                .catch(function (err) {
                alert("El usuario " +
                    _this.user.email +
                    " no se registro  " +
                    JSON.stringify(err));
            });
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
        { type: _nativescript_core_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] },
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./app/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/register/register.component.css")).default]
        }),
        __metadata("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"],
            _nativescript_core_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./app/register/register.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./app/register/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/api.js");



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    }
    RegisterService.prototype.isValidEmail = function (email) {
        if (!email)
            return false;
        return this.regex.test(email);
    };
    RegisterService.prototype.register = function (user) {
        // return this.http.post<any>("http://10.0.2.2:4000/signup", user);
        return _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].post("/signup", user);
    };
    RegisterService.prototype.logout = function () {
        // BackendService.token = "";
        // this.database.closedbConnection();
    };
    RegisterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./app/result/result-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n    background-color: chartreuse;\n    margin: 15 15 0;\n  }\n  .card-layout {\n    padding: 20;\n    border-radius: 13em/3em;\n  }\n  .card-layout .h1 {\n    margin-bottom: 15;\n  }\n  .logo {\n    margin-bottom: 0;\n    width: 100%;\n    height: 250;\n    border-radius: 13em/3em;\n  }\n  .h2 {\n    font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .button {\n    color: white;\n    background-color: chartreuse;\n    border-radius: 13em/3em;\n  }\n  .date {\n    font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n    font-size: 15px;\n    font-weight: bold;\n  }\n  \n.my-button {\n    background-color: chartreuse;\n    border-color: darkolivegreen;\n    border-radius: 20;\n    border-width: 1;\n    color: whitesmoke;\n    font-size: 18;\n    font-weight: bold;\n}"

/***/ }),

/***/ "./app/result/result-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Detalle\">\n  <NavigationButton android.systemIcon=\"ic_menu_back\" (tap)=\"goBack()\"></NavigationButton>\n  <ActionItem android.systemIcon=\"ic_menu_share\" (tap)=\"onShare()\"></ActionItem>\n</ActionBar>\n<GridLayout>\n  <ScrollView class=\"page\">\n    <StackLayout>\n      <CardView class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\">\n        <StackLayout class=\"card-layout\">\n          <Label class=\"h2\" [text]=\"item.title\" textWrap=\"true\"></Label>\n          <!-- <ImageZoom [src]=\"item.imageUrl\" maxZoom=\"5\" minZoom=\"2\"></ImageZoom> -->\n          <Image class=\"logo\" [src]=\"item.imageUrl\" stretch=\"aspectFill\" pinchToZoom backgroundColor=\"#ddd\"></Image>\n          <Label class=\"body\" textWrap=\"true\" [text]=\"item.description\">\n          </Label>\n          <!-- <VideoPlayer\n            src=\"https://itsontheway.s3.amazonaws.com/Subscribe+te+y+ayudanos+a+mejor+el+canal.mp4\"\n            autoplay=\"true\"\n            height=\"300\"\n          ></VideoPlayer> -->\n          <Label class=\"date\" textWrap=\"true\" [text]=\"item.publishedAt | date: 'yyyy/MM/dd'\"></Label>\n          <Button textWrap=\"true\" (tap)=\"onClick()\" text=\"Fuente\" class=\"my-button\"></Button>\n        </StackLayout>\n      </CardView>\n    </StackLayout>\n  </ScrollView>\n</GridLayout>"

/***/ }),

/***/ "./app/result/result-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultDetailComponent", function() { return ResultDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_social_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/nativescript-social-share/social-share.js");
/* harmony import */ var nativescript_social_share__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_social_share__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _result_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/result/result.service.ts");






Object(_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["registerElement"])('ImageZoom', function () { return __webpack_require__("./node_modules/@happones/nativescript-image-zoom/image-zoom.js").ImageZoom; });

var ResultDetailComponent = /** @class */ (function () {
    function ResultDetailComponent(itemService, router, routerExtensions) {
        this.itemService = itemService;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.items = [];
        this.item = [];
    }
    ResultDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (res) {
            _this.item = JSON.parse(res.value);
        }, function (error) { return console.error(error); });
    };
    ResultDetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    ResultDetailComponent.prototype.onClick = function () {
        _nativescript_core__WEBPACK_IMPORTED_MODULE_2__["Utils"].openUrl(this.item.sourceUrl);
    };
    ResultDetailComponent.prototype.onShare = function () {
        nativescript_social_share__WEBPACK_IMPORTED_MODULE_4__["shareText"](this.item.sourceUrl);
    };
    ResultDetailComponent.ctorParameters = function () { return [
        { type: _result_service__WEBPACK_IMPORTED_MODULE_5__["ResultService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    ResultDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __importDefault(__webpack_require__("./app/result/result-detail.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/result/result-detail.component.css")).default]
        }),
        __metadata("design:paramtypes", [_result_service__WEBPACK_IMPORTED_MODULE_5__["ResultService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], ResultDetailComponent);
    return ResultDetailComponent;
}());



/***/ }),

/***/ "./app/result/result.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n    background-color: chartreuse;\n    margin: 15 15 0;\n  }\n  .card-layout {\n    padding: 20;\n    border-radius: 13em/3em;\n  }\n  .card-layout .h1 {\n    margin-bottom: 15;\n  }\n  .logo {\n    margin-bottom: 0;\n    width: 100%;\n    height: 250;\n    border-radius: 13em/3em;\n  }\n  .h2 {\n    font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .button {\n    color: white;\n    background-color: chartreuse;\n    border-radius: 13em/3em;\n  }\n  .date {\n    font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n    font-size: 15px;\n    font-weight: bold;\n  }\n  "

/***/ }),

/***/ "./app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\n  <ActionBar title=\"Resultados\">\n    <NavigationButton android.systemIcon=\"ic_menu_back\" (tap)=\"goBack()\"></NavigationButton>\n  </ActionBar>\n</Page.actionBar>\n\n<GridLayout>\n  <ScrollView class=\"page\">\n    <StackLayout>\n      <!-- On Android the card view plugin requires adding an external library\n\t\t\t\ttherefore it can't be demoed on Playground. You will have to download this project\n\t\t\t\tand build it locally to try it on Android -->\n      <CardView *ngFor=\"let item of items.articles\" class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\">\n        <StackLayout class=\"card-layout\" (tap)=\"onClick($event, item)\">\n          <Label class=\"h2\" [text]=\"item.title\" textWrap=\"true\"></Label>\n          <!-- <ImageZoom [src]=\"item.imageUrl\" maxZoom=\"5\" minZoom=\"2\"></ImageZoom> -->\n          <Image [src]=\"item.imageUrl\" stretch=\"none\" backgroundColor=\"#ddd\" class=\"logo\"></Image>\n          <Label class=\"date\" textWrap=\"true\" [text]=\"item.publishedAt | date: 'yyyy/MM/dd'\">\n          </Label>\n        </StackLayout>\n      </CardView>\n    </StackLayout>\n  </ScrollView>\n</GridLayout>"

/***/ }),

/***/ "./app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/result/result.service.ts");



// registerElement(
//     "ImageZoom",
//     () => require("@happones/nativescript-image-zoom").ImageZoom
// );

var ResultComponent = /** @class */ (function () {
    function ResultComponent(resultService, router, routerExtensions) {
        this.resultService = resultService;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.items = [];
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        var search = this.router.snapshot.params.search;
        this.router.queryParams.subscribe(function (res) {
            _this.categories = res.categories;
        }, function (error) { return console.error(error); });
        var variant = '';
        if (this.categories) {
            variant = "&categories=ULTIMAS_NOTICIAS%2C" + this.categories;
        }
        this.resultService.getSearchItems(search, variant).subscribe(function (response) {
            _this.items = response;
        }, function (error) { return console.error(error); });
    };
    ResultComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ResultComponent.prototype.onClick = function (args, event) {
        this.routerExtensions.navigate(["/result"], {
            queryParams: { value: JSON.stringify(event) },
        });
    };
    ResultComponent.ctorParameters = function () { return [
        { type: _result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __importDefault(__webpack_require__("./app/result/result.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/result/result.component.css")).default]
        }),
        __metadata("design:paramtypes", [_result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./app/result/result.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultService", function() { return ResultService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");


var ResultService = /** @class */ (function () {
    function ResultService(http) {
        this.http = http;
    }
    ResultService.prototype.getSearchItems = function (search, categories) {
        return this.http.get("https://api.jornalia.net/api/v1/articles?apiKey=f36f0dc2f3204a3c821130384e208604&search=" + search + categories);
    };
    ResultService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ResultService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ResultService);
    return ResultService;
}());



/***/ }),

/***/ "./app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "\n.label {\n    margin: 25;\n    font-family: 'Courier New', Courier, monospace;\n    font-size: large;\n}\n.title {\n    margin: 25;\n    font-family: 'Courier New', Courier, monospace;\n    font-size: 15;\n}"

/***/ }),

/***/ "./app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\n  <ActionBar title=\"Buscar\">\n    <NavigationButton\n      android.systemIcon=\"ic_menu_back\"\n      (tap)=\"goBack()\"\n    ></NavigationButton>\n  </ActionBar>\n</Page.actionBar>\n<StackLayout row=\"4\">\n  <SearchBar\n    hint=\"Buscar Noticias ...\"\n    [text]=\"searchPhrase\"\n    (textChange)=\"onTextChanged($event)\"\n    (clear)=\"onClear($event)\"\n    (submit)=\"onSubmit($event)\"\n  >\n  </SearchBar>\n  <Label class=\"title\" text=\"Filtrar por categoria\"></Label>\n  <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n    <Label\n      text=\"Politica\"\n      class=\"label\"\n      verticalAlignment=\"center\"\n      style=\"width: 60%\"\n    >\n    </Label>\n    <Switch\n      checked=\"false\"\n      (checkedChange)=\"onChecked($event, 'POLITICA')\"\n    ></Switch>\n  </FlexboxLayout>\n  <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n    <Label\n      text=\"Deportes\"\n      class=\"label\"\n      verticalAlignment=\"center\"\n      style=\"width: 60%\"\n    >\n    </Label>\n    <Switch\n      checked=\"false\"\n      (checkedChange)=\"onChecked($event, 'DEPORTES')\"\n    ></Switch>\n  </FlexboxLayout>\n  <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n    <Label\n      text=\"Economia\"\n      class=\"label\"\n      verticalAlignment=\"center\"\n      style=\"width: 60%\"\n    >\n    </Label>\n    <Switch\n      checked=\"false\"\n      (checkedChange)=\"onChecked($event, 'ECONOMIA')\"\n    ></Switch>\n  </FlexboxLayout>\n  <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n    <Label\n      text=\"Salud\"\n      class=\"label\"\n      verticalAlignment=\"center\"\n      style=\"width: 60%\"\n    >\n    </Label>\n    <Switch\n      checked=\"false\"\n      (checkedChange)=\"onChecked($event, 'SALUD')\"\n    ></Switch>\n  </FlexboxLayout>\n</StackLayout>\n"

/***/ }),

/***/ "./app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);


var SearchComponent = /** @class */ (function () {
    function SearchComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.array = [];
    }
    SearchComponent.prototype.onSubmit = function (args) {
        //   const newArray = this.array.map((e, index) => {
        //     if (index === this.array.length - 1) {
        //         return e;
        //     }
        //     return e + "%2C";
        // });
        //   console.dir("newArray", newArray.toString().replace(/,/g, ''))
        this.routerExtensions.navigate(["/result", args.object.text], {
            queryParams: {
                categories: encodeURIComponent(this.array.join(",")),
            },
            clearHistory: true,
        });
    };
    SearchComponent.prototype.onChecked = function (args, event) {
        alert(event);
        var sw = args.object;
        if (sw.checked) {
            this.array.push(event);
        }
    };
    SearchComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    SearchComponent.prototype.onTextChanged = function (args) {
        // const searchBar = args.object as SearchBar;
        // console.log(`Input changed! New value: ${searchBar.text}`);
    };
    SearchComponent.prototype.onClear = function (args) {
        // const searchBar = args.object as SearchBar;
        // console.log(`Clear event raised`);
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__("./app/search/search.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/search/search.component.css")).default]
        }),
        __metadata("design:paramtypes", [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./app/utils/api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_delete", function() { return _delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "put", function() { return put; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({});
const baseUrl = 'http://localhost:3002';

const get = url => {
  return instance.get(`${baseUrl}${url}`);
};
const post = (url, body) => {
  return instance.post(`${baseUrl}${url}`, body);
};
const _delete = url => {
  return instance.delete(`${baseUrl}${url}`);
};
const put = (url,body) => {
  return instance.put(`${baseUrl}${url}`, body);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  get,
  post,
  put,
  _delete,
});

/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/platform.js");
/* harmony import */ var _nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
_nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"},"dependencies":{"@happones/nativescript-image-zoom":"^4.0.2","nativescript-social-share":"^1.6.0"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW0uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtcy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4ubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9yZXN1bHQvcmVzdWx0LWRldGFpbC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9yZXN1bHQvcmVzdWx0LWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcmVzdWx0L3Jlc3VsdC1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9yZXN1bHQvcmVzdWx0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEsK0dB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RSxJQUFJO0FBQ3ZDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7QUNuQkEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsY0FBZ0Y7QUFDTjtBQUMxRSwrREFBc0U7QUFDdEUseURBQXlEO0FBQ3pELGtDQUF5RTtBQUN6RSxpRUFBd0U7QUFDeEUsbUJBQW1GO0FBQ25GLGNBQXlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSBcXG5OYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbmF0aXZlc2NyaXB0L3RoZW1lXFxuVGhlIGltcG9ydGVkIENTUyBydWxlcyBtdXN0IHByZWNlZGUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzLlxcblwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5UaGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgQnV0dG9ucyB0aGF0IGhhdmUgdGhlXFxuXFxcIi1wcmltYXJ5XFxcIiBjbGFzcyBtb2RpZmllci5cXG5cIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3VsdENvbXBvbmVudCB9IGZyb20gXCIuL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXN1bHREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9yZXN1bHQvcmVzdWx0LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50J1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInJlc3VsdC86c2VhcmNoXCIsIGNvbXBvbmVudDogUmVzdWx0Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInJlc3VsdFwiLCBjb21wb25lbnQ6IFJlc3VsdERldGFpbENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJzZWFyY2hcIiwgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJpdGVtLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvY29yZS1jb25jZXB0cy9hbmd1bGFyLW5hdmlnYXRpb24uaHRtbCNwYWdlLXJvdXRlci1vdXRsZXQgLS0+XFxuPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG59IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbi8vaW1wb3J0IHsgWW91dHViZVBsYXllck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQteW91dHViZXBsYXllci1pbmxpbmUvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3VsdENvbXBvbmVudCB9IGZyb20gXCIuL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXN1bHREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9yZXN1bHQvcmVzdWx0LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG4vL2ltcG9ydCAgIHsgIFBpbmNoVG9ab29tRGlyZWN0aXZlICB9ICBmcm9tICBcIi4vcGluY2gtdG8tem9vbS5kaXJlY3RpdmVcIiA7XG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgLy8gIFlvdXR1YmVQbGF5ZXJNb2R1bGUsXG4gICAgICAgIC8vIHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IFVTRV9TVE9SRSwgdXNlVmFsdWU6IHsgZmE6IHJlcXVpcmUoJy4uLy4uL2ZvbnRhd2Vzb21lLmNzcycpLmRlZmF1bHQgfSwgVE5TRm9udEljb25TZXJ2aWNlIH1dLFxuICAgICAgICAvLyBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgLy8gJ2ZhJzogcmVxdWlyZSgnLi9mb250cy9mb250LWF3ZXNvbWUubWluLmNzcycpXG4gICAgICAgIC8vIH0pLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgU2VhcmNoQ29tcG9uZW50LFxuICAgICAgICBSZXN1bHRDb21wb25lbnQsXG4gICAgICAgIFJlc3VsdERldGFpbENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgIC8vICAgICBQaW5jaFRvWm9vbURpcmVjdGl2ZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIk1lbnVcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gICAgPEFjdGlvbkl0ZW1cXG4gICAgW25zUm91dGVyTGlua109XFxcIlsnL2l0ZW1zJ11cXFwiXFxuICAgIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwibWVudWl0ZW1fYmFja2dyb3VuZFxcXCJcXG4gICAgYW5kcm9pZC5wb3NpdGlvbj1cXFwiYWN0aW9uQmFyXFxcIlxcbiAgICA+PC9BY3Rpb25JdGVtPlxcbiAgICA8QWN0aW9uSXRlbVxcbiAgICBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvc2VhcmNoJ11cXFwiXFxuICAgIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9zZWFyY2hcXFwiXFxuICAgID48L0FjdGlvbkl0ZW0+XFxuICA8QWN0aW9uSXRlbSBcXG4gIFtuc1JvdXRlckxpbmtdPVxcXCJbJy9pdGVtcyddXFxcIlxcbiAgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X3RvZGF5XFxcIj5cXG4gIDwvQWN0aW9uSXRlbT5cXG48L0FjdGlvbkJhcj5cXG48Qm90dG9tTmF2aWdhdGlvbj5cXG4gIDxUYWJTdHJpcD5cXG4gICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cXFwibmF2aWdhdGlvbl9faXRlbVxcXCI+XFxuICAgICAgPExhYmVsICB0ZXh0PVxcXCJIb21lXFxcIiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvaXRlbXMnXVxcXCI+PC9MYWJlbD5cXG4gICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XFxcIm5hdmlnYXRpb25fX2l0ZW1cXFwiPlxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJCcm93c2VcXFwiPjwvTGFiZWw+XFxuICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19pdGVtXFxcIj5cXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiU2VhcmNoXFxcIj48L0xhYmVsPlxcbiAgICA8L1RhYlN0cmlwSXRlbT5cXG4gIDwvVGFiU3RyaXA+XFxuXFxuICA8VGFiQ29udGVudEl0ZW0+XFxuICAgIDxwYWdlLXJvdXRlci1vdXRsZXQgbmFtZT1cXFwiaG9tZVRhYlxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcImJyb3dzZVRhYlxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcInNlYXJjaFRhYlxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICA8L1RhYkNvbnRlbnRJdGVtPlxcbjwvQm90dG9tTmF2aWdhdGlvbj5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge31cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge31cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7XFxuICAgIG1hcmdpbjogMTUgMTUgMDtcXG4gIH1cXG4gIC5jYXJkLWxheW91dCB7XFxuICAgIHBhZGRpbmc6IDIwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxM2VtLzNlbTtcXG4gIH1cXG4gIC5jYXJkLWxheW91dCAuaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG4gIH1cXG4gIC5sb2dvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxM2VtLzNlbTtcXG4gIH1cXG4gIC5oMiB7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFxcXCJBcmlhbCBOYXJyb3cgQm9sZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICAuZGF0ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFxcXCJBcmlhbCBOYXJyb3cgQm9sZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4ubXktYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIGNoYXJ0cmV1c2U7XFxuICAgIGJvcmRlci1jb2xvcjogZGFya29saXZlZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwO1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59IFxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkRldGFsbGVcXFwiPlxcbiAgPE5hdmlnYXRpb25CdXR0b24gYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgPEFjdGlvbkl0ZW0gYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X3NoYXJlXFxcIiAodGFwKT1cXFwib25TaGFyZSgpXFxcIj48L0FjdGlvbkl0ZW0+XFxuPC9BY3Rpb25CYXI+XFxuPEdyaWRMYXlvdXQ+XFxuICA8U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICA8IS0tIE9uIEFuZHJvaWQgdGhlIGNhcmQgdmlldyBwbHVnaW4gcmVxdWlyZXMgYWRkaW5nIGFuIGV4dGVybmFsIGxpYnJhcnlcXG5cXHRcXHRcXHRcXHR0aGVyZWZvcmUgaXQgY2FuJ3QgYmUgZGVtb2VkIG9uIFBsYXlncm91bmQuIFlvdSB3aWxsIGhhdmUgdG8gZG93bmxvYWQgdGhpcyBwcm9qZWN0XFxuXFx0XFx0XFx0XFx0YW5kIGJ1aWxkIGl0IGxvY2FsbHkgdG8gdHJ5IGl0IG9uIEFuZHJvaWQgLS0+XFxuICAgICAgPENhcmRWaWV3IGNsYXNzPVxcXCJjYXJkXFxcIiBlbGV2YXRpb249XFxcIjQwXFxcIiByYWRpdXM9XFxcIjEwXFxcIiBpb3M6c2hhZG93UmFkaXVzPVxcXCIzXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZC1sYXlvdXRcXFwiPlxcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImgyXFxcIiBbdGV4dF09XFxcIml0ZW0udGl0bGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8IS0tIDxBYnNvbHV0ZUxheW91dCBjbGFzcz1cXFwiem9vbVxcXCIgW3Zpc2liaWxpdHldPVxcXCJpc0l0ZW1WaXNpYmxlID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCdcXFwiPjxJbWFnZVpvb20gW3NyY109XFxcIml0ZW0uaW1hZ2VVcmxcXFwiICBbdmlzaWJpbGl0eV09XFxcImlzSXRlbVZpc2libGUgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJ1xcXCIgbWF4Wm9vbT1cXFwiNVxcXCIgbWluWm9vbT1cXFwiMlxcXCIgem9vbVNjYWxlPVxcXCIzXFxcIj48L0ltYWdlWm9vbT48L0Fic29sdXRlTGF5b3V0PiAtLT5cXG4gICAgICAgICAgPCEtLSA8SW1hZ2Vab29tIFtzcmNdPVxcXCJpdGVtLmltYWdlVXJsXFxcIiAgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCJcXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCIjZGRkXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCI1MDBcXFwiICBtYXhab29tPVxcXCI1XFxcIiBtaW5ab29tPVxcXCIyXFxcIiB6b29tU2NhbGU9XFxcIjNcXFwiPjwvSW1hZ2Vab29tPiAtLT5cXG4gICAgICAgICAgPEltYWdlIGNsYXNzPVxcXCJsb2dvXFxcIiBbc3JjXT1cXFwiaXRlbS5pbWFnZVVybFxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgcGluY2hUb1pvb20gYmFja2dyb3VuZENvbG9yPVxcXCIjZGRkXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImJvZHlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICA8L0xhYmVsPlxcbiAgICAgICAgICA8IS0tIDxWaWRlb1BsYXllclxcbiAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9pdHNvbnRoZXdheS5zMy5hbWF6b25hd3MuY29tL1N1YnNjcmliZSt0ZSt5K2F5dWRhbm9zK2ErbWVqb3IrZWwrY2FuYWwubXA0XFxcIlxcbiAgICAgICAgICAgIGF1dG9wbGF5PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICBjb250cm9scz1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICBoZWlnaHQ9XFxcIjMwMDBcXFwiXFxuICAgICAgICAgICAgZmlsbD1cXFwiYXNwZWN0RmlsbFxcXCJcXG4gICAgICAgICAgICBzY2FsZVk9XFxcIjEuMlxcXCJcXG4gICAgICAgICAgICBzY2FsZVg9XFxcIjEuMlxcXCJcXG4gICAgICAgICAgPjwvVmlkZW9QbGF5ZXI+IC0tPlxcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImRhdGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0ucHVibGlzaGVkQXQgfCBkYXRlOiAneXl5eS9NTS9kZCdcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImJvZHlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAodGFwKT1cXFwib25DbGljaygpXFxcIiB0ZXh0PVxcXCJGdWVudGVcXFwiIGNsYXNzPVxcXCJteS1idXR0b25cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8L0NhcmRWaWV3PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9TY3JvbGxWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIERpcmVjdGl2ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5cbnJlZ2lzdGVyRWxlbWVudChcbiAgICBcIkltYWdlWm9vbVwiLFxuICAgICgpID0+IHJlcXVpcmUoXCJAaGFwcG9uZXMvbmF0aXZlc2NyaXB0LWltYWdlLXpvb21cIikuSW1hZ2Vab29tXG4pO1xuXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogYW55ID0gW107XG4gICAgaXRlbTogYW55ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDtcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1zLmFydGljbGVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBpZFxuICAgICAgICAgICAgICAgIClbMF07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuICAgIH1cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIFV0aWxzLm9wZW5VcmwodGhpcy5pdGVtLnNvdXJjZVVybCk7XG4gICAgfVxuICAgIG9uU2hhcmUoKSB7XG4gICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlVGV4dCh0aGlzLml0ZW0uc291cmNlVXJsKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7XG4gICAgQWN0aXZpdHlJbmRpY2F0b3IsXG4gICAgaXNJT1MsXG4gICAgQ29sb3IsXG4gICAgRXZlbnREYXRhLFxuICAgIFBhZ2UsXG4gICAgSW1hZ2VTb3VyY2UsXG59IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9wYWdlOiBQYWdlKSB7XG4gICAgfVxuICAgIFxuICAgIGdldEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9hcGkuam9ybmFsaWEubmV0L2FwaS92MS9hcnRpY2xlcz9hcGlLZXk9ZjM2ZjBkYzJmMzIwNGEzYzgyMTEzMDM4NGUyMDg2MDRcIlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xcbiAgbWFyZ2luOiAxNSAxNSAwO1xcbn1cXG4uY2FyZC1sYXlvdXQge1xcbiAgcGFkZGluZzogMjA7XFxuICBib3JkZXItcmFkaXVzOiAxM2VtLzNlbTtcXG59XFxuLmNhcmQtbGF5b3V0IC5oMSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuLmxvZ28ge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNTA7XFxuICBib3JkZXItcmFkaXVzOiAxM2VtLzNlbTtcXG59XFxuLmJ1dHRvbjJ7XFxuIGJhY2tncm91bmQ6IGFxdWE7IFxcbiBib3JkZXItcmFkaXVzOiAxM2VtLzNlbTtcXG4gY29sb3I6IHdoaXRlO1xcbn1cXG4uaDIge1xcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgXFxcIkFyaWFsIE5hcnJvdyBCb2xkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7XFxuICBib3JkZXItcmFkaXVzOiAxM2VtLzNlbTtcXG59XFxuLmRhdGUge1xcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgXFxcIkFyaWFsIE5hcnJvdyBCb2xkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxuICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJVbHRpbWFzIE5vdGljaWFzXFxcIj5cXG4gICAgPEFjdGlvbkl0ZW0gYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X3NlYXJjaFxcXCIgW25zUm91dGVyTGlua109XFxcIlsnL3NlYXJjaCddXFxcIj48L0FjdGlvbkl0ZW0+XFxuICAgIDxBY3Rpb25JdGVtIHRleHQ9XFxcIkNlcnJhciBzZXNpw7NuXFxcIiAodGFwKT1cXFwib25Mb2dvdXQoKVxcXCIgaW9zLnN5c3RlbUljb249XFxcIjE2XFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIlxcbiAgICAgIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIj5cXG4gICAgPC9BY3Rpb25JdGVtPlxcbiAgPC9BY3Rpb25CYXI+XFxuPC9QYWdlLmFjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dD5cXG4gIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIiByb3c9XFxcIjVcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgPENhcmRWaWV3ICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgaXRlbXMuYXJ0aWNsZXNcXFwiIGNsYXNzPVxcXCJjYXJkXFxcIiBlbGV2YXRpb249XFxcIjQwXFxcIiAgcmFkaXVzPVxcXCIxMFxcXCIgaW9zOnNoYWRvd1JhZGl1cz1cXFwiM1xcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmQtbGF5b3V0XFxcIiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvaXRlbScsIGl0ZW0uX2lkXVxcXCI+XFxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDJcXFwiIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwhLS0gPEltYWdlWm9vbSBbc3JjXT1cXFwiaXRlbS5pbWFnZVVybFxcXCIgbWF4Wm9vbT1cXFwiNVxcXCIgbWluWm9vbT1cXFwiMlxcXCI+PC9JbWFnZVpvb20+IC0tPlxcbiAgICAgICAgICA8SW1hZ2UgY2xhc3M9XFxcImxvZ29cXFwiIFtzcmNdPVxcXCJpdGVtLmltYWdlVXJsXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcImJsYWNrXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCIzMDBcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgIDwhLS0gPFZpZGVvUGxheWVyXFxuICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9pdHNvbnRoZXdheS5zMy5hbWF6b25hd3MuY29tL1N1YnNjcmliZSt0ZSt5K2F5dWRhbm9zK2ErbWVqb3IrZWwrY2FuYWwubXA0XFxcIlxcbiAgICAgICAgICBhdXRvcGxheT1cXFwiZmFsc2VcXFwiXFxuICAgICAgICAgIGxvb3A9XFxcInRydWVcXFwiXFxuICAgICAgICAgIGNvbnRyb2xzPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICBoZWlnaHQ9XFxcIjMwMDBcXFwiXFxuICAgICAgICAgIGZpbGw9XFxcInRydWVcXFwiXFxuICAgICAgICAgIHNjYWxlWT1cXFwiMS4yXFxcIlxcbiAgICAgICAgICBzY2FsZVg9XFxcIjEuMlxcXCJcXG4gICAgICAgID48L1ZpZGVvUGxheWVyPiAtLT5cXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkYXRlXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtLnB1Ymxpc2hlZEF0IHwgZGF0ZTogJ3l5eXkvTU0vZGQnXFxcIj5cXG4gICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0byxhdXRvLGF1dG8sYXV0b1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBwYWRkaW5nQm90dG9tPVxcXCIxMFxcXCI+XFxuICAgICAgICAgICAgPCEtLSA8QnV0dG9uICNzd2lwZWxlZnQgY2xhc3M9XFxcImJ0biBmYVxcXCIgY29sPVxcXCIwXFxcIiBbdGV4dF09XFxcIidmYS10aW1lcycgfCBmb250aWNvblxcXCI+PC9CdXR0b24+IC0tPlxcbiAgICAgICAgICAgIDxCdXR0b24gI3N3aXBlcmlnaHQgW2NsYXNzXT1cXFwiY2xhc3NDc3NcXFwiIGNvbD1cXFwiM1xcXCIgIHRleHQ9XFxcIk1lIEd1c3RhXFxcIiAodGFwKT1cXFwib25DbGljaygkZXZlbnQsaXRlbS5faWQpXFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8L0NhcmRWaWV3PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9TY3JvbGxWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuaW1wb3J0IHsgY2xlYXIsIGdldFN0cmluZyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuLy8gcmVnaXN0ZXJFbGVtZW50KFxuLy8gICAgIFwiSW1hZ2Vab29tXCIsXG4vLyAgICAgKCkgPT4gcmVxdWlyZShcIkBoYXBwb25lcy9uYXRpdmVzY3JpcHQtaW1hZ2Utem9vbVwiKS5JbWFnZVpvb21cbi8vICk7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgYXBpIGZyb20gXCIuLi91dGlscy9hcGlcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaXRlbXMuY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBhbnkgPSBbXTtcbiAgICBjbGFzc0NzczogYW55O1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1zU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHtcbiAgICAgICAgdGhpcy5jbGFzc0NzcyA9IFwiYnV0dG9uXCI7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zU2VydmljZS5nZXRJdGVtcygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSByZXNwb25zZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICApO1xuICAgIH1cbiAgICBvbkNsaWNrKGFyZ3M6IGFueSwgaWRfbmV3OiBhbnkpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IGdldFN0cmluZyhcInVzZXJcIik7XG4gICAgICAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgICAgIGlkOiBpZF9uZXcsXG4gICAgICAgIH07XG4gICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIGlmICh0aGlzLmNsYXNzQ3NzID09PSBcImJ1dHRvbjJcIikge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0NzcyA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBhcGkuX2RlbGV0ZShcIi9saWtlXCIsIGlkX25ldylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0NzcyA9IFwiYnV0dG9uMlwiO1xuICAgICAgICAgICAgYXBpLnBvc3QoXCIvbGlrZVwiLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uTG9nb3V0KCkge1xuICAgICAgICBjbGVhcigpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICB9XG4gICAgZ29CYW5jaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmZsZXhib3hMYXlvdXQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEzZW0vM2VtO1xcbiAgfVxcbiAgLnN0YWNrTGF5b3V0IHtcXG4gICAgd2lkdGg6IDMwMDtcXG4gICAgcGFkZGluZzogMTAgMTY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCA2MCwgMjU1LCAwLjE1Nyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEzZW0vM2VtO1xcbiAgfVxcbiAgQnV0dG9uLCBUZXh0RmllbGQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxM2VtLzNlbTtcXG4gIH1cXG4gIC5idG4tcHJpbWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aG9uZXlkZXc7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuICAuZGFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDEyMTc7XFxuICB9XFxuICAuZGFyayBUZXh0RmllbGQge1xcbiAgICBjb2xvcjogIGNvcm5mbG93ZXJibHVlO1xcbiAgfVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJmbGV4Ym94TGF5b3V0XFxcIj5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwic3RhY2tMYXlvdXRcXFwiPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgaGludD1cXFwiQ29ycmVvXFxcIlxcbiAgICAgIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiXFxuICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiXFxuICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCJcXG4gICAgPjwvVGV4dEZpZWxkPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgaGludD1cXFwiQ29udHJhc2XDsWFcXFwiXFxuICAgICAgc2VjdXJlPVxcXCJ0cnVlXFxcIlxcbiAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiXFxuICAgID48L1RleHRGaWVsZD5cXG5cXG4gICAgPEJ1dHRvblxcbiAgICAgIHRleHQ9XFxcIkluaWNpYXIgc2VzacOzblxcXCJcXG4gICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIlxcbiAgICAgICh0YXApPVxcXCJzdWJtaXQoKVxcXCJcXG4gICAgPjwvQnV0dG9uPlxcbiAgICA8QnV0dG9uICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgW25zUm91dGVyTGlua109XFxcIlsnL3JlZ2lzdGVyJ11cXFwiIHRleHQ9XFxcIkNyZWFyIEN1ZW50YVxcXCI+PC9CdXR0b24+XFxuICA8L1N0YWNrTGF5b3V0PlxcbjwvRmxleGJveExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHNldFN0cmluZyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9sb2dpbi5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcIlwiO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xuICAgICAgICB0aGlzLnVzZXIuZnVsbG5hbWUgPSBcIlwiO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB7XG4gICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51dGlsaXR5U2VydmljZVxuICAgICAgICAgICAgLmxvZ2luKHZhbHVlKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3VsdC5kYXRhLnRva2VuLnJlcGxhY2UoL1sgJ1wiXSsvZywgXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0cmluZyhcInVzZXJcIiwgdGhpcy51c2VyLmVtYWlsKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlVzdWFyaW8gXCIgKyB0aGlzLnVzZXIuZW1haWwgKyBcIiBpbmljaW8gIHNlc2nDs24gY29uIGV4aXRvIFwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaXRlbXNcIl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBzZXRTdHJpbmcoXCJ1c2VyXCIsIHRoaXMudXNlci5lbWFpbCk7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoXG4gICAgICAgICAgICAgICAgLy8gICAgIFwiVXN1YXJpbyBcIiArIHRoaXMudXNlci5lbWFpbCArIFwiIGluaWNpbyAgc2VzacOzbiBjb24gZXhpdG8gXCJcbiAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgLy8gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9pdGVtc1wiXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgXCJFbCB1c3VhcmlvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBubyBpbmljaW8gICBzZXNpw7NuICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGZ1bGxuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGhhc0VtYWlsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbWFpbCAhPSBcIlwiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cbmltcG9ydCBhcGkgZnJvbSBcIi4uL3V0aWxzL2FwaVwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vbG9naW4ubW9kZWxcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICB1c2VyOiBVc2VyO1xuICAgIGxvZ2luKHVzZXI6IGFueSkge1xuICAgICAgICByZXR1cm4gYXBpLnBvc3QoXCIvbG9naW5cIiwgdXNlcik7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvLyBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XG4gICAgICAgIC8vIHRoaXMuZGF0YWJhc2UuY2xvc2VkYkNvbm5lY3Rpb24oKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmZsZXhib3hMYXlvdXQge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbiAgYm9yZGVyLXJhZGl1czogMTNlbS8zZW07XFxufVxcbi5zdGFja0xheW91dCB7XFxuICB3aWR0aDogMzAwO1xcbiAgcGFkZGluZzogMTAgMTY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDYwLCAyNTUsIDAuMTU3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEzZW0vM2VtO1xcbn1cXG5CdXR0b24sXFxuVGV4dEZpZWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEzZW0vM2VtO1xcbn1cXG4uYnRuLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaG9uZXlkZXc7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLmRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMTIxNztcXG59XFxuLmRhcmsgVGV4dEZpZWxkIHtcXG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG59XFxuLnZhbGlkYXRpb24ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiQ3JlYXIgVXN1YXJpb1xcXCI+IDwvQWN0aW9uQmFyPlxcbjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJmbGV4Ym94TGF5b3V0XFxcIj5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwic3RhY2tMYXlvdXRcXFwiPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgaGludD1cXFwiTm9tYnJlIGNvbXBsZXRvXFxcIlxcbiAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLmZ1bGxuYW1lXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiXFxuICAgID48L1RleHRGaWVsZD5cXG4gICAgPFRleHRGaWVsZFxcbiAgICAgIGhpbnQ9XFxcIkNvcnJlb1xcXCJcXG4gICAgICBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIlxcbiAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcbiAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLmVtYWlsXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiXFxuICAgID48L1RleHRGaWVsZD5cXG4gICAgPExhYmVsXFxuICAgICAgY2xhc3M9XFxcInZhbGlkYXRpb25cXFwiXFxuICAgICAgW3Zpc2liaWxpdHldPVxcXCJjb3JyZWN0RW1haWwgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIlxcbiAgICAgIHRleHQ9XFxcIkVsIGNvcnJlbyBlc3RhIG1hbCBlc2NyaXRvXFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gICAgPCEtLSA8TGFiZWwgKm5nSWY9XFxcImhhc0VtYWlsRXJyb3JzKClcXFwiIGNsYXNzPVxcXCJlbG9oYS1mb250LXNlbWlib2xkIG0tdC0yIGxvZ2luLWZpZWxkLWxhYmVsIGNvbG9yLWRhbmdlciBmb250LXNpemUtbWRcXFwiIHJvdz1cXFwiMlxcXCIgW3RleHRdPVxcXCJnZXRFbWFpbEVycm9yKClcXFwiPjwvTGFiZWw+IC0tPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgaGludD1cXFwiQ29udHJhc2XDsWFcXFwiXFxuICAgICAgc2VjdXJlPVxcXCJ0cnVlXFxcIlxcbiAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiXFxuICAgID48L1RleHRGaWVsZD5cXG4gICAgPFRleHRGaWVsZFxcbiAgICAgIGhpbnQ9XFxcIkNvbmZpcm1hciBDb250cmFzZcOxYVxcXCJcXG4gICAgICBzZWN1cmU9XFxcInRydWVcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmQyXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiXFxuICAgID48L1RleHRGaWVsZD5cXG4gICAgPExhYmVsXFxuICAgICAgY2xhc3M9XFxcInZhbGlkYXRpb25cXFwiXFxuICAgICAgW3Zpc2liaWxpdHldPVxcXCJlbGVtZW50TW9kZWwgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIlxcbiAgICAgIHRleHQ9XFxcIkxhcyBjb250cmFzZcOxYXMgbm8gY29pbmNpZGVuXFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gICAgPEJ1dHRvblxcbiAgICAgIHRleHQ9XFxcIkNyZWFyIEN1ZW50YVxcXCJcXG4gICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIlxcbiAgICAgICh0YXApPVxcXCJzdWJtaXQoKVxcXCJcXG4gICAgPjwvQnV0dG9uPlxcbiAgICA8QnV0dG9uICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAgW25zUm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiIHRleHQ9XFxcIkUgaW5pY2lhciBzZXNpw7NuXFxcIj48L0J1dHRvbj5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuPC9GbGV4Ym94TGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgUmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSBcIi4vcmVnaXN0ZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3JlZ2lzdGVyLm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcmVnaXN0ZXIuY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXI6IFVzZXI7XG4gICAgZWxlbWVudE1vZGVsOiBib29sZWFuO1xuICAgIGNvcnJlY3RFbWFpbDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogUmVnaXN0ZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkMiA9IFwiXCI7XG4gICAgICAgIHRoaXMudXNlci5mdWxsbmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZWxlbWVudE1vZGVsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ycmVjdEVtYWlsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxuICAgIGNvZmlybVBhc3N3b3JkKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyLnBhc3N3b3JkICE9PSB0aGlzLnVzZXIucGFzc3dvcmQyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRNb2RlbCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50TW9kZWwgPSBmYWxzZTtcbiAgICB9XG4gICAgc3VibWl0KCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgICAgIC8vIG5hbWU6dGhpcy51c2VyLmZ1bGxuYW1lLFxuICAgICAgICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29maXJtUGFzc3dvcmQoKTtcbiAgICAgICAgY29uc3QgdmFsdWVCb29sZWFuID0gdGhpcy51dGlsaXR5U2VydmljZS5pc1ZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKTtcbiAgICAgICAgaWYgKCF2YWx1ZUJvb2xlYW4pIHtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdEVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdEVtYWlsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNvcnJlY3RFbWFpbCAmJiAhdGhpcy5lbGVtZW50TW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2VcbiAgICAgICAgICAgICAgICAucmVnaXN0ZXIodmFsdWUpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVXN1YXJpbyBcIiArIHRoaXMudXNlci5lbWFpbCArIFwiIHNlIHJlZ2lzdHJvIGNvbiBleGl0byBcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJFbCB1c3VhcmlvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuZW1haWwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG5vIHNlIHJlZ2lzdHJvICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZXJyKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGZ1bGxuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIHBhc3N3b3JkMjogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCBhcGkgZnJvbSBcIi4uL3V0aWxzL2FwaVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3JlZ2lzdGVyLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJTZXJ2aWNlIHtcbiAgICByZWdleDogYW55ID0gL15bYS16QS1aMC05LiEjJCUmJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC87XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuICAgIHVzZXI6IFVzZXI7XG4gICAgcHVibGljIGlzVmFsaWRFbWFpbChlbWFpbDogU3RyaW5nKSB7XG4gICAgICAgIGlmICghZW1haWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnZXgudGVzdChlbWFpbCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKHVzZXI6IGFueSkge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihcImh0dHA6Ly8xMC4wLjIuMjo0MDAwL3NpZ251cFwiLCB1c2VyKTtcbiAgICAgICAgcmV0dXJuIGFwaS5wb3N0KFwiL3NpZ251cFwiLCB1c2VyKTtcbiAgICB9XG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvLyBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XG4gICAgICAgIC8vIHRoaXMuZGF0YWJhc2UuY2xvc2VkYkNvbm5lY3Rpb24oKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xcbiAgICBtYXJnaW46IDE1IDE1IDA7XFxuICB9XFxuICAuY2FyZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nOiAyMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTNlbS8zZW07XFxuICB9XFxuICAuY2FyZC1sYXlvdXQgLmgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxuICB9XFxuICAubG9nbyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI1MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTNlbS8zZW07XFxuICB9XFxuICAuaDIge1xcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCBcXFwiQXJpYWwgTmFycm93IEJvbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTNlbS8zZW07XFxuICB9XFxuICAuZGF0ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFxcXCJBcmlhbCBOYXJyb3cgQm9sZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4ubXktYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcXG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjA7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJEZXRhbGxlXFxcIj5cXG4gIDxOYXZpZ2F0aW9uQnV0dG9uIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiAodGFwKT1cXFwiZ29CYWNrKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gIDxBY3Rpb25JdGVtIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9zaGFyZVxcXCIgKHRhcCk9XFxcIm9uU2hhcmUoKVxcXCI+PC9BY3Rpb25JdGVtPlxcbjwvQWN0aW9uQmFyPlxcbjxHcmlkTGF5b3V0PlxcbiAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgPENhcmRWaWV3IGNsYXNzPVxcXCJjYXJkXFxcIiBlbGV2YXRpb249XFxcIjQwXFxcIiByYWRpdXM9XFxcIjEwXFxcIiBpb3M6c2hhZG93UmFkaXVzPVxcXCIzXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZC1sYXlvdXRcXFwiPlxcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImgyXFxcIiBbdGV4dF09XFxcIml0ZW0udGl0bGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8IS0tIDxJbWFnZVpvb20gW3NyY109XFxcIml0ZW0uaW1hZ2VVcmxcXFwiIG1heFpvb209XFxcIjVcXFwiIG1pblpvb209XFxcIjJcXFwiPjwvSW1hZ2Vab29tPiAtLT5cXG4gICAgICAgICAgPEltYWdlIGNsYXNzPVxcXCJsb2dvXFxcIiBbc3JjXT1cXFwiaXRlbS5pbWFnZVVybFxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgcGluY2hUb1pvb20gYmFja2dyb3VuZENvbG9yPVxcXCIjZGRkXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImJvZHlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICA8L0xhYmVsPlxcbiAgICAgICAgICA8IS0tIDxWaWRlb1BsYXllclxcbiAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9pdHNvbnRoZXdheS5zMy5hbWF6b25hd3MuY29tL1N1YnNjcmliZSt0ZSt5K2F5dWRhbm9zK2ErbWVqb3IrZWwrY2FuYWwubXA0XFxcIlxcbiAgICAgICAgICAgIGF1dG9wbGF5PVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgIGhlaWdodD1cXFwiMzAwXFxcIlxcbiAgICAgICAgICA+PC9WaWRlb1BsYXllcj4gLS0+XFxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGF0ZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5wdWJsaXNoZWRBdCB8IGRhdGU6ICd5eXl5L01NL2RkJ1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPEJ1dHRvbiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgKHRhcCk9XFxcIm9uQ2xpY2soKVxcXCIgdGV4dD1cXFwiRnVlbnRlXFxcIiBjbGFzcz1cXFwibXktYnV0dG9uXFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPC9DYXJkVmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvU2Nyb2xsVmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xucmVnaXN0ZXJFbGVtZW50KCdJbWFnZVpvb20nLCAoKSA9PiByZXF1aXJlKCdAaGFwcG9uZXMvbmF0aXZlc2NyaXB0LWltYWdlLXpvb20nKS5JbWFnZVpvb20pO1xuXG5pbXBvcnQgeyBSZXN1bHRTZXJ2aWNlIH0gZnJvbSBcIi4vcmVzdWx0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVzdWx0LWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9yZXN1bHQtZGV0YWlsLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IGFueSA9IFtdO1xuICAgIGl0ZW06IGFueSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaXRlbVNlcnZpY2U6IFJlc3VsdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBKU09OLnBhcnNlKHJlcy52YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuICAgIH1cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIFV0aWxzLm9wZW5VcmwodGhpcy5pdGVtLnNvdXJjZVVybCk7XG4gICAgfVxuICAgIG9uU2hhcmUoKSB7XG4gICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlVGV4dCh0aGlzLml0ZW0uc291cmNlVXJsKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xcbiAgICBtYXJnaW46IDE1IDE1IDA7XFxuICB9XFxuICAuY2FyZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nOiAyMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTNlbS8zZW07XFxuICB9XFxuICAuY2FyZC1sYXlvdXQgLmgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxuICB9XFxuICAubG9nbyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI1MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTNlbS8zZW07XFxuICB9XFxuICAuaDIge1xcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCBcXFwiQXJpYWwgTmFycm93IEJvbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTNlbS8zZW07XFxuICB9XFxuICAuZGF0ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFxcXCJBcmlhbCBOYXJyb3cgQm9sZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxuICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJSZXN1bHRhZG9zXFxcIj5cXG4gICAgPE5hdmlnYXRpb25CdXR0b24gYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgPC9BY3Rpb25CYXI+XFxuPC9QYWdlLmFjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dD5cXG4gIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgIDwhLS0gT24gQW5kcm9pZCB0aGUgY2FyZCB2aWV3IHBsdWdpbiByZXF1aXJlcyBhZGRpbmcgYW4gZXh0ZXJuYWwgbGlicmFyeVxcblxcdFxcdFxcdFxcdHRoZXJlZm9yZSBpdCBjYW4ndCBiZSBkZW1vZWQgb24gUGxheWdyb3VuZC4gWW91IHdpbGwgaGF2ZSB0byBkb3dubG9hZCB0aGlzIHByb2plY3RcXG5cXHRcXHRcXHRcXHRhbmQgYnVpbGQgaXQgbG9jYWxseSB0byB0cnkgaXQgb24gQW5kcm9pZCAtLT5cXG4gICAgICA8Q2FyZFZpZXcgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBpdGVtcy5hcnRpY2xlc1xcXCIgY2xhc3M9XFxcImNhcmRcXFwiIGVsZXZhdGlvbj1cXFwiNDBcXFwiIHJhZGl1cz1cXFwiMTBcXFwiIGlvczpzaGFkb3dSYWRpdXM9XFxcIjNcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkLWxheW91dFxcXCIgKHRhcCk9XFxcIm9uQ2xpY2soJGV2ZW50LCBpdGVtKVxcXCI+XFxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDJcXFwiIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwhLS0gPEltYWdlWm9vbSBbc3JjXT1cXFwiaXRlbS5pbWFnZVVybFxcXCIgbWF4Wm9vbT1cXFwiNVxcXCIgbWluWm9vbT1cXFwiMlxcXCI+PC9JbWFnZVpvb20+IC0tPlxcbiAgICAgICAgICA8SW1hZ2UgW3NyY109XFxcIml0ZW0uaW1hZ2VVcmxcXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI2RkZFxcXCIgY2xhc3M9XFxcImxvZ29cXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGF0ZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5wdWJsaXNoZWRBdCB8IGRhdGU6ICd5eXl5L01NL2RkJ1xcXCI+XFxuICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgIDwvQ2FyZFZpZXc+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICA8L1Njcm9sbFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuLy8gcmVnaXN0ZXJFbGVtZW50KFxuLy8gICAgIFwiSW1hZ2Vab29tXCIsXG4vLyAgICAgKCkgPT4gcmVxdWlyZShcIkBoYXBwb25lcy9uYXRpdmVzY3JpcHQtaW1hZ2Utem9vbVwiKS5JbWFnZVpvb21cbi8vICk7XG5cbmltcG9ydCB7IFJlc3VsdFNlcnZpY2UgfSBmcm9tIFwiLi9yZXN1bHQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXN1bHQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcmVzdWx0LmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IGFueSA9IFtdO1xuICAgIGNhdGVnb3JpZXM6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZXN1bHRTZXJ2aWNlOiBSZXN1bHRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge31cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gdGhpcy5yb3V0ZXIuc25hcHNob3QucGFyYW1zLnNlYXJjaDtcbiAgICAgICAgdGhpcy5yb3V0ZXIucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHZhcmlhbnQ9Jyc7XG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIHZhcmlhbnQgPSBgJmNhdGVnb3JpZXM9VUxUSU1BU19OT1RJQ0lBUyUyQyR7dGhpcy5jYXRlZ29yaWVzfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRTZXJ2aWNlLmdldFNlYXJjaEl0ZW1zKHNlYXJjaCwgdmFyaWFudCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuICAgIG9uQ2xpY2soYXJnczogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcmVzdWx0XCJdLCB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoZXZlbnQpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbiAgICBnZXRTZWFyY2hJdGVtcyhzZWFyY2g6IGFueSwgY2F0ZWdvcmllczogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgYGh0dHBzOi8vYXBpLmpvcm5hbGlhLm5ldC9hcGkvdjEvYXJ0aWNsZXM/YXBpS2V5PWYzNmYwZGMyZjMyMDRhM2M4MjExMzAzODRlMjA4NjA0JnNlYXJjaD0ke3NlYXJjaH0ke2NhdGVnb3JpZXN9YFxuICAgICAgICApO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG4ubGFiZWwge1xcbiAgICBtYXJnaW46IDI1O1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG4udGl0bGUge1xcbiAgICBtYXJnaW46IDI1O1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxuICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJCdXNjYXJcXFwiPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvblxcbiAgICAgIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIlxcbiAgICAgICh0YXApPVxcXCJnb0JhY2soKVxcXCJcXG4gICAgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gIDwvQWN0aW9uQmFyPlxcbjwvUGFnZS5hY3Rpb25CYXI+XFxuPFN0YWNrTGF5b3V0IHJvdz1cXFwiNFxcXCI+XFxuICA8U2VhcmNoQmFyXFxuICAgIGhpbnQ9XFxcIkJ1c2NhciBOb3RpY2lhcyAuLi5cXFwiXFxuICAgIFt0ZXh0XT1cXFwic2VhcmNoUGhyYXNlXFxcIlxcbiAgICAodGV4dENoYW5nZSk9XFxcIm9uVGV4dENoYW5nZWQoJGV2ZW50KVxcXCJcXG4gICAgKGNsZWFyKT1cXFwib25DbGVhcigkZXZlbnQpXFxcIlxcbiAgICAoc3VibWl0KT1cXFwib25TdWJtaXQoJGV2ZW50KVxcXCJcXG4gID5cXG4gIDwvU2VhcmNoQmFyPlxcbiAgPExhYmVsIGNsYXNzPVxcXCJ0aXRsZVxcXCIgdGV4dD1cXFwiRmlsdHJhciBwb3IgY2F0ZWdvcmlhXFxcIj48L0xhYmVsPlxcbiAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwicm93XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG4gICAgPExhYmVsXFxuICAgICAgdGV4dD1cXFwiUG9saXRpY2FcXFwiXFxuICAgICAgY2xhc3M9XFxcImxhYmVsXFxcIlxcbiAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgc3R5bGU9XFxcIndpZHRoOiA2MCVcXFwiXFxuICAgID5cXG4gICAgPC9MYWJlbD5cXG4gICAgPFN3aXRjaFxcbiAgICAgIGNoZWNrZWQ9XFxcImZhbHNlXFxcIlxcbiAgICAgIChjaGVja2VkQ2hhbmdlKT1cXFwib25DaGVja2VkKCRldmVudCwgJ1BPTElUSUNBJylcXFwiXFxuICAgID48L1N3aXRjaD5cXG4gIDwvRmxleGJveExheW91dD5cXG4gIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcInJvd1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuICAgIDxMYWJlbFxcbiAgICAgIHRleHQ9XFxcIkRlcG9ydGVzXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJsYWJlbFxcXCJcXG4gICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICAgIHN0eWxlPVxcXCJ3aWR0aDogNjAlXFxcIlxcbiAgICA+XFxuICAgIDwvTGFiZWw+XFxuICAgIDxTd2l0Y2hcXG4gICAgICBjaGVja2VkPVxcXCJmYWxzZVxcXCJcXG4gICAgICAoY2hlY2tlZENoYW5nZSk9XFxcIm9uQ2hlY2tlZCgkZXZlbnQsICdERVBPUlRFUycpXFxcIlxcbiAgICA+PC9Td2l0Y2g+XFxuICA8L0ZsZXhib3hMYXlvdXQ+XFxuICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJyb3dcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcbiAgICA8TGFiZWxcXG4gICAgICB0ZXh0PVxcXCJFY29ub21pYVxcXCJcXG4gICAgICBjbGFzcz1cXFwibGFiZWxcXFwiXFxuICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICBzdHlsZT1cXFwid2lkdGg6IDYwJVxcXCJcXG4gICAgPlxcbiAgICA8L0xhYmVsPlxcbiAgICA8U3dpdGNoXFxuICAgICAgY2hlY2tlZD1cXFwiZmFsc2VcXFwiXFxuICAgICAgKGNoZWNrZWRDaGFuZ2UpPVxcXCJvbkNoZWNrZWQoJGV2ZW50LCAnRUNPTk9NSUEnKVxcXCJcXG4gICAgPjwvU3dpdGNoPlxcbiAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwicm93XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG4gICAgPExhYmVsXFxuICAgICAgdGV4dD1cXFwiU2FsdWRcXFwiXFxuICAgICAgY2xhc3M9XFxcImxhYmVsXFxcIlxcbiAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgc3R5bGU9XFxcIndpZHRoOiA2MCVcXFwiXFxuICAgID5cXG4gICAgPC9MYWJlbD5cXG4gICAgPFN3aXRjaFxcbiAgICAgIGNoZWNrZWQ9XFxcImZhbHNlXFxcIlxcbiAgICAgIChjaGVja2VkQ2hhbmdlKT1cXFwib25DaGVja2VkKCRldmVudCwgJ1NBTFVEJylcXFwiXFxuICAgID48L1N3aXRjaD5cXG4gIDwvRmxleGJveExheW91dD5cXG48L1N0YWNrTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBTd2l0Y2gsIEV2ZW50RGF0YSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NlYXJjaC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9zZWFyY2guY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IHtcbiAgICBhcnJheTogYW55ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgICBvblN1Ym1pdChhcmdzKSB7XG4gICAgICAgIC8vICAgY29uc3QgbmV3QXJyYXkgPSB0aGlzLmFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChpbmRleCA9PT0gdGhpcy5hcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZXR1cm4gZSArIFwiJTJDXCI7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyAgIGNvbnNvbGUuZGlyKFwibmV3QXJyYXlcIiwgbmV3QXJyYXkudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcnKSlcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9yZXN1bHRcIiwgYXJncy5vYmplY3QudGV4dF0sIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuYXJyYXkuam9pbihcIixcIikpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2hlY2tlZChhcmdzOiBFdmVudERhdGEsIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgYWxlcnQoZXZlbnQpO1xuICAgICAgICBsZXQgc3cgPSBhcmdzLm9iamVjdCBhcyBTd2l0Y2g7XG4gICAgICAgIGlmIChzdy5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5LnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG4gICAgb25UZXh0Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIC8vIGNvbnN0IHNlYXJjaEJhciA9IGFyZ3Mub2JqZWN0IGFzIFNlYXJjaEJhcjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYElucHV0IGNoYW5nZWQhIE5ldyB2YWx1ZTogJHtzZWFyY2hCYXIudGV4dH1gKTtcbiAgICB9XG5cbiAgICBvbkNsZWFyKGFyZ3MpIHtcbiAgICAgICAgLy8gY29uc3Qgc2VhcmNoQmFyID0gYXJncy5vYmplY3QgYXMgU2VhcmNoQmFyO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgQ2xlYXIgZXZlbnQgcmFpc2VkYCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe30pO1xuY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDInO1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gdXJsID0+IHtcbiAgcmV0dXJuIGluc3RhbmNlLmdldChgJHtiYXNlVXJsfSR7dXJsfWApO1xufTtcbmV4cG9ydCBjb25zdCBwb3N0ID0gKHVybCwgYm9keSkgPT4ge1xuICByZXR1cm4gaW5zdGFuY2UucG9zdChgJHtiYXNlVXJsfSR7dXJsfWAsIGJvZHkpO1xufTtcbmV4cG9ydCBjb25zdCBfZGVsZXRlID0gdXJsID0+IHtcbiAgcmV0dXJuIGluc3RhbmNlLmRlbGV0ZShgJHtiYXNlVXJsfSR7dXJsfWApO1xufTtcbmV4cG9ydCBjb25zdCBwdXQgPSAodXJsLGJvZHkpID0+IHtcbiAgcmV0dXJuIGluc3RhbmNlLnB1dChgJHtiYXNlVXJsfSR7dXJsfWAsIGJvZHkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBwb3N0LFxuICBwdXQsXG4gIF9kZWxldGUsXG59IiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhci9wbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAvYXBwLm1vZHVsZVwiO1xuXG4vLyBBIHRyYWRpdGlvbmFsIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBzdGFydHMgYnkgaW5pdGlhbGl6aW5nIGdsb2JhbCBvYmplY3RzLFxuLy8gc2V0dGluZyB1cCBnbG9iYWwgQ1NTIHJ1bGVzLCBjcmVhdGluZywgYW5kIG5hdmlnYXRpbmcgdG8gdGhlIG1haW4gcGFnZS5cbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjpcbi8vIG1vZHVsZXMsIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMsIHJvdXRlcywgREkgcHJvdmlkZXJzLlxuLy8gQSBOYXRpdmVTY3JpcHQgQW5ndWxhciBhcHAgbmVlZHMgdG8gbWFrZSBib3RoIHBhcmFkaWdtcyB3b3JrIHRvZ2V0aGVyLFxuLy8gc28gd2UgcHJvdmlkZSBhIHdyYXBwZXIgcGxhdGZvcm0gb2JqZWN0LCBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsXG4vLyB0aGF0IHNldHMgdXAgYSBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gYW5kIGNhbiBib290c3RyYXAgdGhlIEFuZ3VsYXIgZnJhbWV3b3JrLlxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9