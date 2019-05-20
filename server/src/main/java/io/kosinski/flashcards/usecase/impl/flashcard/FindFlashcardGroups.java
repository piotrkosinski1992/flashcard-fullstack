package io.kosinski.flashcards.usecase.impl.flashcard;

import io.kosinski.flashcards.domain.Flashcard;
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
        return flashcardGroupRepo.findAllByOrderByGroupName()
                .stream()
                .map(group -> FlashCardGroupDTO.create(group.getGroupName(), group.getGroupSize(), group.getFlashcards()))
                .collect(Collectors.toList());
    }

    public Collection<Flashcard> byGroupName(String groupName) {
        return flashcardGroupRepo.findByGroupName(groupName);
    }
}
