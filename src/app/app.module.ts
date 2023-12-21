import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { GetallComponent } from './getall/getall.component';
import { GetbyidComponent } from './getbyid/getbyid.component';
@NgModule({
  declarations: [
    AppComponent,
    
    PostComponent,
    UpdateComponent,
    GetallComponent,
    GetbyidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
