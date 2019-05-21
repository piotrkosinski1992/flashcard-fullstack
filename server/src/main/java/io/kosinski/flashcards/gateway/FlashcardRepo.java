package io.kosinski.flashcards.gateway;

import io.kosinski.flashcards.domain.Flashcard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;

public interface FlashcardRepo extends JpaRepository<Flashcard, Integer> {

/*    @Query("SELECT DISTINCT card.groupName FROM Flashcard card ORDER BY card.groupName")
    List<String> findSortedGroupNames();*/

    boolean existsByFlashcardGroupName(String groupName);

    void removeByFlashcardGroupName(String groupName);
}
