import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SuiModule} from 'ng2-semantic-ui';
import {HttpClientModule} from '@angular/common/http'
// import {} from 'mapbox-gl'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SuiModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
