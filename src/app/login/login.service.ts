import { Injectable } from "@angular/core";


import api from "../utils/api";

import { User } from "./login.model";

@Injectable({
    providedIn: "root",
})
export class LoginService {
    constructor() {}
    user: User;
    login(user: any) {
        return api.post("/login", user);
    }

    logout() {
        // BackendService.token = "";
        // this.database.closedbConnection();
    }
}
