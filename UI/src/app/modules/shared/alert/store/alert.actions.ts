import { Action } from '@ngrx/store';
import { Alert } from '../model/alert.model';


export enum AlertActionTypes {
  ADD_ALERTS = '[core] add alerts',
  CLEAR_ALERTS = '[core] clear alerts',
}

export class AddAlert implements Action {
  readonly type = AlertActionTypes.ADD_ALERTS;

  constructor(public alert: Alert) {
  }
}

export class ClearAlerts implements Action {
  readonly type = AlertActionTypes.CLEAR_ALERTS;
}

export type AlertActions = AddAlert | ClearAlerts
