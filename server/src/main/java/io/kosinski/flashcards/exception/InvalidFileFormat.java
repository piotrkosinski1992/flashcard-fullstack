package io.kosinski.flashcards.exception;

public class InvalidFileFormat extends RuntimeException {

    public InvalidFileFormat(String fileExtension) {
        super(String.format("wrong data format %s. Expected txt doc or docx", fileExtension));
    }
}
