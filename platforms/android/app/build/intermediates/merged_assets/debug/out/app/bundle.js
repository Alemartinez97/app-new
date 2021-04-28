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

module.exports = "/* .card{\n    background-color: black;\n} */\n@import 'nativescript-theme-core/css/core.light.css';\n\n.fa {\n    font-family: \"FontAwesome\";\n}\n\n.action-bar {\n    background-color: White;\n}\n\n.action-bar-label {\n    font-family: 'Social Gothic';\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 20;\n    color: Black;\n}\n.news-title {\n    color: #333f4a;\n    font-family: 'Opinion Pro ExtraCondensed', 'Mint_Type_-_Opinion_Pro_ExtraCondensed_Light';\n    font-size: 24;\n}\n\n.news-source {\n    color: White;\n    font-family: 'Opinion Pro ExtraCondensed', 'Mint_Type_-_Opinion_Pro_ExtraCondensed_Light';\n    text-transform: uppercase;\n    font-size: 20;\n    padding: 8 0 3 10;\n}\n\n.search-bar {\n    background-color: #f0f0f0;\n    font-family: 'Opinion Pro ExtraCondensed', 'Mint_Type_-_Opinion_Pro_ExtraCondensed_Light';\n    font-size: 24;\n}\n.isandro {\n    padding-right: 15;\n\n}\n\n.menu-icon {\n    font-size: 26; \n    color: #a8a8a8;\n    vertical-align: center;\n} "

/***/ }),

/***/ "./app/item/items.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n  <Label text=\"Latest Stories\" class=\"action-bar-label\"></Label>\n  <ActionItem ios.position=\"right\" android.position=\"popup\">\n    <Label text=\"&#xf002;\"  [ngClass]=\"{isandro : actionAndroid}\"\n      (tap)=\"searching = !searching\"></Label>\n  </ActionItem>\n</ActionBar>\n<StackLayout class=\"page\">\n\n  <SearchBar *ngIf=\"searching\" hint=\"Filter News...\" (clear)=\"onClear($event)\" (submit)=\"onSubmit($event)\"\n    (textChange)=\"onTextChange($event)\" class=\"search-bar\"></SearchBar>\n\n  <RadListView id=\"list-view\" [items]=\"news\" marginRight=\"-2\" separatorColor=\"transparent\" height=\"100%\">\n    <ng-template tkListItemTemplate let-item=\"item\">\n      <StackLayout>\n        <GridLayout rows=\"*\" backgroundColor=\"White\">\n          <GridLayout rows=\"*\" columns=\"*\">\n            <Image src=\"{{ item.urlToImage }}\" stretch=\"aspectFill\" height=\"200\"></Image>\n            <GridLayout verticalAlignment=\"top\">\n              <StackLayout backgroundColor=\"#bc3b4e77\">\n                <Label text=\"{{ item.source.name }}\" class=\"news-source\"></Label>\n              </StackLayout>\n            </GridLayout>\n          </GridLayout>\n        </GridLayout>\n        <StackLayout paddingTop=\"15\" paddingBottom=\"20\" paddingLeft=\"15\" paddingRight=\"15\" backgroundColor=\"White\">\n          <Label text=\"{{ item.title }}\" class=\"news-title\" textWrap=\"true\"></Label>\n        </StackLayout>\n      </StackLayout>\n    </ng-template>\n  </RadListView>\n\n</StackLayout>"

/***/ }),

/***/ "./app/item/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__);
// import { Component, OnInit } from "@angular/core";
// import { ActivatedRoute } from "@angular/router";
// import { RouterExtensions, registerElement } from "@nativescript/angular";
// import { clear, getString } from "@nativescript/core/application-settings";
// // registerElement(
// //     "ImageZoom",
// //     () => require("@happones/nativescript-image-zoom").ImageZoom
// // );
// import { ItemService } from "./item.service";
// @Component({
//     selector: "ns-details",
//     templateUrl: "./items.component.html",
//     styleUrls: ["./items.component.css"],
// })
// export class ItemsComponent implements OnInit {
//     items: any = [];
//     constructor(
//         private itemsService: ItemService,
//         private route: ActivatedRoute,
//         private routerExtensions: RouterExtensions
//     ) {}
//     ngOnInit(): void {
//         this.items = this.itemsService.getItems().subscribe(
//             (response) => {
//                 this.items = response;
//             },
//             (error) => console.log(error)
//         );
//     }
//     onClick() {
//         alert("te gusta esta publicacion");
//     }
//     onLogout() {
//         clear();
//         this.routerExtensions.navigate(["/login"]);
//     }
//     goBanck() {
//         this.routerExtensions.back();
//     }
// }



var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        // TIP: change this array to hit the newsapi.org feed for live data!
        // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=<YOUR API KEY>
        this.allNews = [
            {
                source: { id: null, name: "Yahoo.com" },
                author: null,
                title: "The Latest: Russia says no evidence of gas attack in Douma",
                description: null,
                url: "https://www.yahoo.com/news/latest-turkey-urges-sides-avoid-more-syria-turmoil-113652213.html",
                urlToImage: null,
                publishedAt: "2018-04-13T19:44:00Z",
            },
            {
                source: { id: "the-washington-post", name: "The Washington Post" },
                author: "http://www.facebook.com/matt.zapotosky",
                title: "Trump issues pardon to 'Scooter' Libby, former chief of staff to Vice President Cheney",
                description: "The Bush administration aide was convicted of perjury before a grand jury, lying to FBI investigators and obstruction of justice.",
                url: "https://www.washingtonpost.com/politics/trump-issues-pardon-to-scooter-libby-former-chief-of-staff-to-vice-president-cheney/2018/04/13/dfa4039a-3f2d-11e8-8d53-eba0ed2371cc_story.html",
                urlToImage: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2018/04/13/National-Politics/Images/AFP_13Z4QQ.jpg?t=20170517",
                publishedAt: "2018-04-13T19:06:25Z",
            },
            {
                source: { id: "the-new-york-times", name: "The New York Times" },
                author: "",
                title: "Where's the Boom in Bank Lending?: DealBook Briefing",
                description: "Bank lending was expected to surge this year. But going by bank results so far, lending in the first quarter is set to disappoint.",
                url: "https://www.nytimes.com/2018/04/13/business/dealbook/trump-trans-pacific-partnership.html",
                urlToImage: "https://static01.nyt.com/images/2018/02/03/us/14db-newsletter-wells/14db-newsletter-wells-facebookJumbo-v2.jpg",
                publishedAt: "2018-04-13T18:56:00Z",
            },
            {
                source: { id: null, name: "Cbssports.com" },
                author: "",
                title: "Dallas Cowboys release Dez Bryant: A timeline of the wide receiver's career",
                description: "A look back at the journey that led to Bryant's unceremonious departure from Dallas",
                url: "https://www.cbssports.com/nfl/news/dallas-cowboys-release-dez-bryant-a-timeline-of-the-wide-receivers-career/",
                urlToImage: "https://sportshub.cbsistatic.com/i/r/2017/10/05/3534c48d-75c3-46c3-8109-1a40f4bb3ef4/thumbnail/770x433/43641559d7896478a232fe7e312e4aad/dez-bryant.png",
                publishedAt: "2018-04-13T18:42:00Z",
            },
            {
                source: { id: "the-new-york-times", name: "The New York Times" },
                author: "Adam Goldman and Nicholas Fandos",
                title: "Former FBI Deputy Director Is Faulted in Scathing Inspector General Report",
                description: "The report accused the former official, Andrew G. McCabe, of repeatedly misleading investigators. Mr. McCabe was fired in March hours before he was eligible for a full pension.",
                url: "https://www.nytimes.com/2018/04/13/us/politics/former-fbi-deputy-director-is-faulted-in-scathing-inspector-general-report.html",
                urlToImage: "https://static01.nyt.com/images/2018/04/14/us/politics/14dc-mccabe/14dc-mccabe-facebookJumbo.jpg",
                publishedAt: "2018-04-13T18:19:29Z",
            },
            {
                source: { id: "abc-news", name: "ABC News" },
                author: "ABC News",
                title: "What we know about trapped teen's mysterious death inside a van after his 2 calls to 911",
                description: "Cincinnati police and prosecutors have launched investigations after a teenager was mysteriously found dead in his van hours after calling 911 with pleas for help.",
                url: "http://abcnews.go.com/US/trapped-teens-mysterious-death-inside-van-calls-911/story?id=54441873",
                urlToImage: "https://s.abcnews.com/images/US/car-death-3-us-er-180412.jpg_hpMain_16x9_992.jpg",
                publishedAt: "2018-04-13T18:11:50Z",
            },
            {
                source: { id: "usa-today", name: "USA Today" },
                author: "Erin Jensen",
                title: "Reports: Will Ferrell involved in car accident",
                description: "The actor was a passenger in a car that was involved in a two-car collision, Thursday night, according to reports.",
                url: "https://www.usatoday.com/story/life/people/2018/04/13/ferrell-accident-car-crash/514611002/",
                urlToImage: "https://www.gannett-cdn.com/-mm-/378e813cc73a4d15c8bc7458f868ffbeb0a0dc47/c=0-239-2310-1544&r=x1683&c=3200x1680/local/-/media/2018/04/13/USATODAY/USATODAY/636592163419387820-875062214-95377695.JPG",
                publishedAt: "2018-04-13T18:01:11Z",
            },
            {
                source: { id: "the-washington-post", name: "The Washington Post" },
                author: "https://www.facebook.com/TomJackmanWP/",
                title: "Backpage CEO Carl Ferrer pleads guilty in three states, agrees to testify against other website officials",
                description: "Ferrer quietly entered a plea in Arizona last week, then went to courts in Texas and California this week to admit laundering money and facilitating prostitution on the website.",
                url: "https://www.washingtonpost.com/news/true-crime/wp/2018/04/13/backpage-ceo-carl-ferrer-pleads-guilty-in-three-states-agrees-to-testify-against-other-website-officials/",
                urlToImage: "https://www.washingtonpost.com/resizer/Ykenpm8M6SGvhFlTJb44edCy6Ec=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/36S53GFHOA74ZIS3MJYLFEQCVI.jpg",
                publishedAt: "2018-04-13T17:53:37Z",
            },
            {
                source: { id: "the-hill", name: "The Hill" },
                author: "Scott Wong",
                title: "Republicans express doubts that Ryan can stay on as Speaker",
                description: "Speculation is growing on Capitol Hill that Paul Ryan may need to relinquish his Speaker’s gavel soon, though few Republicans are publicly calling on him to resign.",
                url: "http://thehill.com/homenews/house/383051-republicans-express-doubts-that-ryan-can-stay-on-as-speaker",
                urlToImage: "http://thehill.com/sites/default/files/ryanpaul_041218gn10_lead.jpg",
                publishedAt: "2018-04-13T17:51:00Z",
            },
            {
                source: { id: null, name: "Espn.com" },
                author: null,
                title: "Larry Nassar victim accuses MSU interim president of offering secret payoff",
                description: "A sexual assault victim of Larry Nassar says Michigan State interim president John Engler offered her a secret payoff to settle a lawsuit.",
                url: "http://www.espn.com/college-sports/story/_/id/23154441/victim-larry-nassar-accuses-michigan-state-interim-president-john-engler-offering-payoff",
                urlToImage: "http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0130%2Fr321301_1296x729_16%2D9.jpg",
                publishedAt: "2018-04-13T17:38:24Z",
            },
            {
                source: {
                    id: "the-wall-street-journal",
                    name: "The Wall Street Journal",
                },
                author: null,
                title: "Trump Lawyer Michael Cohen Negotiated $1.6 Million Settlement for Top Republican Fundraiser",
                description: null,
                url: "https://www.wsj.com/articles/trump-lawyer-michael-cohen-negotiated-1-6-million-settlement-for-top-republican-fundraiser-1523638726",
                urlToImage: null,
                publishedAt: "2018-04-13T17:33:50Z",
            },
            {
                source: { id: "the-washington-post", name: "The Washington Post" },
                author: null,
                title: "Trump, Gardner strike deal on legalized marijuana, ending standoff over Justice nominees",
                description: "Colorado Sen. Cory Gardner previously said he would block all DOJ nominations because of a potential federal crackdown on states that have legalized marijuana.",
                url: "https://www.washingtonpost.com/politics/trump-gardner-strike-deal-on-legalized-marijuana-ending-standoff-over-justice-nominees/2018/04/13/2ac3b35a-3f3a-11e8-912d-16c9e9b37800_story.html",
                urlToImage: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2018/01/05/National-Politics/Images/Botsford171205Trump22675.JPG?t=20170517",
                publishedAt: "2018-04-13T17:19:50Z",
            },
            {
                source: { id: null, name: "Nydailynews.com" },
                author: "David Boroff",
                title: "Black teen gets shot at after missing bus and asking for directions: 'I turned back and saw him aiming at me'",
                description: "A black teen in Michigan stopped to ask for directions after missing his school bus — and a local resident responded by shooting at him.",
                url: "http://www.nydailynews.com/news/crime/black-teen-shot-stopping-directions-article-1.3932077",
                urlToImage: "http://assets.nydailynews.com/polopoly_fs/1.3932076.1523633380!/img/httpImage/image.jpg_gen/derivatives/landscape_1200/brennan14n-1-web.jpg",
                publishedAt: "2018-04-13T16:36:38Z",
            },
            {
                source: { id: "the-new-york-times", name: "The New York Times" },
                author: "Christine Hauser",
                title: "California Rescuers Find Items Belonging to Missing Family",
                description: "Four family members were reported missing during a road trip, after a car was seen going into a swollen river. Relatives in India pleaded for help.",
                url: "https://www.nytimes.com/2018/04/13/us/california-missing-family-india.html",
                urlToImage: "https://static01.nyt.com/images/2018/04/13/us/13xp-crash-sub/13xp-crash-sub-facebookJumbo.jpg",
                publishedAt: "2018-04-13T16:24:33Z",
            },
            {
                source: { id: null, name: "Nola.com" },
                author: "Jennifer Larino",
                title: "Here's when severe storms, rain are expected to hit New Orleans",
                description: "The National Weather Service has issued a flash flood watch for the New Orleans area starting late Friday (April 13).",
                url: "http://www.nola.com/weather/index.ssf/2018/04/rain_new_orleans_french_quarte.html",
                urlToImage: "http://image.nola.com/home/nola-media/width620/img/weather_impact/photo/24364951-standard.jpg",
                publishedAt: "2018-04-13T16:02:46Z",
            },
            {
                source: { id: "fox-news", name: "Fox News" },
                author: "Greg Norman",
                title: "North Carolina incest father told mother he killed daughter-wife and their child in shocking 911 call",
                description: "The North Carolina incest dad, whose Thursday murder spree took the lives of the biological daughter he married and the infant child he fathered with the girl, reportedly explained his possible motive to his own mother in a stunning phone call moments before …",
                url: "http://www.foxnews.com/us/2018/04/13/north-carolina-incest-father-told-mother-killed-daughter-wife-and-their-child-in-shocking-911-call.html",
                urlToImage: "http://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2018/04/13/0/0/694940094001_5769790038001_5769786320001-vs.jpg?ve=1",
                publishedAt: "2018-04-13T15:11:15Z",
            },
            {
                source: { id: "cnn", name: "CNN" },
                author: "Chris Cillizza, CNN Editor-at-large",
                title: "The 11 most eye-opening lines in James Comey's 'A Higher Loyalty,' ranked",
                description: "Days before its official release, excerpts of James Comey's memoir about his time as FBI Director under President Donald Trump have leaked. Actually, flooded.",
                url: "https://www.cnn.com/2018/04/13/politics/comey-book-trump/index.html",
                urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/180413091217-01-trump-comey-handshake-file-super-tease.jpg",
                publishedAt: "2018-04-13T15:03:09Z",
            },
            {
                source: { id: null, name: "Nbcsports.com" },
                author: "Michael David Smith",
                title: "Seahawks sign Stephen Morris",
                description: "The Seahawks are signing a backup quarterback, one who has presumably agreed to stand for the national anthem. Seattle has signed quarterback Stephen Morris, Adam Schefter of ESPN reports. That news will stoke the controversy regarding the Seahawks’ dealings …",
                url: "http://profootballtalk.nbcsports.com/2018/04/13/seahawks-sign-stephen-morris/",
                urlToImage: "https://nbcprofootballtalk.files.wordpress.com/2018/04/gettyimages-8396753241-e1523616089736.jpg",
                publishedAt: "2018-04-13T10:42:30Z",
            },
            {
                source: { id: "politico", name: "Politico" },
                author: "NATASHA KORECKI",
                title: "Illinois GOP governor calls for Missouri GOP governor to resign",
                description: "Illinois Gov. Bruce Rauner’s resignation call is particularly stinging considering that Missouri Gov. Eric Greitens appeared in an ad for Rauner's reelection campaign.",
                url: "https://www.politico.com/story/2018/04/12/rauner-greitens-resignation-call-520858",
                urlToImage: "https://static.politico.com/95/bc/e7bc685a4b8d8c48feceb0dfc505/gov-bruce-rauner.%20Bruce%20Rauner.png",
                publishedAt: "2018-04-13T00:12:03Z",
            },
        ];
        this.searching = false;
        this.actionAndroid = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["isAndroid"];
        this.news = this.allNews.filter(function (e) {
            return e.urlToImage && e.title && e.description && e.source.name;
        });
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["isIOS"]) {
            var keyboard = IQKeyboardManager.sharedManager();
            keyboard.shouldResignOnTouchOutside = true;
        }
    }
    ItemsComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
        searchBar.dismissSoftInput();
    };
    ItemsComponent.prototype.onSearch = function (searchValue) {
        if (searchValue !== "") {
            this.news = this.allNews.filter(function (e) {
                return (e.urlToImage &&
                    e.title &&
                    e.description &&
                    e.source.name &&
                    (e.description.toLowerCase().includes(searchValue) ||
                        e.title.toLowerCase().includes(searchValue)));
            });
        }
    };
    ItemsComponent.prototype.onClear = function (args) {
        var _this = this;
        var searchBar = args.object;
        searchBar.text = "";
        searchBar.hint = "Search for a news and press enter";
        this.allNews.forEach(function (item) {
            _this.news.push(item);
        });
        searchBar.dismissSoftInput();
        this.searching = false;
    };
    ItemsComponent.prototype.onTextChange = function (args) {
        var searchBar = args.object;
        this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
    };
    ItemsComponent.prototype.ngOnInit = function () { };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./app/item/items.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/item/items.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<ActionBar title=\"Crear Usuario\"> </ActionBar>\n<FlexboxLayout class=\"flexboxLayout\">\n  <StackLayout class=\"stackLayout\">\n    <TextField\n      hint=\"Nombre completo\"\n      [(ngModel)]=\"user.fullname\"\n      class=\"input input-border\"\n    ></TextField>\n    <TextField\n      hint=\"Correo\"\n      keyboardType=\"email\"\n      autocorrect=\"false\"\n      autocapitalizationType=\"none\"\n      [(ngModel)]=\"user.email\"\n      class=\"input input-border\"\n    ></TextField>\n    <Label\n      class=\"validation\"\n      [visibility]=\"correctEmail ? 'visible' : 'collapse'\"\n      text=\"El correo esta mal escrito\"\n    ></Label>\n    <!-- <Label *ngIf=\"hasEmailErrors()\" class=\"eloha-font-semibold m-t-2 login-field-label color-danger font-size-md\" row=\"2\" [text]=\"getEmailError()\"></Label> -->\n    <TextField\n      hint=\"Contraseña\"\n      secure=\"true\"\n      [(ngModel)]=\"user.password\"\n      class=\"input input-border\"\n    ></TextField>\n    <TextField\n      hint=\"Conformar Contraseña\"\n      secure=\"true\"\n      [(ngModel)]=\"user.password2\"\n      class=\"input input-border\"\n    ></TextField>\n    <Label\n      class=\"validation\"\n      [visibility]=\"elementModel ? 'visible' : 'collapse'\"\n      text=\"Las contraseñas no coinciden\"\n    ></Label>\n    <Button\n      text=\"Crear Cuenta\"\n      class=\"btn btn-primary\"\n      (tap)=\"submit()\"\n    ></Button>\n    <Button [nsRouterLink]=\"['/login']\" text=\"E iniciar sesión\"></Button>\n  </StackLayout>\n</FlexboxLayout>\n"

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

