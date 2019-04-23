package io.kosinski.flashcards.usecase;

import io.kosinski.flashcards.domain.FlashCard;

import java.util.Collection;

public interface Upload {
    void uploadFromString(String data, String fileName);

    void uploadFromArray(Collection<FlashCard> flashcards, String groupName);
}
