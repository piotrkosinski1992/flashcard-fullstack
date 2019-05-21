package io.kosinski.flashcards.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;

@Entity
public class FlashcardGroup {

    @Id
    private String name;

    private int size;

    @OneToMany(mappedBy = "flashcardGroup", cascade = CascadeType.ALL)
    private Collection<Flashcard> flashcards = new ArrayList<>();

    @OneToMany(mappedBy = "flashcardGroup", cascade = CascadeType.ALL)
    private List<Result> results = new ArrayList<>();

    private FlashcardGroup() {
    }

    public FlashcardGroup(Collection<Flashcard> flashcards, String name) {
        flashcards.forEach(flashcard -> flashcard.setFlashcardGroup(this));
        this.flashcards.addAll(flashcards);
        size = flashcards.size();
        this.name = name;
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

    public List<Result> getResults() {
        results.sort((a,b) -> b.getFinalScore() - a.getFinalScore());
        return results;
    }

    public void setResults(List<Result> results) {
        this.results = results;
    }

    public void setResult(Result result) {
        results.add(result);
    }
}
