import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { AppComponent }   from './app.component';
import { AgmCoreModule}   from '@agm/core'; // <---Questa dovrebbe già essere presente
import {HttpClientModule} from '@angular/common/http'; // <---


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDS4Ti2_c5NWdmJG-3jyGWtVb-7S2c2gqE'})   ,     // <---ricorda la virgola
    HttpClientModule // <---
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
