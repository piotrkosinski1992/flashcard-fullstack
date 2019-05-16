package io.kosinski.flashcards.gateway;

import io.kosinski.flashcards.domain.Result;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultRepo extends JpaRepository<Result, Integer > {

    List<Result> findByGroupNameOrderByFinalScoreDesc(String groupName);
}
