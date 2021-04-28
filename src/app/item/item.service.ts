import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
    ActivityIndicator,
    isIOS,
    Color,
    EventData,
    Page,
    ImageSource,
} from "@nativescript/core";
@Injectable({
    providedIn: "root",
})
export class ItemService {

    constructor(private http: HttpClient, private _page: Page) {
    }
    
    getItems() {
        return this.http.get(
            "https://api.jornalia.net/api/v1/articles?apiKey=f36f0dc2f3204a3c821130384e208604"
        );
    }
}
