import { Component, OnInit } from "@angular/core";
import { setString } from "@nativescript/core/application-settings";
import { RouterExtensions } from "@nativescript/angular";

import { LoginService } from "./login.service";
import { User } from "./login.model";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
    user: User;
    constructor(
        private utilityService: LoginService,
        private routerExtensions: RouterExtensions
    ) {
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
        this.user.fullname = "";
    }

    ngOnInit(): void {
    }

    submit() {
        const value = {
            email: this.user.email,
            password: this.user.password,
        };
        this.utilityService
            .login(value)
            .then((result) => {
                if (result.data.token) {
                    const token = result.data.token.replace(/[ '"]+/g, " ");
                    setString("token", token);
                    setString("user", this.user.email);
                    alert(
                        "Usuario " + this.user.email + " inicio  sesión con exito "
                    );
                    this.routerExtensions.navigate(["/items"]);
                }
                // setString("user", this.user.email);
                // alert(
                //     "Usuario " + this.user.email + " inicio  sesión con exito "
                // );
               // this.routerExtensions.navigate(["/items"]);
            })
            .catch((err) => {
                alert(
                    "El usuario " +
                        this.user.email +
                        " no inicio   sesión  " +
                        err
                );
            });
    }
}
