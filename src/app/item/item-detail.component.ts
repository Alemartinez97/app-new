import { Component, OnInit, HostListener, Directive } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Utils } from "@nativescript/core";
import { RouterExtensions } from "@nativescript/angular";
import { registerElement } from "@nativescript/angular";
import * as SocialShare from "nativescript-social-share";

registerElement(
    "ImageZoom",
    () => require("@happones/nativescript-image-zoom").ImageZoom
);

import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html",
    styleUrls: ["./item-detail.component.css"],
})
export class ItemDetailComponent implements OnInit {
    items: any = [];
    item: any = [];

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        this.itemService.getItems().subscribe(
            (response) => {
                this.items = response;
                this.item = this.items.articles.filter(
                    (item) => item._id === id
                )[0];
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
