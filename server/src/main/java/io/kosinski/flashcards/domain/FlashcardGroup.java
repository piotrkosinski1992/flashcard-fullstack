package io.kosinski.flashcards.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class FlashcardGroup {

    @Id
    private String groupName;

    private int groupSize;

    // https://stackoverflow.com/questions/36042842/spring-jpa-mysql-could-not-write-content-infinite-recursion-stackoverflowerro
    //czemu nie jsonIngore wewnątrz flashcard??
    @JsonIgnore
    @OneToMany(mappedBy = "flashcardGroup", cascade = CascadeType.ALL)
    private Collection<Flashcard> flashcards = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    private Collection<Result> results;

    private FlashcardGroup() {
    }

    public FlashcardGroup(Collection<Flashcard> flashcards, String groupName) {
        flashcards.forEach(flashcard -> flashcard.setFlashcardGroup(this));
        this.flashcards.addAll(flashcards);
        groupSize = flashcards.size();
        this.groupName = groupName;
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

    public Collection<Result> getResults() {
        return results;
    }

    public void setResults(Collection<Result> results) {
        this.results = results;
    }
}
