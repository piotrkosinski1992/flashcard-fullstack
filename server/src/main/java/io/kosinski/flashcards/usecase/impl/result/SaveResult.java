package io.kosinski.flashcards.usecase.impl.result;

import io.kosinski.flashcards.domain.Result;
import io.kosinski.flashcards.gateway.ResultRepo;
import org.springframework.stereotype.Service;

@Service
public class SaveResult {

    private final ResultRepo resultRepo;

    public SaveResult(ResultRepo resultRepo) {
        this.resultRepo = resultRepo;
    }

    public int save(Result result) {
        int score = calculateResult(result.getCorrectAnswers(), result.getIncorrectAnswers());

        result.setFinalScore(score);
        resultRepo.save(result);

        return score;
    }

    private int calculateResult(int correctAnswers, int incorrectAnswers) {
        int score = (correctAnswers * 100)/(incorrectAnswers + correctAnswers);

        if(score > 100) {
            throw new RuntimeException("score bigger than 100");
        }

        return score;

    }
}
