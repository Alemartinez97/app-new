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
// import { NgModule } from "@angular/core";
// import { Routes } from "@angular/router";
// import { NativeScriptRouterModule } from "@nativescript/angular";
// import { ItemsComponent } from "./item/items.component";
// import { ItemDetailComponent } from "./item/item-detail.component";
// const routes: Routes = [
//     { path: "", redirectTo: "/items", pathMatch: "full" },
//     { path: "items", component: ItemsComponent },
//     { path: "item/:id", component: ItemDetailComponent }
// ];
// @NgModule({
//     imports: [NativeScriptRouterModule.forRoot(routes)],
//     exports: [NativeScriptRouterModule]
// })
// export class AppRoutingModule { }










var routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
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

module.exports = "\n.card {\n    background-color: gray;\n    color: #252525;\n    margin: 15 15 0;\n}\n.card-layout {\n    padding: 20;\n    border-radius: 13em/3em;\n}\n.card-layout .h1 {\n    margin-bottom: 15;\n}\n.my-button {\n    background-color: lightseagreen;\n    border-color: darkolivegreen;\n    border-radius: 20;\n    border-width: 1;\n    color: whitesmoke;\n    font-size: 18;\n    font-weight: bold;\n} \n"

/***/ }),

/***/ "./app/item/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Detalle\">\n  <NavigationButton\n    android.systemIcon=\"ic_menu_back\"\n    (tap)=\"goBack()\"\n  ></NavigationButton>\n</ActionBar>\n<GridLayout>\n  <ScrollView class=\"page\">\n    <StackLayout>\n      <!-- On Android the card view plugin requires adding an external library\n\t\t\t\ttherefore it can't be demoed on Playground. You will have to download this project\n\t\t\t\tand build it locally to try it on Android -->\n      <CardView class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\">\n        <StackLayout class=\"card-layout\">\n          <Label class=\"h2\" [text]=\"item.title\" textWrap=\"true\"></Label>\n          <!-- <AbsoluteLayout class=\"zoom\" [visibility]=\"isItemVisible ? 'visible' : 'collapsed'\"><ImageZoom [src]=\"item.imageUrl\"  [visibility]=\"isItemVisible ? 'visible' : 'collapsed'\" maxZoom=\"5\" minZoom=\"2\" zoomScale=\"3\"></ImageZoom></AbsoluteLayout> -->\n          <!-- <ImageZoom [src]=\"item.imageUrl\"  stretch=\"aspectFill\"\n          backgroundColor=\"#ddd\" width=\"100%\" height=\"500\"  maxZoom=\"5\" minZoom=\"2\" zoomScale=\"3\"></ImageZoom> -->\n          <Image\n            class=\"logo\"\n            [src]=\"item.imageUrl\"\n            stretch=\"aspectFill\"\n            pinchToZoom\n            backgroundColor=\"#ddd\"\n            width=\"100%\"\n            height=\"500\"\n          ></Image>\n          <Label class=\"body\" textWrap=\"true\" [text]=\"item.description\">\n          </Label>\n          <VideoPlayer\n            src=\"https://itsontheway.s3.amazonaws.com/Subscribe+te+y+ayudanos+a+mejor+el+canal.mp4\"\n            autoplay=\"false\"\n            controls=\"true\"\n            height=\"3000\"\n            fill=\"aspectFill\"\n            scaleY=\"1.2\"\n            scaleX=\"1.2\"\n          ></VideoPlayer>\n          <Label\n            class=\"body\"\n            textWrap=\"true\"\n            [text]=\"item.publishedAt | date: 'yyyy/MM/dd'\"\n          ></Label>\n          <Button\n            class=\"body\"\n            textWrap=\"true\"\n            (tap)=\"onClick()\"\n            text=\"Fuente\"\n            class=\"my-button\"\n          ></Button>\n        </StackLayout>\n      </CardView>\n    </StackLayout>\n  </ScrollView>\n</GridLayout>\n"

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
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/item/item.service.ts");





Object(_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["registerElement"])("ImageZoom", function () { return __webpack_require__("./node_modules/@happones/nativescript-image-zoom/image-zoom.js").ImageZoom; });

var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, route, routerExtensions) {
        this.itemService = itemService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.items = [];
        this.item = [];
        this.isItemVisible = false;
        this.isItemVisible2 = true;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.itemService.getItems().subscribe(function (response) {
            _this.items = response;
            _this.item = _this.items.articles.filter(function (item) { return item._id === id; })[0];
        }, function (error) { return console.error(error); });
    };
    ItemDetailComponent.prototype.onShowImage = function (args, image) {
        this.isItemVisible = true;
        this.isItemVisible2 = false;
    };
    ItemDetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    ItemDetailComponent.prototype.onClick = function () {
        _nativescript_core__WEBPACK_IMPORTED_MODULE_2__["Utils"].openUrl(this.item.sourceUrl);
    };
    ItemDetailComponent.ctorParameters = function () { return [
        { type: _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __importDefault(__webpack_require__("./app/item/item-detail.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/item/item-detail.component.css")).default]
        }),
        __metadata("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./app/item/item.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n    background-color: gray;\n    color: #252525;\n    margin: 15 15 0;\n}\n.card-layout {\n    padding: 20;\n    border-radius: 13em/3em;\n}\n.card-layout .h1 {\n    margin-bottom: 15;\n}\n.logo {\n    margin-bottom: 0;\n    width: 100%;\n    height: 250;\n}"

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



var photoViewer;
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

/***/ "./app/item/items.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\n  <ActionBar title=\"Ultimas Noticias\">\n    <ActionItem\n      android.systemIcon=\"ic_menu_search\"\n      [nsRouterLink]=\"['/search']\"\n    ></ActionItem>\n    <ActionItem\n      text=\"Cerrar sesión\"\n      (tap)=\"onLogout()\"\n      ios.systemIcon=\"16\"\n      ios.position=\"right\"\n      android.position=\"popup\"\n    >\n    </ActionItem>\n  </ActionBar>\n</Page.actionBar>\n\n<GridLayout>\n  <ScrollView class=\"page\" row=\"5\">\n    <StackLayout>\n      <!-- On Android the card view plugin requires adding an external library\n\t\t\t\ttherefore it can't be demoed on Playground. You will have to download this project\n\t\t\t\tand build it locally to try it on Android -->\n      <CardView\n        *ngFor=\"let item of items.articles\"\n        class=\"card\"\n        elevation=\"40\"\n        radius=\"10\"\n        ios:shadowRadius=\"3\"\n      >\n        <StackLayout class=\"card-layout\"  [nsRouterLink]=\"['/item', item._id]\">\n          <Label class=\"h2\" [text]=\"item.title\" textWrap=\"true\"></Label>\n          <!-- <ImageZoom [src]=\"item.imageUrl\" maxZoom=\"5\" minZoom=\"2\"></ImageZoom> -->\n          <Image\n            class=\"logo\"\n            [src]=\"item.imageUrl\"\n            backgroundColor=\"#ddd\"\n            width=\"100%\"\n            height=\"300\"\n          ></Image>\n          <!-- <VideoPlayer\n          src=\"https://itsontheway.s3.amazonaws.com/Subscribe+te+y+ayudanos+a+mejor+el+canal.mp4\"\n          autoplay=\"false\"\n          loop=\"true\"\n          controls=\"true\"\n          height=\"3000\"\n          fill=\"true\"\n          scaleY=\"1.2\"\n          scaleX=\"1.2\"\n        ></VideoPlayer> -->\n          <Label\n            class=\"body\"\n            textWrap=\"true\"\n            [text]=\"item.publishedAt | date: 'yyyy/MM/dd'\"\n          >\n          </Label>\n          <GridLayout columns=\"auto,auto,auto,auto\" horizontalAlignment=\"center\" paddingBottom=\"10\">\n            <!-- <Button #swipeleft class=\"btn fa\" col=\"0\" [text]=\"'fa-times' | fonticon\"></Button>\n            <Button #swiperight class=\"btnsm fa-small\" col=\"3\" text=\"Me Gusta\" (tap)=\"onClick()\"></Button>\n        </GridLayout>\n        </StackLayout>\n      </CardView>\n    </StackLayout>\n  </ScrollView>\n</GridLayout>\n"

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
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.itemsService.getItems().subscribe(function (response) {
            _this.items = response;
        }, function (error) { return console.log(error); });
    };
    ItemsComponent.prototype.onClick = function () {
        alert('te gusta esta publicacion');
    };
    ItemsComponent.prototype.onLogout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__["clear"])()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.routerExtensions.navigate(["/login"])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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
            styles: [__importDefault(__webpack_require__("./app/item/item.component.css")).default]
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

module.exports = ".flexboxLayout {\n    justify-content: center;\n    align-items: center;\n    background-size: cover;\n    background-color: #0014cb;\n  }\n  .stackLayout {\n    width: 300;\n    padding: 10 16;\n    background-color: #f0f0f0;\n  }\n  Image {\n    margin-bottom: 20;\n    height: 70;\n  }\n  Button, TextField {\n    margin-bottom: 10;\n  }\n  .btn-primary {\n    background-color: #00adcb;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  TextField {\n    color: black;\n  }\n  .dark {\n    background-color: #301217;\n  }\n  .dark TextField {\n    color:  #C4AFB4;\n  }"

/***/ }),

