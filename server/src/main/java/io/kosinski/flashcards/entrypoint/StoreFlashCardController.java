package io.kosinski.flashcards.entrypoint;

import io.kosinski.flashcards.domain.FlashCard;
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

@RestController
@RequestMapping(value = "/flashcards")
public class StoreFlashCardController {

    private final Store storeFlashCard;

    private final ModelMapper mapper = new ModelMapper();

    public StoreFlashCardController(Store storeFlashCard) {
        this.storeFlashCard = storeFlashCard;
    }

    @PostMapping("/save/one")
    public ResponseEntity storeFlashCard(@RequestBody FlashCardDTO flashCardDTO) {
        storeFlashCard.storeOne(mapper.map(flashCardDTO, FlashCard.class));
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PostMapping("/save/all")
    public ResponseEntity storeFlashCard(@RequestBody Collection<FlashCardDTO> flashCardsDTO) {

        List<FlashCard> flashCards = flashCardsDTO.stream().
                map(card -> mapper.map(card, FlashCard.class)).collect(Collectors.toList());

        storeFlashCard.storeAll(flashCards);
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
