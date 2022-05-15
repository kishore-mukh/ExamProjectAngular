import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormBuilder,FormControl,FormGroup, Validators}from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SigninService } from '../signin.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  logingrp!:FormGroup;
  constructor(private FormBuilder:FormBuilder,private http:HttpClient,private router :Router,private api:SigninService,private authenticate:AuthenticationService) { }

  ngOnInit(): void {
    this.logingrp=this.FormBuilder.group    ({
      email:['',[Validators.required]],
     password:['',[Validators.required]],
  });
  }

  Toregister():void{
    this.router.navigate(['Register']);
  }
  Toforgot():void{
    this.router.navigate(['forgotpass']);
  }
  login(formdata:any)
  {
    
    this.api.adminsignin(formdata.email,formdata.password).subscribe(data=>{
    if(data.message=="Login successfully")
    {
    console.log(data);
    this.authenticate.setlogin(formdata.email);
    alert(data.message);
    
    this.router.navigate(['uploadfile']);
    this.logingrp.reset();
    }
    else
    {
      console.log(data)
      alert(data.message);
      this.logingrp.reset();
    }
    
  
  });
  }  
adminlog()
{
  this.router.navigate(['admin']); 
}
studlog()
{
  this.router.navigate(['student']); 
}

}
