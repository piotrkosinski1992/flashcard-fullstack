package io.kosinski.flashcards.usecase;

import io.kosinski.flashcards.domain.Flashcard;

import java.util.Collection;

public interface Upload {
    void uploadFromString(String data, String fileName);

    void uploadFromArray(Collection<Flashcard> flashcards, String groupName);
}
