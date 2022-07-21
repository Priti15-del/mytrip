import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripseriveService } from 'src/app/my-services/tripserive.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data:any;
  msg:any;
  loginform=new FormGroup({
  email:new FormControl(""),
  password :new FormControl("")
})
  constructor(private route:Router, private activateroute:ActivatedRoute ,private service:TripseriveService) { }

  ngOnInit(): void {
this.service.loginpage().subscribe((res:any)=>
{
  this.data=res?.userlogin
  console.log(this.data)
})
  }
  submitfrom(){
    let passdata=this.data.find((elem:any)=>{
      return (this.loginform.value.email==elem.email && this.loginform.value.password==elem.password)
    })
    if(passdata){
      this.route.navigate(['/home'],{
        queryParams:{ppp:this.loginform.value.email}
      })}
      else
      {
        this.msg="Invaild Email ID"
      }
    }

  }

