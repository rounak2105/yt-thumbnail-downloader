import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yt-thumbnail';
  show = false;
  url = "https://i.ytimg.com/vi/";
  urlPost = "/maxresdefault.jpg";
  finalUrl = "";
  downloadImg(str) {
    this.finalUrl = "";
    this.finalUrl += this.url; 
    this.finalUrl += str.split("=")[1];
    this.finalUrl += this.urlPost;
    this.show = true;
    console.log(this.finalUrl)
  }

}
