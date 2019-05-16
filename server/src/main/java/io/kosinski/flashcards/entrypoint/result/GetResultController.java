package io.kosinski.flashcards.entrypoint.result;

import io.kosinski.flashcards.domain.Result;
import io.kosinski.flashcards.usecase.impl.result.GetResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/result")
public class GetResultController {

    private final GetResult getResult;

    public GetResultController(GetResult getResult) {
        this.getResult = getResult;
    }

    @GetMapping("/{groupName}")
    public List<Result> allForGroupNameDesc(@PathVariable String groupName) {
        return getResult.allForGroupNameDesc(groupName);
    }
}
