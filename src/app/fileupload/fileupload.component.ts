import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

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
  public message:string="";
  public progress:number=0;
  public mail:string="";

  public uploadFile=(files:any)=>{
    if(files.length===0){
      return ;
    }
    let fileToUpload=<File>files[0];
    const formData=new FormData();
    formData.append('file',fileToUpload,"abcd"+"+"+this.mail);
    this.http.post<any>('https://localhost:44355/api/FIleUpload',formData).subscribe(data=>{
      console.log(data);
      alert(data);
    })
  }
}
