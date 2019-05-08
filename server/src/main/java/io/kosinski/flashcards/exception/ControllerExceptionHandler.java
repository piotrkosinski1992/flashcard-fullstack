package io.kosinski.flashcards.exception;

import org.apache.tomcat.util.http.fileupload.FileUploadBase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;


import java.util.Optional;

@ControllerAdvice
public class ControllerExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(ControllerExceptionHandler.class);

    @ExceptionHandler(ResourceNotFound.class)
    public ResponseEntity<ErrorWrapper> handleIOException(final ResourceNotFound e) {
        logger.error("Resource not found");
        return error(e, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(GroupNameAlreadyExists.class)
    public ResponseEntity<ErrorWrapper> handleGroupNameAlreadyExists(final GroupNameAlreadyExists e) {
        logger.error("GroupName already exists");
        return error(e, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidFlashCardData.class)
    public ResponseEntity<ErrorWrapper> handleInvalidFlashCardDataException(final InvalidFlashCardData e) {
        logger.error("Invalid flashcard data");
        return error(e, HttpStatus.BAD_REQUEST);
    }

    //TODO working but not always :D
    @ExceptionHandler(value = {MaxUploadSizeExceededException.class})
    public ResponseEntity<ErrorWrapper> handleMaxUploadSizeExceededException(final MaxUploadSizeExceededException e) {
        logger.error("Too big file!");
        return error(e, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidFileFormat.class)
    public ResponseEntity<ErrorWrapper> handleInvalidFileFormat(final MaxUploadSizeExceededException e) {
        logger.error("Wrong file format");
        return error(e, HttpStatus.BAD_REQUEST);
    }

    private ResponseEntity<ErrorWrapper> error(final Exception exception, final HttpStatus httpStatus) {
        String message = Optional.of(exception.getMessage()).orElse(exception.getClass().getSimpleName());
        return new ResponseEntity<>(new ErrorWrapper(message), httpStatus);
    }
}

