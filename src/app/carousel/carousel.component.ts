import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  images: Array<string>;
  constructor() {}

  ngOnInit() {
    type MyArrayType = Array<{ id: number }>;
    const arr: MyArrayType = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 }
    ];
    this.images = this._randomImageUrls(arr);
  }

  private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
    return [1, 2, 3, 4].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;     
      return `../../assets/slide1/${randomId}.png`;
    });
  }

}
