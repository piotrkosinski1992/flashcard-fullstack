package io.kosinski.flashcards.usecase.impl.result

import io.kosinski.flashcards.gateway.ResultRepo
import spock.lang.Specification

class SaveResultTest extends Specification {

    private def saveResult

    def setup() {
        saveResult = new SaveResult(Mock(ResultRepo))
    }

    def 'should correctly calculate final score'() {
        when:
        def score = saveResult.calculateResult(correctAnswers, incorrectAnswers)

        then:
        score == result

        where:
        result | correctAnswers | incorrectAnswers
        50     | 10             | 10
        100    | 3              | 0
        47     | 8              | 9
    }

    def 'should throw exception when score is higher than 100'() {
        when:
        saveResult.calculateResult(100, -5)

        then:
        thrown(RuntimeException)
    }
}
