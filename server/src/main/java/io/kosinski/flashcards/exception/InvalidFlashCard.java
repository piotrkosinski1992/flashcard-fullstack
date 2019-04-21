package io.kosinski.flashcards.exception;

public class InvalidFlashCard extends RuntimeException {

    public InvalidFlashCard(String errorMessage) {
        super(errorMessage);
    }
}
