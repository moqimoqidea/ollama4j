package io.github.ollama4j.models.generate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class OllamaGenerateResponseModel {
    private String model;
    private @JsonProperty("created_at") String createdAt;
    private String response;
    private String thinking;
    private boolean done;
    private @JsonProperty("done_reason") String doneReason;
    private List<Integer> context;
    private @JsonProperty("total_duration") Long totalDuration;
    private @JsonProperty("load_duration") Long loadDuration;
    private @JsonProperty("prompt_eval_count") Integer promptEvalCount;
    private @JsonProperty("prompt_eval_duration") Long promptEvalDuration;
    private @JsonProperty("eval_count") Integer evalCount;
    private @JsonProperty("eval_duration") Long evalDuration;
}
