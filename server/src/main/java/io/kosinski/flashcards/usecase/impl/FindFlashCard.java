package io.kosinski.flashcards.usecase.impl;

import io.kosinski.flashcards.domain.FlashCard;
import io.kosinski.flashcards.exception.ResourceNotFound;
import io.kosinski.flashcards.gateway.FlashCardRepo;
import io.kosinski.flashcards.usecase.IFindFlashCard;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
class FindFlashCard implements IFindFlashCard {

    private final FlashCardRepo flashCardRepo;

    FindFlashCard(FlashCardRepo flashCardRepo) {
        this.flashCardRepo = flashCardRepo;
    }

    @Override
    public FlashCard byId(Integer id) {
        return flashCardRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFound(String.format("FlashCard with id %s doesn't exist", id)));
    }

    @Override
    public Collection<FlashCard> all() {
        return flashCardRepo.findAll();
    }
}