/***/ "./app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Login\"> </ActionBar>\n<FlexboxLayout class=\"flexboxLayout\">\n  <StackLayout class=\"stackLayout\">\n    <TextField\n      hint=\"Correo\"\n      keyboardType=\"email\"\n      autocorrect=\"false\"\n      autocapitalizationType=\"none\"\n      [(ngModel)]=\"user.email\"\n      class=\"input input-border\"\n    ></TextField>\n    <!-- <Label *ngIf=\"hasEmailErrors()\" class=\"eloha-font-semibold m-t-2 login-field-label color-danger font-size-md\" row=\"2\" [text]=\"getEmailError()\"></Label> -->\n    <TextField\n      hint=\"Contraseña\"\n      secure=\"true\"\n      [(ngModel)]=\"user.password\"\n      class=\"input input-border\"\n    ></TextField>\n\n    <Button\n      text=\"Iniciar sesión\"\n      class=\"btn btn-primary\"\n      (tap)=\"submit()\"\n    ></Button>\n    <Button [nsRouterLink]=\"['/register']\" text=\"Crear Cuenta\"></Button>\n  </StackLayout>\n</FlexboxLayout>\n"

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
        // Init your component properties here.
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
            console.dir(result.data);
            if (result.data.token) {
                var token = result.data.token.replace(/[ '"]+/g, " ");
                Object(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__["setString"])("token", token);
            }
            alert("Usuario " + _this.user.email + " inicio  sesión con exito ");
            _this.routerExtensions.navigate(["/items"]);
        })
            .catch(function (err) {
            alert("El usuario " +
                _this.user.email +
                " no inicio   sesión  " +
                err);
        });
    };
    LoginComponent.prototype.hasEmailErrors = function () {
        // const isValidEmail = this.user.hasEmail() && this.utilityService.isValidEmail(this.user.email);
        // if (!isValidEmail) {
        //   return false;
        // }
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

module.exports = ".flexboxLayout {\n    justify-content: center;\n    align-items: center;\n    background-size: cover;\n    background-color: #0014cb;\n  }\n  .stackLayout {\n    width: 300;\n    padding: 10 16;\n    background-color: #f0f0f0;\n  }\n  Image {\n    margin-bottom: 20;\n    height: 70;\n  }\n  Button, TextField {\n    margin-bottom: 10;\n  }\n  .btn-primary {\n    background-color: #00adcb;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  TextField {\n    color: black;\n  }\n  .dark {\n    background-color: #301217;\n  }\n  .dark TextField {\n    color:  #C4AFB4;\n  }\n  .validation {\n    color: red\n  }"

/***/ }),

/***/ "./app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Register\"> </ActionBar>\n<FlexboxLayout class=\"flexboxLayout\">\n  <StackLayout class=\"stackLayout\">\n    <TextField\n      hint=\"Nombre completo\"\n      [(ngModel)]=\"user.fullname\"\n      class=\"input input-border\"\n    ></TextField>\n    <TextField\n      hint=\"Correo\"\n      keyboardType=\"email\"\n      autocorrect=\"false\"\n      autocapitalizationType=\"none\"\n      [(ngModel)]=\"user.email\"\n      class=\"input input-border\"\n    ></TextField>\n    <Label\n      class=\"validation\"\n      [visibility]=\"correctEmail ? 'visible' : 'collapse'\"\n      text=\"El correo esta mal escrito\"\n    ></Label>\n    <!-- <Label *ngIf=\"hasEmailErrors()\" class=\"eloha-font-semibold m-t-2 login-field-label color-danger font-size-md\" row=\"2\" [text]=\"getEmailError()\"></Label> -->\n    <TextField\n      hint=\"Contraseña\"\n      secure=\"true\"\n      [(ngModel)]=\"user.password\"\n      class=\"input input-border\"\n    ></TextField>\n    <TextField\n      hint=\"Conformar Contraseña\"\n      secure=\"true\"\n      [(ngModel)]=\"user.password2\"\n      class=\"input input-border\"\n    ></TextField>\n    <Label\n      class=\"validation\"\n      [visibility]=\"elementModel ? 'visible' : 'collapse'\"\n      text=\"Las contraseñas no coinciden\"\n    ></Label>\n    <Button\n      text=\"Crear Cuenta\"\n      class=\"btn btn-primary\"\n      (tap)=\"submit()\"\n    ></Button>\n    <Button [nsRouterLink]=\"['/login']\" text=\"E iniciar sesión\"></Button>\n  </StackLayout>\n</FlexboxLayout>\n"

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

module.exports = ".card {\n    background-color: gray;\n    color: #252525;\n    margin: 15 15 0;\n}\n.card-layout {\n    padding: 20;\n    border-radius: 13em/3em;\n}\n.card-layout .h1 {\n    margin-bottom: 15;\n}\n.logo {\n    margin-bottom: 0;\n    width: 250;\n    height: 250;\n}\n.my-button {\n    background-color: lightseagreen;\n    border-color: darkolivegreen;\n    border-radius: 20;\n    border-width: 1;\n    color: whitesmoke;\n    font-size: 18;\n    font-weight: bold;\n}"

/***/ }),

/***/ "./app/result/result-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Detalle\">\n  <NavigationButton\n    android.systemIcon=\"ic_menu_back\"\n    (tap)=\"goBack()\"\n  ></NavigationButton>\n</ActionBar>\n<GridLayout>\n  <ScrollView class=\"page\">\n    <StackLayout>\n      <!-- On Android the card view plugin requires adding an external library\n                  therefore it can't be demoed on Playground. You will have to download this project\n                  and build it locally to try it on Android -->\n      <CardView class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\">\n        <StackLayout class=\"card-layout\">\n          <Label class=\"h2\" [text]=\"item.title\" textWrap=\"true\"></Label>\n          <!-- <ImageZoom [src]=\"item.imageUrl\" maxZoom=\"5\" minZoom=\"2\"></ImageZoom> -->\n          <Image\n            class=\"logo\"\n            [src]=\"item.imageUrl\"\n            stretch=\"aspectFill\"\n            pinchToZoom\n            backgroundColor=\"#ddd\"\n            width=\"100%\"\n            height=\"500\"\n          ></Image>\n          <Label class=\"body\" textWrap=\"true\" [text]=\"item.description\">\n          </Label>\n          <VideoPlayer\n            src=\"https://itsontheway.s3.amazonaws.com/Subscribe+te+y+ayudanos+a+mejor+el+canal.mp4\"\n            autoplay=\"true\"\n            height=\"300\"\n          ></VideoPlayer>\n          <Label\n            class=\"body\"\n            textWrap=\"true\"\n            [text]=\"item.publishedAt | date: 'yyyy/MM/dd'\"\n          ></Label>\n          <Button\n            class=\"body\"\n            textWrap=\"true\"\n            (tap)=\"onClick()\"\n            text=\"Fuente\"\n            class=\"my-button\"\n          ></Button>\n        </StackLayout>\n      </CardView>\n    </StackLayout>\n  </ScrollView>\n</GridLayout>\n"

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
/* harmony import */ var _result_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/result/result.service.ts");





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
    ResultDetailComponent.ctorParameters = function () { return [
        { type: _result_service__WEBPACK_IMPORTED_MODULE_4__["ResultService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    ResultDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __importDefault(__webpack_require__("./app/result/result-detail.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/result/result-detail.component.css")).default]
        }),
        __metadata("design:paramtypes", [_result_service__WEBPACK_IMPORTED_MODULE_4__["ResultService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], ResultDetailComponent);
    return ResultDetailComponent;
}());



/***/ }),

/***/ "./app/result/result.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n    background-color: gray;\n    color: #252525;\n    margin: 15 15 0;\n}\n.card-layout {\n    padding: 20;\n    border-radius: 13em/3em;\n}\n.card-layout .h1 {\n    margin-bottom: 15;\n}\n.logo {\n    margin-bottom: 0;\n    width: 250;\n    height: 250;\n}"

/***/ }),

