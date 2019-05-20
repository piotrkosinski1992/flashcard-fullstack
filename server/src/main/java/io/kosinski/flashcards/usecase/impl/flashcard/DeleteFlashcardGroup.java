package io.kosinski.flashcards.usecase.impl.flashcard;

import io.kosinski.flashcards.gateway.FlashcardRepo;
import io.kosinski.flashcards.usecase.Delete;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class DeleteFlashcardGroup implements Delete {

    private final FlashcardRepo flashCardRepo;

    public DeleteFlashcardGroup(FlashcardRepo flashCardRepo) {
        this.flashCardRepo = flashCardRepo;
    }

    @Transactional
    @Override
    public void deleteBy(String groupName) {
        //TODO
        flashCardRepo.removeByFlashcardGroupGroupName(groupName);
    }
}
