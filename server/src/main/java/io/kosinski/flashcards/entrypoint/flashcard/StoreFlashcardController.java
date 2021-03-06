package io.kosinski.flashcards.entrypoint.flashcard;

import io.kosinski.flashcards.domain.Flashcard;
import io.kosinski.flashcards.entrypoint.dto.FlashCardDTO;
import io.kosinski.flashcards.usecase.Store;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

// Never used, maybe convert to update?
@RestController
@RequestMapping(value = "/flashcards")
public class StoreFlashcardController {

    private final Store storeFlashCard;

    private final ModelMapper mapper = new ModelMapper();

    public StoreFlashcardController(Store storeFlashCard) {
        this.storeFlashCard = storeFlashCard;
    }

    @PostMapping("/save/one")
    public ResponseEntity storeFlashCard(@RequestBody FlashCardDTO flashCardDTO) {
        storeFlashCard.storeOne(mapper.map(flashCardDTO, Flashcard.class));
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PostMapping("/save/all")
    public ResponseEntity storeFlashCard(@RequestBody Collection<FlashCardDTO> flashCardsDTO) {

        List<Flashcard> flashcards = flashCardsDTO.stream().
                map(card -> mapper.map(card, Flashcard.class)).collect(Collectors.toList());

        storeFlashCard.storeAll(flashcards);
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
