import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  a:any;
  b:any;
  c:any;
  updatepass(formdata:any):void{
    this.http.get<string>('https://localhost:44355/api/Email/resetpass?mail='+formdata.e_mail+'&oldpass='+formdata.passkey+'&newpass='+formdata.repass,{ responseType: 'text' as 'json' }).subscribe(data=>{
    alert(data);
    })
  }


}
