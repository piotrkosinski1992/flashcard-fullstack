package io.kosinski.flashcards.usecase.impl.flashcard;

import io.kosinski.flashcards.gateway.FlashCardRepo;
import io.kosinski.flashcards.usecase.Delete;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class DeleteFlashcardGroup implements Delete {

    private final FlashCardRepo flashCardRepo;

    public DeleteFlashcardGroup(FlashCardRepo flashCardRepo) {
        this.flashCardRepo = flashCardRepo;
    }

    @Transactional
    @Override
    public void deleteBy(String groupName) {
        flashCardRepo.removeByGroupName(groupName);
    }
}
