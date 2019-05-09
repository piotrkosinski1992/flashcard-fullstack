package io.kosinski.flashcards.entrypoint;

import io.kosinski.flashcards.usecase.Delete;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/flashcards/group")
public class DeleteFlashcardGroupController {

    private final Delete deleteFlashcardGroup;

    public DeleteFlashcardGroupController(Delete deleteFlashcardGroup) {
        this.deleteFlashcardGroup = deleteFlashcardGroup;
    }

    @PostMapping("/{groupName}")
    public void deleteFlashcardGroup(@PathVariable String groupName) {
        deleteFlashcardGroup.deleteBy(groupName);
    }
}
