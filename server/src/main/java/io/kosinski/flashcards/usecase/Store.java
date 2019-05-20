package io.kosinski.flashcards.usecase;

import io.kosinski.flashcards.domain.Flashcard;

import java.util.Collection;

public interface Store {

    void storeOne(Flashcard flashCard);

    void storeAll(Collection<Flashcard> flashcards);
}
