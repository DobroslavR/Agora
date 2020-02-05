import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  /* public faAngelRight = faAngle; */

  public serviceData = [
    {
      iconUrl: '/assets/img/services/service-1.svg',
      heading: 'Free shipping',
      text:
        'Proin hendrerit suscipit justo, luctus volutpat leo sollicitudin ac. ',
      linkText: 'More info'
    },
    {
      iconUrl: '/assets/img/services/service-2.svg',
      heading: '24/7 Technical Support',
      text:
        'Proin hendrerit suscipit justo, luctus volutpat leo sollicitudin ac. ',
      linkText: 'More info'
    },
    {
      iconUrl: '/assets/img/services/service-3.svg',
      heading: 'Return and exchanges',
      text:
        'Proin hendrerit suscipit justo, luctus volutpat leo sollicitudin ac. ',
      linkText: 'More info'
    },
    {
      iconUrl: '/assets/img/services/service-4.svg',
      heading: 'Customer loyalty programs',
      text:
        'Proin hendrerit suscipit justo, luctus volutpat leo sollicitudin ac. ',
      linkText: 'More info'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
