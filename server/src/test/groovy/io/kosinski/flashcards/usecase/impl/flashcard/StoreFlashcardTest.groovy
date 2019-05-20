package io.kosinski.flashcards.usecase.impl.flashcard

import io.kosinski.flashcards.TestFlashCards
import io.kosinski.flashcards.domain.Flashcard
import io.kosinski.flashcards.gateway.FlashcardRepo
import spock.lang.Specification

class StoreFlashcardTest extends Specification {

    FlashcardRepo flashCardRepoMock
    StoreFlashCards storeFlashCard

    def setup() {
        flashCardRepoMock = Mock(FlashcardRepo.class)
        storeFlashCard = new StoreFlashCards(flashCardRepoMock)
    }

    def 'should store one flashcard'() {
        given:
        Flashcard testFlashCard = TestFlashCards.testFlashCard1

        when:
        storeFlashCard.storeOne(testFlashCard)

        then:
        1 * flashCardRepoMock.save(_)
    }

    def 'should store all flashcards'() {
        given:
        List<Flashcard> testFlashCards = TestFlashCards.testFlashCards

        when:
        storeFlashCard.storeAll(testFlashCards)

        then:
        1 * flashCardRepoMock.saveAll(_)
    }
}
