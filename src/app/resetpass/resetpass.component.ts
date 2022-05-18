import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  a:any;
  b:string;
  c:string;
  updatepass(formdata:any):void{
    this.http.get<string>('https://localhost:44355/api/Email/resetpass?mail='+formdata.e_mail+'&oldpass='+this.b+'&newpass='+this.c,{ responseType: 'text' as 'json' }).subscribe(data=>{
    alert(data);
    this.router.navigate(['admin']);
    })
    console.log(formdata);
  }


}
