import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../signin.service';
import { RegisterTable } from '../Model/RegisterTable';

@Component({
  selector: 'app-proregister',
  templateUrl: './proregister.component.html',
  styleUrls: ['./proregister.component.css']
})
export class ProregisterComponent implements OnInit {

  constructor(private ConnectionService : SigninService, private router:Router) { }

  ngOnInit(): void {
  }

  pageData:RegisterTable={RId:"",RMail:"",RPassword:"",Name:""};
  re_password:any;
  agree_term:any;
  rid:any;

  ToHome():void{
    this.router.navigate(['admin']);
    console.log("Navigating to Home Page");
  }
  
  Register(formdata:any):void
  {
    //debugger;
    if(this.rid=="Admin"){
      this.pageData.RId="A";
    }
    else{
      this.pageData.RId="S";
    }
    console.log(this.pageData);
    this.ConnectionService.ProRegister(this.pageData).subscribe(data=>
    {
      if(data==true){
        alert("Register Successful");
        
      }
      else{
        alert("The entered Mail ID is already present");
        this.router.navigate(['']);
      }
    })

  }
}
