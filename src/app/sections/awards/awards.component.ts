import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  public awardList = [
    { id: '1', imageUrl: '/assets/img/awards/award-1.png' },
    { id: '2', imageUrl: '/assets/img/awards/award-2.png' },
    { id: '3', imageUrl: '/assets/img/awards/award-3.png' },
    { id: '4', imageUrl: '/assets/img/awards/award-4.png' },
    { id: '5', imageUrl: '/assets/img/awards/award-5.png' },
    { id: '6', imageUrl: '/assets/img/awards/award-6.png' },
    { id: '7', imageUrl: '/assets/img/awards/award-7.png' },
    { id: '8', imageUrl: '/assets/img/awards/award-8.png' },
    { id: '9', imageUrl: '/assets/img/awards/award-9.png' },
    { id: '10', imageUrl: '/assets/img/awards/award-10.png' },
    { id: '11', imageUrl: '/assets/img/awards/award-11.png' },
    { id: '12', imageUrl: '/assets/img/awards/award-12.png' }
  ];

  constructor() {}

  ngOnInit() {}
}
