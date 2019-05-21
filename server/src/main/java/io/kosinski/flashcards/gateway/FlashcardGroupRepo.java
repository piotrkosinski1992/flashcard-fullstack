package io.kosinski.flashcards.gateway;

import io.kosinski.flashcards.domain.FlashcardGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface FlashcardGroupRepo extends JpaRepository<FlashcardGroup, String> {

    Collection<FlashcardGroup> findAllByOrderByName();

    FlashcardGroup findByName(String groupName);

    void removeByName(String groupName);

    boolean existsByName(String groupName);
}
