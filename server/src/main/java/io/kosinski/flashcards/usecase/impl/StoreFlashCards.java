package io.kosinski.flashcards.usecase.impl;

import io.kosinski.flashcards.domain.FlashCard;
import io.kosinski.flashcards.gateway.FlashCardRepo;
import io.kosinski.flashcards.usecase.Store;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class StoreFlashCards implements Store {

    private final FlashCardRepo flashCardRepo;

    public StoreFlashCards(FlashCardRepo flashCardRepo) {
        this.flashCardRepo = flashCardRepo;
    }

    @Override
    public void storeOne(FlashCard flashCard) {
        flashCardRepo.save(flashCard);
    }

    @Override
    public void storeAll(Collection<FlashCard> flashCards) {
        flashCardRepo.saveAll(flashCards);
    }
}
