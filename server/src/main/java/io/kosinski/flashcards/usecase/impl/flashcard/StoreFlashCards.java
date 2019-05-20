package io.kosinski.flashcards.usecase.impl.flashcard;

import io.kosinski.flashcards.domain.Flashcard;
import io.kosinski.flashcards.gateway.FlashcardRepo;
import io.kosinski.flashcards.usecase.Store;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class StoreFlashCards implements Store {

    private final FlashcardRepo flashCardRepo;

    public StoreFlashCards(FlashcardRepo flashCardRepo) {
        this.flashCardRepo = flashCardRepo;
    }

    @Override
    public void storeOne(Flashcard flashCard) {
        flashCardRepo.save(flashCard);
    }

    @Override
    public void storeAll(Collection<Flashcard> flashcards) {
        flashCardRepo.saveAll(flashcards);
    }
}
