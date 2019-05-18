package io.kosinski.flashcards.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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
}
