package io.kosinski.flashcards.gateway;

import io.kosinski.flashcards.domain.FlashCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlashCardRepo extends JpaRepository<FlashCard, Integer> {
}
