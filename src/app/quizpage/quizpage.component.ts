import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent implements OnInit {

  constructor(private http:HttpClient,private authenticate:AuthenticationService,private router:Router) { 
    if(authenticate.islogin()==true){
      this.mail=authenticate.getmail();
    }
    else{
      alert("Aww snap!! Bad request");
      router.navigate(['admin']);
    }
  }

  
  ngOnInit(): void {
  }
  subject:string;
  public message:string="";
  public mail:string="";

  onsubmit():void{
    console.log(this.subject);
  }

  public uploadFile=(files:any)=>{
    if(files.length===0){
      return ;
    }
    let fileToUpload=<File>files[0];
    const formData=new FormData();
    formData.append('file',fileToUpload,this.subject+"+"+this.mail+"+"+fileToUpload.name);
    this.http.post<any>('https://localhost:44355/api/FIleUpload',formData).subscribe(data=>{
      console.log(data.message);
      alert(data.message);
    })
  }

}
