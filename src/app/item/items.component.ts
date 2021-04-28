import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions, registerElement } from "@nativescript/angular";
import { clear, getString } from "@nativescript/core/application-settings";

// registerElement(
//     "ImageZoom",
//     () => require("@happones/nativescript-image-zoom").ImageZoom
// );

import { ItemService } from "./item.service";
import api from "../utils/api";

@Component({
    selector: "ns-details",
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"],
})
export class ItemsComponent implements OnInit {
    items: any = [];
    classCss: any;
    constructor(
        private itemsService: ItemService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) {
        this.classCss = "button";
    }

    ngOnInit(): void {
        this.items = this.itemsService.getItems().subscribe(
            (response) => {
                this.items = response;
            },
            (error) => console.log(error)
        );
    }
    onClick(args: any, id_new: any) {
        const user = getString("user");
        const value = {
            user: user,
            id: id_new,
        };
        alert(JSON.stringify(value));
        if (this.classCss === "button2") {
            this.classCss = "button";
            api._delete("/like", id_new)
                .then((result) => {
                    console.info(result);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            this.classCss = "button2";
            api.post("/like", value)
                .then((result) => {
                    console.info(result);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }
    onLogout() {
        clear();
        this.routerExtensions.navigate(["/login"]);
    }
    goBanck() {
        this.routerExtensions.back();
    }
}
