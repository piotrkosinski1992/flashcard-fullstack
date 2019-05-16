package io.kosinski.flashcards.usecase.impl.result;

import io.kosinski.flashcards.domain.Result;
import io.kosinski.flashcards.gateway.ResultRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetResult {

    private final ResultRepo resultRepo;

    public GetResult(ResultRepo resultRepo) {
        this.resultRepo = resultRepo;
    }

    public List<Result> allForGroupNameDesc(String groupName) {
        return resultRepo.findByGroupNameOrderByFinalScoreDesc(groupName);
    }
}
