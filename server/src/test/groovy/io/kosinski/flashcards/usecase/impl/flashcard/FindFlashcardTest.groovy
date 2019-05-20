package io.kosinski.flashcards.usecase.impl.flashcard

import io.kosinski.flashcards.TestFlashCards
import io.kosinski.flashcards.domain.Flashcard
import io.kosinski.flashcards.exception.ResourceNotFound
import io.kosinski.flashcards.gateway.FlashcardRepo
import spock.lang.Specification

class FindFlashcardTest extends Specification {

    FlashcardRepo flashCardRepoMock
    FindFlashCard findFlashCard

    def setup() {
        flashCardRepoMock = Mock(FlashcardRepo.class)
        findFlashCard = new FindFlashCard(flashCardRepoMock)
    }

    def 'should return flashcard'() {
        given:
        Flashcard testFlashCard = TestFlashCards.testFlashCard1
        flashCardRepoMock.findById(_) >> Optional.of(testFlashCard)

        when:
        def flashCard = findFlashCard.byId(1)

        then:
        flashCard == testFlashCard
        flashCard.heads == 'heads1'
        flashCard.tails == 'tails1'
    }

    def 'should throw ResourceNotFound when flashcard with given id doesn\'t exist'() {
        given:
        flashCardRepoMock.findById(_) >> Optional.empty()

        when:
        findFlashCard.byId(1)

        then:
        thrown(ResourceNotFound.class)
    }

    def 'should return flashcards'() {
        given:
        Collection<Flashcard> testFlashCards = TestFlashCards.testFlashCards
        flashCardRepoMock.findAll() >> testFlashCards

        when:
        def flashCards = findFlashCard.all()

        then:
        flashCards.size() == 3
        flashCards == testFlashCards
    }
}
