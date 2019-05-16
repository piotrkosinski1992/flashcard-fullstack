package io.kosinski.flashcards.usecase.impl.flashcard

import io.kosinski.flashcards.TestFlashCards
import io.kosinski.flashcards.domain.FlashCard
import io.kosinski.flashcards.gateway.FlashCardRepo
import io.kosinski.flashcards.usecase.impl.flashcard.StoreFlashCards
import spock.lang.Specification

class StoreFlashCardTest extends Specification {

    FlashCardRepo flashCardRepoMock
    StoreFlashCards storeFlashCard

    def setup() {
        flashCardRepoMock = Mock(FlashCardRepo.class)
        storeFlashCard = new StoreFlashCards(flashCardRepoMock)
    }

    def 'should store one flashcard'() {
        given:
        FlashCard testFlashCard = TestFlashCards.testFlashCard1

        when:
        storeFlashCard.storeOne(testFlashCard)

        then:
        1 * flashCardRepoMock.save(_)
    }

    def 'should store all flashcards'() {
        given:
        List<FlashCard> testFlashCards = TestFlashCards.testFlashCards

        when:
        storeFlashCard.storeAll(testFlashCards)

        then:
        1 * flashCardRepoMock.saveAll(_)
    }
}
