import {Flashcard} from "../flashcard.model";

export class FlashcardGroup {

  public flashcardGroupSize: number;
  public flashcardGroupName: string;
  public flashcards: Flashcard[];

  constructor(flashcardGroupName: string, flashcards: Flashcard[], flashcardGroupSize: number) {
    this.flashcardGroupName = flashcardGroupName;
    this.flashcards = flashcards;
    this.flashcardGroupSize = flashcardGroupSize;
  }
}
