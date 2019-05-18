import {Flashcard} from "../../flashcards/flashcard.model";
import {GameActions, GameActionTypes} from "./game.actions";

export interface GameState {
  activeFlashcardGroup: Flashcard[]
  activeFlashcard: Flashcard
  correctAnswers: number,
  incorrectAnswers: number,
  questionsLeft: number
}

const initialState: GameState = {
  activeFlashcardGroup: [],
  activeFlashcard: null,
  correctAnswers: 0,
  incorrectAnswers: 0,
  questionsLeft: 0
};

export function gameReducer(state = initialState, action: GameActions) {
  switch(action.type) {

    case GameActionTypes.INCREMENT_CORRECT_ANSWERS: {
      return {
        ...state,
        correctAnswers: state.correctAnswers +1,
        questionsLeft: state.questionsLeft -1
      }
    }
    case GameActionTypes.INCREMENT_INCORRECT_ANSWERS: {
      return {
        ...state,
        incorrectAnswers: state.incorrectAnswers +1
      }
    }
    case GameActionTypes.DELETE_FLASHCARD: {
      return {
        ...state,
        activeFlashcardGroup: state.activeFlashcardGroup.filter(item => item !== action.flashcard)
      }
    }

    case GameActionTypes.SET_ACTIVE_FLASHCARD: {
      return {
        ...state,
        activeFlashcard: action.flashcard
      }
    }

    case GameActionTypes.CLEAR_ACTIVE_FLASHCARD_GROUP: {
      return {
        ...state,
        activeFlashcardGroup: []
      }
    }
    case GameActionTypes.LOAD_ACTIVE_FLASHCARD_GROUP_SUCCESS: {
      return {
        ...state,
        activeFlashcardGroup: action.activeFlashcardGroup,
        questionsLeft: action.activeFlashcardGroup.length
      }
    }

    default:
      return {
        ...state
      }
  }
}
