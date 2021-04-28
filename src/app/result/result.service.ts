import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class ResultService {
    constructor(private http: HttpClient) {}
    getSearchItems(search: any, categories: any) {
        return this.http.get(
            `https://api.jornalia.net/api/v1/articles?apiKey=f36f0dc2f3204a3c821130384e208604&search=${search}${categories}`
        );
    }
}
