import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Utils } from "@nativescript/core";
import { RouterExtensions } from "@nativescript/angular";
import { registerElement } from '@nativescript/angular';
import * as SocialShare from "nativescript-social-share";
registerElement('ImageZoom', () => require('@happones/nativescript-image-zoom').ImageZoom);

import { ResultService } from "./result.service";

@Component({
    selector: "ns-details",
    templateUrl: "./result-detail.component.html",
    styleUrls: ["./result-detail.component.css"],
})
export class ResultDetailComponent implements OnInit {
    items: any = [];
    item: any = [];

    constructor(
        private itemService: ResultService,
        private router: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) {}

    ngOnInit(): void {
        this.router.queryParams.subscribe(
            (res) => {
                this.item = JSON.parse(res.value);
            },
            (error) => console.error(error)
        );
    }
    goBack() {
        this.routerExtensions.back();
    }
    onClick() {
        Utils.openUrl(this.item.sourceUrl);
    }
    onShare() {
        SocialShare.shareText(this.item.sourceUrl);
    }
}
