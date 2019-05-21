package io.kosinski.flashcards.usecase.impl.result;

import io.kosinski.flashcards.domain.FlashcardGroup;
import io.kosinski.flashcards.domain.Result;
import io.kosinski.flashcards.gateway.FlashcardGroupRepo;
import io.kosinski.flashcards.gateway.ResultRepo;
import org.springframework.stereotype.Service;

@Service
public class SaveResult {

    private final FlashcardGroupRepo flashcardGroupRepo;

    public SaveResult(FlashcardGroupRepo flashcardGroupRepo) {
        this.flashcardGroupRepo = flashcardGroupRepo;
    }

    public int save(Result result) {
        int score = calculateResult(result.getCorrectAnswers(), result.getIncorrectAnswers());

        result.setFinalScore(score);
        FlashcardGroup group = flashcardGroupRepo.findByName(result.getGroupName());

        result.setFlashcardGroup(group);
        group.setResult(result);
        flashcardGroupRepo.save(group);

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
