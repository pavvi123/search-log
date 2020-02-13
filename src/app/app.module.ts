import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { FilterPipe } from './search/filter.pipe';
import { FormsModule } from '@angular/forms'

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
