package io.kosinski.flashcards.entrypoint;

import io.kosinski.flashcards.usecase.impl.UploadFlashCards;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin(allowedHeaders = "*", value = "http://localhost:4200")
public class UploadFlashCardController
{
    private final UploadFlashCards uploadFlashCards;

    public UploadFlashCardController(UploadFlashCards uploadFlashCards) {
        this.uploadFlashCards = uploadFlashCards;
    }

    @PostMapping("/upload")
    public void uploadFromFile(@RequestParam("file") MultipartFile file) throws IOException
    {
        String flashcards = new String(file.getBytes(), "UTF-8");
        uploadFlashCards.uploadFromString(flashcards,";");
    }
}


