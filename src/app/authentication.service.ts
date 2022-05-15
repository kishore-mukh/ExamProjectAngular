import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  constructor() { }
  usermail:string="";
  chklogin:boolean=false;

  setlogin(mail:string):void{
    this.usermail=mail;
    this.chklogin=true;
  }

  islogin():boolean{
    return this.chklogin;
  }
  getmail():string{
    return this.usermail;
  }

  logout():void{
    this.usermail="";
    this.chklogin=false;
  }
}
