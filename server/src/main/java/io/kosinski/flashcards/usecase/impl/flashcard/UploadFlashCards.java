package io.kosinski.flashcards.usecase.impl.flashcard;

import io.kosinski.flashcards.domain.Flashcard;
import io.kosinski.flashcards.domain.FlashcardGroup;
import io.kosinski.flashcards.exception.GroupNameAlreadyExists;
import io.kosinski.flashcards.exception.InvalidFileFormat;
import io.kosinski.flashcards.exception.InvalidFlashCardData;
import io.kosinski.flashcards.gateway.FlashcardGroupRepo;
import io.kosinski.flashcards.gateway.FlashcardRepo;
import io.kosinski.flashcards.usecase.Upload;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UploadFlashCards implements Upload {

    private final FlashcardRepo flashCardRepo;
    private final FlashcardGroupRepo flashcardGroupRepo;
    private String groupName;

    public UploadFlashCards(FlashcardRepo flashCardRepo, FlashcardGroupRepo flashcardGroupRepo) {
        this.flashCardRepo = flashCardRepo;
        this.flashcardGroupRepo = flashcardGroupRepo;
    }

    @Override
    public void uploadFromString(String data, String fileName) {
        this.groupName = prepareGroupName(fileName);
        if (isGroupNameAlreadyExist(groupName)) {
            throw new GroupNameAlreadyExists(String.format("GroupName %s already exists", groupName));
        }

        String[] flashCardsArray = splitDataBySeparator(data);
        List<Flashcard> flashCardsList = mapArrayToListOfObjects(flashCardsArray);
        flashCardRepo.saveAll(flashCardsList);
    }

    private boolean isGroupNameAlreadyExist(String groupName) {
        return flashCardRepo.existsByFlashcardGroupGroupName(groupName);
    }

    private String prepareGroupName(String fileName) {
        String fileExtension = fileName.substring(fileName.indexOf(".") + 1);
        if (!fileExtension.equals("txt") && !fileExtension.equals("doc") && !fileExtension.equals("docx")) {
            throw new InvalidFileFormat(fileExtension);
        }
        return fileName.substring(0, fileName.indexOf("."));
    }

    @Override
    public void uploadFromArray(Collection<Flashcard> flashcards, String groupName) {
        if (isGroupNameAlreadyExist(groupName)) {
            throw new GroupNameAlreadyExists(String.format("GroupName %s already exists", groupName));
        }

        flashcardGroupRepo.save(new FlashcardGroup(flashcards, groupName));
        //flashcards.forEach(flashcard -> flashcard.setGroupName(groupName));


        //flashCardRepo.saveAll(flashcards);
    }

    private String[] splitDataBySeparator(String flashCards) {
        return flashCards.split(";");
    }

    private List<Flashcard> mapArrayToListOfObjects(String[] flashCards) {
        return Arrays.stream(flashCards)
                .map(this::mapStringToObject)
                .collect(Collectors.toList());
    }

    private Flashcard mapStringToObject(String flashCardString) {
        String[] flashCard = flashCardString.split(",");

        validateFlashCardData(flashCard);

        // TODO FLASHCARDY ZAPISAC W GRUPIE
        return Flashcard.of(flashCard[0].trim(), flashCard[1].trim());
    }

    private void validateFlashCardData(String[] flashCard) {
        if (flashCard.length != 2) {
            throw new InvalidFlashCardData(String.format("error parsing flashcard data %s",
                    Arrays.toString(flashCard)));
        }
        if (flashCard[0].trim().isEmpty() || flashCard[1].trim().isEmpty()) {
            throw new InvalidFlashCardData("Flashcard can't contain empty fields");
        }
    }
}
