package io.kosinski.flashcards.domain

import io.kosinski.flashcards.TestFlashCards
import spock.lang.Specification

class FlashCardTest extends Specification {

    def 'should create flashcard correctly'() {
        when:
        FlashCard card = FlashCard.of('heads', 'tails','groupName')

        then:
        card.heads == 'heads'
        card.tails == 'tails'
        card.groupName == 'groupName'
    }

    def 'should compare two flashcards correctly'() {
        when:
        FlashCard card1 = TestFlashCards.testFlashCard1
        FlashCard card2 = TestFlashCards.testFlashCard2
        FlashCard card3 = TestFlashCards.testFlashCard3

        then:
        card1 != card2
        card2 == card3
    }
}
