import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    test = "";

    products: IProduct[] = [{
        id: 0,
        name: "Mouse",
        cost: 100,
        definition: "def",
        photo: "https://productimages.hepsiburada.net/s/35/375/10471209467954.jpg"
    },
    {
        id: 1,
        name: "Keyboard",
        cost: 250,
        definition: "def",
        photo: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MLA22LL?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1496944005839"
    },
    {
        id: 2,
        name: "Monitor",
        cost: 500,
        definition: "def",
        photo: "https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/IN4794710_.jpg"
    }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    onClickEvent(_id: number) {
        this.products[_id].cost += 50;
    }

    onKeyEvent(event: any) {
        this.test = typeof(event);
    }
}
