import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    images = [
        'https://upload.wikimedia.org/wikipedia/commons/5/5d/2018_Skoda_Octavia_SE_TDi_S-A_1.6_Front.jpg',
        'https://www.irishtimes.com/polopoly_fs/1.3727295.1544520250!/image/image.jpg_gen/derivatives/box_620_330/image.jpg',
        'https://media.zigcdn.com/media/model/2017/Nov/octavia-right_600x300.jpg',
        // tslint:disable-next-line: max-line-length
        'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20180201024812_Kodiaq+Corner.jpg&h=578&w=872&c=1'

    ];
    selectedImage: string;

    constructor() {
        // this.selectedImage = this.images[0];

    }

    ngOnInit() {
    }

    selectImage(url: string) {
        this.selectedImage = url;
    }

}
