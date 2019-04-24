import { Component, OnInit } from '@angular/core';
import { Alert } from './model/alert.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  private alerts: Alert[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('core').subscribe(store => {
      this.alerts = store.alerts
    })
  }

}
