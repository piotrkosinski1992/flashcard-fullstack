import {Injectable} from '@angular/core';
import {AppState} from "../../store/app.reducers";
import {Store} from '@ngrx/store';
import * as AlertActions from '../alert/store/alert.actions'
import {Alert, AlertType} from "./model/alert.model";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private store: Store<AppState>) { }

  successAlert(alertMessage: string) {
    this.store.dispatch(new AlertActions.AddAlert(new Alert(AlertType.Success, alertMessage)))
  }

  warningAlert(alertMessage: string) {
    this.store.dispatch(new AlertActions.AddAlert(new Alert(AlertType.Warning, alertMessage)))
  }

  errorAlert(alertMessage: string) {
    this.store.dispatch(new AlertActions.AddAlert(new Alert(AlertType.Error, alertMessage)))
  }

  infoAlert(alertMessage: string) {
    this.store.dispatch(new AlertActions.AddAlert(new Alert(AlertType.Info, alertMessage)))
  }

  clearAlerts() {
    this.store.dispatch(new AlertActions.ClearAlerts())
  }
}
