package io.kosinski.flashcards.entrypoint;

import io.kosinski.flashcards.entrypoint.dto.FlashCardGroupDTO;
import io.kosinski.flashcards.usecase.impl.FindFlashcardGroups;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping(value = "/flashcards/group")
public class FindFlashCardGroupsController {

    private final FindFlashcardGroups findFlashCardGroups;

    public FindFlashCardGroupsController(FindFlashcardGroups findFlashCardGroups) {
        this.findFlashCardGroups = findFlashCardGroups;
    }

    @GetMapping("/all")
    public Collection<FlashCardGroupDTO> findFlashcardGroups() {
        return findFlashCardGroups.findAll();
    }
}
