import { Alert } from '../model/alert.model';
import { AlertActions, AlertActionTypes } from './alert.actions';

export const featureName = 'alertProperties';

export interface AlertState {
  alerts: Alert[]
}

const initialState: AlertState = {
  alerts: []
};

export function alertReducer(state = initialState, action: AlertActions) {
  switch(action.type) {
    case AlertActionTypes.CLEAR_ALERTS: {
      return {
        ...state,
        alerts: []
      };
    }
    case AlertActionTypes.ADD_ALERTS: {
      return {
        ...state,
        alerts: [...state.alerts, action.alert]
      };
    }
    default:
      return {...state};
  }
}
