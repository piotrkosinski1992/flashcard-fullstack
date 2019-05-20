package io.kosinski.flashcards.usecase;

import io.kosinski.flashcards.domain.Flashcard;

import java.util.Collection;

public interface Find {

    Flashcard byId(Integer id);

    Collection<Flashcard> all();
}
