import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel

import { AppComponent } from './app.component';
import { RoomOfExamplesComponent } from './room-of-examples/room-of-examples.component';
import { TodoDataService } from './todo-data.service';


@NgModule({
  declarations: [
    AppComponent,
    RoomOfExamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
