import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SearchComponent } from "./search/search.component";
import { ResultComponent } from "./result/result.component";
import { ResultDetailComponent } from "./result/result-detail.component";
import {HomeComponent} from './home/home.component'

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "register", component: RegisterComponent },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "result/:search", component: ResultComponent },
    { path: "result", component: ResultDetailComponent },
    { path: "search", component: SearchComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}

