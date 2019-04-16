package io.kosinski.flashcards.usecase.impl;

import io.kosinski.flashcards.domain.FlashCard;
import io.kosinski.flashcards.gateway.FlashCardRepo;
import io.kosinski.flashcards.usecase.IStoreFlashCard;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
class StoreFlashCard implements IStoreFlashCard {

    private final FlashCardRepo flashCardRepo;

    public StoreFlashCard(FlashCardRepo flashCardRepo) {
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
