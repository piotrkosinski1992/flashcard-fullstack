package io.kosinski.flashcards.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public final class FlashCard {

    @Id
    @GeneratedValue
    private Integer id;
    private String heads;
    private String tails;
    private String groupName;

    private FlashCard() {
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
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

    public String getGroupName() {
        return groupName;
    }

    public static FlashCard of(String heads, String tails, String groupName) {
        FlashCard card = new FlashCard();
        card.groupName = groupName;
        card.heads = heads;
        card.tails =  tails;
        return card;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FlashCard flashCard = (FlashCard) o;
        return Objects.equals(heads, flashCard.heads) &&
                Objects.equals(tails, flashCard.tails);
    }

    @Override
    public int hashCode() {
        return Objects.hash(heads, tails);
    }

    @Override
    public String toString() {
        return "FlashCard{" +
                "id=" + id +
                ", heads='" + heads + '\'' +
                ", tails='" + tails + '\'' +
                '}';
    }
}
