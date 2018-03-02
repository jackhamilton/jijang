import { Component } from '@angular/core';

@Component({
  selector: 'imgfeed',
  templateUrl: './imgfeed.component.html',
  styleUrls: ['./imgfeed.component.css']
})
export class ImgFeed {
  images = ["./assets/tahmkench.jpg", 
  "./assets/camera.jpg",
  "./assets/dino.jpg",
  "./assets/freshfarm.jpg",
  "./assets/mask.jpg",
  "./assets/rose.jpg",
  "./assets/skull.jpg",
  "./assets/tv.jpg"]; 
}