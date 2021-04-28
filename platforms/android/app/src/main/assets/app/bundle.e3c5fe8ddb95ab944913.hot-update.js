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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNrQjtBQUNYO0FBRVY7QUFDVjtBQVFyQztJQUVJLHdCQUNZLGNBQTRCLEVBQzVCLGdCQUFrQztRQURsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpREFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQStCQztRQTlCRyxJQUFNLEtBQUssR0FBRztZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtTQUMvQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWM7YUFDZCxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ1osSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNULElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ25CLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hELHlGQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMxQix5RkFBUyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxLQUFLLENBQ0QsVUFBVSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUE0QixDQUM5RCxDQUFDO2dCQUNGLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1lBQ0Qsc0NBQXNDO1lBQ3RDLFNBQVM7WUFDVCxrRUFBa0U7WUFDbEUsS0FBSztZQUNOLDhDQUE4QztRQUNqRCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1AsS0FBSyxDQUNELGFBQWE7Z0JBQ1QsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUNmLHVCQUF1QjtnQkFDdkIsR0FBRyxDQUNWLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7O2dCQTNDMkIsMkRBQVk7Z0JBQ1Ysc0VBQWdCOztJQUpyQyxjQUFjO1FBTjFCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUVoQiwwRkFBcUM7O1NBRXhDLENBQUM7eUNBSThCLDJEQUFZO1lBQ1Ysc0VBQWdCO09BSnJDLGNBQWMsQ0ErQzFCO0lBQUQscUJBQUM7Q0FBQTtBQS9DMEIiLCJmaWxlIjoiYnVuZGxlLmUzYzVmZThkZGI5NWFiOTQ0OTEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBzZXRTdHJpbmcgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vbG9naW4ubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdXNlcjogVXNlcjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcbiAgICAgICAgdGhpcy51c2VyLmZ1bGxuYW1lID0gXCJcIjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2VcbiAgICAgICAgICAgIC5sb2dpbih2YWx1ZSlcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXN1bHQuZGF0YS50b2tlbi5yZXBsYWNlKC9bICdcIl0rL2csIFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwidG9rZW5cIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyXCIsIHRoaXMudXNlci5lbWFpbCk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJVc3VhcmlvIFwiICsgdGhpcy51c2VyLmVtYWlsICsgXCIgaW5pY2lvICBzZXNpw7NuIGNvbiBleGl0byBcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2l0ZW1zXCJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gc2V0U3RyaW5nKFwidXNlclwiLCB0aGlzLnVzZXIuZW1haWwpO1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KFxuICAgICAgICAgICAgICAgIC8vICAgICBcIlVzdWFyaW8gXCIgKyB0aGlzLnVzZXIuZW1haWwgKyBcIiBpbmljaW8gIHNlc2nDs24gY29uIGV4aXRvIFwiXG4gICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgIC8vIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaXRlbXNcIl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgIFwiRWwgdXN1YXJpbyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuZW1haWwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgbm8gaW5pY2lvICAgc2VzacOzbiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=