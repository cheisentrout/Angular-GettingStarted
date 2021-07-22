import { Component, Input, Output, OnChanges, EventEmitter } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnChanges {
    /* The @Input decorator is what you use to receive
        information from a parent component within a nested,
        child component. So the products can pass their rating
        value in to register as the amount of stars that should
        show. */
    @Input() rating: number = 0;
    cropWidth: number = 75;

    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
        
    }
}