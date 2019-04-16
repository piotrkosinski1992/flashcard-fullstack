package io.kosinski.flashcards.usecase;

import io.kosinski.flashcards.domain.FlashCard;

import java.util.Collection;

public interface IFindFlashCard {

    FlashCard byId(Integer id);

    Collection<FlashCard> all();
}
