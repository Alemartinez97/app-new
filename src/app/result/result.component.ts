import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
// registerElement(
//     "ImageZoom",
//     () => require("@happones/nativescript-image-zoom").ImageZoom
// );

import { ResultService } from "./result.service";

@Component({
    selector: "ns-details",
    templateUrl: "./result.component.html",
    styleUrls: ["./result.component.css"],
})
export class ResultComponent implements OnInit {
    items: any = [];
    categories: any;
    constructor(
        private resultService: ResultService,
        private router: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) {}
    ngOnInit(): void {
        const search = this.router.snapshot.params.search;
        this.router.queryParams.subscribe(
            (res) => {
                this.categories = res.categories;
            },
            (error) => console.error(error)
        );
        let variant='';
        if (this.categories) {
            variant = `&categories=ULTIMAS_NOTICIAS%2C${this.categories}`;
        }
        this.resultService.getSearchItems(search, variant).subscribe(
            (response) => {
                this.items = response;
            },
            (error) => console.error(error)
        );
    }
    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
    onClick(args: any, event: any) {
        this.routerExtensions.navigate(["/result"], {
            queryParams: { value: JSON.stringify(event) },
        });
    }
}
