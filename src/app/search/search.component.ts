import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Switch, EventData } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.css"],
})
export class SearchComponent {
    array: any = [];

    constructor(private routerExtensions: RouterExtensions) {}

    onSubmit(args) {
        //   const newArray = this.array.map((e, index) => {
        //     if (index === this.array.length - 1) {
        //         return e;
        //     }
        //     return e + "%2C";
        // });
        //   console.dir("newArray", newArray.toString().replace(/,/g, ''))
        this.routerExtensions.navigate(["/result", args.object.text], {
            queryParams: {
                categories: encodeURIComponent(this.array.join(",")),
            },
            clearHistory: true,
        });
    }
    onChecked(args: EventData, event: any) {
        alert(event);
        let sw = args.object as Switch;
        if (sw.checked) {
            this.array.push(event);
        }
    }
    goBack() {
        this.routerExtensions.back();
    }
    onTextChanged(args) {
        // const searchBar = args.object as SearchBar;
        // console.log(`Input changed! New value: ${searchBar.text}`);
    }

    onClear(args) {
        // const searchBar = args.object as SearchBar;
        // console.log(`Clear event raised`);
    }
}
