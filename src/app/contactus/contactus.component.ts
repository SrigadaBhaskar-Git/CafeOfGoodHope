import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  sendData(DataFromForm:NgForm){
    console.log("data of the form is" , DataFromForm.value);
    alert("Your responce has been recorded succcessfully, we will get back to you soon......!");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
