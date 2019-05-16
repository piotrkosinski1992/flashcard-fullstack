package io.kosinski.flashcards.entrypoint.flashcard;

import io.kosinski.flashcards.domain.FlashCard;
import io.kosinski.flashcards.usecase.impl.flashcard.UploadFlashCards;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collection;

@RestController
@CrossOrigin(allowedHeaders = "*", value = "http://localhost:4200")
public class UploadFlashcardController
{
    private final UploadFlashCards uploadFlashCards;

    public UploadFlashcardController(UploadFlashCards uploadFlashCards) {
        this.uploadFlashCards = uploadFlashCards;
    }

    @PostMapping("/upload/file")
    public void uploadFromFile(@RequestParam("file") MultipartFile file) throws IOException
    {
        String flashcards = new String(file.getBytes(), "UTF-8");
        uploadFlashCards.uploadFromString(flashcards, file.getOriginalFilename());
    }

    @PostMapping("/upload/array/{groupName}")
    public void uploadFromArray(@RequestBody Collection<FlashCard> flashcards, @PathVariable String groupName) throws MaxUploadSizeExceededException
    {
        uploadFlashCards.uploadFromArray(flashcards, groupName);
    }
}


