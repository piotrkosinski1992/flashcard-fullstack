package io.kosinski.flashcards.usecase.impl;

import io.kosinski.flashcards.domain.FlashCard;
import io.kosinski.flashcards.exception.InvalidFlashCard;
import io.kosinski.flashcards.gateway.FlashCardRepo;
import io.kosinski.flashcards.usecase.Upload;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UploadFlashCards implements Upload {

    private final FlashCardRepo flashCardRepo;

    public UploadFlashCards(FlashCardRepo flashCardRepo) {
        this.flashCardRepo = flashCardRepo;
    }

    @Override
    public void uploadFromString(String data, String separator) {
        String[] flashCardsArray = splitDataBySeparator(data, separator);
        List<FlashCard> flashCardsList = mapArrayToListOfObjects(flashCardsArray);
        flashCardRepo.saveAll(flashCardsList);
    }

    private String[] splitDataBySeparator(String flashCards, String separator) {
        return flashCards.split(";");
    }

    private List<FlashCard> mapArrayToListOfObjects(String[] flashCards) {
        return Arrays.asList(flashCards)
                .stream()
                .map(flashCardString -> mapStringToObject(flashCardString))
                .collect(Collectors.toList());
    }

    private FlashCard mapStringToObject(String flashCardString) {
        String[] flashCard = flashCardString.split(",");

        validateFlashCardData(flashCard);

        return FlashCard.of(flashCard[0], flashCard[1]);
    }

    private void validateFlashCardData(String[] flashCard) {
        if (flashCard.length != 2) {
            throw new InvalidFlashCard(String.format("flashcard should contain 2 parameters instead of %s",
                    flashCard.length));
        }
        if (flashCard[0].trim().isEmpty() || flashCard[1].trim().isEmpty()) {
            throw new InvalidFlashCard("FlashCard can't contain empty fields");
        }
    }
}
