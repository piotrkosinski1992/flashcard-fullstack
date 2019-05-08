package io.kosinski.flashcards.usecase.impl;

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

    public Collection<FlashCardGroupDTO> findAll() {
        return flashCardRepo.findDistinctGroupNames()
                .stream()
                .map(groupName -> FlashCardGroupDTO.create(groupName, getCountByGroupName(groupName)))
                .collect(Collectors.toList());
    }

    private int getCountByGroupName(String groupName) {
        return flashCardRepo.countByGroupName(groupName);
    }
}
