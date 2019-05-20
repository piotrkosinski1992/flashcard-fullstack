package io.kosinski.flashcards.usecase.impl.flashcard


import io.kosinski.flashcards.domain.Flashcard
import io.kosinski.flashcards.exception.InvalidFileFormat
import io.kosinski.flashcards.exception.InvalidFlashCardData
import io.kosinski.flashcards.gateway.FlashcardGroupRepo
import io.kosinski.flashcards.gateway.FlashcardRepo
import spock.lang.Specification

class UploadFlashCardsTest extends Specification {

    private UploadFlashCards uploadFlashCards

    def setup() {
        uploadFlashCards = new UploadFlashCards(Mock(FlashcardRepo), Mock(FlashcardGroupRepo))
    }

    def "should map flashCard String into object"() {
        given:
        def flashCardString = "poland,polska"

        when:
        def flashCard = uploadFlashCards.mapStringToObject(flashCardString)

        then:
        flashCard.tails == "polska"
        flashCard.heads == "poland"
    }

    def "should throw exception when flashCard doesn't contain 2 elements"() {
        given:
        def flashCardString = "polandpolska"

        when:
        uploadFlashCards.mapStringToObject(flashCardString)

        then:
        thrown InvalidFlashCardData
    }

    def "should throw exception when flashCard contain empty fields"() {
        given:
        def flashCardString = "poland, "

        when:
        uploadFlashCards.mapStringToObject(flashCardString)

        then:
        InvalidFlashCardData ex = thrown()
        ex.getMessage() == "Flashcard can't contain empty fields"
    }

    def "should split data by separator"() {
        given:
        String flashCardString = "one,jeden;two,dwa;three,trzy"

        when:
        String[] flashCards = uploadFlashCards.splitDataBySeparator(flashCardString)

        then:
        flashCards.size() == 3
    }

    def "should map flashCard array into objects"() {
        given:
        String[] flashCardsArray = ["one,jeden", "two,dwa", "three,trzy"]

        when:
        List<Flashcard> flashCardsList = uploadFlashCards.mapArrayToListOfObjects(flashCardsArray)

        then:
        flashCardsList.size() == 3

    }

    def "should remove file extension from file name"() {
        given:
        def filename1 = "fiszki.txt"
        def filename2 = "virus.doc"

        when:
        def result1 = uploadFlashCards.prepareGroupName(filename1)
        def result2 = uploadFlashCards.prepareGroupName(filename2)

        then:
        result1 == "fiszki"
        result2 == "virus"
    }

    def "should throw exception when file format is invalid"() {
        given:
        def filename = "rachunki.xls"

        when:
        uploadFlashCards.prepareGroupName(filename)

        then:
        thrown InvalidFileFormat
    }
}
