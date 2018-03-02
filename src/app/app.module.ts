import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Navbar } from './navbar.component'
import { AppComponent } from './app.component';
import { ImgFeed } from './imgfeed.component';
import { Image } from './image.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    ImgFeed,
    Image
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
