package io.kosinski.flashcards.entrypoint.result;

import io.kosinski.flashcards.domain.Result;
import io.kosinski.flashcards.usecase.impl.result.SaveResult;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(allowedHeaders = "*", value = "http://locahost:4200")
@RequestMapping(value = "/result")
public class SaveResultController {

    private final SaveResult saveResult;

    public SaveResultController(SaveResult saveResult) {
        this.saveResult = saveResult;
    }

    @PostMapping
    public int saveResult(@RequestBody Result result) {
        return saveResult.save(result);
    }
}
