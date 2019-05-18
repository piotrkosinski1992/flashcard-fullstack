package io.kosinski.flashcards.usecase.impl.flashcard;

import io.kosinski.flashcards.domain.FlashCard;
import io.kosinski.flashcards.entrypoint.dto.FlashCardGroupDTO;
import io.kosinski.flashcards.gateway.FlashCardRepo;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Collectors;

@Service
public class FindFlashcardGroups {

    private final FlashCardRepo flashCardRepo;

    public FindFlashcardGroups(FlashCardRepo flashCardRepo) {
        this.flashCardRepo = flashCardRepo;
    }

    public Collection<FlashCardGroupDTO> all() {
        return flashCardRepo.findSortedGroupNames()
                .stream()
                .map(groupName -> FlashCardGroupDTO.create(groupName, getCountByGroupName(groupName)))
                .collect(Collectors.toList());
    }

    private int getCountByGroupName(String groupName) {
        return flashCardRepo.countByGroupName(groupName);
    }

    public Collection<FlashCard> byGroupName(String groupName) {
        return flashCardRepo.findByGroupName(groupName);
    }
}
