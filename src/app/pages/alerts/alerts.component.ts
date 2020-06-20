import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Alert } from 'src/app/core/models';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  alerts: Observable<Alert[]>;

  constructor() { }

  ngOnInit() {
    this.alerts = from([[
      {
        name: 'Temperature is too high',
        description: 'Awesome decription',
        emails: 12,
        smss: 0,
        webhooks: 6,
        alerts: 5,
        status: 'active',
      },
      {
        name: 'RPM is too high',
        description: 'Awesome decription',
        emails: 2,
        smss: 5,
        webhooks: 6,
        alerts: 7,
        status: 'active',
      },
      {
        name: 'Temperature is too low',
        description: 'Awesome decription',
        emails: 0,
        smss: 5,
        webhooks: 6,
        alerts: 8,
        status: 'active',
      },
      {
        name: 'Cooling is required',
        description: 'Awesome decription',
        emails: 0,
        smss: 5,
        webhooks: 0,
        alerts: 15,
        status: 'active',
      }
    ]])
  }
}
