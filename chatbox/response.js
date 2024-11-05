document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector(".message-input textarea");
    const sendButton = document.querySelector(".message-input button");
    const chatArea = document.querySelector(".chat-area");

    // Auto-adjust textarea height based on content
    textarea.addEventListener("input", () => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    });

    // Keywords and responses
    const keywords = {
        "what is ai": "AI, or Artificial Intelligence, refers to systems designed to mimic human intelligence.",
        "invention of ai": "The invention of AI is traced back to the 1950s, with pioneers like Alan Turing.",
        "ai categories": "AI is commonly categorized into Narrow AI, General AI, and Superintelligent AI.",
        "machine learning": "Machine Learning is a subset of AI that enables systems to learn from data.",
        "deep learning": "Deep Learning is a type of Machine Learning using neural networks with many layers.",
        "natural language processing": "NLP enables machines to understand and respond to human language.",
        "computer vision": "Computer Vision allows computers to interpret and make decisions based on visual data.",
        "ai ethics": "AI ethics involve the moral implications and responsibilities of AI development.",
        "future of ai": "The future of AI holds potential for significant advancements, with ethical considerations.",
        "ai in healthcare": "AI in healthcare enhances diagnostics, personalized treatments, and patient care.",
        "who created ai": "AI has many contributors, but Alan Turing is often called the 'Father of AI.'",
        "what is a neural network": "Neural networks are algorithms modeled after the human brain's structure.",
        "how does ai learn": "AI learns through training on vast datasets, refining its algorithms over time.",
        "ai in daily life": "AI is all around us—in virtual assistants, recommendation systems, and more.",
        "advantages of ai": "AI offers automation, enhanced decision-making, and efficiency improvements.",
        "disadvantages of ai": "AI can lead to job displacement, ethical issues, and privacy concerns.",
        "is ai dangerous": "AI poses risks if not controlled but also offers significant benefits.",
        "ai in gaming": "AI in gaming provides realistic interactions and adaptive gameplay.",
        // TezienAu specific responses
        "what is tezien": "TezienAu is an innovative prototype designed to uniquely manipulate, inspect, and view the work of Artificial Intelligence (AI) algorithms. Developed by Fabian with the aim to provide an in-depth understanding of AI logic and decision-making processes.",
        "it's objective": "Tezien's primary objective is to provide a comprehensive platform for AI analysis, enabling users to: " +
            "\n1. Visualize AI decision-making processes" +
            "\n2. Inspect AI algorithmic logic" +
            "\n3. Manipulate AI inputs and parameters" +
            "\n4. Understand AI-driven outcomes.",
        "ai in the future": "AI is expected to integrate more seamlessly into our daily lives."
    };

    // Function to create and display a typing effect
    function displayTypingEffect(text) {
        const message = document.createElement("p");
        message.className = "chatbot-message";
        message.style.color = "#bbb";
        chatArea.appendChild(message);

        let index = 0;
        const typingEffect = setInterval(() => {
            message.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(typingEffect);
                message.scrollIntoView({ behavior: "smooth", block: "end" });
            }
        }, 50); // Adjust typing speed here
    }

    // Send message function
    function sendMessage() {
        const userInput = textarea.value.trim();
        if (userInput) {
            // Display user message
            const userMessage = document.createElement("p");
            userMessage.className = "user-message";
            userMessage.textContent = userInput;
            userMessage.style.color = "#4CAF50";
            chatArea.appendChild(userMessage);

            // Process input for response
            const lowercaseInput = userInput.toLowerCase();
            let response = `I'm sorry, I don't understand. I still have some limitations. Perhaps you can try training me: <a href="training_AI.html">Train me </a>`;

            // Check for matching keyword in lowercase
            for (const keyword in keywords) {
                if (lowercaseInput.includes(keyword)) {
                    response = keywords[keyword];
                    break;
                }
            }

            // Display chatbot's typing effect and response
            const botMessage = document.createElement("p");
            botMessage.className = "chatbot-message";
            botMessage.style.color = "#bbb";
            botMessage.innerHTML = response; // Use innerHTML for links

            chatArea.appendChild(botMessage);
            botMessage.scrollIntoView({ behavior: "smooth", block: "end" });
            textarea.value = ""; // Clear the input
        }
    }

    // Event listener for send button
    sendButton.addEventListener("click", sendMessage);

    // Allow pressing Enter to send a message
    textarea.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevent new line
            sendMessage();
        }
    });
});