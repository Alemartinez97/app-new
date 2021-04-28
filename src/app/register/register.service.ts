import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import api from "../utils/api";
import { User } from "./register.model";

@Injectable({
    providedIn: "root",
})
export class RegisterService {
    regex: any = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    constructor(private http: HttpClient) {}
    user: User;
    public isValidEmail(email: String) {
        if (!email) return false;
        return this.regex.test(email);
    }
    register(user: any) {
        // return this.http.post<any>("http://10.0.2.2:4000/signup", user);
        return api.post("/signup", user);
    }
    logout() {
        // BackendService.token = "";
        // this.database.closedbConnection();
    }
}
