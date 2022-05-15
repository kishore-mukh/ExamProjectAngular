import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ProregisterComponent } from './proregister/proregister.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { UserlandingpageComponent } from './userlandingpage/userlandingpage.component';
import { ViewscoreComponent } from './viewscore/viewscore.component';

const routes: Routes = [
  {path:'admin',component:AdminloginComponent},
  {path:'forgotpass',component:ForgotpassComponent },
  {path:'student',component:StudentloginComponent},
  {path:'Register',component:ProregisterComponent},
  {path:'Userlanding',component:UserlandingpageComponent},
  {path:'uploadfile',component:FileuploadComponent},
  {path:'resetpassword',component:ResetpassComponent},
  {path:'studentresult',component:ViewscoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
