package io.kosinski.flashcards.exception;

public class InvalidFlashCardData extends RuntimeException {

    public InvalidFlashCardData(String errorMessage) {
        super(errorMessage);
    }
}
