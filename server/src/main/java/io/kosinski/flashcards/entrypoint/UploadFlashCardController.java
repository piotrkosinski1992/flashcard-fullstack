package io.kosinski.flashcards.entrypoint;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(allowedHeaders = "*", value = "http://localhost:4200")
public class UploadFlashCardController
{

    @PostMapping("/upload")
    public void uploadFromFile(@RequestParam("file") MultipartFile file) throws IOException
    {
        String content = new String(file.getBytes(), "UTF-8");

        System.out.println(content);
    }

    public File convert(MultipartFile file) throws IOException
    {
        File convFile = new File(file.getOriginalFilename());
        convFile.createNewFile();
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }
}


