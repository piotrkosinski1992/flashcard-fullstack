package io.kosinski.flashcards.usecase;

import io.kosinski.flashcards.domain.FlashCard;

import java.util.Collection;

public interface IStoreFlashCard {

    void storeOne(FlashCard flashCard);

    void storeAll(Collection<FlashCard> flashCards);
}
