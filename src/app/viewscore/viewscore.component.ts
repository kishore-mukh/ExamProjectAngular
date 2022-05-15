import { Component, OnInit } from '@angular/core';
import { Result } from '../Model/Result';
import { HttpClient } from '@angular/common/http';
import { SigninService } from '../signin.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-viewscore',
  templateUrl: './viewscore.component.html',
  styleUrls: ['./viewscore.component.css']
})
export class ViewscoreComponent implements OnInit {

  constructor(private api:SigninService,private http:HttpClient,private auth:AuthenticationService) {this.rid=auth.getmail(); }

  rid:string;
  lresult:Result[] = [];

  ngOnInit(): void {
    this.api.viewscore(this.rid).subscribe(data=> {this.lresult=data;
    console.log(data);
    });
  }


}
