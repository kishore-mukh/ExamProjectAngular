import { Component, OnInit } from '@angular/core';
import { Result } from '../Model/Result';
import { HttpClient } from '@angular/common/http';
import { SigninService } from '../signin.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-allstudentresult',
  templateUrl: './allstudentresult.component.html',
  styleUrls: ['./allstudentresult.component.css']
})
export class AllstudentresultComponent implements OnInit {

  constructor(private api:SigninService,private http:HttpClient,private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.api.adminviewscore().subscribe(data=> {this.lresult=data;
      console.log(data);
      });
  }
  lresult:Result[] = [];

}
