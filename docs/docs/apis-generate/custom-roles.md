---
sidebar_position: 9
---

# Custom Roles

Allows to manage custom roles (apart from the base roles) for chat interactions with the models.

_Particularly helpful when you would need to use different roles that the newer models support other than the base
roles._

_Base roles are `SYSTEM`, `USER`, `ASSISTANT`, `TOOL`._

### Usage

#### Add new role

```java
import io.github.ollama4j.Ollama;
import io.github.ollama4j.OllamaAPI;
import io.github.ollama4j.models.chat.OllamaChatMessageRole;

public class Main {

    public static void main(String[] args) {
        String host = "http://localhost:11434/";
        Ollama ollama = new Ollama(host);

        OllamaChatMessageRole customRole = ollama.addCustomRole("custom-role");
    }
}
```

#### List roles

```java
import io.github.ollama4j.Ollama;
import io.github.ollama4j.models.chat.OllamaChatMessageRole;

public class Main {

    public static void main(String[] args) {
        String host = "http://localhost:11434/";
        Ollama ollama = new Ollama(host);

        List<OllamaChatMessageRole> roles = ollama.listRoles();
    }
}
```

#### Get role

```java
import io.github.ollama4j.Ollama;
import io.github.ollama4j.OllamaAPI;
import io.github.ollama4j.models.chat.OllamaChatMessageRole;

public class Main {

    public static void main(String[] args) {
        String host = "http://localhost:11434/";
        Ollama ollama = new Ollama(host);

        List<OllamaChatMessageRole> roles = ollama.getRole("custom-role");
    }
}
```