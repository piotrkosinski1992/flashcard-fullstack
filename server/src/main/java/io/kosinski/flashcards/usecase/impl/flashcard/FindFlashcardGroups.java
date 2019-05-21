package io.kosinski.flashcards.usecase.impl.flashcard;

import io.kosinski.flashcards.entrypoint.dto.FlashCardGroupDTO;
import io.kosinski.flashcards.gateway.FlashcardGroupRepo;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Collectors;

@Service
public class FindFlashcardGroups {

    private final FlashcardGroupRepo flashcardGroupRepo;

    public FindFlashcardGroups(FlashcardGroupRepo flashcardGroupRepo) {
        this.flashcardGroupRepo = flashcardGroupRepo;
    }

    public Collection<FlashCardGroupDTO> all() {
        return flashcardGroupRepo.findAllByOrderByName()
                .stream()
                .map(FlashCardGroupDTO::create)
                .collect(Collectors.toList());
    }

    public FlashCardGroupDTO byGroupName(String groupName) {
        return FlashCardGroupDTO.create(flashcardGroupRepo.findByName(groupName));
    }
}
