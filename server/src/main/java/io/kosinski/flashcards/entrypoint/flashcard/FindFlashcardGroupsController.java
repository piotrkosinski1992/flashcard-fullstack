package io.kosinski.flashcards.entrypoint.flashcard;

import io.kosinski.flashcards.domain.Flashcard;
import io.kosinski.flashcards.entrypoint.dto.FlashCardGroupDTO;
import io.kosinski.flashcards.usecase.impl.flashcard.FindFlashcardGroups;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping(value = "/flashcards/group")
public class FindFlashcardGroupsController {

    private final FindFlashcardGroups findFlashCardGroups;

    public FindFlashcardGroupsController(FindFlashcardGroups findFlashCardGroups) {
        this.findFlashCardGroups = findFlashCardGroups;
    }

    @GetMapping("/all")
    public Collection<FlashCardGroupDTO> findFlashcardGroups() {
        return findFlashCardGroups.all();
    }

    @GetMapping("/{groupName}")
    public Collection<Flashcard> findByGroupName(@PathVariable String groupName) {
        return findFlashCardGroups.byGroupName(groupName);
    }
}
