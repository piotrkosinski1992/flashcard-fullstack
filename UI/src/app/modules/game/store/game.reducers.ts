import {Flashcard} from "../../flashcards/flashcard.model";
import {GameActions, GameActionTypes} from "./game.actions";

export interface GameState {
  activeFlashcardGroup: Flashcard[]
}

const initialState: GameState = {
  activeFlashcardGroup: []
};

export function gameReducer(state = initialState, action: GameActions) {
  switch(action.type) {
    case GameActionTypes.CLEAR_ACTIVE_FLASHCARD_GROUP: {
      return {
        ...state,
        activeFlashcardGroup: []
      }
    }
    case GameActionTypes.LOAD_ACTIVE_FLASHCARD_GROUP_SUCCESS: {
      return {
        ...state,
        activeFlashcardGroup: action.activeFlashcardGroup
      }
    }

    default:
      return {
        ...state
      }
  }
}
