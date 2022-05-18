import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminlanding',
  templateUrl: './adminlanding.component.html',
  styleUrls: ['./adminlanding.component.css']
})
export class AdminlandingComponent implements OnInit {

  constructor(private authenticate:AuthenticationService,private router:Router,private http:HttpClient) { 
    if(authenticate.islogin()==false){
    alert("Aww snap!! Bad request");
    router.navigate(['student']);
  }
  else{
    console.log(authenticate.getmail());
    this.mail=authenticate.getmail();
  }}

  public message:string="";
  
  public mail:string="";

  ngOnInit(): void {
  }
  Logout():void{
    this.authenticate.logout();
    alert("Logged out successfully");
    this.router.navigate(['student']);

  }
  results():void{
    this.router.navigate(['allstudentresult']);
  }
  
  public uploadFile=(files:any)=>{
    if(files.length===0){
      return ;
    }
    let fileToUpload=<File>files[0];
    const formData=new FormData();
    formData.append('file',fileToUpload,"sub001"+"+"+this.mail+"+"+fileToUpload.name);
    this.http.post<any>('https://localhost:44355/api/FIleUpload',formData).subscribe(data=>{
      console.log(data.message);
      alert(data.message);
    })
  }

}
