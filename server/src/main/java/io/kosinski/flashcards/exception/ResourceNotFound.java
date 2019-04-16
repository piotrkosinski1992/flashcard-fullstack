package io.kosinski.flashcards.exception;

public class ResourceNotFound extends RuntimeException {

    public ResourceNotFound(String errorMessage) {
        super(errorMessage);
    }
}
