package io.kosinski.flashcards

import io.kosinski.flashcards.domain.FlashCard

class TestFlashCards {

    static FlashCard getTestFlashCard1() {
        def flashcard1 = FlashCard.of('heads1', 'tails1')
        flashcard1.setId(1)
        return flashcard1
    }

    static FlashCard getTestFlashCard2() {
        def flashCard2 = FlashCard.of('heads2', 'tails2')
        flashCard2.setId(2)
        return flashCard2
    }

    static FlashCard getTestFlashCard3() {
        def flashCard3 = FlashCard.of('heads2', 'tails2')
        flashCard3.setId(3)
        return flashCard3
    }

    static List<FlashCard> getTestFlashCards() {
        return Arrays.asList(FlashCard.of('heads1', 'tails1'),
                FlashCard.of('heads2', 'tails2'),
                FlashCard.of('heads3', 'tails3'))
    }
}
