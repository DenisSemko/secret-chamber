import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {

  firstQuestion = "10.01.2020";
  thirdQuestion = "Пупсолендия";
  fourthQuestion = "тюлень, привет кенгуру, привет октябрёнок, привет барашик, привет Осми";
  constructor(private router: Router) { }

  ngOnInit() {
    alert("Hello, my dear Sonechka! You're wondering, what is that and how this is refered to your birthday. " + 
    "I was thinking about how to present my greetings to you. That is why, I have created a quiz for you!");
    alert("There are 4 blocks for you to solve. Each of them has its own question or task. Solve all of them using Russian(only) language and then you will see my greeting to you! I hope you really want to see that))) P.S. Tasks are very easy! Good luck, my love ❤️");
  }
  showFirstVideo() {
    document.getElementById("video-first").style.display="inline";
    document.getElementById("btn-question-mark").style.display="inline";
    document.getElementById("btn-second").style.top="20%";
    document.getElementById("btn-second").style.display="none";
    document.getElementById("btn-third").style.display="none";
    document.getElementById("btn-fourth").style.display="none";
  }
  showSecondVideo(){
    document.getElementById("video-second").style.display="inline";
    document.getElementById("btn-question-halo").style.display="inline";
    document.getElementById("btn-second").style.top="10%";
    document.getElementById("btn-first").style.display="none";
    document.getElementById("btn-third").style.display="none";
    document.getElementById("btn-fourth").style.display="none";
  }
  showThirdVideo() {
    document.getElementById("video-third").style.display="inline";
    document.getElementById("btn-house").style.display="inline";
    document.getElementById("btn-first").style.display="none";
    document.getElementById("btn-second").style.display="none";
    document.getElementById("btn-fourth").style.display="none";
  }
  showFourthVideo() {
    document.getElementById("video-fourth").style.display="inline";
    document.getElementById("btn-sparkle").style.display="inline";
    document.getElementById("btn-first").style.display="none";
    document.getElementById("btn-second").style.display="none";
    document.getElementById("btn-third").style.display="none";
  }
  askFirstQuestion(){
    var firstQuestion = prompt("Please fill the date: ");
    if(firstQuestion == this.firstQuestion) {
      alert("Yes, you're right!");
      document.getElementById("video-first").style.display="none";
      document.getElementById("btn-question-mark").style.display="none";
      document.getElementById("btn-first").style.backgroundColor ="#3dd995";
      document.getElementById("btn-second").style.top="40%";
      document.getElementById("btn-first").setAttribute("disabled", "true");
      document.getElementById("btn-second").style.display="inline";
      document.getElementById("btn-third").style.display="inline";
      document.getElementById("btn-fourth").style.display="inline";
    } else {
      alert("No, you're not right:( Try again!");
    }
  }
  askSecondQuestion() {
    document.getElementById("block").style.display="inline-block";
  }
  askThirdQuestion() {
    var thirdQuestion = prompt("Please write the name of that place: ");
    if(thirdQuestion == this.thirdQuestion) {
      alert("Yes, you're right!");
      document.getElementById("video-third").style.display="none";
      document.getElementById("btn-house").style.display="none";
      document.getElementById("btn-third").style.backgroundColor ="#3dd995";
      document.getElementById("btn-third").setAttribute("disabled", "true");
      document.getElementById("btn-first").style.display="inline";
      document.getElementById("btn-second").style.display="inline";
      document.getElementById("btn-fourth").style.display="inline";

    } else {
      alert("No, you're not right:( Try again!");
    }
  }
  askFourthQuestion() {
    var fourthQuestion = prompt("Continue the phrase 'привет пингвин, привет ...':");
    if(fourthQuestion == this.fourthQuestion) {
      alert("Yes, you're right!");
      document.getElementById("video-fourth").style.display="none";
      document.getElementById("btn-sparkle").style.display="none";
      document.getElementById("btn-fourth").style.backgroundColor ="#3dd995";
      document.getElementById("btn-fourth").setAttribute("disabled", "true");
      document.getElementById("btn-first").style.display="inline";
      document.getElementById("btn-second").style.display="inline";
      document.getElementById("btn-third").style.display="inline";
      setTimeout(() => {
        this.router.navigateByUrl('final')
      }
      , 5000);
    } else {
      alert("No, you're not right:( Try again!");
    }
  }
  answerSecondQuestion() {
    if(document.querySelector('input[id=all]:checked') != null) {
      alert("Yes, you're right!");
      document.getElementById("video-second").style.display="none";
      document.getElementById("btn-question-halo").style.display="none";
      document.getElementById("btn-second").style.backgroundColor ="#3dd995";
      document.getElementById("btn-second").style.top="40%";
      document.getElementById("btn-second").setAttribute("disabled", "true");
      document.getElementById("block").style.display="none";
      document.getElementById("btn-first").style.display="inline";
      document.getElementById("btn-third").style.display="inline";
      document.getElementById("btn-fourth").style.display="inline";
    } else {
      alert("No, you're not right:( Try again!");
    }
  }


}
