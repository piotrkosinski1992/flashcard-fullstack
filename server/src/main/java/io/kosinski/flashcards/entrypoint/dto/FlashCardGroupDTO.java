package io.kosinski.flashcards.entrypoint.dto;

import io.kosinski.flashcards.domain.Flashcard;

import java.util.Collection;

public class FlashCardGroupDTO {

    private String groupName;
    private int groupSize;
    private Collection<Flashcard> flashcards;

    private FlashCardGroupDTO() {
    }

    public static FlashCardGroupDTO create(String groupName, int groupSize, Collection<Flashcard> flashcards) {
        FlashCardGroupDTO dto = new FlashCardGroupDTO();
        dto.setGroupName(groupName);
        dto.setGroupSize(groupSize);
        dto.setFlashcards(flashcards);
        return dto;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public int getGroupSize() {
        return groupSize;
    }

    public void setGroupSize(int groupSize) {
        this.groupSize = groupSize;
    }

    public Collection<Flashcard> getFlashcards() {
        return flashcards;
    }

    public void setFlashcards(Collection<Flashcard> flashcards) {
        this.flashcards = flashcards;
    }
}
