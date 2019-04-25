package io.kosinski.flashcards.usecase.impl;

import io.kosinski.flashcards.domain.FlashCard;
import io.kosinski.flashcards.exception.ResourceNotFound;
import io.kosinski.flashcards.gateway.FlashCardRepo;
import io.kosinski.flashcards.usecase.Find;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
class FindFlashCard implements Find {

    private final FlashCardRepo flashCardRepo;

    FindFlashCard(FlashCardRepo flashCardRepo) {
        this.flashCardRepo = flashCardRepo;
    }

    public FlashCard byId(Integer id) {
        return flashCardRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFound(String.format("FlashCard with id %s doesn't exist", id)));
    }

    @Override
    public Collection<FlashCard> all() {
        return flashCardRepo.findAll();
    }
}
