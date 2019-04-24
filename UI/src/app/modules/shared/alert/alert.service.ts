import {Injectable} from '@angular/core';
import {AppState} from "../app.reducers";
import {Store} from '@ngrx/store';
import * as AppActions from '../app.actions'
import {Alert, AlertType} from "./model/alert.model";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private store: Store<AppState>) { }

  successAlert(alertMessage: string) {
    this.store.dispatch(new AppActions.AddAlert(new Alert(AlertType.Success, alertMessage)))
  }

  warningAlert(alertMessage: string) {
    this.store.dispatch(new AppActions.AddAlert(new Alert(AlertType.Warning, alertMessage)))
  }

  errorAlert(alertMessage: string) {
    this.store.dispatch(new AppActions.AddAlert(new Alert(AlertType.Error, alertMessage)))
  }

  infoAlert(alertMessage: string) {
    this.store.dispatch(new AppActions.AddAlert(new Alert(AlertType.Info, alertMessage)))
  }

  clearAlerts() {
    this.store.dispatch(new AppActions.ClearAlerts())
  }
}
