package io.kosinski.flashcards.usecase.impl.flashcard;

import io.kosinski.flashcards.domain.Flashcard;
import io.kosinski.flashcards.exception.ResourceNotFound;
import io.kosinski.flashcards.gateway.FlashcardRepo;
import io.kosinski.flashcards.usecase.Find;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class FindFlashCard implements Find {

    private final FlashcardRepo flashCardRepo;

    FindFlashCard(FlashcardRepo flashCardRepo) {
        this.flashCardRepo = flashCardRepo;
    }

    public Flashcard byId(Integer id) {
        return flashCardRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFound(String.format("Flashcard with id %s doesn't exist", id)));
    }

    @Override
    public Collection<Flashcard> all() {
        return flashCardRepo.findAll();
    }
}

