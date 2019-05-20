package io.kosinski.flashcards.domain

import io.kosinski.flashcards.TestFlashCards
import spock.lang.Specification

class FlashcardTest extends Specification {

    def 'should create flashcard correctly'() {
        when:
        Flashcard card = Flashcard.of('heads', 'tails')

        then:
        card.heads == 'heads'
        card.tails == 'tails'
    }

    def 'should compare two flashcards correctly'() {
        when:
        Flashcard card1 = TestFlashCards.testFlashCard1
        Flashcard card2 = TestFlashCards.testFlashCard2
        Flashcard card3 = TestFlashCards.testFlashCard3

        then:
        card1 != card2
        card2 == card3
    }
}
