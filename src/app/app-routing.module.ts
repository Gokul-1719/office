import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { GetallComponent } from './getall/getall.component';
import { GetbyidComponent } from './getbyid/getbyid.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"getall",component:GetallComponent},
  {path:"",redirectTo:"update",pathMatch:"full"},
  {path:"post",component:PostComponent},
  {path:"getbyid/:id",component:GetbyidComponent},
  {path:"update/:id",component:UpdateComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
