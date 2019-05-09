package io.kosinski.flashcards.gateway;

import io.kosinski.flashcards.domain.FlashCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;

public interface FlashCardRepo extends JpaRepository<FlashCard, Integer> {

    @Query("SELECT DISTINCT card.groupName FROM FlashCard card")
    List<String> findDistinctGroupNames();

    boolean existsByGroupName(String groupName);

    Collection<FlashCard> findByGroupName(String groupName);

    int countByGroupName(String groupName);

    void removeByGroupName(String groupName);
}
