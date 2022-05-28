import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  sendData(DataFromForm:NgForm){
    console.log("data from form is" , DataFromForm.value);
    alert("You are successfully registered to this website");
  }

  constructor() { }

  ngOnInit(): void {
  }

}