package io.kosinski.flashcards.exception;

public class GroupNameAlreadyExists  extends RuntimeException {

    public GroupNameAlreadyExists(String errorMessage) {
        super(errorMessage);
    }
}
