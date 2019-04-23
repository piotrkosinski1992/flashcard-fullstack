import {Flashcard} from "../flashcard.model";

export class FlashcardGroup {

  public flashcardGroupName: string;
  public flashcards: Flashcard[];

  constructor(flashcardGroupName: string, flashcards: Flashcard[]) {
    this.flashcardGroupName = flashcardGroupName;
    this.flashcards = flashcards;
  }
}
