package io.kosinski.flashcards.usecase.impl;

import io.kosinski.flashcards.gateway.FlashCardRepo;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class FindFlashcardGroups {

    private final FlashCardRepo flashCardRepo;

    public FindFlashcardGroups(FlashCardRepo flashCardRepo) {
        this.flashCardRepo = flashCardRepo;
    }

    public Collection<String> all() {
        return flashCardRepo.findDistinctGroupNames();
    }
}
