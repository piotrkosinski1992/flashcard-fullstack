package io.kosinski.flashcards.usecase.impl.flashcard;

import io.kosinski.flashcards.gateway.FlashcardGroupRepo;
import io.kosinski.flashcards.usecase.Delete;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class DeleteFlashcardGroup implements Delete {

    private final FlashcardGroupRepo flashcardGroupRepo;

    public DeleteFlashcardGroup(FlashcardGroupRepo flashcardGroupRepo) {
        this.flashcardGroupRepo = flashcardGroupRepo;
    }

    @Transactional
    @Override
    public void deleteBy(String groupName) {
        flashcardGroupRepo.removeByName(groupName);
    }
}
