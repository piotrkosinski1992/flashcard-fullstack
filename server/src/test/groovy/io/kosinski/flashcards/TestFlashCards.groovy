package io.kosinski.flashcards


import io.kosinski.flashcards.domain.Flashcard

class TestFlashCards {

    static Flashcard getTestFlashCard1() {
        def flashcard1 = Flashcard.of('heads1', 'tails1')
        flashcard1.setId(1)
        return flashcard1
    }

    static Flashcard getTestFlashCard2() {
        def flashCard2 = Flashcard.of('heads2', 'tails2')
        flashCard2.setId(2)
        return flashCard2
    }

    static Flashcard getTestFlashCard3() {
        def flashCard3 = Flashcard.of('heads2', 'tails2')
        flashCard3.setId(3)
        return flashCard3
    }

    static List<Flashcard> getTestFlashCards() {
        return Arrays.asList(Flashcard.of('heads1', 'tails1'),
                Flashcard.of('heads2', 'tails2'),
                Flashcard.of('heads3', 'tails3'))
    }
}
