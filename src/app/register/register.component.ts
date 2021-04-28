import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core/ui/page";
import { RouterExtensions } from "@nativescript/angular";

import { RegisterService } from "./register.service";
import { User } from "./register.model";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
    user: User;
    elementModel: boolean;
    correctEmail: boolean;
    constructor(
        private utilityService: RegisterService,
        private page: Page,
        private routerExtensions: RouterExtensions
    ) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
        this.user.password2 = "";
        this.user.fullname = "";
        this.elementModel = false;
        this.correctEmail = false;
    }

    ngOnInit(): void {}
    cofirmPassword() {
        if (this.user.password !== this.user.password2) {
            this.elementModel = true;
            return;
        }
        this.elementModel = false;
    }
    submit() {
        const value = {
            // name:this.user.fullname,
            email: this.user.email,
            password: this.user.password,
        };
        this.cofirmPassword();
        const valueBoolean = this.utilityService.isValidEmail(this.user.email);
        if (!valueBoolean) {
            this.correctEmail = true;
            return;
        } else {
            this.correctEmail = false;
        }
        if (!this.correctEmail && !this.elementModel) {
            this.utilityService
                .register(value)
                .then((result) => {
                    alert(
                        "Usuario " + this.user.email + " se registro con exito "
                    );
                    this.routerExtensions.navigate(["/login"]);
                })
                .catch((err) => {
                    alert(
                        "El usuario " +
                            this.user.email +
                            " no se registro  " +
                            JSON.stringify(err)
                    );
                });
        }
    }
}
