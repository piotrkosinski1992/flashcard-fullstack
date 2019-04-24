package io.kosinski.flashcards.usecase.impl;

import io.kosinski.flashcards.domain.FlashCard;
import io.kosinski.flashcards.exception.InvalidFileFormat;
import io.kosinski.flashcards.exception.InvalidFlashCardData;
import io.kosinski.flashcards.gateway.FlashCardRepo;
import io.kosinski.flashcards.usecase.Upload;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UploadFlashCards implements Upload {

    private final FlashCardRepo flashCardRepo;
    private String groupName;

    public UploadFlashCards(FlashCardRepo flashCardRepo) {
        this.flashCardRepo = flashCardRepo;
    }

    @Override
    public void uploadFromString(String data, String fileName) {
        this.groupName = prepareGroupName(fileName);
        String[] flashCardsArray = splitDataBySeparator(data);
        List<FlashCard> flashCardsList = mapArrayToListOfObjects(flashCardsArray);
        flashCardRepo.saveAll(flashCardsList);
    }

    private String prepareGroupName(String fileName) {
        String fileExtension = fileName.substring(fileName.indexOf(".") + 1);
        if (!fileExtension.equals("txt") && !fileExtension.equals("doc") && !fileExtension.equals("docx")) {
            throw new InvalidFileFormat(fileExtension);
        }

        return fileName.substring(0, fileName.indexOf("."));
    }

    @Override
    public void uploadFromArray(Collection<FlashCard> flashcards, String groupName) {
        flashcards.forEach(flashcard -> flashcard.setGroupName(groupName));
        flashCardRepo.saveAll(flashcards);
    }

    private String[] splitDataBySeparator(String flashCards) {
        return flashCards.split(";");
    }

    private List<FlashCard> mapArrayToListOfObjects(String[] flashCards) {
        return Arrays.asList(flashCards)
                .stream()
                .map(this::mapStringToObject)
                .collect(Collectors.toList());
    }

    private FlashCard mapStringToObject(String flashCardString) {
        String[] flashCard = flashCardString.split(",");

        validateFlashCardData(flashCard);

        return FlashCard.of(flashCard[0].trim(), flashCard[1].trim(), groupName);
    }

    private void validateFlashCardData(String[] flashCard) {
        if (flashCard.length != 2) {
            throw new InvalidFlashCardData(String.format("error parsing flashcard data %s",
                    Arrays.toString(flashCard)));
        }
        if (flashCard[0].trim().isEmpty() || flashCard[1].trim().isEmpty()) {
            throw new InvalidFlashCardData("FlashCard can't contain empty fields");
        }
    }
}
