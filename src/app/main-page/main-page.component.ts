import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  hide = true;

  myModel = false; 
  login = "S0nechka";
  password = "birtDay_Girl!"

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    var newLogin = prompt("Give me a login!");
    var newPass = prompt("Give me a password!");
    if(newLogin == this.login && newPass == this.password) {
      this.router.navigateByUrl("");
    } else {
      this.router.navigateByUrl("error");
      alert("No, the data isn't correct!");
    }
  }
onChange(e) {
  this.myModel = e.checked;
}

flowerClick() {
  this.toastr.info('This background is made of your favourite flowers - peonies!');
}
showBalloon() {
  document.getElementById("container").style.display = "block";
}
showNext() {
  alert("Don't miss the emojies on the page! They may tell you something. Click on them and you will understand what you should do next!");
}
heartEmoji() {
  this.router.navigateByUrl('quiz');
}

}
