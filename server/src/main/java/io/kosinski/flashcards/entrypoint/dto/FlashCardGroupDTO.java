package io.kosinski.flashcards.entrypoint.dto;

import io.kosinski.flashcards.domain.Flashcard;
import io.kosinski.flashcards.domain.FlashcardGroup;
import io.kosinski.flashcards.domain.Result;

import java.util.Collection;

public class FlashCardGroupDTO {

    private String name;
    private int size;
    private Collection<Flashcard> flashcards;
    private Collection<Result> results;

    private FlashCardGroupDTO() {
    }

    public static FlashCardGroupDTO create(FlashcardGroup group) {
        FlashCardGroupDTO dto = new FlashCardGroupDTO();
        dto.setResults(group.getResults());
        dto.setName(group.getName());
        dto.setSize(group.getSize());
        dto.setFlashcards(group.getFlashcards());
        return dto;
    }

    public Collection<Result> getResults() {
        return results;
    }

    public void setResults(Collection<Result> results) {
        this.results = results;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public Collection<Flashcard> getFlashcards() {
        return flashcards;
    }

    public void setFlashcards(Collection<Flashcard> flashcards) {
        this.flashcards = flashcards;
    }
}
