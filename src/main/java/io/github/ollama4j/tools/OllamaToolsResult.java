/*
 * Ollama4j - Java library for interacting with Ollama server.
 * Copyright (c) 2025 Amith Koujalgi and contributors.
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with the License.
 *
*/
package io.github.ollama4j.tools;

import io.github.ollama4j.models.response.OllamaResult;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OllamaToolsResult {
    private OllamaResult modelResult;
    private Map<ToolFunctionCallSpec, Object> toolResults;

    public List<ToolResult> getToolResults() {
        List<ToolResult> results = new ArrayList<>();
        if (this.toolResults == null) {
            return results;
        }
        for (Map.Entry<ToolFunctionCallSpec, Object> r : this.toolResults.entrySet()) {
            results.add(
                    new ToolResult(r.getKey().getName(), r.getKey().getArguments(), r.getValue()));
        }
        return results;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ToolResult {
        private String functionName;
        private Map<String, Object> functionArguments;
        private Object result;
    }
}
