import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject = [{
    video: '/assets/video/1.mp4',
    title: 'First congratulation part!'
}, {
    video: '/assets/video/2.mp4',
    title: 'Second congratulation part!'
}, {
    video: '/assets/video/3.mp4',
    title: 'Third congratulation part!'
},
{
  video: '/assets/video/4.mp4',
  title: 'Fourth congratulation part!'
}];

}