/***/ "./app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\n  <ActionBar title=\"Resultados\">\n    <NavigationButton\n      android.systemIcon=\"ic_menu_back\"\n      (tap)=\"goBack()\"\n    ></NavigationButton>\n  </ActionBar>\n</Page.actionBar>\n\n<GridLayout>\n  <ScrollView class=\"page\">\n    <StackLayout>\n      <!-- On Android the card view plugin requires adding an external library\n\t\t\t\ttherefore it can't be demoed on Playground. You will have to download this project\n\t\t\t\tand build it locally to try it on Android -->\n      <CardView\n        *ngFor=\"let item of items.articles\"\n        class=\"card\"\n        elevation=\"40\"\n        radius=\"10\"\n        ios:shadowRadius=\"3\"\n      >\n        <StackLayout class=\"card-layout\" (tap)=\"onClick($event, item)\">\n          <Label class=\"h2\" [text]=\"item.title\" textWrap=\"true\"></Label>\n          <!-- <ImageZoom [src]=\"item.imageUrl\" maxZoom=\"5\" minZoom=\"2\"></ImageZoom> -->\n          <Image\n            [src]=\"item.imageUrl\"\n            stretch=\"none\"\n            backgroundColor=\"#ddd\"\n            width=\"100%\"\n            height=\"500\"\n          ></Image>\n          <Label\n            class=\"body\"\n            textWrap=\"true\"\n            [text]=\"item.publishedAt | date: 'yyyy/MM/dd'\"\n          >\n          </Label>\n        </StackLayout>\n      </CardView>\n    </StackLayout>\n  </ScrollView>\n</GridLayout>\n"

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
        this.resultService.getSearchItems(search, this.categories).subscribe(function (response) {
            _this.items = response;
        }, function (error) { return console.error(error); });
    };
    ResultComponent.prototype.goBack = function () {
        this.routerExtensions.back();
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
        return this.http.get("https://api.jornalia.net/api/v1/articles?apiKey=f36f0dc2f3204a3c821130384e208604&search=" + search + "&categories=ULTIMAS_NOTICIAS%2C" + categories);
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

module.exports = "<Page.actionBar>\n  <ActionBar title=\"Buscar\">\n    <NavigationButton android.systemIcon=\"ic_menu_back\" (tap)=\"goBack()\"></NavigationButton>\n  </ActionBar>\n</Page.actionBar>\n<StackLayout row=\"4\">\n  <SearchBar hint=\"Buscar Noticias ...\" [text]=\"searchPhrase\" (textChange)=\"onTextChanged($event)\"\n    (clear)=\"onClear($event)\" (submit)=\"onSubmit($event)\">\n  </SearchBar>\n  <Label class=\"title\" text=\"Filtrar por categoria\"></Label>\n  <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n    <Label text=\"Politica\" class=\"label\" verticalAlignment=\"center\" style=\"width: 60%\">\n    </Label>\n    <Switch checked=\"false\" (checkedChange)=\"onCheckedPolitics($event)\"></Switch>\n  </FlexboxLayout>\n  <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n    <Label text=\"Deportes\" class=\"label\" verticalAlignment=\"center\" style=\"width: 60%\">\n    </Label>\n    <Switch checked=\"false\" (checkedChange)=\"onCheckedSport($event)\"></Switch>\n  </FlexboxLayout>\n  <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n    <Label text=\"Economia\" class=\"label\" verticalAlignment=\"center\" style=\"width: 60%\">\n    </Label>\n    <Switch checked=\"false\" (checkedChange)=\"onCheckedEconomy($event)\"></Switch>\n  </FlexboxLayout>\n  <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n    <Label text=\"Salud\" class=\"label\" verticalAlignment=\"center\" style=\"width: 60%\">\n    </Label>\n    <Switch checked=\"false\" (checkedChange)=\"onCheckedHealth($event)\"></Switch>\n  </FlexboxLayout>\n</StackLayout>"

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
        this.items = [];
        this.array = [];
        this.Health = "";
        this.Politics = "";
        this.Economy = "";
        this.Sport = "";
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
    SearchComponent.prototype.onCheckedHealth = function (args) {
        ("");
        var sw = args.object;
        if (sw.checked) {
            this.Health = "SALUD";
            this.array.push(this.Health);
        }
    };
    SearchComponent.prototype.onCheckedPolitics = function (args) {
        var sw = args.object;
        if (sw.checked) {
            this.Politics = "POLITICA";
            this.array.push(this.Politics);
        }
    };
    SearchComponent.prototype.onCheckedEconomy = function (args) {
        var sw = args.object;
        if (sw.checked) {
            this.Economy = "ECONOMIA";
            this.array.push(this.Economy);
        }
    };
    SearchComponent.prototype.onCheckedSport = function (args) {
        var sw = args.object;
        if (sw.checked) {
            this.Sport = "DEPORTES";
            this.array.push(this.Sport);
        }
    };
    SearchComponent.prototype.goBack = function () {
        // this.routerExtensions.navigate(["/items"], {
        //     clearHistory: true,
        // });
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

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"},"dependencies":{"@happones/nativescript-image-zoom":"^4.0.2"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbXMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Jlc3VsdC9yZXN1bHQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Jlc3VsdC9yZXN1bHQtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9yZXN1bHQvcmVzdWx0LWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Jlc3VsdC9yZXN1bHQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMvYXBpLmpzIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7QUNaQSwrR0FB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Ozs7Ozs7Ozs7OztBQUU3QyxjQUFnRjtBQUNOO0FBQzFFLHNEQUFzRTtBQUN0RSx3QkFBeUQ7QUFDekQsU0FBeUU7QUFDekUsUUFBd0U7QUFDeEUsWUFBbUY7QUFDbkYseUZBQXlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSBcXG5OYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbmF0aXZlc2NyaXB0L3RoZW1lXFxuVGhlIGltcG9ydGVkIENTUyBydWxlcyBtdXN0IHByZWNlZGUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzLlxcblwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5UaGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgQnV0dG9ucyB0aGF0IGhhdmUgdGhlXFxuXFxcIi1wcmltYXJ5XFxcIiBjbGFzcyBtb2RpZmllci5cXG5cIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiLy8gaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy8gaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuXG4vLyBpbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcblxuLy8gY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4vLyAgICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9pdGVtc1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4vLyAgICAgeyBwYXRoOiBcIml0ZW1zXCIsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbi8vICAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH1cbi8vIF07XG5cbi8vIEBOZ01vZHVsZSh7XG4vLyAgICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuLy8gICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdWx0Q29tcG9uZW50IH0gZnJvbSBcIi4vcmVzdWx0L3Jlc3VsdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3VsdERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3Jlc3VsdC9yZXN1bHQtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaXRlbXNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJyZWdpc3RlclwiLCBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicmVzdWx0LzpzZWFyY2hcIiwgY29tcG9uZW50OiBSZXN1bHRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicmVzdWx0XCIsIGNvbXBvbmVudDogUmVzdWx0RGV0YWlsQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInNlYXJjaFwiLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJpdGVtc1wiLCBjb21wb25lbnQ6IEl0ZW1zQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIml0ZW0vOmlkXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudCB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge31cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci9jb3JlLWNvbmNlcHRzL2FuZ3VsYXItbmF2aWdhdGlvbi5odG1sI3BhZ2Utcm91dGVyLW91dGxldCAtLT5cXG48cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbn0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuLy9pbXBvcnQgeyBZb3V0dWJlUGxheWVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC15b3V0dWJlcGxheWVyLWlubGluZS9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdWx0Q29tcG9uZW50IH0gZnJvbSBcIi4vcmVzdWx0L3Jlc3VsdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3VsdERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3Jlc3VsdC9yZXN1bHQtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbi8vaW1wb3J0ICAgeyAgUGluY2hUb1pvb21EaXJlY3RpdmUgIH0gIGZyb20gIFwiLi9waW5jaC10by16b29tLmRpcmVjdGl2ZVwiIDtcbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAvLyAgWW91dHViZVBsYXllck1vZHVsZSxcbiAgICAgICAgLy8gcHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogVVNFX1NUT1JFLCB1c2VWYWx1ZTogeyBmYTogcmVxdWlyZSgnLi4vLi4vZm9udGF3ZXNvbWUuY3NzJykuZGVmYXVsdCB9LCBUTlNGb250SWNvblNlcnZpY2UgfV0sXG4gICAgICAgIC8vIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAvLyAnZmEnOiByZXF1aXJlKCcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5taW4uY3NzJylcbiAgICAgICAgLy8gfSksXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgICAgIFJlc3VsdENvbXBvbmVudCxcbiAgICAgICAgUmVzdWx0RGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgLy8gICAgIFBpbmNoVG9ab29tRGlyZWN0aXZlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiTWVudVxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgICA8QWN0aW9uSXRlbVxcbiAgICBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvaXRlbXMnXVxcXCJcXG4gICAgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJtZW51aXRlbV9iYWNrZ3JvdW5kXFxcIlxcbiAgICBhbmRyb2lkLnBvc2l0aW9uPVxcXCJhY3Rpb25CYXJcXFwiXFxuICAgID48L0FjdGlvbkl0ZW0+XFxuICAgIDxBY3Rpb25JdGVtXFxuICAgIFtuc1JvdXRlckxpbmtdPVxcXCJbJy9zZWFyY2gnXVxcXCJcXG4gICAgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X3NlYXJjaFxcXCJcXG4gICAgPjwvQWN0aW9uSXRlbT5cXG4gIDxBY3Rpb25JdGVtIFxcbiAgW25zUm91dGVyTGlua109XFxcIlsnL2l0ZW1zJ11cXFwiXFxuICBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfdG9kYXlcXFwiPlxcbiAgPC9BY3Rpb25JdGVtPlxcbjwvQWN0aW9uQmFyPlxcbjxCb3R0b21OYXZpZ2F0aW9uPlxcbiAgPFRhYlN0cmlwPlxcbiAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19pdGVtXFxcIj5cXG4gICAgICA8TGFiZWwgIHRleHQ9XFxcIkhvbWVcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJy9pdGVtcyddXFxcIj48L0xhYmVsPlxcbiAgICA8L1RhYlN0cmlwSXRlbT5cXG4gICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cXFwibmF2aWdhdGlvbl9faXRlbVxcXCI+XFxuICAgICAgPExhYmVsIHRleHQ9XFxcIkJyb3dzZVxcXCI+PC9MYWJlbD5cXG4gICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XFxcIm5hdmlnYXRpb25fX2l0ZW1cXFwiPlxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZWFyY2hcXFwiPjwvTGFiZWw+XFxuICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgPC9UYWJTdHJpcD5cXG5cXG4gIDxUYWJDb250ZW50SXRlbT5cXG4gICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJob21lVGFiXFxcIj48L3BhZ2Utcm91dGVyLW91dGxldD5cXG4gIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuICA8VGFiQ29udGVudEl0ZW0+XFxuICAgIDxwYWdlLXJvdXRlci1vdXRsZXQgbmFtZT1cXFwiYnJvd3NlVGFiXFxcIj48L3BhZ2Utcm91dGVyLW91dGxldD5cXG4gIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuICA8VGFiQ29udGVudEl0ZW0+XFxuICAgIDxwYWdlLXJvdXRlci1vdXRsZXQgbmFtZT1cXFwic2VhcmNoVGFiXFxcIj48L3BhZ2Utcm91dGVyLW91dGxldD5cXG4gIDwvVGFiQ29udGVudEl0ZW0+XFxuPC9Cb3R0b21OYXZpZ2F0aW9uPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7fVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgY29sb3I6ICMyNTI1MjU7XFxuICAgIG1hcmdpbjogMTUgMTUgMDtcXG59XFxuLmNhcmQtbGF5b3V0IHtcXG4gICAgcGFkZGluZzogMjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEzZW0vM2VtO1xcbn1cXG4uY2FyZC1sYXlvdXQgLmgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcbi5teS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbiAgICBib3JkZXItY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSBcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJEZXRhbGxlXFxcIj5cXG4gIDxOYXZpZ2F0aW9uQnV0dG9uXFxuICAgIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIlxcbiAgICAodGFwKT1cXFwiZ29CYWNrKClcXFwiXFxuICA+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbjwvQWN0aW9uQmFyPlxcbjxHcmlkTGF5b3V0PlxcbiAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgPCEtLSBPbiBBbmRyb2lkIHRoZSBjYXJkIHZpZXcgcGx1Z2luIHJlcXVpcmVzIGFkZGluZyBhbiBleHRlcm5hbCBsaWJyYXJ5XFxuXFx0XFx0XFx0XFx0dGhlcmVmb3JlIGl0IGNhbid0IGJlIGRlbW9lZCBvbiBQbGF5Z3JvdW5kLiBZb3Ugd2lsbCBoYXZlIHRvIGRvd25sb2FkIHRoaXMgcHJvamVjdFxcblxcdFxcdFxcdFxcdGFuZCBidWlsZCBpdCBsb2NhbGx5IHRvIHRyeSBpdCBvbiBBbmRyb2lkIC0tPlxcbiAgICAgIDxDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFxcXCIgZWxldmF0aW9uPVxcXCI0MFxcXCIgcmFkaXVzPVxcXCIxMFxcXCIgaW9zOnNoYWRvd1JhZGl1cz1cXFwiM1xcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmQtbGF5b3V0XFxcIj5cXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoMlxcXCIgW3RleHRdPVxcXCJpdGVtLnRpdGxlXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPCEtLSA8QWJzb2x1dGVMYXlvdXQgY2xhc3M9XFxcInpvb21cXFwiIFt2aXNpYmlsaXR5XT1cXFwiaXNJdGVtVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnXFxcIj48SW1hZ2Vab29tIFtzcmNdPVxcXCJpdGVtLmltYWdlVXJsXFxcIiAgW3Zpc2liaWxpdHldPVxcXCJpc0l0ZW1WaXNpYmxlID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCdcXFwiIG1heFpvb209XFxcIjVcXFwiIG1pblpvb209XFxcIjJcXFwiIHpvb21TY2FsZT1cXFwiM1xcXCI+PC9JbWFnZVpvb20+PC9BYnNvbHV0ZUxheW91dD4gLS0+XFxuICAgICAgICAgIDwhLS0gPEltYWdlWm9vbSBbc3JjXT1cXFwiaXRlbS5pbWFnZVVybFxcXCIgIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiXFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cXFwiI2RkZFxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiNTAwXFxcIiAgbWF4Wm9vbT1cXFwiNVxcXCIgbWluWm9vbT1cXFwiMlxcXCIgem9vbVNjYWxlPVxcXCIzXFxcIj48L0ltYWdlWm9vbT4gLS0+XFxuICAgICAgICAgIDxJbWFnZVxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJsb2dvXFxcIlxcbiAgICAgICAgICAgIFtzcmNdPVxcXCJpdGVtLmltYWdlVXJsXFxcIlxcbiAgICAgICAgICAgIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiXFxuICAgICAgICAgICAgcGluY2hUb1pvb21cXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNkZGRcXFwiXFxuICAgICAgICAgICAgd2lkdGg9XFxcIjEwMCVcXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCI1MDBcXFwiXFxuICAgICAgICAgID48L0ltYWdlPlxcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImJvZHlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICA8L0xhYmVsPlxcbiAgICAgICAgICA8VmlkZW9QbGF5ZXJcXG4gICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vaXRzb250aGV3YXkuczMuYW1hem9uYXdzLmNvbS9TdWJzY3JpYmUrdGUreStheXVkYW5vcythK21lam9yK2VsK2NhbmFsLm1wNFxcXCJcXG4gICAgICAgICAgICBhdXRvcGxheT1cXFwiZmFsc2VcXFwiXFxuICAgICAgICAgICAgY29udHJvbHM9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCIzMDAwXFxcIlxcbiAgICAgICAgICAgIGZpbGw9XFxcImFzcGVjdEZpbGxcXFwiXFxuICAgICAgICAgICAgc2NhbGVZPVxcXCIxLjJcXFwiXFxuICAgICAgICAgICAgc2NhbGVYPVxcXCIxLjJcXFwiXFxuICAgICAgICAgID48L1ZpZGVvUGxheWVyPlxcbiAgICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYm9keVxcXCJcXG4gICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICBbdGV4dF09XFxcIml0ZW0ucHVibGlzaGVkQXQgfCBkYXRlOiAneXl5eS9NTS9kZCdcXFwiXFxuICAgICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgICA8QnV0dG9uXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJvZHlcXFwiXFxuICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgKHRhcCk9XFxcIm9uQ2xpY2soKVxcXCJcXG4gICAgICAgICAgICB0ZXh0PVxcXCJGdWVudGVcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcIm15LWJ1dHRvblxcXCJcXG4gICAgICAgICAgPjwvQnV0dG9uPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8L0NhcmRWaWV3PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9TY3JvbGxWaWV3PlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIERpcmVjdGl2ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcblxucmVnaXN0ZXJFbGVtZW50KFxuICAgIFwiSW1hZ2Vab29tXCIsXG4gICAgKCkgPT4gcmVxdWlyZShcIkBoYXBwb25lcy9uYXRpdmVzY3JpcHQtaW1hZ2Utem9vbVwiKS5JbWFnZVpvb21cbik7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBhbnkgPSBbXTtcbiAgICBpdGVtOiBhbnkgPSBbXTtcbiAgICBpc0l0ZW1WaXNpYmxlOiBib29sZWFuO1xuICAgIGlzSXRlbVZpc2libGUyOiBib29sZWFuO1xuICAgIHNyYzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaXNJdGVtVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSXRlbVZpc2libGUyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDtcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1zLmFydGljbGVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBpZFxuICAgICAgICAgICAgICAgIClbMF07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuICAgIH1cbiAgICBvblNob3dJbWFnZShhcmdzOiBhbnksIGltYWdlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc0l0ZW1WaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0l0ZW1WaXNpYmxlMiA9IGZhbHNlO1xuICAgIH1cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIFV0aWxzLm9wZW5VcmwodGhpcy5pdGVtLnNvdXJjZVVybCk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgY29sb3I6ICMyNTI1MjU7XFxuICAgIG1hcmdpbjogMTUgMTUgMDtcXG59XFxuLmNhcmQtbGF5b3V0IHtcXG4gICAgcGFkZGluZzogMjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEzZW0vM2VtO1xcbn1cXG4uY2FyZC1sYXlvdXQgLmgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcbi5sb2dvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwO1xcbn1cIiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtcbiAgICBBY3Rpdml0eUluZGljYXRvcixcbiAgICBpc0lPUyxcbiAgICBDb2xvcixcbiAgICBFdmVudERhdGEsXG4gICAgUGFnZSxcbiAgICBJbWFnZVNvdXJjZSxcbn0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBQaG90b1ZpZXdlcixcbiAgICBQaG90b1ZpZXdlck9wdGlvbnMsXG4gICAgUGFsZXR0ZVR5cGUsXG4gICAgTllUUGhvdG9JdGVtLFxufSBmcm9tIFwibmF0aXZlc2NyaXB0LXBob3Rvdmlld2VyXCI7XG52YXIgcGhvdG9WaWV3ZXI6IFBob3RvVmlld2VyO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfcGFnZTogUGFnZSkge1xuICAgIH1cbiAgICBcbiAgICBnZXRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICAgICAgICBcImh0dHBzOi8vYXBpLmpvcm5hbGlhLm5ldC9hcGkvdjEvYXJ0aWNsZXM/YXBpS2V5PWYzNmYwZGMyZjMyMDRhM2M4MjExMzAzODRlMjA4NjA0XCJcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcbiAgPEFjdGlvbkJhciB0aXRsZT1cXFwiVWx0aW1hcyBOb3RpY2lhc1xcXCI+XFxuICAgIDxBY3Rpb25JdGVtXFxuICAgICAgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X3NlYXJjaFxcXCJcXG4gICAgICBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvc2VhcmNoJ11cXFwiXFxuICAgID48L0FjdGlvbkl0ZW0+XFxuICAgIDxBY3Rpb25JdGVtXFxuICAgICAgdGV4dD1cXFwiQ2VycmFyIHNlc2nDs25cXFwiXFxuICAgICAgKHRhcCk9XFxcIm9uTG9nb3V0KClcXFwiXFxuICAgICAgaW9zLnN5c3RlbUljb249XFxcIjE2XFxcIlxcbiAgICAgIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxuICAgICAgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiXFxuICAgID5cXG4gICAgPC9BY3Rpb25JdGVtPlxcbiAgPC9BY3Rpb25CYXI+XFxuPC9QYWdlLmFjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dD5cXG4gIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIiByb3c9XFxcIjVcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgPCEtLSBPbiBBbmRyb2lkIHRoZSBjYXJkIHZpZXcgcGx1Z2luIHJlcXVpcmVzIGFkZGluZyBhbiBleHRlcm5hbCBsaWJyYXJ5XFxuXFx0XFx0XFx0XFx0dGhlcmVmb3JlIGl0IGNhbid0IGJlIGRlbW9lZCBvbiBQbGF5Z3JvdW5kLiBZb3Ugd2lsbCBoYXZlIHRvIGRvd25sb2FkIHRoaXMgcHJvamVjdFxcblxcdFxcdFxcdFxcdGFuZCBidWlsZCBpdCBsb2NhbGx5IHRvIHRyeSBpdCBvbiBBbmRyb2lkIC0tPlxcbiAgICAgIDxDYXJkVmlld1xcbiAgICAgICAgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBpdGVtcy5hcnRpY2xlc1xcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJjYXJkXFxcIlxcbiAgICAgICAgZWxldmF0aW9uPVxcXCI0MFxcXCJcXG4gICAgICAgIHJhZGl1cz1cXFwiMTBcXFwiXFxuICAgICAgICBpb3M6c2hhZG93UmFkaXVzPVxcXCIzXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZC1sYXlvdXRcXFwiICBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvaXRlbScsIGl0ZW0uX2lkXVxcXCI+XFxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDJcXFwiIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwhLS0gPEltYWdlWm9vbSBbc3JjXT1cXFwiaXRlbS5pbWFnZVVybFxcXCIgbWF4Wm9vbT1cXFwiNVxcXCIgbWluWm9vbT1cXFwiMlxcXCI+PC9JbWFnZVpvb20+IC0tPlxcbiAgICAgICAgICA8SW1hZ2VcXG4gICAgICAgICAgICBjbGFzcz1cXFwibG9nb1xcXCJcXG4gICAgICAgICAgICBbc3JjXT1cXFwiaXRlbS5pbWFnZVVybFxcXCJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNkZGRcXFwiXFxuICAgICAgICAgICAgd2lkdGg9XFxcIjEwMCVcXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCIzMDBcXFwiXFxuICAgICAgICAgID48L0ltYWdlPlxcbiAgICAgICAgICA8IS0tIDxWaWRlb1BsYXllclxcbiAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vaXRzb250aGV3YXkuczMuYW1hem9uYXdzLmNvbS9TdWJzY3JpYmUrdGUreStheXVkYW5vcythK21lam9yK2VsK2NhbmFsLm1wNFxcXCJcXG4gICAgICAgICAgYXV0b3BsYXk9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICBsb29wPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICBjb250cm9scz1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgaGVpZ2h0PVxcXCIzMDAwXFxcIlxcbiAgICAgICAgICBmaWxsPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICBzY2FsZVk9XFxcIjEuMlxcXCJcXG4gICAgICAgICAgc2NhbGVYPVxcXCIxLjJcXFwiXFxuICAgICAgICA+PC9WaWRlb1BsYXllcj4gLS0+XFxuICAgICAgICAgIDxMYWJlbFxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJib2R5XFxcIlxcbiAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgIFt0ZXh0XT1cXFwiaXRlbS5wdWJsaXNoZWRBdCB8IGRhdGU6ICd5eXl5L01NL2RkJ1xcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICA8L0xhYmVsPlxcbiAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLGF1dG8sYXV0byxhdXRvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHBhZGRpbmdCb3R0b209XFxcIjEwXFxcIj5cXG4gICAgICAgICAgICA8IS0tIDxCdXR0b24gI3N3aXBlbGVmdCBjbGFzcz1cXFwiYnRuIGZhXFxcIiBjb2w9XFxcIjBcXFwiIFt0ZXh0XT1cXFwiJ2ZhLXRpbWVzJyB8IGZvbnRpY29uXFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8QnV0dG9uICNzd2lwZXJpZ2h0IGNsYXNzPVxcXCJidG5zbSBmYS1zbWFsbFxcXCIgY29sPVxcXCIzXFxcIiB0ZXh0PVxcXCJNZSBHdXN0YVxcXCIgKHRhcCk9XFxcIm9uQ2xpY2soKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgIDwvQ2FyZFZpZXc+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICA8L1Njcm9sbFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBjbGVhciwgZ2V0U3RyaW5nIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG4vLyByZWdpc3RlckVsZW1lbnQoXG4vLyAgICAgXCJJbWFnZVpvb21cIixcbi8vICAgICAoKSA9PiByZXF1aXJlKFwiQGhhcHBvbmVzL25hdGl2ZXNjcmlwdC1pbWFnZS16b29tXCIpLkltYWdlWm9vbVxuLy8gKTtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaXRlbS5jb21wb25lbnQuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IGFueSA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1zU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXNTZXJ2aWNlLmdldEl0ZW1zKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICk7XG4gICAgfVxuICAgIG9uQ2xpY2soKXtcbiAgICAgICAgYWxlcnQoJ3RlIGd1c3RhIGVzdGEgcHVibGljYWNpb24nKVxuICAgIH1cbiAgICBhc3luYyBvbkxvZ291dCgpIHtcbiAgICAgICAgYXdhaXQgY2xlYXIoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gICAgfVxuICAgIGdvQmFuY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5mbGV4Ym94TGF5b3V0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDE0Y2I7XFxuICB9XFxuICAuc3RhY2tMYXlvdXQge1xcbiAgICB3aWR0aDogMzAwO1xcbiAgICBwYWRkaW5nOiAxMCAxNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIH1cXG4gIEltYWdlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjA7XFxuICAgIGhlaWdodDogNzA7XFxuICB9XFxuICBCdXR0b24sIFRleHRGaWVsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwO1xcbiAgfVxcbiAgLmJ0bi1wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWRjYjtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG4gIFRleHRGaWVsZCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG4gIC5kYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMTIxNztcXG4gIH1cXG4gIC5kYXJrIFRleHRGaWVsZCB7XFxuICAgIGNvbG9yOiAgI0M0QUZCNDtcXG4gIH1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJMb2dpblxcXCI+IDwvQWN0aW9uQmFyPlxcbjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJmbGV4Ym94TGF5b3V0XFxcIj5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwic3RhY2tMYXlvdXRcXFwiPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgaGludD1cXFwiQ29ycmVvXFxcIlxcbiAgICAgIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiXFxuICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiXFxuICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCJcXG4gICAgPjwvVGV4dEZpZWxkPlxcbiAgICA8IS0tIDxMYWJlbCAqbmdJZj1cXFwiaGFzRW1haWxFcnJvcnMoKVxcXCIgY2xhc3M9XFxcImVsb2hhLWZvbnQtc2VtaWJvbGQgbS10LTIgbG9naW4tZmllbGQtbGFiZWwgY29sb3ItZGFuZ2VyIGZvbnQtc2l6ZS1tZFxcXCIgcm93PVxcXCIyXFxcIiBbdGV4dF09XFxcImdldEVtYWlsRXJyb3IoKVxcXCI+PC9MYWJlbD4gLS0+XFxuICAgIDxUZXh0RmllbGRcXG4gICAgICBoaW50PVxcXCJDb250cmFzZcOxYVxcXCJcXG4gICAgICBzZWN1cmU9XFxcInRydWVcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiXFxuICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCJcXG4gICAgPjwvVGV4dEZpZWxkPlxcblxcbiAgICA8QnV0dG9uXFxuICAgICAgdGV4dD1cXFwiSW5pY2lhciBzZXNpw7NuXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiXFxuICAgICAgKHRhcCk9XFxcInN1Ym1pdCgpXFxcIlxcbiAgICA+PC9CdXR0b24+XFxuICAgIDxCdXR0b24gW25zUm91dGVyTGlua109XFxcIlsnL3JlZ2lzdGVyJ11cXFwiIHRleHQ9XFxcIkNyZWFyIEN1ZW50YVxcXCI+PC9CdXR0b24+XFxuICA8L1N0YWNrTGF5b3V0PlxcbjwvRmxleGJveExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHNldFN0cmluZyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9sb2dpbi5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOltcIi4vbG9naW4uY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdXNlcjogVXNlcjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcbiAgICAgICAgdGhpcy51c2VyLmZ1bGxuYW1lID0gXCJcIjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB7XG4gICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51dGlsaXR5U2VydmljZVxuICAgICAgICAgICAgLmxvZ2luKHZhbHVlKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHJlc3VsdC5kYXRhKVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3VsdC5kYXRhLnRva2VuLnJlcGxhY2UoL1sgJ1wiXSsvZywgXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICBcIlVzdWFyaW8gXCIgKyB0aGlzLnVzZXIuZW1haWwgKyBcIiBpbmljaW8gIHNlc2nDs24gY29uIGV4aXRvIFwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2l0ZW1zXCJdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICBcIkVsIHVzdWFyaW8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLmVtYWlsICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIG5vIGluaWNpbyAgIHNlc2nDs24gIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIGhhc0VtYWlsRXJyb3JzKCkge1xuICAgICAgICAvLyBjb25zdCBpc1ZhbGlkRW1haWwgPSB0aGlzLnVzZXIuaGFzRW1haWwoKSAmJiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpO1xuICAgICAgICAvLyBpZiAoIWlzVmFsaWRFbWFpbCkge1xuICAgICAgICAvLyAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBmdWxsbmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBoYXNFbWFpbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1haWwgIT0gXCJcIjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuXG5pbXBvcnQgYXBpIGZyb20gXCIuLi91dGlscy9hcGlcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL2xvZ2luLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG4gICAgdXNlcjogVXNlcjtcbiAgICBsb2dpbih1c2VyOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIGFwaS5wb3N0KFwiL2xvZ2luXCIsIHVzZXIpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLy8gQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xuICAgICAgICAvLyB0aGlzLmRhdGFiYXNlLmNsb3NlZGJDb25uZWN0aW9uKCk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5mbGV4Ym94TGF5b3V0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDE0Y2I7XFxuICB9XFxuICAuc3RhY2tMYXlvdXQge1xcbiAgICB3aWR0aDogMzAwO1xcbiAgICBwYWRkaW5nOiAxMCAxNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIH1cXG4gIEltYWdlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjA7XFxuICAgIGhlaWdodDogNzA7XFxuICB9XFxuICBCdXR0b24sIFRleHRGaWVsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwO1xcbiAgfVxcbiAgLmJ0bi1wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWRjYjtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG4gIFRleHRGaWVsZCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG4gIC5kYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMTIxNztcXG4gIH1cXG4gIC5kYXJrIFRleHRGaWVsZCB7XFxuICAgIGNvbG9yOiAgI0M0QUZCNDtcXG4gIH1cXG4gIC52YWxpZGF0aW9uIHtcXG4gICAgY29sb3I6IHJlZFxcbiAgfVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIlJlZ2lzdGVyXFxcIj4gPC9BY3Rpb25CYXI+XFxuPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcImZsZXhib3hMYXlvdXRcXFwiPlxcbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzdGFja0xheW91dFxcXCI+XFxuICAgIDxUZXh0RmllbGRcXG4gICAgICBoaW50PVxcXCJOb21icmUgY29tcGxldG9cXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuZnVsbG5hbWVcXFwiXFxuICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCJcXG4gICAgPjwvVGV4dEZpZWxkPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgaGludD1cXFwiQ29ycmVvXFxcIlxcbiAgICAgIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiXFxuICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiXFxuICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCJcXG4gICAgPjwvVGV4dEZpZWxkPlxcbiAgICA8TGFiZWxcXG4gICAgICBjbGFzcz1cXFwidmFsaWRhdGlvblxcXCJcXG4gICAgICBbdmlzaWJpbGl0eV09XFxcImNvcnJlY3RFbWFpbCA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiXFxuICAgICAgdGV4dD1cXFwiRWwgY29ycmVvIGVzdGEgbWFsIGVzY3JpdG9cXFwiXFxuICAgID48L0xhYmVsPlxcbiAgICA8IS0tIDxMYWJlbCAqbmdJZj1cXFwiaGFzRW1haWxFcnJvcnMoKVxcXCIgY2xhc3M9XFxcImVsb2hhLWZvbnQtc2VtaWJvbGQgbS10LTIgbG9naW4tZmllbGQtbGFiZWwgY29sb3ItZGFuZ2VyIGZvbnQtc2l6ZS1tZFxcXCIgcm93PVxcXCIyXFxcIiBbdGV4dF09XFxcImdldEVtYWlsRXJyb3IoKVxcXCI+PC9MYWJlbD4gLS0+XFxuICAgIDxUZXh0RmllbGRcXG4gICAgICBoaW50PVxcXCJDb250cmFzZcOxYVxcXCJcXG4gICAgICBzZWN1cmU9XFxcInRydWVcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiXFxuICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCJcXG4gICAgPjwvVGV4dEZpZWxkPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgaGludD1cXFwiQ29uZm9ybWFyIENvbnRyYXNlw7FhXFxcIlxcbiAgICAgIHNlY3VyZT1cXFwidHJ1ZVxcXCJcXG4gICAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5wYXNzd29yZDJcXFwiXFxuICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCJcXG4gICAgPjwvVGV4dEZpZWxkPlxcbiAgICA8TGFiZWxcXG4gICAgICBjbGFzcz1cXFwidmFsaWRhdGlvblxcXCJcXG4gICAgICBbdmlzaWJpbGl0eV09XFxcImVsZW1lbnRNb2RlbCA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiXFxuICAgICAgdGV4dD1cXFwiTGFzIGNvbnRyYXNlw7FhcyBubyBjb2luY2lkZW5cXFwiXFxuICAgID48L0xhYmVsPlxcbiAgICA8QnV0dG9uXFxuICAgICAgdGV4dD1cXFwiQ3JlYXIgQ3VlbnRhXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiXFxuICAgICAgKHRhcCk9XFxcInN1Ym1pdCgpXFxcIlxcbiAgICA+PC9CdXR0b24+XFxuICAgIDxCdXR0b24gW25zUm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiIHRleHQ9XFxcIkUgaW5pY2lhciBzZXNpw7NuXFxcIj48L0J1dHRvbj5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuPC9GbGV4Ym94TGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgUmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSBcIi4vcmVnaXN0ZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3JlZ2lzdGVyLm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcmVnaXN0ZXIuY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXI6IFVzZXI7XG4gICAgZWxlbWVudE1vZGVsOiBib29sZWFuO1xuICAgIGNvcnJlY3RFbWFpbDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogUmVnaXN0ZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkMiA9IFwiXCI7XG4gICAgICAgIHRoaXMudXNlci5mdWxsbmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZWxlbWVudE1vZGVsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ycmVjdEVtYWlsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxuICAgIGNvZmlybVBhc3N3b3JkKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyLnBhc3N3b3JkICE9PSB0aGlzLnVzZXIucGFzc3dvcmQyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRNb2RlbCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50TW9kZWwgPSBmYWxzZTtcbiAgICB9XG4gICAgc3VibWl0KCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgICAgIC8vIG5hbWU6dGhpcy51c2VyLmZ1bGxuYW1lLFxuICAgICAgICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29maXJtUGFzc3dvcmQoKTtcbiAgICAgICAgY29uc3QgdmFsdWVCb29sZWFuID0gdGhpcy51dGlsaXR5U2VydmljZS5pc1ZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKTtcbiAgICAgICAgaWYgKCF2YWx1ZUJvb2xlYW4pIHtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdEVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdEVtYWlsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNvcnJlY3RFbWFpbCAmJiAhdGhpcy5lbGVtZW50TW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2VcbiAgICAgICAgICAgICAgICAucmVnaXN0ZXIodmFsdWUpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVXN1YXJpbyBcIiArIHRoaXMudXNlci5lbWFpbCArIFwiIHNlIHJlZ2lzdHJvIGNvbiBleGl0byBcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJFbCB1c3VhcmlvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuZW1haWwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG5vIHNlIHJlZ2lzdHJvICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZXJyKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGZ1bGxuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIHBhc3N3b3JkMjogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCBhcGkgZnJvbSBcIi4uL3V0aWxzL2FwaVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3JlZ2lzdGVyLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJTZXJ2aWNlIHtcbiAgICByZWdleDogYW55ID0gL15bYS16QS1aMC05LiEjJCUmJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC87XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuICAgIHVzZXI6IFVzZXI7XG4gICAgcHVibGljIGlzVmFsaWRFbWFpbChlbWFpbDogU3RyaW5nKSB7XG4gICAgICAgIGlmICghZW1haWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnZXgudGVzdChlbWFpbCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKHVzZXI6IGFueSkge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihcImh0dHA6Ly8xMC4wLjIuMjo0MDAwL3NpZ251cFwiLCB1c2VyKTtcbiAgICAgICAgcmV0dXJuIGFwaS5wb3N0KFwiL3NpZ251cFwiLCB1c2VyKTtcbiAgICB9XG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvLyBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XG4gICAgICAgIC8vIHRoaXMuZGF0YWJhc2UuY2xvc2VkYkNvbm5lY3Rpb24oKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG4gICAgbWFyZ2luOiAxNSAxNSAwO1xcbn1cXG4uY2FyZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nOiAyMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTNlbS8zZW07XFxufVxcbi5jYXJkLWxheW91dCAuaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuLmxvZ28ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMjUwO1xcbiAgICBoZWlnaHQ6IDI1MDtcXG59XFxuLm15LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIGJvcmRlci1jb2xvcjogZGFya29saXZlZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwO1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiRGV0YWxsZVxcXCI+XFxuICA8TmF2aWdhdGlvbkJ1dHRvblxcbiAgICBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCJcXG4gICAgKHRhcCk9XFxcImdvQmFjaygpXFxcIlxcbiAgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dD5cXG4gIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgIDwhLS0gT24gQW5kcm9pZCB0aGUgY2FyZCB2aWV3IHBsdWdpbiByZXF1aXJlcyBhZGRpbmcgYW4gZXh0ZXJuYWwgbGlicmFyeVxcbiAgICAgICAgICAgICAgICAgIHRoZXJlZm9yZSBpdCBjYW4ndCBiZSBkZW1vZWQgb24gUGxheWdyb3VuZC4gWW91IHdpbGwgaGF2ZSB0byBkb3dubG9hZCB0aGlzIHByb2plY3RcXG4gICAgICAgICAgICAgICAgICBhbmQgYnVpbGQgaXQgbG9jYWxseSB0byB0cnkgaXQgb24gQW5kcm9pZCAtLT5cXG4gICAgICA8Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRcXFwiIGVsZXZhdGlvbj1cXFwiNDBcXFwiIHJhZGl1cz1cXFwiMTBcXFwiIGlvczpzaGFkb3dSYWRpdXM9XFxcIjNcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkLWxheW91dFxcXCI+XFxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDJcXFwiIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwhLS0gPEltYWdlWm9vbSBbc3JjXT1cXFwiaXRlbS5pbWFnZVVybFxcXCIgbWF4Wm9vbT1cXFwiNVxcXCIgbWluWm9vbT1cXFwiMlxcXCI+PC9JbWFnZVpvb20+IC0tPlxcbiAgICAgICAgICA8SW1hZ2VcXG4gICAgICAgICAgICBjbGFzcz1cXFwibG9nb1xcXCJcXG4gICAgICAgICAgICBbc3JjXT1cXFwiaXRlbS5pbWFnZVVybFxcXCJcXG4gICAgICAgICAgICBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIlxcbiAgICAgICAgICAgIHBpbmNoVG9ab29tXFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCIjZGRkXFxcIlxcbiAgICAgICAgICAgIHdpZHRoPVxcXCIxMDAlXFxcIlxcbiAgICAgICAgICAgIGhlaWdodD1cXFwiNTAwXFxcIlxcbiAgICAgICAgICA+PC9JbWFnZT5cXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJib2R5XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgPFZpZGVvUGxheWVyXFxuICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL2l0c29udGhld2F5LnMzLmFtYXpvbmF3cy5jb20vU3Vic2NyaWJlK3RlK3krYXl1ZGFub3MrYSttZWpvcitlbCtjYW5hbC5tcDRcXFwiXFxuICAgICAgICAgICAgYXV0b3BsYXk9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCIzMDBcXFwiXFxuICAgICAgICAgID48L1ZpZGVvUGxheWVyPlxcbiAgICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYm9keVxcXCJcXG4gICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICBbdGV4dF09XFxcIml0ZW0ucHVibGlzaGVkQXQgfCBkYXRlOiAneXl5eS9NTS9kZCdcXFwiXFxuICAgICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgICA8QnV0dG9uXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJvZHlcXFwiXFxuICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgKHRhcCk9XFxcIm9uQ2xpY2soKVxcXCJcXG4gICAgICAgICAgICB0ZXh0PVxcXCJGdWVudGVcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcIm15LWJ1dHRvblxcXCJcXG4gICAgICAgICAgPjwvQnV0dG9uPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8L0NhcmRWaWV3PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9TY3JvbGxWaWV3PlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcbnJlZ2lzdGVyRWxlbWVudCgnSW1hZ2Vab29tJywgKCkgPT4gcmVxdWlyZSgnQGhhcHBvbmVzL25hdGl2ZXNjcmlwdC1pbWFnZS16b29tJykuSW1hZ2Vab29tKTtcblxuaW1wb3J0IHsgUmVzdWx0U2VydmljZSB9IGZyb20gXCIuL3Jlc3VsdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Jlc3VsdC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcmVzdWx0LWRldGFpbC5jb21wb25lbnQuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN1bHREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBhbnkgPSBbXTtcbiAgICBpdGVtOiBhbnkgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBSZXN1bHRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlci5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gSlNPTi5wYXJzZShyZXMudmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICBVdGlscy5vcGVuVXJsKHRoaXMuaXRlbS5zb3VyY2VVcmwpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGNvbG9yOiAjMjUyNTI1O1xcbiAgICBtYXJnaW46IDE1IDE1IDA7XFxufVxcbi5jYXJkLWxheW91dCB7XFxuICAgIHBhZGRpbmc6IDIwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxM2VtLzNlbTtcXG59XFxuLmNhcmQtbGF5b3V0IC5oMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG4ubG9nbyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHdpZHRoOiAyNTA7XFxuICAgIGhlaWdodDogMjUwO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxuICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJSZXN1bHRhZG9zXFxcIj5cXG4gICAgPE5hdmlnYXRpb25CdXR0b25cXG4gICAgICBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCJcXG4gICAgICAodGFwKT1cXFwiZ29CYWNrKClcXFwiXFxuICAgID48L05hdmlnYXRpb25CdXR0b24+XFxuICA8L0FjdGlvbkJhcj5cXG48L1BhZ2UuYWN0aW9uQmFyPlxcblxcbjxHcmlkTGF5b3V0PlxcbiAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgPCEtLSBPbiBBbmRyb2lkIHRoZSBjYXJkIHZpZXcgcGx1Z2luIHJlcXVpcmVzIGFkZGluZyBhbiBleHRlcm5hbCBsaWJyYXJ5XFxuXFx0XFx0XFx0XFx0dGhlcmVmb3JlIGl0IGNhbid0IGJlIGRlbW9lZCBvbiBQbGF5Z3JvdW5kLiBZb3Ugd2lsbCBoYXZlIHRvIGRvd25sb2FkIHRoaXMgcHJvamVjdFxcblxcdFxcdFxcdFxcdGFuZCBidWlsZCBpdCBsb2NhbGx5IHRvIHRyeSBpdCBvbiBBbmRyb2lkIC0tPlxcbiAgICAgIDxDYXJkVmlld1xcbiAgICAgICAgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBpdGVtcy5hcnRpY2xlc1xcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJjYXJkXFxcIlxcbiAgICAgICAgZWxldmF0aW9uPVxcXCI0MFxcXCJcXG4gICAgICAgIHJhZGl1cz1cXFwiMTBcXFwiXFxuICAgICAgICBpb3M6c2hhZG93UmFkaXVzPVxcXCIzXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZC1sYXlvdXRcXFwiICh0YXApPVxcXCJvbkNsaWNrKCRldmVudCwgaXRlbSlcXFwiPlxcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImgyXFxcIiBbdGV4dF09XFxcIml0ZW0udGl0bGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8IS0tIDxJbWFnZVpvb20gW3NyY109XFxcIml0ZW0uaW1hZ2VVcmxcXFwiIG1heFpvb209XFxcIjVcXFwiIG1pblpvb209XFxcIjJcXFwiPjwvSW1hZ2Vab29tPiAtLT5cXG4gICAgICAgICAgPEltYWdlXFxuICAgICAgICAgICAgW3NyY109XFxcIml0ZW0uaW1hZ2VVcmxcXFwiXFxuICAgICAgICAgICAgc3RyZXRjaD1cXFwibm9uZVxcXCJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNkZGRcXFwiXFxuICAgICAgICAgICAgd2lkdGg9XFxcIjEwMCVcXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCI1MDBcXFwiXFxuICAgICAgICAgID48L0ltYWdlPlxcbiAgICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYm9keVxcXCJcXG4gICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICBbdGV4dF09XFxcIml0ZW0ucHVibGlzaGVkQXQgfCBkYXRlOiAneXl5eS9NTS9kZCdcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPC9DYXJkVmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvU2Nyb2xsVmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG4vLyByZWdpc3RlckVsZW1lbnQoXG4vLyAgICAgXCJJbWFnZVpvb21cIixcbi8vICAgICAoKSA9PiByZXF1aXJlKFwiQGhhcHBvbmVzL25hdGl2ZXNjcmlwdC1pbWFnZS16b29tXCIpLkltYWdlWm9vbVxuLy8gKTtcblxuaW1wb3J0IHsgUmVzdWx0U2VydmljZSB9IGZyb20gXCIuL3Jlc3VsdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Jlc3VsdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9yZXN1bHQuY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogYW55ID0gW107XG4gICAgY2F0ZWdvcmllczogYW55O1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlc3VsdFNlcnZpY2U6IFJlc3VsdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7fVxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzZWFyY2ggPSB0aGlzLnJvdXRlci5zbmFwc2hvdC5wYXJhbXMuc2VhcmNoO1xuICAgICAgICB0aGlzLnJvdXRlci5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmNhdGVnb3JpZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlc3VsdFNlcnZpY2UuZ2V0U2VhcmNoSXRlbXMoc2VhcmNoLCB0aGlzLmNhdGVnb3JpZXMpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSByZXNwb25zZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICk7XG4gICAgfVxuICAgIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG4gICAgb25DbGljayhhcmdzOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9yZXN1bHRcIl0sIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHZhbHVlOiBKU09OLnN0cmluZ2lmeShldmVudCkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0U2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuICAgIGdldFNlYXJjaEl0ZW1zKHNlYXJjaCA6IGFueSxjYXRlZ29yaWVzOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGkuam9ybmFsaWEubmV0L2FwaS92MS9hcnRpY2xlcz9hcGlLZXk9ZjM2ZjBkYzJmMzIwNGEzYzgyMTEzMDM4NGUyMDg2MDQmc2VhcmNoPSR7c2VhcmNofSZjYXRlZ29yaWVzPVVMVElNQVNfTk9USUNJQVMlMkMke2NhdGVnb3JpZXN9YFxuICAgICAgICApO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG4ubGFiZWwge1xcbiAgICBtYXJnaW46IDI1O1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG4udGl0bGUge1xcbiAgICBtYXJnaW46IDI1O1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxuICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJCdXNjYXJcXFwiPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcImdvQmFjaygpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICA8L0FjdGlvbkJhcj5cXG48L1BhZ2UuYWN0aW9uQmFyPlxcbjxTdGFja0xheW91dCByb3c9XFxcIjRcXFwiPlxcbiAgPFNlYXJjaEJhciBoaW50PVxcXCJCdXNjYXIgTm90aWNpYXMgLi4uXFxcIiBbdGV4dF09XFxcInNlYXJjaFBocmFzZVxcXCIgKHRleHRDaGFuZ2UpPVxcXCJvblRleHRDaGFuZ2VkKCRldmVudClcXFwiXFxuICAgIChjbGVhcik9XFxcIm9uQ2xlYXIoJGV2ZW50KVxcXCIgKHN1Ym1pdCk9XFxcIm9uU3VibWl0KCRldmVudClcXFwiPlxcbiAgPC9TZWFyY2hCYXI+XFxuICA8TGFiZWwgY2xhc3M9XFxcInRpdGxlXFxcIiB0ZXh0PVxcXCJGaWx0cmFyIHBvciBjYXRlZ29yaWFcXFwiPjwvTGFiZWw+XFxuICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJyb3dcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiUG9saXRpY2FcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcIndpZHRoOiA2MCVcXFwiPlxcbiAgICA8L0xhYmVsPlxcbiAgICA8U3dpdGNoIGNoZWNrZWQ9XFxcImZhbHNlXFxcIiAoY2hlY2tlZENoYW5nZSk9XFxcIm9uQ2hlY2tlZFBvbGl0aWNzKCRldmVudClcXFwiPjwvU3dpdGNoPlxcbiAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwicm93XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG4gICAgPExhYmVsIHRleHQ9XFxcIkRlcG9ydGVzXFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNjAlXFxcIj5cXG4gICAgPC9MYWJlbD5cXG4gICAgPFN3aXRjaCBjaGVja2VkPVxcXCJmYWxzZVxcXCIgKGNoZWNrZWRDaGFuZ2UpPVxcXCJvbkNoZWNrZWRTcG9ydCgkZXZlbnQpXFxcIj48L1N3aXRjaD5cXG4gIDwvRmxleGJveExheW91dD5cXG4gIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcInJvd1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJFY29ub21pYVxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBzdHlsZT1cXFwid2lkdGg6IDYwJVxcXCI+XFxuICAgIDwvTGFiZWw+XFxuICAgIDxTd2l0Y2ggY2hlY2tlZD1cXFwiZmFsc2VcXFwiIChjaGVja2VkQ2hhbmdlKT1cXFwib25DaGVja2VkRWNvbm9teSgkZXZlbnQpXFxcIj48L1N3aXRjaD5cXG4gIDwvRmxleGJveExheW91dD5cXG4gIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcInJvd1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJTYWx1ZFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBzdHlsZT1cXFwid2lkdGg6IDYwJVxcXCI+XFxuICAgIDwvTGFiZWw+XFxuICAgIDxTd2l0Y2ggY2hlY2tlZD1cXFwiZmFsc2VcXFwiIChjaGVja2VkQ2hhbmdlKT1cXFwib25DaGVja2VkSGVhbHRoKCRldmVudClcXFwiPjwvU3dpdGNoPlxcbiAgPC9GbGV4Ym94TGF5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IFN3aXRjaCwgRXZlbnREYXRhIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2VhcmNoLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3NlYXJjaC5jb21wb25lbnQuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQge1xuICAgIHNlYXJjaFBocmFzZTogc3RyaW5nO1xuICAgIGl0ZW1zOiBhbnkgPSBbXTtcbiAgICBhcnJheTogYW55ID0gW107XG4gICAgSGVhbHRoOiBhbnk7XG4gICAgUG9saXRpY3M6IGFueTtcbiAgICBFY29ub215OiBhbnk7XG4gICAgU3BvcnQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLkhlYWx0aCA9IFwiXCI7XG4gICAgICAgIHRoaXMuUG9saXRpY3MgPSBcIlwiO1xuICAgICAgICB0aGlzLkVjb25vbXkgPSBcIlwiO1xuICAgICAgICB0aGlzLlNwb3J0ID0gXCJcIjtcbiAgICB9XG5cbiAgICBvblN1Ym1pdChhcmdzKSB7XG4gICAgICAgIC8vICAgY29uc3QgbmV3QXJyYXkgPSB0aGlzLmFycmF5Lm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChpbmRleCA9PT0gdGhpcy5hcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZXR1cm4gZSArIFwiJTJDXCI7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyAgIGNvbnNvbGUuZGlyKFwibmV3QXJyYXlcIiwgbmV3QXJyYXkudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcnKSlcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9yZXN1bHRcIiwgYXJncy5vYmplY3QudGV4dF0sIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuYXJyYXkuam9pbihcIixcIikpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2hlY2tlZEhlYWx0aChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgKFwiXCIpO1xuICAgICAgICBsZXQgc3cgPSBhcmdzLm9iamVjdCBhcyBTd2l0Y2g7XG4gICAgICAgIGlmIChzdy5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLkhlYWx0aCA9IFwiU0FMVURcIjtcbiAgICAgICAgICAgIHRoaXMuYXJyYXkucHVzaCh0aGlzLkhlYWx0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DaGVja2VkUG9saXRpY3MoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBzdyA9IGFyZ3Mub2JqZWN0IGFzIFN3aXRjaDtcbiAgICAgICAgaWYgKHN3LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuUG9saXRpY3MgPSBcIlBPTElUSUNBXCI7XG4gICAgICAgICAgICB0aGlzLmFycmF5LnB1c2godGhpcy5Qb2xpdGljcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DaGVja2VkRWNvbm9teShhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgbGV0IHN3ID0gYXJncy5vYmplY3QgYXMgU3dpdGNoO1xuICAgICAgICBpZiAoc3cuY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5FY29ub215ID0gXCJFQ09OT01JQVwiO1xuICAgICAgICAgICAgdGhpcy5hcnJheS5wdXNoKHRoaXMuRWNvbm9teSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DaGVja2VkU3BvcnQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBzdyA9IGFyZ3Mub2JqZWN0IGFzIFN3aXRjaDtcbiAgICAgICAgaWYgKHN3LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuU3BvcnQgPSBcIkRFUE9SVEVTXCI7XG4gICAgICAgICAgICB0aGlzLmFycmF5LnB1c2godGhpcy5TcG9ydCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ29CYWNrKCkge1xuICAgICAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2l0ZW1zXCJdLCB7XG4gICAgICAgIC8vICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgIC8vIH0pO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cbiAgICBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgLy8gY29uc3Qgc2VhcmNoQmFyID0gYXJncy5vYmplY3QgYXMgU2VhcmNoQmFyO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSW5wdXQgY2hhbmdlZCEgTmV3IHZhbHVlOiAke3NlYXJjaEJhci50ZXh0fWApO1xuICAgIH1cblxuICAgIG9uQ2xlYXIoYXJncykge1xuICAgICAgICAvLyBjb25zdCBzZWFyY2hCYXIgPSBhcmdzLm9iamVjdCBhcyBTZWFyY2hCYXI7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBDbGVhciBldmVudCByYWlzZWRgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7fSk7XG5jb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMic7XG5cbmV4cG9ydCBjb25zdCBnZXQgPSB1cmwgPT4ge1xuICByZXR1cm4gaW5zdGFuY2UuZ2V0KGAke2Jhc2VVcmx9JHt1cmx9YCk7XG59O1xuZXhwb3J0IGNvbnN0IHBvc3QgPSAodXJsLCBib2R5KSA9PiB7XG4gIHJldHVybiBpbnN0YW5jZS5wb3N0KGAke2Jhc2VVcmx9JHt1cmx9YCwgYm9keSk7XG59O1xuZXhwb3J0IGNvbnN0IF9kZWxldGUgPSB1cmwgPT4ge1xuICByZXR1cm4gaW5zdGFuY2UuZGVsZXRlKGAke2Jhc2VVcmx9JHt1cmx9YCk7XG59O1xuZXhwb3J0IGNvbnN0IHB1dCA9ICh1cmwsYm9keSkgPT4ge1xuICByZXR1cm4gaW5zdGFuY2UucHV0KGAke2Jhc2VVcmx9JHt1cmx9YCwgYm9keSk7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHB1dCxcbiAgX2RlbGV0ZSxcbn0iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC9hcHAubW9kdWxlXCI7XG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsXG4vLyBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOlxuLy8gbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsXG4vLyBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyxcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=