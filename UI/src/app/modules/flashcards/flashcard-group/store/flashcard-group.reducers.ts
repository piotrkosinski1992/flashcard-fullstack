import {FlashcardGroup} from '../flashcard-group.model';
import {FlashcardGroupActions, FlashcardGroupActionTypes} from './flashcard-group.actions';
import {Flashcard} from "../../flashcard.model";

export interface FlashcardGroupState {
  flashcardGroups: FlashcardGroup[],
  activeFlashcardGroup: Flashcard[]
}

const initialState: FlashcardGroupState = {
  flashcardGroups: [],
  activeFlashcardGroup: []
};

export function flashcardGroupReducer(state = initialState, action: FlashcardGroupActions) {
  switch (action.type) {
    case FlashcardGroupActionTypes.CLEAR_ACTIVE_FLASHCARD_GROUP: {
      return {
        ...state,
        activeFlashcardGroup: []
      }
    }
    case FlashcardGroupActionTypes.LOAD_ACTIVE_FLASHCARD_GROUP_SUCCESS: {
      return {
        ...state,
        activeFlashcardGroup: action.activeFlashcardGroup
      }
    }
    case FlashcardGroupActionTypes.LOAD_FLASHCARD_GROUP_SUCCESS: {
      return {
        ...state,
        flashcardGroups: action.flashcardGroups
      };
    }
    case FlashcardGroupActionTypes.LOAD_FLASHCARD_GROUP_FAILED: {
      return {
        ...state
      };
    }
    default:
      return {...state};
  }
}
