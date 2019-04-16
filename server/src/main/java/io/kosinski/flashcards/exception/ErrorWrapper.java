package io.kosinski.flashcards.exception;

public class ErrorWrapper {
    private String message;

    ErrorWrapper(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
