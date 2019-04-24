import { Alert, AlertType } from './alert/model/alert.model';
import { AppActionTypes, AppActions } from './app.actions';

export const featureName = 'appProperties';

export interface AppState {
  alerts: Alert[],
  message: string
}

const initialState: AppState = {
  alerts: [new Alert(AlertType.Success,"HELLO")],
  message: 'HELLO'
};

export function appReducer(state = initialState, action: AppActions) {
  switch(action.type) {
    case AppActionTypes.CLEAR_ALERTS: {
      return {
        ...state,
        alerts: []
      };
    }
    case AppActionTypes.ADD_ALERTS: {
      return {
        ...state,
        alerts: [...state.alerts, action.alerts]
      };
    }
    default:
      return {...state};
  }
}
