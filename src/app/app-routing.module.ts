import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AllstudentresultComponent } from './allstudentresult/allstudentresult.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ProregisterComponent } from './proregister/proregister.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
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
  {path:'studentresult',component:ViewscoreComponent},
  {path:'allstudentresult',component:AllstudentresultComponent},
  {path:'adminlanding',component:AdminlandingComponent},
  {path:'quizpage',component:QuizpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
