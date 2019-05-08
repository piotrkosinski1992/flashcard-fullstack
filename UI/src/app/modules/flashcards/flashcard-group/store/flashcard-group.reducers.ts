import { FlashcardGroup } from '../flashcard-group.model';
import { FlashcardGroupActions, FlashcardGroupActionTypes } from './flashcard-group.actions';

export interface FlashcardGroupState {
  flashcardGroups: FlashcardGroup[]
}

const initialState: FlashcardGroupState = {
  flashcardGroups: []
};

export function flashcardGroupReducer(state = initialState, action: FlashcardGroupActions) {
  switch (action.type) {
    case FlashcardGroupActionTypes.LOAD_FLASHCARD_GROUPS_SUCCESS: {
      return {
        ...state,
        flashcardGroups: [action.flashcardGroups]
      };
    }
    default:
      return {...state};
  }
}
