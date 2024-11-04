document.addEventListener('mousemove', (e) => {
      const shapes = document.querySelectorAll('.shape');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.1;
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        shape.style.transform = `translate(${x}px, ${y}px) translateY(-${window.scrollY * 0.5}px) rotate(${x * 0.2}deg)`;
      });
    });

    document.querySelectorAll('a[href^="https://"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Navigating to:', this.getAttribute('href'));
      });
    });

    const menuButton = document.querySelector('.menu-button');
    menuButton.onclick = () => {
      document.querySelector('.nav-links').classList.toggle('active');
    };

    // Chatbot functionality
    const chatWidget = document.querySelector('.chat-widget');
    const chatHeader = document.querySelector('.chat-header');
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('#chatInput');

    let messageCount = 0;

    const botResponses = [
      "I'd love to learn more about your needs. What specific AI solutions are you looking for?",
      "That's interesting! Could you tell me about your industry or use case?",
      "Thanks for sharing! One last question - what's your primary goal with AI implementation?",
      "Thank you for your interest! I'd like to connect you with our full-featured chatbot for a more detailed discussion. Click here: <a href='chatbox/index.html' class='cta-button'>Continue Conversation</a>"
    ];

    chatHeader.addEventListener('click', () => {
      chatWidget.classList.toggle('active');
    });

    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && chatInput.value.trim() !== '') {
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = chatInput.value;
        chatMessages.appendChild(userMessage);

        // Add bot response
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        
        if (messageCount < 3) {
          botMessage.textContent = botResponses[messageCount];
        } else {
          botMessage.innerHTML = botResponses[3];
        }
        
        setTimeout(() => {
          chatMessages.appendChild(botMessage);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);

        messageCount++;
        chatInput.value = '';
      }
    });