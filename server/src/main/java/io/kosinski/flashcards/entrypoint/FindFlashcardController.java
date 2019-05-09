package io.kosinski.flashcards.entrypoint;

import io.kosinski.flashcards.entrypoint.dto.FlashCardDTO;
import io.kosinski.flashcards.usecase.Find;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/flashcard")
public class FindFlashcardController {

    private final Find findFlashCard;
    private final ModelMapper mapper = new ModelMapper();

    public FindFlashcardController(Find findFlashCard) {
        this.findFlashCard = findFlashCard;
    }

    @GetMapping("/get/{id}")
    public FlashCardDTO findById(@PathVariable Integer id) {
        return mapper.map(findFlashCard.byId(id), FlashCardDTO.class);
    }

    @GetMapping("/get/")
    public Collection<FlashCardDTO> findAll() {
        return findFlashCard.all()
                .stream()
                .map(flashCard -> mapper.map(flashCard, FlashCardDTO.class))
                .collect(Collectors.toList());
    }
}
