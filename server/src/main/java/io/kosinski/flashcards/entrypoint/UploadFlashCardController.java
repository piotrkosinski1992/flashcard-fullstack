package io.kosinski.flashcards.entrypoint;

import io.kosinski.flashcards.domain.FlashCard;
import io.kosinski.flashcards.usecase.impl.UploadFlashCards;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collection;

@RestController
@CrossOrigin(allowedHeaders = "*", value = "http://localhost:4200")
public class UploadFlashCardController
{
    private final UploadFlashCards uploadFlashCards;

    public UploadFlashCardController(UploadFlashCards uploadFlashCards) {
        this.uploadFlashCards = uploadFlashCards;
    }

    @PostMapping("/upload/file")
    public void uploadFromFile(@RequestParam("file") MultipartFile file) throws IOException
    {
        String flashcards = new String(file.getBytes(), "UTF-8");
        uploadFlashCards.uploadFromString(flashcards,";");
    }

    @PostMapping("/upload/array")
    public void uploadFromArray(@RequestBody Collection<FlashCard> flashcards)
    {
        uploadFlashCards.uploadFromArray(flashcards);
    }
}


