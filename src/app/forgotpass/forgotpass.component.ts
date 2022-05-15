import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private methods:SigninService) { }
  mail:string="";

  ngOnInit(): void {
  }
  studlog()
  {
    this.router.navigate(['student']); 
  }
  onsubmit():void{
    console.log(this.mail);
    // this.http.get<string>('https://localhost:44355/api/Email?mailid='+this.mail).subscribe(data=>{
    // alert(data);
    // })

    this.methods.sendmail(this.mail).subscribe(data=>{
      alert(data);
      //this.router.navigate(['Login']);
    })
  }
}
