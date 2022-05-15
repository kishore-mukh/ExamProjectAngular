import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlandingpage',
  templateUrl: './userlandingpage.component.html',
  styleUrls: ['./userlandingpage.component.css']
})
export class UserlandingpageComponent implements OnInit {

  constructor(private authenticate:AuthenticationService,private router:Router) {
    if(authenticate.islogin()==false){
      alert("Aww snap!! Bad request");
      router.navigate(['student']);
    }
    else{
      console.log(authenticate.getmail());
    }
   }

  ngOnInit(): void {
  }

  Logout():void{
    this.authenticate.logout();
    alert("Logged out successfully");
    this.router.navigate(['student']);

  }
  results():void{
    this.router.navigate(['studentresult']);
  }
}
