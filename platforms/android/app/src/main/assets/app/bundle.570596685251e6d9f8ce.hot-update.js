webpackHotUpdate("bundle",{

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
            Object(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__["setString"])("user", _this.user.email);
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNrQjtBQUNYO0FBRVY7QUFDVjtBQVFyQztJQUVJLHdCQUNZLGNBQTRCLEVBQzVCLGdCQUFrQztRQURsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpREFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQStCQztRQTlCRyxJQUFNLEtBQUssR0FBRztZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtTQUMvQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWM7YUFDZCxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ1osSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNULElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ25CLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hELHlGQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMxQix5RkFBUyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxLQUFLLENBQ0QsVUFBVSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUE0QixDQUM5RCxDQUFDO2dCQUNGLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1lBQ0QseUZBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxLQUFLLENBQ0QsVUFBVSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUE0QixDQUM5RCxDQUFDO1lBQ0YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNQLEtBQUssQ0FDRCxhQUFhO2dCQUNULEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDZix1QkFBdUI7Z0JBQ3ZCLEdBQUcsQ0FDVixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDOztnQkEzQzJCLDJEQUFZO2dCQUNWLHNFQUFnQjs7SUFKckMsY0FBYztRQU4xQiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFFaEIsMEZBQXFDOztTQUV4QyxDQUFDO3lDQUk4QiwyREFBWTtZQUNWLHNFQUFnQjtPQUpyQyxjQUFjLENBK0MxQjtJQUFELHFCQUFDO0NBQUE7QUEvQzBCIiwiZmlsZSI6ImJ1bmRsZS41NzA1OTY2ODUyNTFlNmQ5ZjhjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgc2V0U3RyaW5nIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4vbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL2xvZ2luLm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9naW4uY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXI6IFVzZXI7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwiXCI7XG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiXCI7XG4gICAgICAgIHRoaXMudXNlci5mdWxsbmFtZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnV0aWxpdHlTZXJ2aWNlXG4gICAgICAgICAgICAubG9naW4odmFsdWUpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzdWx0LmRhdGEudG9rZW4ucmVwbGFjZSgvWyAnXCJdKy9nLCBcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0cmluZyhcInRva2VuXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwidXNlclwiLCB0aGlzLnVzZXIuZW1haWwpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVXN1YXJpbyBcIiArIHRoaXMudXNlci5lbWFpbCArIFwiIGluaWNpbyAgc2VzacOzbiBjb24gZXhpdG8gXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9pdGVtc1wiXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFN0cmluZyhcInVzZXJcIiwgdGhpcy51c2VyLmVtYWlsKTtcbiAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgXCJVc3VhcmlvIFwiICsgdGhpcy51c2VyLmVtYWlsICsgXCIgaW5pY2lvICBzZXNpw7NuIGNvbiBleGl0byBcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9pdGVtc1wiXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgXCJFbCB1c3VhcmlvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBubyBpbmljaW8gICBzZXNpw7NuICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==