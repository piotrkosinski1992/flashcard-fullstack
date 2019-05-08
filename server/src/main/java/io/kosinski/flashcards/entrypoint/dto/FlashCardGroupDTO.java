package io.kosinski.flashcards.entrypoint.dto;

public class FlashCardGroupDTO {

    private String name;
    private int amount;

    private FlashCardGroupDTO() {
    }

    public static FlashCardGroupDTO create(String name, int amount) {
        FlashCardGroupDTO dto = new FlashCardGroupDTO();
        dto.setName(name);
        dto.setAmount(amount);
        return dto;
    }

    public String getName() {
        return name;
    }

    private void setName(String name) {
        this.name = name;
    }

    public int getAmount() {
        return amount;
    }

    private void setAmount(int amount) {
        this.amount = amount;
    }
}
