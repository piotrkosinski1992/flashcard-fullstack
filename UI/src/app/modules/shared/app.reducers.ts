import {Alert} from './alert/model/alert.model';
import {AppActions, AppActionTypes} from './app.actions';
import {FlashcardGroup} from "../flashcards/flashcard-group/flashcard-group.model";

export const featureName = 'appProperties';

export interface AppState {
  alerts: Alert[]
  flashcardGroups: FlashcardGroup[]
}

const initialState: AppState = {
  alerts: [],
  flashcardGroups: []
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
        alerts: [...state.alerts, action.alert]
      };
    }
    default:
      return {...state};
  }
}
