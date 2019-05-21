package io.kosinski.flashcards.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Result {

    @Id
    @GeneratedValue
    private int id;

    private int correctAnswers;

    private int incorrectAnswers;

    private int finalScore;

    private String nickname;

    private String groupName;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "FLASHCARD_GROUP_NAME")
    private FlashcardGroup flashcardGroup;

    public FlashcardGroup getFlashcardGroup() {
        return flashcardGroup;
    }

    public void setFlashcardGroup(FlashcardGroup flashcardGroup) {
        this.flashcardGroup = flashcardGroup;
    }

    public int getId() {
        return id;
    }

    void setId(int id) {
        this.id = id;
    }

    public int getFinalScore() {
        return finalScore;
    }

    public void setFinalScore(int finalScore) {
        this.finalScore = finalScore;
    }

    public int getCorrectAnswers() {
        return correctAnswers;
    }

    void setCorrectAnswers(int correctAnswers) {
        this.correctAnswers = correctAnswers;
    }

    public int getIncorrectAnswers() {
        return incorrectAnswers;
    }

    void setIncorrectAnswers(int incorrectAnswers) {
        this.incorrectAnswers = incorrectAnswers;
    }

    public String getNickname() {
        return nickname;
    }

    void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getGroupName() {
        return groupName;
    }

    void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    private Result() {}

    private static ResultBuilder create(String groupName) {
        return new ResultBuilder(groupName);
    }

    static class ResultBuilder {
        private Result result;

        ResultBuilder(String flashcardGroupName) {
            result = new Result();
            result.setGroupName(flashcardGroupName);
        }

        ResultBuilder forNickname(String nickname) {
            result.setNickname(nickname);
            return this;
        }

        ResultBuilder withCorrectAnswers(int correctAnswers) {
            result.setCorrectAnswers(correctAnswers);
            return this;
        }

        ResultBuilder withIncorrectAnswers(int incorrectAnswers) {
            result.setIncorrectAnswers(incorrectAnswers);
            return this;
        }

    }

    @Override
    public String toString() {
        return "Result{" +
                "id=" + id +
                ", correctAnswers=" + correctAnswers +
                ", incorrectAnswers=" + incorrectAnswers +
                ", finalScore=" + finalScore +
                ", nickname='" + nickname + '\'' +
                ", groupName='" + groupName + '\'' +
                '}';
    }
}
