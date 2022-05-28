import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  sendData(DataFromForm:NgForm){
    console.log("data from form is" , DataFromForm.value);
    alert("You are succefully logged in")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
