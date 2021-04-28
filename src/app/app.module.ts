import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptModule,
    NativeScriptFormsModule,
} from "@nativescript/angular";
import { HttpClientModule } from "@angular/common/http";
//import { YoutubePlayerModule } from "nativescript-youtubeplayer-inline/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ItemsComponent } from "./item/items.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SearchComponent } from "./search/search.component";
import { ResultComponent } from "./result/result.component";
import { ResultDetailComponent } from "./result/result-detail.component";
import { HomeComponent } from "./home/home.component";
//import   {  PinchToZoomDirective  }  from  "./pinch-to-zoom.directive" ;
@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptFormsModule,
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
      //  YoutubePlayerModule,
        // providers: [ { provide: USE_STORE, useValue: { fa: require('../../fontawesome.css').default }, TNSFontIconService }],
        // TNSFontIconModule.forRoot({
        // 'fa': require('./fonts/font-awesome.min.css')
        // }),
    ],
    declarations: [
        AppComponent,
        ItemDetailComponent,
        ItemsComponent,
        LoginComponent,
        RegisterComponent,
        SearchComponent,
        ResultComponent,
        ResultDetailComponent,
        HomeComponent,
   //     PinchToZoomDirective
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
