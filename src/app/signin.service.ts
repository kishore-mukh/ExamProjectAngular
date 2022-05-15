import { Injectable } from '@angular/core';
import { RegisterTable } from './Model/RegisterTable';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Result } from './Model/Result';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  req:string="https://localhost:44355/api/Login";
  constructor(private http:HttpClient) { }

  //Register
  ProRegister(R:RegisterTable):Observable<boolean>
  {
    //debugger;
    return this.http.post<boolean>(this.req+"/Project",R,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }
  //UserLogin
  signin(email:string,password:string)
  {
    return this.http.post<any>("https://localhost:44355/api/Login",{email,password})
  } 
  //admin login
  adminsignin(email:string,password:string)
  {
    return this.http.post<any>("https://localhost:44355/api/Login/admin",{email,password})
  } 
  
  sendmail(eid:string):Observable<string>
  {
    // debugger;
    return this.http.get<string>("https://localhost:44355/api/Email?mailid="+eid,{ responseType: 'text' as 'json' });
  } 
 
  viewscore(rid:string):Observable<Result[]>
  {
     return this.http.get<Result[]>("https://localhost:44355/api/Login/studentresult?mail="+rid);
   }

   adminviewscore():Observable<Result[]>
   {
     return this.http.get<Result[]>("https://localhost:44355/api/Login/result");
   }

}
