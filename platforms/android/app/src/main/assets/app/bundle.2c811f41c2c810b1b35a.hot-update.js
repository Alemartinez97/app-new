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
            // setString("user", this.user.email);
            // alert(
            //     "Usuario " + this.user.email + " inicio  sesión con exito "
            // );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNrQjtBQUNYO0FBRVY7QUFDVjtBQVFyQztJQUVJLHdCQUNZLGNBQTRCLEVBQzVCLGdCQUFrQztRQURsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpREFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQStCQztRQTlCRyxJQUFNLEtBQUssR0FBRztZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtTQUMvQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWM7YUFDZCxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ1osSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNULElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ25CLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hELHlGQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMxQix5RkFBUyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxLQUFLLENBQ0QsVUFBVSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUE0QixDQUM5RCxDQUFDO2dCQUNGLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1lBQ0Qsc0NBQXNDO1lBQ3RDLFNBQVM7WUFDVCxrRUFBa0U7WUFDbEUsS0FBSztZQUNMLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDUCxLQUFLLENBQ0QsYUFBYTtnQkFDVCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ2YsdUJBQXVCO2dCQUN2QixHQUFHLENBQ1YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBM0MyQiwyREFBWTtnQkFDVixzRUFBZ0I7O0lBSnJDLGNBQWM7UUFOMUIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBRWhCLDBGQUFxQzs7U0FFeEMsQ0FBQzt5Q0FJOEIsMkRBQVk7WUFDVixzRUFBZ0I7T0FKckMsY0FBYyxDQStDMUI7SUFBRCxxQkFBQztDQUFBO0FBL0MwQiIsImZpbGUiOiJidW5kbGUuMmM4MTFmNDFjMmM4MTBiMWIzNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHNldFN0cmluZyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9sb2dpbi5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcIlwiO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xuICAgICAgICB0aGlzLnVzZXIuZnVsbG5hbWUgPSBcIlwiO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB7XG4gICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51dGlsaXR5U2VydmljZVxuICAgICAgICAgICAgLmxvZ2luKHZhbHVlKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3VsdC5kYXRhLnRva2VuLnJlcGxhY2UoL1sgJ1wiXSsvZywgXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0cmluZyhcInVzZXJcIiwgdGhpcy51c2VyLmVtYWlsKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlVzdWFyaW8gXCIgKyB0aGlzLnVzZXIuZW1haWwgKyBcIiBpbmljaW8gIHNlc2nDs24gY29uIGV4aXRvIFwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaXRlbXNcIl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBzZXRTdHJpbmcoXCJ1c2VyXCIsIHRoaXMudXNlci5lbWFpbCk7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoXG4gICAgICAgICAgICAgICAgLy8gICAgIFwiVXN1YXJpbyBcIiArIHRoaXMudXNlci5lbWFpbCArIFwiIGluaWNpbyAgc2VzacOzbiBjb24gZXhpdG8gXCJcbiAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaXRlbXNcIl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgIFwiRWwgdXN1YXJpbyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuZW1haWwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgbm8gaW5pY2lvICAgc2VzacOzbiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=