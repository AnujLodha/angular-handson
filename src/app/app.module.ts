import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HotTableModule } from '@handsontable/angular'
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, HotTableModule.forRoot() ],
  declarations: [AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