module.exports = "<ActionBar title=\"Detalle\">\n  <NavigationButton\n    android.systemIcon=\"ic_menu_back\"\n    (tap)=\"goBack()\"\n  ></NavigationButton>\n</ActionBar>\n<GridLayout>\n  <ScrollView class=\"page\">\n    <StackLayout>\n      <!-- On Android the card view plugin requires adding an external library\n                  therefore it can't be demoed on Playground. You will have to download this project\n                  and build it locally to try it on Android -->\n      <CardView class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\">\n        <StackLayout class=\"card-layout\">\n          <Label class=\"h2\" [text]=\"item.title\" textWrap=\"true\"></Label>\n          <!-- <ImageZoom [src]=\"item.imageUrl\" maxZoom=\"5\" minZoom=\"2\"></ImageZoom> -->\n          <Image\n            class=\"logo\"\n            [src]=\"item.imageUrl\"\n            stretch=\"aspectFill\"\n            pinchToZoom\n            backgroundColor=\"#ddd\"\n            width=\"100%\"\n            height=\"500\"\n          ></Image>\n          <Label class=\"body\" textWrap=\"true\" [text]=\"item.description\">\n          </Label>\n          <!-- <VideoPlayer\n            src=\"https://itsontheway.s3.amazonaws.com/Subscribe+te+y+ayudanos+a+mejor+el+canal.mp4\"\n            autoplay=\"true\"\n            height=\"300\"\n          ></VideoPlayer> -->\n          <Label\n            class=\"body\"\n            textWrap=\"true\"\n            [text]=\"item.publishedAt | date: 'yyyy/MM/dd'\"\n          ></Label>\n          <Button\n            class=\"body\"\n            textWrap=\"true\"\n            (tap)=\"onClick()\"\n            text=\"Fuente\"\n            class=\"my-button\"\n          ></Button>\n        </StackLayout>\n      </CardView>\n    </StackLayout>\n  </ScrollView>\n</GridLayout>\n"

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

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"},"dependencies":{"@happones/nativescript-image-zoom":"^4.0.2"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW0uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtcy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4ubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9yZXN1bHQvcmVzdWx0LWRldGFpbC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9yZXN1bHQvcmVzdWx0LWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcmVzdWx0L3Jlc3VsdC1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9yZXN1bHQvcmVzdWx0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEsK0dB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QUNuQkEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsY0FBZ0Y7QUFDTjtBQUMxRSwrREFBc0U7QUFDdEUseURBQXlEO0FBQ3pELGtDQUF5RTtBQUN6RSxpRUFBd0U7QUFDeEUsbUJBQW1GO0FBQ25GLGNBQXlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSBcXG5OYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbmF0aXZlc2NyaXB0L3RoZW1lXFxuVGhlIGltcG9ydGVkIENTUyBydWxlcyBtdXN0IHByZWNlZGUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzLlxcblwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5UaGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgQnV0dG9ucyB0aGF0IGhhdmUgdGhlXFxuXFxcIi1wcmltYXJ5XFxcIiBjbGFzcyBtb2RpZmllci5cXG5cIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3VsdENvbXBvbmVudCB9IGZyb20gXCIuL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXN1bHREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9yZXN1bHQvcmVzdWx0LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50J1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2l0ZW1zXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInJlc3VsdC86c2VhcmNoXCIsIGNvbXBvbmVudDogUmVzdWx0Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInJlc3VsdFwiLCBjb21wb25lbnQ6IFJlc3VsdERldGFpbENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJzZWFyY2hcIiwgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJpdGVtLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvY29yZS1jb25jZXB0cy9hbmd1bGFyLW5hdmlnYXRpb24uaHRtbCNwYWdlLXJvdXRlci1vdXRsZXQgLS0+XFxuPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG59IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbi8vaW1wb3J0IHsgWW91dHViZVBsYXllck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQteW91dHViZXBsYXllci1pbmxpbmUvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3VsdENvbXBvbmVudCB9IGZyb20gXCIuL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXN1bHREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9yZXN1bHQvcmVzdWx0LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG4vL2ltcG9ydCAgIHsgIFBpbmNoVG9ab29tRGlyZWN0aXZlICB9ICBmcm9tICBcIi4vcGluY2gtdG8tem9vbS5kaXJlY3RpdmVcIiA7XG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgLy8gIFlvdXR1YmVQbGF5ZXJNb2R1bGUsXG4gICAgICAgIC8vIHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IFVTRV9TVE9SRSwgdXNlVmFsdWU6IHsgZmE6IHJlcXVpcmUoJy4uLy4uL2ZvbnRhd2Vzb21lLmNzcycpLmRlZmF1bHQgfSwgVE5TRm9udEljb25TZXJ2aWNlIH1dLFxuICAgICAgICAvLyBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgLy8gJ2ZhJzogcmVxdWlyZSgnLi9mb250cy9mb250LWF3ZXNvbWUubWluLmNzcycpXG4gICAgICAgIC8vIH0pLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgU2VhcmNoQ29tcG9uZW50LFxuICAgICAgICBSZXN1bHRDb21wb25lbnQsXG4gICAgICAgIFJlc3VsdERldGFpbENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgIC8vICAgICBQaW5jaFRvWm9vbURpcmVjdGl2ZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIk1lbnVcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gICAgPEFjdGlvbkl0ZW1cXG4gICAgW25zUm91dGVyTGlua109XFxcIlsnL2l0ZW1zJ11cXFwiXFxuICAgIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwibWVudWl0ZW1fYmFja2dyb3VuZFxcXCJcXG4gICAgYW5kcm9pZC5wb3NpdGlvbj1cXFwiYWN0aW9uQmFyXFxcIlxcbiAgICA+PC9BY3Rpb25JdGVtPlxcbiAgICA8QWN0aW9uSXRlbVxcbiAgICBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvc2VhcmNoJ11cXFwiXFxuICAgIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9zZWFyY2hcXFwiXFxuICAgID48L0FjdGlvbkl0ZW0+XFxuICA8QWN0aW9uSXRlbSBcXG4gIFtuc1JvdXRlckxpbmtdPVxcXCJbJy9pdGVtcyddXFxcIlxcbiAgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X3RvZGF5XFxcIj5cXG4gIDwvQWN0aW9uSXRlbT5cXG48L0FjdGlvbkJhcj5cXG48Qm90dG9tTmF2aWdhdGlvbj5cXG4gIDxUYWJTdHJpcD5cXG4gICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cXFwibmF2aWdhdGlvbl9faXRlbVxcXCI+XFxuICAgICAgPExhYmVsICB0ZXh0PVxcXCJIb21lXFxcIiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvaXRlbXMnXVxcXCI+PC9MYWJlbD5cXG4gICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XFxcIm5hdmlnYXRpb25fX2l0ZW1cXFwiPlxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJCcm93c2VcXFwiPjwvTGFiZWw+XFxuICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19pdGVtXFxcIj5cXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiU2VhcmNoXFxcIj48L0xhYmVsPlxcbiAgICA8L1RhYlN0cmlwSXRlbT5cXG4gIDwvVGFiU3RyaXA+XFxuXFxuICA8VGFiQ29udGVudEl0ZW0+XFxuICAgIDxwYWdlLXJvdXRlci1vdXRsZXQgbmFtZT1cXFwiaG9tZVRhYlxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcImJyb3dzZVRhYlxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcInNlYXJjaFRhYlxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICA8L1RhYkNvbnRlbnRJdGVtPlxcbjwvQm90dG9tTmF2aWdhdGlvbj5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge31cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge31cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG4uY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGNvbG9yOiAjMjUyNTI1O1xcbiAgICBtYXJnaW46IDE1IDE1IDA7XFxufVxcbi5jYXJkLWxheW91dCB7XFxuICAgIHBhZGRpbmc6IDIwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxM2VtLzNlbTtcXG59XFxuLmNhcmQtbGF5b3V0IC5oMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG4ubXktYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjA7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiRGV0YWxsZVxcXCI+XFxuICA8TmF2aWdhdGlvbkJ1dHRvblxcbiAgICBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCJcXG4gICAgKHRhcCk9XFxcImdvQmFjaygpXFxcIlxcbiAgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dD5cXG4gIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgIDwhLS0gT24gQW5kcm9pZCB0aGUgY2FyZCB2aWV3IHBsdWdpbiByZXF1aXJlcyBhZGRpbmcgYW4gZXh0ZXJuYWwgbGlicmFyeVxcblxcdFxcdFxcdFxcdHRoZXJlZm9yZSBpdCBjYW4ndCBiZSBkZW1vZWQgb24gUGxheWdyb3VuZC4gWW91IHdpbGwgaGF2ZSB0byBkb3dubG9hZCB0aGlzIHByb2plY3RcXG5cXHRcXHRcXHRcXHRhbmQgYnVpbGQgaXQgbG9jYWxseSB0byB0cnkgaXQgb24gQW5kcm9pZCAtLT5cXG4gICAgICA8Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRcXFwiIGVsZXZhdGlvbj1cXFwiNDBcXFwiIHJhZGl1cz1cXFwiMTBcXFwiIGlvczpzaGFkb3dSYWRpdXM9XFxcIjNcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkLWxheW91dFxcXCI+XFxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDJcXFwiIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwhLS0gPEFic29sdXRlTGF5b3V0IGNsYXNzPVxcXCJ6b29tXFxcIiBbdmlzaWJpbGl0eV09XFxcImlzSXRlbVZpc2libGUgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJ1xcXCI+PEltYWdlWm9vbSBbc3JjXT1cXFwiaXRlbS5pbWFnZVVybFxcXCIgIFt2aXNpYmlsaXR5XT1cXFwiaXNJdGVtVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnXFxcIiBtYXhab29tPVxcXCI1XFxcIiBtaW5ab29tPVxcXCIyXFxcIiB6b29tU2NhbGU9XFxcIjNcXFwiPjwvSW1hZ2Vab29tPjwvQWJzb2x1dGVMYXlvdXQ+IC0tPlxcbiAgICAgICAgICA8IS0tIDxJbWFnZVpvb20gW3NyY109XFxcIml0ZW0uaW1hZ2VVcmxcXFwiICBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIlxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNkZGRcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjUwMFxcXCIgIG1heFpvb209XFxcIjVcXFwiIG1pblpvb209XFxcIjJcXFwiIHpvb21TY2FsZT1cXFwiM1xcXCI+PC9JbWFnZVpvb20+IC0tPlxcbiAgICAgICAgICA8SW1hZ2VcXG4gICAgICAgICAgICBjbGFzcz1cXFwibG9nb1xcXCJcXG4gICAgICAgICAgICBbc3JjXT1cXFwiaXRlbS5pbWFnZVVybFxcXCJcXG4gICAgICAgICAgICBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIlxcbiAgICAgICAgICAgIHBpbmNoVG9ab29tXFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCIjZGRkXFxcIlxcbiAgICAgICAgICAgIHdpZHRoPVxcXCIxMDAlXFxcIlxcbiAgICAgICAgICAgIGhlaWdodD1cXFwiNTAwXFxcIlxcbiAgICAgICAgICA+PC9JbWFnZT5cXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJib2R5XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgPFZpZGVvUGxheWVyXFxuICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL2l0c29udGhld2F5LnMzLmFtYXpvbmF3cy5jb20vU3Vic2NyaWJlK3RlK3krYXl1ZGFub3MrYSttZWpvcitlbCtjYW5hbC5tcDRcXFwiXFxuICAgICAgICAgICAgYXV0b3BsYXk9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgIGNvbnRyb2xzPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgIGhlaWdodD1cXFwiMzAwMFxcXCJcXG4gICAgICAgICAgICBmaWxsPVxcXCJhc3BlY3RGaWxsXFxcIlxcbiAgICAgICAgICAgIHNjYWxlWT1cXFwiMS4yXFxcIlxcbiAgICAgICAgICAgIHNjYWxlWD1cXFwiMS4yXFxcIlxcbiAgICAgICAgICA+PC9WaWRlb1BsYXllcj5cXG4gICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJvZHlcXFwiXFxuICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgW3RleHRdPVxcXCJpdGVtLnB1Ymxpc2hlZEF0IHwgZGF0ZTogJ3l5eXkvTU0vZGQnXFxcIlxcbiAgICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgICAgPEJ1dHRvblxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJib2R5XFxcIlxcbiAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICh0YXApPVxcXCJvbkNsaWNrKClcXFwiXFxuICAgICAgICAgICAgdGV4dD1cXFwiRnVlbnRlXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJteS1idXR0b25cXFwiXFxuICAgICAgICAgID48L0J1dHRvbj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPC9DYXJkVmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvU2Nyb2xsVmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5cbnJlZ2lzdGVyRWxlbWVudChcbiAgICBcIkltYWdlWm9vbVwiLFxuICAgICgpID0+IHJlcXVpcmUoXCJAaGFwcG9uZXMvbmF0aXZlc2NyaXB0LWltYWdlLXpvb21cIikuSW1hZ2Vab29tXG4pO1xuXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogYW55ID0gW107XG4gICAgaXRlbTogYW55ID0gW107XG4gICAgaXNJdGVtVmlzaWJsZTogYm9vbGVhbjtcbiAgICBpc0l0ZW1WaXNpYmxlMjogYm9vbGVhbjtcbiAgICBzcmM6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuICAgICAgICB0aGlzLmlzSXRlbVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0l0ZW1WaXNpYmxlMiA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQ7XG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5pdGVtcy5hcnRpY2xlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gaWRcbiAgICAgICAgICAgICAgICApWzBdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgKTtcbiAgICB9XG4gICAgb25TaG93SW1hZ2UoYXJnczogYW55LCBpbWFnZTogYW55KSB7XG4gICAgICAgIHRoaXMuaXNJdGVtVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNJdGVtVmlzaWJsZTIgPSBmYWxzZTtcbiAgICB9XG4gICAgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICBVdGlscy5vcGVuVXJsKHRoaXMuaXRlbS5zb3VyY2VVcmwpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtcbiAgICBBY3Rpdml0eUluZGljYXRvcixcbiAgICBpc0lPUyxcbiAgICBDb2xvcixcbiAgICBFdmVudERhdGEsXG4gICAgUGFnZSxcbiAgICBJbWFnZVNvdXJjZSxcbn0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX3BhZ2U6IFBhZ2UpIHtcbiAgICB9XG4gICAgXG4gICAgZ2V0SXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgXCJodHRwczovL2FwaS5qb3JuYWxpYS5uZXQvYXBpL3YxL2FydGljbGVzP2FwaUtleT1mMzZmMGRjMmYzMjA0YTNjODIxMTMwMzg0ZTIwODYwNFwiXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIC5jYXJke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59ICovXFxuQGltcG9ydCAnbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzJztcXG5cXG4uZmEge1xcbiAgICBmb250LWZhbWlseTogXFxcIkZvbnRBd2Vzb21lXFxcIjtcXG59XFxuXFxuLmFjdGlvbi1iYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZTtcXG59XFxuXFxuLmFjdGlvbi1iYXItbGFiZWwge1xcbiAgICBmb250LWZhbWlseTogJ1NvY2lhbCBHb3RoaWMnO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgY29sb3I6IEJsYWNrO1xcbn1cXG4ubmV3cy10aXRsZSB7XFxuICAgIGNvbG9yOiAjMzMzZjRhO1xcbiAgICBmb250LWZhbWlseTogJ09waW5pb24gUHJvIEV4dHJhQ29uZGVuc2VkJywgJ01pbnRfVHlwZV8tX09waW5pb25fUHJvX0V4dHJhQ29uZGVuc2VkX0xpZ2h0JztcXG4gICAgZm9udC1zaXplOiAyNDtcXG59XFxuXFxuLm5ld3Mtc291cmNlIHtcXG4gICAgY29sb3I6IFdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ09waW5pb24gUHJvIEV4dHJhQ29uZGVuc2VkJywgJ01pbnRfVHlwZV8tX09waW5pb25fUHJvX0V4dHJhQ29uZGVuc2VkX0xpZ2h0JztcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgcGFkZGluZzogOCAwIDMgMTA7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGluaW9uIFBybyBFeHRyYUNvbmRlbnNlZCcsICdNaW50X1R5cGVfLV9PcGluaW9uX1Byb19FeHRyYUNvbmRlbnNlZF9MaWdodCc7XFxuICAgIGZvbnQtc2l6ZTogMjQ7XFxufVxcbi5pc2FuZHJvIHtcXG4gICAgcGFkZGluZy1yaWdodDogMTU7XFxuXFxufVxcblxcbi5tZW51LWljb24ge1xcbiAgICBmb250LXNpemU6IDI2OyBcXG4gICAgY29sb3I6ICNhOGE4YTg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufSBcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJMYXRlc3QgU3Rvcmllc1xcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXItbGFiZWxcXFwiPjwvTGFiZWw+XFxuICA8QWN0aW9uSXRlbSBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCI+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDAyO1xcXCIgIFtuZ0NsYXNzXT1cXFwie2lzYW5kcm8gOiBhY3Rpb25BbmRyb2lkfVxcXCJcXG4gICAgICAodGFwKT1cXFwic2VhcmNoaW5nID0gIXNlYXJjaGluZ1xcXCI+PC9MYWJlbD5cXG4gIDwvQWN0aW9uSXRlbT5cXG48L0FjdGlvbkJhcj5cXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcblxcbiAgPFNlYXJjaEJhciAqbmdJZj1cXFwic2VhcmNoaW5nXFxcIiBoaW50PVxcXCJGaWx0ZXIgTmV3cy4uLlxcXCIgKGNsZWFyKT1cXFwib25DbGVhcigkZXZlbnQpXFxcIiAoc3VibWl0KT1cXFwib25TdWJtaXQoJGV2ZW50KVxcXCJcXG4gICAgKHRleHRDaGFuZ2UpPVxcXCJvblRleHRDaGFuZ2UoJGV2ZW50KVxcXCIgY2xhc3M9XFxcInNlYXJjaC1iYXJcXFwiPjwvU2VhcmNoQmFyPlxcblxcbiAgPFJhZExpc3RWaWV3IGlkPVxcXCJsaXN0LXZpZXdcXFwiIFtpdGVtc109XFxcIm5ld3NcXFwiIG1hcmdpblJpZ2h0PVxcXCItMlxcXCIgc2VwYXJhdG9yQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcbiAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIldoaXRlXFxcIj5cXG4gICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwie3sgaXRlbS51cmxUb0ltYWdlIH19XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIiBoZWlnaHQ9XFxcIjIwMFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICA8R3JpZExheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNiYzNiNGU3N1xcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLnNvdXJjZS5uYW1lIH19XFxcIiBjbGFzcz1cXFwibmV3cy1zb3VyY2VcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHBhZGRpbmdUb3A9XFxcIjE1XFxcIiBwYWRkaW5nQm90dG9tPVxcXCIyMFxcXCIgcGFkZGluZ0xlZnQ9XFxcIjE1XFxcIiBwYWRkaW5nUmlnaHQ9XFxcIjE1XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIldoaXRlXFxcIj5cXG4gICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGl0ZW0udGl0bGUgfX1cXFwiIGNsYXNzPVxcXCJuZXdzLXRpdGxlXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9uZy10ZW1wbGF0ZT5cXG4gIDwvUmFkTGlzdFZpZXc+XFxuXFxuPC9TdGFja0xheW91dD5cIiIsIi8vIGltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vIGltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuLy8gaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuLy8gaW1wb3J0IHsgY2xlYXIsIGdldFN0cmluZyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuLy8gLy8gcmVnaXN0ZXJFbGVtZW50KFxuLy8gLy8gICAgIFwiSW1hZ2Vab29tXCIsXG4vLyAvLyAgICAgKCkgPT4gcmVxdWlyZShcIkBoYXBwb25lcy9uYXRpdmVzY3JpcHQtaW1hZ2Utem9vbVwiKS5JbWFnZVpvb21cbi8vIC8vICk7XG5cbi8vIGltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbi8vIEBDb21wb25lbnQoe1xuLy8gICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbi8vICAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4vLyAgICAgc3R5bGVVcmxzOiBbXCIuL2l0ZW1zLmNvbXBvbmVudC5jc3NcIl0sXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbi8vICAgICBpdGVtczogYW55ID0gW107XG4vLyAgICAgY29uc3RydWN0b3IoXG4vLyAgICAgICAgIHByaXZhdGUgaXRlbXNTZXJ2aWNlOiBJdGVtU2VydmljZSxcbi8vICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4vLyAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuLy8gICAgICkge31cblxuLy8gICAgIG5nT25Jbml0KCk6IHZvaWQge1xuLy8gICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtc1NlcnZpY2UuZ2V0SXRlbXMoKS5zdWJzY3JpYmUoXG4vLyAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcmVzcG9uc2U7XG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbi8vICAgICAgICAgKTtcbi8vICAgICB9XG4vLyAgICAgb25DbGljaygpIHtcbi8vICAgICAgICAgYWxlcnQoXCJ0ZSBndXN0YSBlc3RhIHB1YmxpY2FjaW9uXCIpO1xuLy8gICAgIH1cbi8vICAgICBvbkxvZ291dCgpIHtcbi8vICAgICAgICAgY2xlYXIoKTtcbi8vICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4vLyAgICAgfVxuLy8gICAgIGdvQmFuY2soKSB7XG4vLyAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4vLyAgICAgfVxuLy8gfVxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuZGVjbGFyZSBjb25zdCBJUUtleWJvYXJkTWFuYWdlcjogYW55O1xuXG5pbnRlcmZhY2UgRGF0YUl0ZW0ge1xuICAgIHNvdXJjZTogU291cmNlO1xuICAgIGF1dGhvcjogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICB1cmxUb0ltYWdlOiBzdHJpbmc7XG4gICAgcHVibGlzaGVkQXQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNvdXJjZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaXRlbXMuY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vIFRJUDogY2hhbmdlIHRoaXMgYXJyYXkgdG8gaGl0IHRoZSBuZXdzYXBpLm9yZyBmZWVkIGZvciBsaXZlIGRhdGEhXG4gICAgLy8gaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9dXMmY2F0ZWdvcnk9YnVzaW5lc3MmYXBpS2V5PTxZT1VSIEFQSSBLRVk+XG5cbiAgICBhbGxOZXdzOiBEYXRhSXRlbVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2U6IHsgaWQ6IG51bGwsIG5hbWU6IFwiWWFob28uY29tXCIgfSxcbiAgICAgICAgICAgIGF1dGhvcjogbnVsbCxcbiAgICAgICAgICAgIHRpdGxlOiBcIlRoZSBMYXRlc3Q6IFJ1c3NpYSBzYXlzIG5vIGV2aWRlbmNlIG9mIGdhcyBhdHRhY2sgaW4gRG91bWFcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cueWFob28uY29tL25ld3MvbGF0ZXN0LXR1cmtleS11cmdlcy1zaWRlcy1hdm9pZC1tb3JlLXN5cmlhLXR1cm1vaWwtMTEzNjUyMjEzLmh0bWxcIixcbiAgICAgICAgICAgIHVybFRvSW1hZ2U6IG51bGwsXG4gICAgICAgICAgICBwdWJsaXNoZWRBdDogXCIyMDE4LTA0LTEzVDE5OjQ0OjAwWlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2U6IHsgaWQ6IFwidGhlLXdhc2hpbmd0b24tcG9zdFwiLCBuYW1lOiBcIlRoZSBXYXNoaW5ndG9uIFBvc3RcIiB9LFxuICAgICAgICAgICAgYXV0aG9yOiBcImh0dHA6Ly93d3cuZmFjZWJvb2suY29tL21hdHQuemFwb3Rvc2t5XCIsXG4gICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgICBcIlRydW1wIGlzc3VlcyBwYXJkb24gdG8gJ1Njb290ZXInIExpYmJ5LCBmb3JtZXIgY2hpZWYgb2Ygc3RhZmYgdG8gVmljZSBQcmVzaWRlbnQgQ2hlbmV5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcIlRoZSBCdXNoIGFkbWluaXN0cmF0aW9uIGFpZGUgd2FzIGNvbnZpY3RlZCBvZiBwZXJqdXJ5IGJlZm9yZSBhIGdyYW5kIGp1cnksIGx5aW5nIHRvIEZCSSBpbnZlc3RpZ2F0b3JzIGFuZCBvYnN0cnVjdGlvbiBvZiBqdXN0aWNlLlwiLFxuICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cud2FzaGluZ3RvbnBvc3QuY29tL3BvbGl0aWNzL3RydW1wLWlzc3Vlcy1wYXJkb24tdG8tc2Nvb3Rlci1saWJieS1mb3JtZXItY2hpZWYtb2Ytc3RhZmYtdG8tdmljZS1wcmVzaWRlbnQtY2hlbmV5LzIwMTgvMDQvMTMvZGZhNDAzOWEtM2YyZC0xMWU4LThkNTMtZWJhMGVkMjM3MWNjX3N0b3J5Lmh0bWxcIixcbiAgICAgICAgICAgIHVybFRvSW1hZ2U6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy53YXNoaW5ndG9ucG9zdC5jb20vcmYvaW1hZ2VfMTQ4NHcvMjAxMC0yMDE5L1dhc2hpbmd0b25Qb3N0LzIwMTgvMDQvMTMvTmF0aW9uYWwtUG9saXRpY3MvSW1hZ2VzL0FGUF8xM1o0UVEuanBnP3Q9MjAxNzA1MTdcIixcbiAgICAgICAgICAgIHB1Ymxpc2hlZEF0OiBcIjIwMTgtMDQtMTNUMTk6MDY6MjVaXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNvdXJjZTogeyBpZDogXCJ0aGUtbmV3LXlvcmstdGltZXNcIiwgbmFtZTogXCJUaGUgTmV3IFlvcmsgVGltZXNcIiB9LFxuICAgICAgICAgICAgYXV0aG9yOiBcIlwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiV2hlcmUncyB0aGUgQm9vbSBpbiBCYW5rIExlbmRpbmc/OiBEZWFsQm9vayBCcmllZmluZ1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCJCYW5rIGxlbmRpbmcgd2FzIGV4cGVjdGVkIHRvIHN1cmdlIHRoaXMgeWVhci4gQnV0IGdvaW5nIGJ5IGJhbmsgcmVzdWx0cyBzbyBmYXIsIGxlbmRpbmcgaW4gdGhlIGZpcnN0IHF1YXJ0ZXIgaXMgc2V0IHRvIGRpc2FwcG9pbnQuXCIsXG4gICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5ueXRpbWVzLmNvbS8yMDE4LzA0LzEzL2J1c2luZXNzL2RlYWxib29rL3RydW1wLXRyYW5zLXBhY2lmaWMtcGFydG5lcnNoaXAuaHRtbFwiLFxuICAgICAgICAgICAgdXJsVG9JbWFnZTpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vc3RhdGljMDEubnl0LmNvbS9pbWFnZXMvMjAxOC8wMi8wMy91cy8xNGRiLW5ld3NsZXR0ZXItd2VsbHMvMTRkYi1uZXdzbGV0dGVyLXdlbGxzLWZhY2Vib29rSnVtYm8tdjIuanBnXCIsXG4gICAgICAgICAgICBwdWJsaXNoZWRBdDogXCIyMDE4LTA0LTEzVDE4OjU2OjAwWlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2U6IHsgaWQ6IG51bGwsIG5hbWU6IFwiQ2Jzc3BvcnRzLmNvbVwiIH0sXG4gICAgICAgICAgICBhdXRob3I6IFwiXCIsXG4gICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgICBcIkRhbGxhcyBDb3dib3lzIHJlbGVhc2UgRGV6IEJyeWFudDogQSB0aW1lbGluZSBvZiB0aGUgd2lkZSByZWNlaXZlcidzIGNhcmVlclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCJBIGxvb2sgYmFjayBhdCB0aGUgam91cm5leSB0aGF0IGxlZCB0byBCcnlhbnQncyB1bmNlcmVtb25pb3VzIGRlcGFydHVyZSBmcm9tIERhbGxhc1wiLFxuICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuY2Jzc3BvcnRzLmNvbS9uZmwvbmV3cy9kYWxsYXMtY293Ym95cy1yZWxlYXNlLWRlei1icnlhbnQtYS10aW1lbGluZS1vZi10aGUtd2lkZS1yZWNlaXZlcnMtY2FyZWVyL1wiLFxuICAgICAgICAgICAgdXJsVG9JbWFnZTpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vc3BvcnRzaHViLmNic2lzdGF0aWMuY29tL2kvci8yMDE3LzEwLzA1LzM1MzRjNDhkLTc1YzMtNDZjMy04MTA5LTFhNDBmNGJiM2VmNC90aHVtYm5haWwvNzcweDQzMy80MzY0MTU1OWQ3ODk2NDc4YTIzMmZlN2UzMTJlNGFhZC9kZXotYnJ5YW50LnBuZ1wiLFxuICAgICAgICAgICAgcHVibGlzaGVkQXQ6IFwiMjAxOC0wNC0xM1QxODo0MjowMFpcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc291cmNlOiB7IGlkOiBcInRoZS1uZXcteW9yay10aW1lc1wiLCBuYW1lOiBcIlRoZSBOZXcgWW9yayBUaW1lc1wiIH0sXG4gICAgICAgICAgICBhdXRob3I6IFwiQWRhbSBHb2xkbWFuIGFuZCBOaWNob2xhcyBGYW5kb3NcIixcbiAgICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgICAgIFwiRm9ybWVyIEZCSSBEZXB1dHkgRGlyZWN0b3IgSXMgRmF1bHRlZCBpbiBTY2F0aGluZyBJbnNwZWN0b3IgR2VuZXJhbCBSZXBvcnRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwiVGhlIHJlcG9ydCBhY2N1c2VkIHRoZSBmb3JtZXIgb2ZmaWNpYWwsIEFuZHJldyBHLiBNY0NhYmUsIG9mIHJlcGVhdGVkbHkgbWlzbGVhZGluZyBpbnZlc3RpZ2F0b3JzLiBNci4gTWNDYWJlIHdhcyBmaXJlZCBpbiBNYXJjaCBob3VycyBiZWZvcmUgaGUgd2FzIGVsaWdpYmxlIGZvciBhIGZ1bGwgcGVuc2lvbi5cIixcbiAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMTgvMDQvMTMvdXMvcG9saXRpY3MvZm9ybWVyLWZiaS1kZXB1dHktZGlyZWN0b3ItaXMtZmF1bHRlZC1pbi1zY2F0aGluZy1pbnNwZWN0b3ItZ2VuZXJhbC1yZXBvcnQuaHRtbFwiLFxuICAgICAgICAgICAgdXJsVG9JbWFnZTpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vc3RhdGljMDEubnl0LmNvbS9pbWFnZXMvMjAxOC8wNC8xNC91cy9wb2xpdGljcy8xNGRjLW1jY2FiZS8xNGRjLW1jY2FiZS1mYWNlYm9va0p1bWJvLmpwZ1wiLFxuICAgICAgICAgICAgcHVibGlzaGVkQXQ6IFwiMjAxOC0wNC0xM1QxODoxOToyOVpcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc291cmNlOiB7IGlkOiBcImFiYy1uZXdzXCIsIG5hbWU6IFwiQUJDIE5ld3NcIiB9LFxuICAgICAgICAgICAgYXV0aG9yOiBcIkFCQyBOZXdzXCIsXG4gICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgICBcIldoYXQgd2Uga25vdyBhYm91dCB0cmFwcGVkIHRlZW4ncyBteXN0ZXJpb3VzIGRlYXRoIGluc2lkZSBhIHZhbiBhZnRlciBoaXMgMiBjYWxscyB0byA5MTFcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwiQ2luY2lubmF0aSBwb2xpY2UgYW5kIHByb3NlY3V0b3JzIGhhdmUgbGF1bmNoZWQgaW52ZXN0aWdhdGlvbnMgYWZ0ZXIgYSB0ZWVuYWdlciB3YXMgbXlzdGVyaW91c2x5IGZvdW5kIGRlYWQgaW4gaGlzIHZhbiBob3VycyBhZnRlciBjYWxsaW5nIDkxMSB3aXRoIHBsZWFzIGZvciBoZWxwLlwiLFxuICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgIFwiaHR0cDovL2FiY25ld3MuZ28uY29tL1VTL3RyYXBwZWQtdGVlbnMtbXlzdGVyaW91cy1kZWF0aC1pbnNpZGUtdmFuLWNhbGxzLTkxMS9zdG9yeT9pZD01NDQ0MTg3M1wiLFxuICAgICAgICAgICAgdXJsVG9JbWFnZTpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vcy5hYmNuZXdzLmNvbS9pbWFnZXMvVVMvY2FyLWRlYXRoLTMtdXMtZXItMTgwNDEyLmpwZ19ocE1haW5fMTZ4OV85OTIuanBnXCIsXG4gICAgICAgICAgICBwdWJsaXNoZWRBdDogXCIyMDE4LTA0LTEzVDE4OjExOjUwWlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2U6IHsgaWQ6IFwidXNhLXRvZGF5XCIsIG5hbWU6IFwiVVNBIFRvZGF5XCIgfSxcbiAgICAgICAgICAgIGF1dGhvcjogXCJFcmluIEplbnNlblwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiUmVwb3J0czogV2lsbCBGZXJyZWxsIGludm9sdmVkIGluIGNhciBhY2NpZGVudFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCJUaGUgYWN0b3Igd2FzIGEgcGFzc2VuZ2VyIGluIGEgY2FyIHRoYXQgd2FzIGludm9sdmVkIGluIGEgdHdvLWNhciBjb2xsaXNpb24sIFRodXJzZGF5IG5pZ2h0LCBhY2NvcmRpbmcgdG8gcmVwb3J0cy5cIixcbiAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9saWZlL3Blb3BsZS8yMDE4LzA0LzEzL2ZlcnJlbGwtYWNjaWRlbnQtY2FyLWNyYXNoLzUxNDYxMTAwMi9cIixcbiAgICAgICAgICAgIHVybFRvSW1hZ2U6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5nYW5uZXR0LWNkbi5jb20vLW1tLS8zNzhlODEzY2M3M2E0ZDE1YzhiYzc0NThmODY4ZmZiZWIwYTBkYzQ3L2M9MC0yMzktMjMxMC0xNTQ0JnI9eDE2ODMmYz0zMjAweDE2ODAvbG9jYWwvLS9tZWRpYS8yMDE4LzA0LzEzL1VTQVRPREFZL1VTQVRPREFZLzYzNjU5MjE2MzQxOTM4NzgyMC04NzUwNjIyMTQtOTUzNzc2OTUuSlBHXCIsXG4gICAgICAgICAgICBwdWJsaXNoZWRBdDogXCIyMDE4LTA0LTEzVDE4OjAxOjExWlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2U6IHsgaWQ6IFwidGhlLXdhc2hpbmd0b24tcG9zdFwiLCBuYW1lOiBcIlRoZSBXYXNoaW5ndG9uIFBvc3RcIiB9LFxuICAgICAgICAgICAgYXV0aG9yOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9Ub21KYWNrbWFuV1AvXCIsXG4gICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgICBcIkJhY2twYWdlIENFTyBDYXJsIEZlcnJlciBwbGVhZHMgZ3VpbHR5IGluIHRocmVlIHN0YXRlcywgYWdyZWVzIHRvIHRlc3RpZnkgYWdhaW5zdCBvdGhlciB3ZWJzaXRlIG9mZmljaWFsc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCJGZXJyZXIgcXVpZXRseSBlbnRlcmVkIGEgcGxlYSBpbiBBcml6b25hIGxhc3Qgd2VlaywgdGhlbiB3ZW50IHRvIGNvdXJ0cyBpbiBUZXhhcyBhbmQgQ2FsaWZvcm5pYSB0aGlzIHdlZWsgdG8gYWRtaXQgbGF1bmRlcmluZyBtb25leSBhbmQgZmFjaWxpdGF0aW5nIHByb3N0aXR1dGlvbiBvbiB0aGUgd2Vic2l0ZS5cIixcbiAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9uZXdzL3RydWUtY3JpbWUvd3AvMjAxOC8wNC8xMy9iYWNrcGFnZS1jZW8tY2FybC1mZXJyZXItcGxlYWRzLWd1aWx0eS1pbi10aHJlZS1zdGF0ZXMtYWdyZWVzLXRvLXRlc3RpZnktYWdhaW5zdC1vdGhlci13ZWJzaXRlLW9mZmljaWFscy9cIixcbiAgICAgICAgICAgIHVybFRvSW1hZ2U6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy53YXNoaW5ndG9ucG9zdC5jb20vcmVzaXplci9Za2VucG04TTZTR3ZoRmxUSmI0NGVkQ3k2RWM9LzE0ODR4MC9hcmMtYW5nbGVyZmlzaC13YXNocG9zdC1wcm9kLXdhc2hwb3N0LnMzLmFtYXpvbmF3cy5jb20vcHVibGljLzM2UzUzR0ZIT0E3NFpJUzNNSllMRkVRQ1ZJLmpwZ1wiLFxuICAgICAgICAgICAgcHVibGlzaGVkQXQ6IFwiMjAxOC0wNC0xM1QxNzo1MzozN1pcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc291cmNlOiB7IGlkOiBcInRoZS1oaWxsXCIsIG5hbWU6IFwiVGhlIEhpbGxcIiB9LFxuICAgICAgICAgICAgYXV0aG9yOiBcIlNjb3R0IFdvbmdcIixcbiAgICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgICAgIFwiUmVwdWJsaWNhbnMgZXhwcmVzcyBkb3VidHMgdGhhdCBSeWFuIGNhbiBzdGF5IG9uIGFzIFNwZWFrZXJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwiU3BlY3VsYXRpb24gaXMgZ3Jvd2luZyBvbiBDYXBpdG9sIEhpbGwgdGhhdCBQYXVsIFJ5YW4gbWF5IG5lZWQgdG8gcmVsaW5xdWlzaCBoaXMgU3BlYWtlcuKAmXMgZ2F2ZWwgc29vbiwgdGhvdWdoIGZldyBSZXB1YmxpY2FucyBhcmUgcHVibGljbHkgY2FsbGluZyBvbiBoaW0gdG8gcmVzaWduLlwiLFxuICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgIFwiaHR0cDovL3RoZWhpbGwuY29tL2hvbWVuZXdzL2hvdXNlLzM4MzA1MS1yZXB1YmxpY2Fucy1leHByZXNzLWRvdWJ0cy10aGF0LXJ5YW4tY2FuLXN0YXktb24tYXMtc3BlYWtlclwiLFxuICAgICAgICAgICAgdXJsVG9JbWFnZTpcbiAgICAgICAgICAgICAgICBcImh0dHA6Ly90aGVoaWxsLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL3J5YW5wYXVsXzA0MTIxOGduMTBfbGVhZC5qcGdcIixcbiAgICAgICAgICAgIHB1Ymxpc2hlZEF0OiBcIjIwMTgtMDQtMTNUMTc6NTE6MDBaXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNvdXJjZTogeyBpZDogbnVsbCwgbmFtZTogXCJFc3BuLmNvbVwiIH0sXG4gICAgICAgICAgICBhdXRob3I6IG51bGwsXG4gICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgICBcIkxhcnJ5IE5hc3NhciB2aWN0aW0gYWNjdXNlcyBNU1UgaW50ZXJpbSBwcmVzaWRlbnQgb2Ygb2ZmZXJpbmcgc2VjcmV0IHBheW9mZlwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCJBIHNleHVhbCBhc3NhdWx0IHZpY3RpbSBvZiBMYXJyeSBOYXNzYXIgc2F5cyBNaWNoaWdhbiBTdGF0ZSBpbnRlcmltIHByZXNpZGVudCBKb2huIEVuZ2xlciBvZmZlcmVkIGhlciBhIHNlY3JldCBwYXlvZmYgdG8gc2V0dGxlIGEgbGF3c3VpdC5cIixcbiAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgICBcImh0dHA6Ly93d3cuZXNwbi5jb20vY29sbGVnZS1zcG9ydHMvc3RvcnkvXy9pZC8yMzE1NDQ0MS92aWN0aW0tbGFycnktbmFzc2FyLWFjY3VzZXMtbWljaGlnYW4tc3RhdGUtaW50ZXJpbS1wcmVzaWRlbnQtam9obi1lbmdsZXItb2ZmZXJpbmctcGF5b2ZmXCIsXG4gICAgICAgICAgICB1cmxUb0ltYWdlOlxuICAgICAgICAgICAgICAgIFwiaHR0cDovL2EyLmVzcG5jZG4uY29tL2NvbWJpbmVyL2k/aW1nPSUyRnBob3RvJTJGMjAxOCUyRjAxMzAlMkZyMzIxMzAxXzEyOTZ4NzI5XzE2JTJEOS5qcGdcIixcbiAgICAgICAgICAgIHB1Ymxpc2hlZEF0OiBcIjIwMTgtMDQtMTNUMTc6Mzg6MjRaXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgICAgIGlkOiBcInRoZS13YWxsLXN0cmVldC1qb3VybmFsXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJUaGUgV2FsbCBTdHJlZXQgSm91cm5hbFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dGhvcjogbnVsbCxcbiAgICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgICAgIFwiVHJ1bXAgTGF3eWVyIE1pY2hhZWwgQ29oZW4gTmVnb3RpYXRlZCAkMS42IE1pbGxpb24gU2V0dGxlbWVudCBmb3IgVG9wIFJlcHVibGljYW4gRnVuZHJhaXNlclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy53c2ouY29tL2FydGljbGVzL3RydW1wLWxhd3llci1taWNoYWVsLWNvaGVuLW5lZ290aWF0ZWQtMS02LW1pbGxpb24tc2V0dGxlbWVudC1mb3ItdG9wLXJlcHVibGljYW4tZnVuZHJhaXNlci0xNTIzNjM4NzI2XCIsXG4gICAgICAgICAgICB1cmxUb0ltYWdlOiBudWxsLFxuICAgICAgICAgICAgcHVibGlzaGVkQXQ6IFwiMjAxOC0wNC0xM1QxNzozMzo1MFpcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc291cmNlOiB7IGlkOiBcInRoZS13YXNoaW5ndG9uLXBvc3RcIiwgbmFtZTogXCJUaGUgV2FzaGluZ3RvbiBQb3N0XCIgfSxcbiAgICAgICAgICAgIGF1dGhvcjogbnVsbCxcbiAgICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgICAgIFwiVHJ1bXAsIEdhcmRuZXIgc3RyaWtlIGRlYWwgb24gbGVnYWxpemVkIG1hcmlqdWFuYSwgZW5kaW5nIHN0YW5kb2ZmIG92ZXIgSnVzdGljZSBub21pbmVlc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCJDb2xvcmFkbyBTZW4uIENvcnkgR2FyZG5lciBwcmV2aW91c2x5IHNhaWQgaGUgd291bGQgYmxvY2sgYWxsIERPSiBub21pbmF0aW9ucyBiZWNhdXNlIG9mIGEgcG90ZW50aWFsIGZlZGVyYWwgY3JhY2tkb3duIG9uIHN0YXRlcyB0aGF0IGhhdmUgbGVnYWxpemVkIG1hcmlqdWFuYS5cIixcbiAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9wb2xpdGljcy90cnVtcC1nYXJkbmVyLXN0cmlrZS1kZWFsLW9uLWxlZ2FsaXplZC1tYXJpanVhbmEtZW5kaW5nLXN0YW5kb2ZmLW92ZXItanVzdGljZS1ub21pbmVlcy8yMDE4LzA0LzEzLzJhYzNiMzVhLTNmM2EtMTFlOC05MTJkLTE2YzllOWIzNzgwMF9zdG9yeS5odG1sXCIsXG4gICAgICAgICAgICB1cmxUb0ltYWdlOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cud2FzaGluZ3RvbnBvc3QuY29tL3JmL2ltYWdlXzE0ODR3LzIwMTAtMjAxOS9XYXNoaW5ndG9uUG9zdC8yMDE4LzAxLzA1L05hdGlvbmFsLVBvbGl0aWNzL0ltYWdlcy9Cb3RzZm9yZDE3MTIwNVRydW1wMjI2NzUuSlBHP3Q9MjAxNzA1MTdcIixcbiAgICAgICAgICAgIHB1Ymxpc2hlZEF0OiBcIjIwMTgtMDQtMTNUMTc6MTk6NTBaXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNvdXJjZTogeyBpZDogbnVsbCwgbmFtZTogXCJOeWRhaWx5bmV3cy5jb21cIiB9LFxuICAgICAgICAgICAgYXV0aG9yOiBcIkRhdmlkIEJvcm9mZlwiLFxuICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgXCJCbGFjayB0ZWVuIGdldHMgc2hvdCBhdCBhZnRlciBtaXNzaW5nIGJ1cyBhbmQgYXNraW5nIGZvciBkaXJlY3Rpb25zOiAnSSB0dXJuZWQgYmFjayBhbmQgc2F3IGhpbSBhaW1pbmcgYXQgbWUnXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcIkEgYmxhY2sgdGVlbiBpbiBNaWNoaWdhbiBzdG9wcGVkIHRvIGFzayBmb3IgZGlyZWN0aW9ucyBhZnRlciBtaXNzaW5nIGhpcyBzY2hvb2wgYnVzIOKAlCBhbmQgYSBsb2NhbCByZXNpZGVudCByZXNwb25kZWQgYnkgc2hvb3RpbmcgYXQgaGltLlwiLFxuICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy5ueWRhaWx5bmV3cy5jb20vbmV3cy9jcmltZS9ibGFjay10ZWVuLXNob3Qtc3RvcHBpbmctZGlyZWN0aW9ucy1hcnRpY2xlLTEuMzkzMjA3N1wiLFxuICAgICAgICAgICAgdXJsVG9JbWFnZTpcbiAgICAgICAgICAgICAgICBcImh0dHA6Ly9hc3NldHMubnlkYWlseW5ld3MuY29tL3BvbG9wb2x5X2ZzLzEuMzkzMjA3Ni4xNTIzNjMzMzgwIS9pbWcvaHR0cEltYWdlL2ltYWdlLmpwZ19nZW4vZGVyaXZhdGl2ZXMvbGFuZHNjYXBlXzEyMDAvYnJlbm5hbjE0bi0xLXdlYi5qcGdcIixcbiAgICAgICAgICAgIHB1Ymxpc2hlZEF0OiBcIjIwMTgtMDQtMTNUMTY6MzY6MzhaXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNvdXJjZTogeyBpZDogXCJ0aGUtbmV3LXlvcmstdGltZXNcIiwgbmFtZTogXCJUaGUgTmV3IFlvcmsgVGltZXNcIiB9LFxuICAgICAgICAgICAgYXV0aG9yOiBcIkNocmlzdGluZSBIYXVzZXJcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkNhbGlmb3JuaWEgUmVzY3VlcnMgRmluZCBJdGVtcyBCZWxvbmdpbmcgdG8gTWlzc2luZyBGYW1pbHlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwiRm91ciBmYW1pbHkgbWVtYmVycyB3ZXJlIHJlcG9ydGVkIG1pc3NpbmcgZHVyaW5nIGEgcm9hZCB0cmlwLCBhZnRlciBhIGNhciB3YXMgc2VlbiBnb2luZyBpbnRvIGEgc3dvbGxlbiByaXZlci4gUmVsYXRpdmVzIGluIEluZGlhIHBsZWFkZWQgZm9yIGhlbHAuXCIsXG4gICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5ueXRpbWVzLmNvbS8yMDE4LzA0LzEzL3VzL2NhbGlmb3JuaWEtbWlzc2luZy1mYW1pbHktaW5kaWEuaHRtbFwiLFxuICAgICAgICAgICAgdXJsVG9JbWFnZTpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vc3RhdGljMDEubnl0LmNvbS9pbWFnZXMvMjAxOC8wNC8xMy91cy8xM3hwLWNyYXNoLXN1Yi8xM3hwLWNyYXNoLXN1Yi1mYWNlYm9va0p1bWJvLmpwZ1wiLFxuICAgICAgICAgICAgcHVibGlzaGVkQXQ6IFwiMjAxOC0wNC0xM1QxNjoyNDozM1pcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc291cmNlOiB7IGlkOiBudWxsLCBuYW1lOiBcIk5vbGEuY29tXCIgfSxcbiAgICAgICAgICAgIGF1dGhvcjogXCJKZW5uaWZlciBMYXJpbm9cIixcbiAgICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgICAgIFwiSGVyZSdzIHdoZW4gc2V2ZXJlIHN0b3JtcywgcmFpbiBhcmUgZXhwZWN0ZWQgdG8gaGl0IE5ldyBPcmxlYW5zXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcIlRoZSBOYXRpb25hbCBXZWF0aGVyIFNlcnZpY2UgaGFzIGlzc3VlZCBhIGZsYXNoIGZsb29kIHdhdGNoIGZvciB0aGUgTmV3IE9ybGVhbnMgYXJlYSBzdGFydGluZyBsYXRlIEZyaWRheSAoQXByaWwgMTMpLlwiLFxuICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy5ub2xhLmNvbS93ZWF0aGVyL2luZGV4LnNzZi8yMDE4LzA0L3JhaW5fbmV3X29ybGVhbnNfZnJlbmNoX3F1YXJ0ZS5odG1sXCIsXG4gICAgICAgICAgICB1cmxUb0ltYWdlOlxuICAgICAgICAgICAgICAgIFwiaHR0cDovL2ltYWdlLm5vbGEuY29tL2hvbWUvbm9sYS1tZWRpYS93aWR0aDYyMC9pbWcvd2VhdGhlcl9pbXBhY3QvcGhvdG8vMjQzNjQ5NTEtc3RhbmRhcmQuanBnXCIsXG4gICAgICAgICAgICBwdWJsaXNoZWRBdDogXCIyMDE4LTA0LTEzVDE2OjAyOjQ2WlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2U6IHsgaWQ6IFwiZm94LW5ld3NcIiwgbmFtZTogXCJGb3ggTmV3c1wiIH0sXG4gICAgICAgICAgICBhdXRob3I6IFwiR3JlZyBOb3JtYW5cIixcbiAgICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgICAgIFwiTm9ydGggQ2Fyb2xpbmEgaW5jZXN0IGZhdGhlciB0b2xkIG1vdGhlciBoZSBraWxsZWQgZGF1Z2h0ZXItd2lmZSBhbmQgdGhlaXIgY2hpbGQgaW4gc2hvY2tpbmcgOTExIGNhbGxcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwiVGhlIE5vcnRoIENhcm9saW5hIGluY2VzdCBkYWQsIHdob3NlIFRodXJzZGF5IG11cmRlciBzcHJlZSB0b29rIHRoZSBsaXZlcyBvZiB0aGUgYmlvbG9naWNhbCBkYXVnaHRlciBoZSBtYXJyaWVkIGFuZCB0aGUgaW5mYW50IGNoaWxkIGhlIGZhdGhlcmVkIHdpdGggdGhlIGdpcmwsIHJlcG9ydGVkbHkgZXhwbGFpbmVkIGhpcyBwb3NzaWJsZSBtb3RpdmUgdG8gaGlzIG93biBtb3RoZXIgaW4gYSBzdHVubmluZyBwaG9uZSBjYWxsIG1vbWVudHMgYmVmb3JlIOKAplwiLFxuICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy5mb3huZXdzLmNvbS91cy8yMDE4LzA0LzEzL25vcnRoLWNhcm9saW5hLWluY2VzdC1mYXRoZXItdG9sZC1tb3RoZXIta2lsbGVkLWRhdWdodGVyLXdpZmUtYW5kLXRoZWlyLWNoaWxkLWluLXNob2NraW5nLTkxMS1jYWxsLmh0bWxcIixcbiAgICAgICAgICAgIHVybFRvSW1hZ2U6XG4gICAgICAgICAgICAgICAgXCJodHRwOi8vYTU3LmZveG5ld3MuY29tL21lZGlhMi5mb3huZXdzLmNvbS9CcmlnaHRDb3ZlLzY5NDk0MDA5NDAwMS8yMDE4LzA0LzEzLzAvMC82OTQ5NDAwOTQwMDFfNTc2OTc5MDAzODAwMV81NzY5Nzg2MzIwMDAxLXZzLmpwZz92ZT0xXCIsXG4gICAgICAgICAgICBwdWJsaXNoZWRBdDogXCIyMDE4LTA0LTEzVDE1OjExOjE1WlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2U6IHsgaWQ6IFwiY25uXCIsIG5hbWU6IFwiQ05OXCIgfSxcbiAgICAgICAgICAgIGF1dGhvcjogXCJDaHJpcyBDaWxsaXp6YSwgQ05OIEVkaXRvci1hdC1sYXJnZVwiLFxuICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgXCJUaGUgMTEgbW9zdCBleWUtb3BlbmluZyBsaW5lcyBpbiBKYW1lcyBDb21leSdzICdBIEhpZ2hlciBMb3lhbHR5LCcgcmFua2VkXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcIkRheXMgYmVmb3JlIGl0cyBvZmZpY2lhbCByZWxlYXNlLCBleGNlcnB0cyBvZiBKYW1lcyBDb21leSdzIG1lbW9pciBhYm91dCBoaXMgdGltZSBhcyBGQkkgRGlyZWN0b3IgdW5kZXIgUHJlc2lkZW50IERvbmFsZCBUcnVtcCBoYXZlIGxlYWtlZC4gQWN0dWFsbHksIGZsb29kZWQuXCIsXG4gICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5jbm4uY29tLzIwMTgvMDQvMTMvcG9saXRpY3MvY29tZXktYm9vay10cnVtcC9pbmRleC5odG1sXCIsXG4gICAgICAgICAgICB1cmxUb0ltYWdlOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4uY25uLmNvbS9jbm5uZXh0L2RhbS9hc3NldHMvMTgwNDEzMDkxMjE3LTAxLXRydW1wLWNvbWV5LWhhbmRzaGFrZS1maWxlLXN1cGVyLXRlYXNlLmpwZ1wiLFxuICAgICAgICAgICAgcHVibGlzaGVkQXQ6IFwiMjAxOC0wNC0xM1QxNTowMzowOVpcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc291cmNlOiB7IGlkOiBudWxsLCBuYW1lOiBcIk5iY3Nwb3J0cy5jb21cIiB9LFxuICAgICAgICAgICAgYXV0aG9yOiBcIk1pY2hhZWwgRGF2aWQgU21pdGhcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIlNlYWhhd2tzIHNpZ24gU3RlcGhlbiBNb3JyaXNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwiVGhlIFNlYWhhd2tzIGFyZSBzaWduaW5nIGEgYmFja3VwIHF1YXJ0ZXJiYWNrLCBvbmUgd2hvIGhhcyBwcmVzdW1hYmx5IGFncmVlZCB0byBzdGFuZCBmb3IgdGhlIG5hdGlvbmFsIGFudGhlbS4gU2VhdHRsZSBoYXMgc2lnbmVkIHF1YXJ0ZXJiYWNrIFN0ZXBoZW4gTW9ycmlzLCBBZGFtIFNjaGVmdGVyIG9mIEVTUE4gcmVwb3J0cy4gVGhhdCBuZXdzIHdpbGwgc3Rva2UgdGhlIGNvbnRyb3ZlcnN5IHJlZ2FyZGluZyB0aGUgU2VhaGF3a3PigJkgZGVhbGluZ3Mg4oCmXCIsXG4gICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICAgXCJodHRwOi8vcHJvZm9vdGJhbGx0YWxrLm5iY3Nwb3J0cy5jb20vMjAxOC8wNC8xMy9zZWFoYXdrcy1zaWduLXN0ZXBoZW4tbW9ycmlzL1wiLFxuICAgICAgICAgICAgdXJsVG9JbWFnZTpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vbmJjcHJvZm9vdGJhbGx0YWxrLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxOC8wNC9nZXR0eWltYWdlcy04Mzk2NzUzMjQxLWUxNTIzNjE2MDg5NzM2LmpwZ1wiLFxuICAgICAgICAgICAgcHVibGlzaGVkQXQ6IFwiMjAxOC0wNC0xM1QxMDo0MjozMFpcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc291cmNlOiB7IGlkOiBcInBvbGl0aWNvXCIsIG5hbWU6IFwiUG9saXRpY29cIiB9LFxuICAgICAgICAgICAgYXV0aG9yOiBcIk5BVEFTSEEgS09SRUNLSVwiLFxuICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgXCJJbGxpbm9pcyBHT1AgZ292ZXJub3IgY2FsbHMgZm9yIE1pc3NvdXJpIEdPUCBnb3Zlcm5vciB0byByZXNpZ25cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwiSWxsaW5vaXMgR292LiBCcnVjZSBSYXVuZXLigJlzIHJlc2lnbmF0aW9uIGNhbGwgaXMgcGFydGljdWxhcmx5IHN0aW5naW5nIGNvbnNpZGVyaW5nIHRoYXQgTWlzc291cmkgR292LiBFcmljIEdyZWl0ZW5zIGFwcGVhcmVkIGluIGFuIGFkIGZvciBSYXVuZXIncyByZWVsZWN0aW9uIGNhbXBhaWduLlwiLFxuICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cucG9saXRpY28uY29tL3N0b3J5LzIwMTgvMDQvMTIvcmF1bmVyLWdyZWl0ZW5zLXJlc2lnbmF0aW9uLWNhbGwtNTIwODU4XCIsXG4gICAgICAgICAgICB1cmxUb0ltYWdlOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9zdGF0aWMucG9saXRpY28uY29tLzk1L2JjL2U3YmM2ODVhNGI4ZDhjNDhmZWNlYjBkZmM1MDUvZ292LWJydWNlLXJhdW5lci4lMjBCcnVjZSUyMFJhdW5lci5wbmdcIixcbiAgICAgICAgICAgIHB1Ymxpc2hlZEF0OiBcIjIwMTgtMDQtMTNUMDA6MTI6MDNaXCIsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIHNlYXJjaGluZyA9IGZhbHNlO1xuXG4gICAgbmV3czogRGF0YUl0ZW1bXTtcblxuICAgIGFjdGlvbkFuZHJvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25BbmRyb2lkID0gaXNBbmRyb2lkO1xuXG4gICAgICAgIHRoaXMubmV3cyA9IHRoaXMuYWxsTmV3cy5maWx0ZXIoKGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLnVybFRvSW1hZ2UgJiYgZS50aXRsZSAmJiBlLmRlc2NyaXB0aW9uICYmIGUuc291cmNlLm5hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgICAgdmFyIGtleWJvYXJkID0gSVFLZXlib2FyZE1hbmFnZXIuc2hhcmVkTWFuYWdlcigpO1xuICAgICAgICAgICAga2V5Ym9hcmQuc2hvdWxkUmVzaWduT25Ub3VjaE91dHNpZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIHRoaXMub25TZWFyY2goc2VhcmNoQmFyLnRleHQgPyBzZWFyY2hCYXIudGV4dC50b0xvd2VyQ2FzZSgpIDogXCJcIik7XG4gICAgICAgIHNlYXJjaEJhci5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgfVxuXG4gICAgb25TZWFyY2goc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgaWYgKHNlYXJjaFZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLm5ld3MgPSB0aGlzLmFsbE5ld3MuZmlsdGVyKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgZS51cmxUb0ltYWdlICYmXG4gICAgICAgICAgICAgICAgICAgIGUudGl0bGUgJiZcbiAgICAgICAgICAgICAgICAgICAgZS5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICBlLnNvdXJjZS5uYW1lICYmXG4gICAgICAgICAgICAgICAgICAgIChlLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsZWFyKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIHNlYXJjaEJhci50ZXh0ID0gXCJcIjtcbiAgICAgICAgc2VhcmNoQmFyLmhpbnQgPSBcIlNlYXJjaCBmb3IgYSBuZXdzIGFuZCBwcmVzcyBlbnRlclwiO1xuICAgICAgICB0aGlzLmFsbE5ld3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXdzLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWFyY2hCYXIuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICB0aGlzLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2UoYXJncykge1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgdGhpcy5vblNlYXJjaChzZWFyY2hCYXIudGV4dCA/IHNlYXJjaEJhci50ZXh0LnRvTG93ZXJDYXNlKCkgOiBcIlwiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHt9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmZsZXhib3hMYXlvdXQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTRjYjtcXG4gIH1cXG4gIC5zdGFja0xheW91dCB7XFxuICAgIHdpZHRoOiAzMDA7XFxuICAgIHBhZGRpbmc6IDEwIDE2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgfVxcbiAgSW1hZ2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDtcXG4gICAgaGVpZ2h0OiA3MDtcXG4gIH1cXG4gIEJ1dHRvbiwgVGV4dEZpZWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTA7XFxuICB9XFxuICAuYnRuLXByaW1hcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZGNiO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcbiAgVGV4dEZpZWxkIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbiAgLmRhcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAxMjE3O1xcbiAgfVxcbiAgLmRhcmsgVGV4dEZpZWxkIHtcXG4gICAgY29sb3I6ICAjQzRBRkI0O1xcbiAgfVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkxvZ2luXFxcIj4gPC9BY3Rpb25CYXI+XFxuPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcImZsZXhib3hMYXlvdXRcXFwiPlxcbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzdGFja0xheW91dFxcXCI+XFxuICAgIDxUZXh0RmllbGRcXG4gICAgICBoaW50PVxcXCJDb3JyZW9cXFwiXFxuICAgICAga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCJcXG4gICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbFxcXCJcXG4gICAgICBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIlxcbiAgICA+PC9UZXh0RmllbGQ+XFxuICAgIDwhLS0gPExhYmVsICpuZ0lmPVxcXCJoYXNFbWFpbEVycm9ycygpXFxcIiBjbGFzcz1cXFwiZWxvaGEtZm9udC1zZW1pYm9sZCBtLXQtMiBsb2dpbi1maWVsZC1sYWJlbCBjb2xvci1kYW5nZXIgZm9udC1zaXplLW1kXFxcIiByb3c9XFxcIjJcXFwiIFt0ZXh0XT1cXFwiZ2V0RW1haWxFcnJvcigpXFxcIj48L0xhYmVsPiAtLT5cXG4gICAgPFRleHRGaWVsZFxcbiAgICAgIGhpbnQ9XFxcIkNvbnRyYXNlw7FhXFxcIlxcbiAgICAgIHNlY3VyZT1cXFwidHJ1ZVxcXCJcXG4gICAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5wYXNzd29yZFxcXCJcXG4gICAgICBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIlxcbiAgICA+PC9UZXh0RmllbGQ+XFxuXFxuICAgIDxCdXR0b25cXG4gICAgICB0ZXh0PVxcXCJJbmljaWFyIHNlc2nDs25cXFwiXFxuICAgICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCJcXG4gICAgICAodGFwKT1cXFwic3VibWl0KClcXFwiXFxuICAgID48L0J1dHRvbj5cXG4gICAgPEJ1dHRvbiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvcmVnaXN0ZXInXVxcXCIgdGV4dD1cXFwiQ3JlYXIgQ3VlbnRhXFxcIj48L0J1dHRvbj5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuPC9GbGV4Ym94TGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgc2V0U3RyaW5nIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4vbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL2xvZ2luLm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6W1wiLi9sb2dpbi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcIlwiO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xuICAgICAgICB0aGlzLnVzZXIuZnVsbG5hbWUgPSBcIlwiO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG4gICAgc3VibWl0KCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnV0aWxpdHlTZXJ2aWNlXG4gICAgICAgICAgICAubG9naW4odmFsdWUpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzdWx0LmRhdGEpXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzdWx0LmRhdGEudG9rZW4ucmVwbGFjZSgvWyAnXCJdKy9nLCBcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0cmluZyhcInRva2VuXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgIFwiVXN1YXJpbyBcIiArIHRoaXMudXNlci5lbWFpbCArIFwiIGluaWNpbyAgc2VzacOzbiBjb24gZXhpdG8gXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaXRlbXNcIl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgIFwiRWwgdXN1YXJpbyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuZW1haWwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgbm8gaW5pY2lvICAgc2VzacOzbiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgaGFzRW1haWxFcnJvcnMoKSB7XG4gICAgICAgIC8vIGNvbnN0IGlzVmFsaWRFbWFpbCA9IHRoaXMudXNlci5oYXNFbWFpbCgpICYmIHRoaXMudXRpbGl0eVNlcnZpY2UuaXNWYWxpZEVtYWlsKHRoaXMudXNlci5lbWFpbCk7XG4gICAgICAgIC8vIGlmICghaXNWYWxpZEVtYWlsKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGZ1bGxuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGhhc0VtYWlsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbWFpbCAhPSBcIlwiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cbmltcG9ydCBhcGkgZnJvbSBcIi4uL3V0aWxzL2FwaVwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vbG9naW4ubW9kZWxcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICB1c2VyOiBVc2VyO1xuICAgIGxvZ2luKHVzZXI6IGFueSkge1xuICAgICAgICByZXR1cm4gYXBpLnBvc3QoXCIvbG9naW5cIiwgdXNlcik7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvLyBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XG4gICAgICAgIC8vIHRoaXMuZGF0YWJhc2UuY2xvc2VkYkNvbm5lY3Rpb24oKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmZsZXhib3hMYXlvdXQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTRjYjtcXG4gIH1cXG4gIC5zdGFja0xheW91dCB7XFxuICAgIHdpZHRoOiAzMDA7XFxuICAgIHBhZGRpbmc6IDEwIDE2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgfVxcbiAgSW1hZ2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDtcXG4gICAgaGVpZ2h0OiA3MDtcXG4gIH1cXG4gIEJ1dHRvbiwgVGV4dEZpZWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTA7XFxuICB9XFxuICAuYnRuLXByaW1hcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZGNiO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcbiAgVGV4dEZpZWxkIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbiAgLmRhcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAxMjE3O1xcbiAgfVxcbiAgLmRhcmsgVGV4dEZpZWxkIHtcXG4gICAgY29sb3I6ICAjQzRBRkI0O1xcbiAgfVxcbiAgLnZhbGlkYXRpb24ge1xcbiAgICBjb2xvcjogcmVkXFxuICB9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiQ3JlYXIgVXN1YXJpb1xcXCI+IDwvQWN0aW9uQmFyPlxcbjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJmbGV4Ym94TGF5b3V0XFxcIj5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwic3RhY2tMYXlvdXRcXFwiPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgaGludD1cXFwiTm9tYnJlIGNvbXBsZXRvXFxcIlxcbiAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLmZ1bGxuYW1lXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiXFxuICAgID48L1RleHRGaWVsZD5cXG4gICAgPFRleHRGaWVsZFxcbiAgICAgIGhpbnQ9XFxcIkNvcnJlb1xcXCJcXG4gICAgICBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIlxcbiAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcbiAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLmVtYWlsXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiXFxuICAgID48L1RleHRGaWVsZD5cXG4gICAgPExhYmVsXFxuICAgICAgY2xhc3M9XFxcInZhbGlkYXRpb25cXFwiXFxuICAgICAgW3Zpc2liaWxpdHldPVxcXCJjb3JyZWN0RW1haWwgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIlxcbiAgICAgIHRleHQ9XFxcIkVsIGNvcnJlbyBlc3RhIG1hbCBlc2NyaXRvXFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gICAgPCEtLSA8TGFiZWwgKm5nSWY9XFxcImhhc0VtYWlsRXJyb3JzKClcXFwiIGNsYXNzPVxcXCJlbG9oYS1mb250LXNlbWlib2xkIG0tdC0yIGxvZ2luLWZpZWxkLWxhYmVsIGNvbG9yLWRhbmdlciBmb250LXNpemUtbWRcXFwiIHJvdz1cXFwiMlxcXCIgW3RleHRdPVxcXCJnZXRFbWFpbEVycm9yKClcXFwiPjwvTGFiZWw+IC0tPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgaGludD1cXFwiQ29udHJhc2XDsWFcXFwiXFxuICAgICAgc2VjdXJlPVxcXCJ0cnVlXFxcIlxcbiAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiXFxuICAgID48L1RleHRGaWVsZD5cXG4gICAgPFRleHRGaWVsZFxcbiAgICAgIGhpbnQ9XFxcIkNvbmZvcm1hciBDb250cmFzZcOxYVxcXCJcXG4gICAgICBzZWN1cmU9XFxcInRydWVcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmQyXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiXFxuICAgID48L1RleHRGaWVsZD5cXG4gICAgPExhYmVsXFxuICAgICAgY2xhc3M9XFxcInZhbGlkYXRpb25cXFwiXFxuICAgICAgW3Zpc2liaWxpdHldPVxcXCJlbGVtZW50TW9kZWwgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIlxcbiAgICAgIHRleHQ9XFxcIkxhcyBjb250cmFzZcOxYXMgbm8gY29pbmNpZGVuXFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gICAgPEJ1dHRvblxcbiAgICAgIHRleHQ9XFxcIkNyZWFyIEN1ZW50YVxcXCJcXG4gICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIlxcbiAgICAgICh0YXApPVxcXCJzdWJtaXQoKVxcXCJcXG4gICAgPjwvQnV0dG9uPlxcbiAgICA8QnV0dG9uIFtuc1JvdXRlckxpbmtdPVxcXCJbJy9sb2dpbiddXFxcIiB0ZXh0PVxcXCJFIGluaWNpYXIgc2VzacOzblxcXCI+PC9CdXR0b24+XFxuICA8L1N0YWNrTGF5b3V0PlxcbjwvRmxleGJveExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IFJlZ2lzdGVyU2VydmljZSB9IGZyb20gXCIuL3JlZ2lzdGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9yZWdpc3Rlci5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIGVsZW1lbnRNb2RlbDogYm9vbGVhbjtcbiAgICBjb3JyZWN0RW1haWw6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IFJlZ2lzdGVyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwiXCI7XG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiXCI7XG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZDIgPSBcIlwiO1xuICAgICAgICB0aGlzLnVzZXIuZnVsbG5hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLmVsZW1lbnRNb2RlbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvcnJlY3RFbWFpbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge31cbiAgICBjb2Zpcm1QYXNzd29yZCgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlci5wYXNzd29yZCAhPT0gdGhpcy51c2VyLnBhc3N3b3JkMikge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50TW9kZWwgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudE1vZGVsID0gZmFsc2U7XG4gICAgfVxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB7XG4gICAgICAgICAgICAvLyBuYW1lOnRoaXMudXNlci5mdWxsbmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvZmlybVBhc3N3b3JkKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlQm9vbGVhbiA9IHRoaXMudXRpbGl0eVNlcnZpY2UuaXNWYWxpZEVtYWlsKHRoaXMudXNlci5lbWFpbCk7XG4gICAgICAgIGlmICghdmFsdWVCb29sZWFuKSB7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RFbWFpbCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RFbWFpbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb3JyZWN0RW1haWwgJiYgIXRoaXMuZWxlbWVudE1vZGVsKSB7XG4gICAgICAgICAgICB0aGlzLnV0aWxpdHlTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLnJlZ2lzdGVyKHZhbHVlKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlVzdWFyaW8gXCIgKyB0aGlzLnVzZXIuZW1haWwgKyBcIiBzZSByZWdpc3RybyBjb24gZXhpdG8gXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRWwgdXN1YXJpbyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLmVtYWlsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBubyBzZSByZWdpc3RybyAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGVycilcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBmdWxsbmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBwYXNzd29yZDI6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgYXBpIGZyb20gXCIuLi91dGlscy9hcGlcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9yZWdpc3Rlci5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyU2VydmljZSB7XG4gICAgcmVnZXg6IGFueSA9IC9eW2EtekEtWjAtOS4hIyQlJicqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbiAgICB1c2VyOiBVc2VyO1xuICAgIHB1YmxpYyBpc1ZhbGlkRW1haWwoZW1haWw6IFN0cmluZykge1xuICAgICAgICBpZiAoIWVtYWlsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2V4LnRlc3QoZW1haWwpO1xuICAgIH1cbiAgICByZWdpc3Rlcih1c2VyOiBhbnkpIHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4oXCJodHRwOi8vMTAuMC4yLjI6NDAwMC9zaWdudXBcIiwgdXNlcik7XG4gICAgICAgIHJldHVybiBhcGkucG9zdChcIi9zaWdudXBcIiwgdXNlcik7XG4gICAgfVxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLy8gQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xuICAgICAgICAvLyB0aGlzLmRhdGFiYXNlLmNsb3NlZGJDb25uZWN0aW9uKCk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgY29sb3I6ICMyNTI1MjU7XFxuICAgIG1hcmdpbjogMTUgMTUgMDtcXG59XFxuLmNhcmQtbGF5b3V0IHtcXG4gICAgcGFkZGluZzogMjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEzZW0vM2VtO1xcbn1cXG4uY2FyZC1sYXlvdXQgLmgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcbi5sb2dvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDI1MDtcXG4gICAgaGVpZ2h0OiAyNTA7XFxufVxcbi5teS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbiAgICBib3JkZXItY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkRldGFsbGVcXFwiPlxcbiAgPE5hdmlnYXRpb25CdXR0b25cXG4gICAgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiXFxuICAgICh0YXApPVxcXCJnb0JhY2soKVxcXCJcXG4gID48L05hdmlnYXRpb25CdXR0b24+XFxuPC9BY3Rpb25CYXI+XFxuPEdyaWRMYXlvdXQ+XFxuICA8U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICA8IS0tIE9uIEFuZHJvaWQgdGhlIGNhcmQgdmlldyBwbHVnaW4gcmVxdWlyZXMgYWRkaW5nIGFuIGV4dGVybmFsIGxpYnJhcnlcXG4gICAgICAgICAgICAgICAgICB0aGVyZWZvcmUgaXQgY2FuJ3QgYmUgZGVtb2VkIG9uIFBsYXlncm91bmQuIFlvdSB3aWxsIGhhdmUgdG8gZG93bmxvYWQgdGhpcyBwcm9qZWN0XFxuICAgICAgICAgICAgICAgICAgYW5kIGJ1aWxkIGl0IGxvY2FsbHkgdG8gdHJ5IGl0IG9uIEFuZHJvaWQgLS0+XFxuICAgICAgPENhcmRWaWV3IGNsYXNzPVxcXCJjYXJkXFxcIiBlbGV2YXRpb249XFxcIjQwXFxcIiByYWRpdXM9XFxcIjEwXFxcIiBpb3M6c2hhZG93UmFkaXVzPVxcXCIzXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZC1sYXlvdXRcXFwiPlxcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImgyXFxcIiBbdGV4dF09XFxcIml0ZW0udGl0bGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8IS0tIDxJbWFnZVpvb20gW3NyY109XFxcIml0ZW0uaW1hZ2VVcmxcXFwiIG1heFpvb209XFxcIjVcXFwiIG1pblpvb209XFxcIjJcXFwiPjwvSW1hZ2Vab29tPiAtLT5cXG4gICAgICAgICAgPEltYWdlXFxuICAgICAgICAgICAgY2xhc3M9XFxcImxvZ29cXFwiXFxuICAgICAgICAgICAgW3NyY109XFxcIml0ZW0uaW1hZ2VVcmxcXFwiXFxuICAgICAgICAgICAgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCJcXG4gICAgICAgICAgICBwaW5jaFRvWm9vbVxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cXFwiI2RkZFxcXCJcXG4gICAgICAgICAgICB3aWR0aD1cXFwiMTAwJVxcXCJcXG4gICAgICAgICAgICBoZWlnaHQ9XFxcIjUwMFxcXCJcXG4gICAgICAgICAgPjwvSW1hZ2U+XFxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiYm9keVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICAgIDwhLS0gPFZpZGVvUGxheWVyXFxuICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL2l0c29udGhld2F5LnMzLmFtYXpvbmF3cy5jb20vU3Vic2NyaWJlK3RlK3krYXl1ZGFub3MrYSttZWpvcitlbCtjYW5hbC5tcDRcXFwiXFxuICAgICAgICAgICAgYXV0b3BsYXk9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCIzMDBcXFwiXFxuICAgICAgICAgID48L1ZpZGVvUGxheWVyPiAtLT5cXG4gICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJvZHlcXFwiXFxuICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgW3RleHRdPVxcXCJpdGVtLnB1Ymxpc2hlZEF0IHwgZGF0ZTogJ3l5eXkvTU0vZGQnXFxcIlxcbiAgICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgICAgPEJ1dHRvblxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJib2R5XFxcIlxcbiAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICh0YXApPVxcXCJvbkNsaWNrKClcXFwiXFxuICAgICAgICAgICAgdGV4dD1cXFwiRnVlbnRlXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJteS1idXR0b25cXFwiXFxuICAgICAgICAgID48L0J1dHRvbj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPC9DYXJkVmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvU2Nyb2xsVmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5yZWdpc3RlckVsZW1lbnQoJ0ltYWdlWm9vbScsICgpID0+IHJlcXVpcmUoJ0BoYXBwb25lcy9uYXRpdmVzY3JpcHQtaW1hZ2Utem9vbScpLkltYWdlWm9vbSk7XG5cbmltcG9ydCB7IFJlc3VsdFNlcnZpY2UgfSBmcm9tIFwiLi9yZXN1bHQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXN1bHQtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Jlc3VsdC1kZXRhaWwuY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogYW55ID0gW107XG4gICAgaXRlbTogYW55ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpdGVtU2VydmljZTogUmVzdWx0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IEpTT04ucGFyc2UocmVzLnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICk7XG4gICAgfVxuICAgIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG4gICAgb25DbGljaygpIHtcbiAgICAgICAgVXRpbHMub3BlblVybCh0aGlzLml0ZW0uc291cmNlVXJsKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG4gICAgbWFyZ2luOiAxNSAxNSAwO1xcbn1cXG4uY2FyZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nOiAyMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTNlbS8zZW07XFxufVxcbi5jYXJkLWxheW91dCAuaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuLmxvZ28ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMjUwO1xcbiAgICBoZWlnaHQ6IDI1MDtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcbiAgPEFjdGlvbkJhciB0aXRsZT1cXFwiUmVzdWx0YWRvc1xcXCI+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uXFxuICAgICAgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiXFxuICAgICAgKHRhcCk9XFxcImdvQmFjaygpXFxcIlxcbiAgICA+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgPC9BY3Rpb25CYXI+XFxuPC9QYWdlLmFjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dD5cXG4gIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgIDwhLS0gT24gQW5kcm9pZCB0aGUgY2FyZCB2aWV3IHBsdWdpbiByZXF1aXJlcyBhZGRpbmcgYW4gZXh0ZXJuYWwgbGlicmFyeVxcblxcdFxcdFxcdFxcdHRoZXJlZm9yZSBpdCBjYW4ndCBiZSBkZW1vZWQgb24gUGxheWdyb3VuZC4gWW91IHdpbGwgaGF2ZSB0byBkb3dubG9hZCB0aGlzIHByb2plY3RcXG5cXHRcXHRcXHRcXHRhbmQgYnVpbGQgaXQgbG9jYWxseSB0byB0cnkgaXQgb24gQW5kcm9pZCAtLT5cXG4gICAgICA8Q2FyZFZpZXdcXG4gICAgICAgICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgaXRlbXMuYXJ0aWNsZXNcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiY2FyZFxcXCJcXG4gICAgICAgIGVsZXZhdGlvbj1cXFwiNDBcXFwiXFxuICAgICAgICByYWRpdXM9XFxcIjEwXFxcIlxcbiAgICAgICAgaW9zOnNoYWRvd1JhZGl1cz1cXFwiM1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmQtbGF5b3V0XFxcIiAodGFwKT1cXFwib25DbGljaygkZXZlbnQsIGl0ZW0pXFxcIj5cXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoMlxcXCIgW3RleHRdPVxcXCJpdGVtLnRpdGxlXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPCEtLSA8SW1hZ2Vab29tIFtzcmNdPVxcXCJpdGVtLmltYWdlVXJsXFxcIiBtYXhab29tPVxcXCI1XFxcIiBtaW5ab29tPVxcXCIyXFxcIj48L0ltYWdlWm9vbT4gLS0+XFxuICAgICAgICAgIDxJbWFnZVxcbiAgICAgICAgICAgIFtzcmNdPVxcXCJpdGVtLmltYWdlVXJsXFxcIlxcbiAgICAgICAgICAgIHN0cmV0Y2g9XFxcIm5vbmVcXFwiXFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCIjZGRkXFxcIlxcbiAgICAgICAgICAgIHdpZHRoPVxcXCIxMDAlXFxcIlxcbiAgICAgICAgICAgIGhlaWdodD1cXFwiNTAwXFxcIlxcbiAgICAgICAgICA+PC9JbWFnZT5cXG4gICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJvZHlcXFwiXFxuICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgW3RleHRdPVxcXCJpdGVtLnB1Ymxpc2hlZEF0IHwgZGF0ZTogJ3l5eXkvTU0vZGQnXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgIDwvQ2FyZFZpZXc+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICA8L1Njcm9sbFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuLy8gcmVnaXN0ZXJFbGVtZW50KFxuLy8gICAgIFwiSW1hZ2Vab29tXCIsXG4vLyAgICAgKCkgPT4gcmVxdWlyZShcIkBoYXBwb25lcy9uYXRpdmVzY3JpcHQtaW1hZ2Utem9vbVwiKS5JbWFnZVpvb21cbi8vICk7XG5cbmltcG9ydCB7IFJlc3VsdFNlcnZpY2UgfSBmcm9tIFwiLi9yZXN1bHQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXN1bHQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcmVzdWx0LmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IGFueSA9IFtdO1xuICAgIGNhdGVnb3JpZXM6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZXN1bHRTZXJ2aWNlOiBSZXN1bHRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge31cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gdGhpcy5yb3V0ZXIuc25hcHNob3QucGFyYW1zLnNlYXJjaDtcbiAgICAgICAgdGhpcy5yb3V0ZXIucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZXN1bHRTZXJ2aWNlLmdldFNlYXJjaEl0ZW1zKHNlYXJjaCwgdGhpcy5jYXRlZ29yaWVzKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuICAgIH1cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxuICAgIG9uQ2xpY2soYXJnczogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcmVzdWx0XCJdLCB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoZXZlbnQpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbiAgICBnZXRTZWFyY2hJdGVtcyhzZWFyY2ggOiBhbnksY2F0ZWdvcmllczogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgYGh0dHBzOi8vYXBpLmpvcm5hbGlhLm5ldC9hcGkvdjEvYXJ0aWNsZXM/YXBpS2V5PWYzNmYwZGMyZjMyMDRhM2M4MjExMzAzODRlMjA4NjA0JnNlYXJjaD0ke3NlYXJjaH0mY2F0ZWdvcmllcz1VTFRJTUFTX05PVElDSUFTJTJDJHtjYXRlZ29yaWVzfWBcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuLmxhYmVsIHtcXG4gICAgbWFyZ2luOiAyNTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuLnRpdGxlIHtcXG4gICAgbWFyZ2luOiAyNTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAxNTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcbiAgPEFjdGlvbkJhciB0aXRsZT1cXFwiQnVzY2FyXFxcIj5cXG4gICAgPE5hdmlnYXRpb25CdXR0b25cXG4gICAgICBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCJcXG4gICAgICAodGFwKT1cXFwiZ29CYWNrKClcXFwiXFxuICAgID48L05hdmlnYXRpb25CdXR0b24+XFxuICA8L0FjdGlvbkJhcj5cXG48L1BhZ2UuYWN0aW9uQmFyPlxcbjxTdGFja0xheW91dCByb3c9XFxcIjRcXFwiPlxcbiAgPFNlYXJjaEJhclxcbiAgICBoaW50PVxcXCJCdXNjYXIgTm90aWNpYXMgLi4uXFxcIlxcbiAgICBbdGV4dF09XFxcInNlYXJjaFBocmFzZVxcXCJcXG4gICAgKHRleHRDaGFuZ2UpPVxcXCJvblRleHRDaGFuZ2VkKCRldmVudClcXFwiXFxuICAgIChjbGVhcik9XFxcIm9uQ2xlYXIoJGV2ZW50KVxcXCJcXG4gICAgKHN1Ym1pdCk9XFxcIm9uU3VibWl0KCRldmVudClcXFwiXFxuICA+XFxuICA8L1NlYXJjaEJhcj5cXG4gIDxMYWJlbCBjbGFzcz1cXFwidGl0bGVcXFwiIHRleHQ9XFxcIkZpbHRyYXIgcG9yIGNhdGVnb3JpYVxcXCI+PC9MYWJlbD5cXG4gIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcInJvd1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuICAgIDxMYWJlbFxcbiAgICAgIHRleHQ9XFxcIlBvbGl0aWNhXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJsYWJlbFxcXCJcXG4gICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICAgIHN0eWxlPVxcXCJ3aWR0aDogNjAlXFxcIlxcbiAgICA+XFxuICAgIDwvTGFiZWw+XFxuICAgIDxTd2l0Y2hcXG4gICAgICBjaGVja2VkPVxcXCJmYWxzZVxcXCJcXG4gICAgICAoY2hlY2tlZENoYW5nZSk9XFxcIm9uQ2hlY2tlZCgkZXZlbnQsICdQT0xJVElDQScpXFxcIlxcbiAgICA+PC9Td2l0Y2g+XFxuICA8L0ZsZXhib3hMYXlvdXQ+XFxuICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJyb3dcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcbiAgICA8TGFiZWxcXG4gICAgICB0ZXh0PVxcXCJEZXBvcnRlc1xcXCJcXG4gICAgICBjbGFzcz1cXFwibGFiZWxcXFwiXFxuICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICBzdHlsZT1cXFwid2lkdGg6IDYwJVxcXCJcXG4gICAgPlxcbiAgICA8L0xhYmVsPlxcbiAgICA8U3dpdGNoXFxuICAgICAgY2hlY2tlZD1cXFwiZmFsc2VcXFwiXFxuICAgICAgKGNoZWNrZWRDaGFuZ2UpPVxcXCJvbkNoZWNrZWQoJGV2ZW50LCAnREVQT1JURVMnKVxcXCJcXG4gICAgPjwvU3dpdGNoPlxcbiAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwicm93XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG4gICAgPExhYmVsXFxuICAgICAgdGV4dD1cXFwiRWNvbm9taWFcXFwiXFxuICAgICAgY2xhc3M9XFxcImxhYmVsXFxcIlxcbiAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgc3R5bGU9XFxcIndpZHRoOiA2MCVcXFwiXFxuICAgID5cXG4gICAgPC9MYWJlbD5cXG4gICAgPFN3aXRjaFxcbiAgICAgIGNoZWNrZWQ9XFxcImZhbHNlXFxcIlxcbiAgICAgIChjaGVja2VkQ2hhbmdlKT1cXFwib25DaGVja2VkKCRldmVudCwgJ0VDT05PTUlBJylcXFwiXFxuICAgID48L1N3aXRjaD5cXG4gIDwvRmxleGJveExheW91dD5cXG4gIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcInJvd1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuICAgIDxMYWJlbFxcbiAgICAgIHRleHQ9XFxcIlNhbHVkXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJsYWJlbFxcXCJcXG4gICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICAgIHN0eWxlPVxcXCJ3aWR0aDogNjAlXFxcIlxcbiAgICA+XFxuICAgIDwvTGFiZWw+XFxuICAgIDxTd2l0Y2hcXG4gICAgICBjaGVja2VkPVxcXCJmYWxzZVxcXCJcXG4gICAgICAoY2hlY2tlZENoYW5nZSk9XFxcIm9uQ2hlY2tlZCgkZXZlbnQsICdTQUxVRCcpXFxcIlxcbiAgICA+PC9Td2l0Y2g+XFxuICA8L0ZsZXhib3hMYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuaW1wb3J0IHsgU3dpdGNoLCBFdmVudERhdGEgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZWFyY2guY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc2VhcmNoLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCB7XG4gICAgYXJyYXk6IGFueSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuXG4gICAgb25TdWJtaXQoYXJncykge1xuICAgICAgICAvLyAgIGNvbnN0IG5ld0FycmF5ID0gdGhpcy5hcnJheS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoaW5kZXggPT09IHRoaXMuYXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgcmV0dXJuIGUgKyBcIiUyQ1wiO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gICBjb25zb2xlLmRpcihcIm5ld0FycmF5XCIsIG5ld0FycmF5LnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCAnJykpXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcmVzdWx0XCIsIGFyZ3Mub2JqZWN0LnRleHRdLCB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmFycmF5LmpvaW4oXCIsXCIpKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkNoZWNrZWQoYXJnczogRXZlbnREYXRhLCBldmVudDogYW55KSB7XG4gICAgICAgIGFsZXJ0KGV2ZW50KTtcbiAgICAgICAgbGV0IHN3ID0gYXJncy5vYmplY3QgYXMgU3dpdGNoO1xuICAgICAgICBpZiAoc3cuY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5hcnJheS5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxuICAgIG9uVGV4dENoYW5nZWQoYXJncykge1xuICAgICAgICAvLyBjb25zdCBzZWFyY2hCYXIgPSBhcmdzLm9iamVjdCBhcyBTZWFyY2hCYXI7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJbnB1dCBjaGFuZ2VkISBOZXcgdmFsdWU6ICR7c2VhcmNoQmFyLnRleHR9YCk7XG4gICAgfVxuXG4gICAgb25DbGVhcihhcmdzKSB7XG4gICAgICAgIC8vIGNvbnN0IHNlYXJjaEJhciA9IGFyZ3Mub2JqZWN0IGFzIFNlYXJjaEJhcjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYENsZWFyIGV2ZW50IHJhaXNlZGApO1xuICAgIH1cbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHt9KTtcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAyJztcblxuZXhwb3J0IGNvbnN0IGdldCA9IHVybCA9PiB7XG4gIHJldHVybiBpbnN0YW5jZS5nZXQoYCR7YmFzZVVybH0ke3VybH1gKTtcbn07XG5leHBvcnQgY29uc3QgcG9zdCA9ICh1cmwsIGJvZHkpID0+IHtcbiAgcmV0dXJuIGluc3RhbmNlLnBvc3QoYCR7YmFzZVVybH0ke3VybH1gLCBib2R5KTtcbn07XG5leHBvcnQgY29uc3QgX2RlbGV0ZSA9IHVybCA9PiB7XG4gIHJldHVybiBpbnN0YW5jZS5kZWxldGUoYCR7YmFzZVVybH0ke3VybH1gKTtcbn07XG5leHBvcnQgY29uc3QgcHV0ID0gKHVybCxib2R5KSA9PiB7XG4gIHJldHVybiBpbnN0YW5jZS5wdXQoYCR7YmFzZVVybH0ke3VybH1gLCBib2R5KTtcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldCxcbiAgcG9zdCxcbiAgcHV0LFxuICBfZGVsZXRlLFxufSIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cyxcbi8vIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246XG4vLyBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==