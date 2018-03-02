import { Component, Input } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class Image {
    @Input() image;
}