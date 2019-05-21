package io.kosinski.flashcards.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
public final class Flashcard {

    @Id
    @GeneratedValue
    private Integer id;
    private String heads;
    private String tails;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "FLASHCARD_GROUP_NAME")
    private FlashcardGroup flashcardGroup;

    private Flashcard() {
    }

    public void setFlashcardGroup(FlashcardGroup flashcardGroup) {
        this.flashcardGroup = flashcardGroup;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public String getHeads() {
        return heads;
    }

    public String getTails() {
        return tails;
    }

    public FlashcardGroup getFlashcardGroup() {
        return flashcardGroup;
    }

    public static Flashcard of(String heads, String tails) {
        Flashcard card = new Flashcard();
        card.heads = heads;
        card.tails =  tails;
        return card;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Flashcard flashCard = (Flashcard) o;
        return Objects.equals(heads, flashCard.heads) &&
                Objects.equals(tails, flashCard.tails);
    }

    @Override
    public int hashCode() {
        return Objects.hash(heads, tails);
    }

    @Override
    public String toString() {
        return "Flashcard{" +
                "id=" + id +
                ", heads='" + heads + '\'' +
                ", tails='" + tails + '\'' +
                '}';
    }
}
