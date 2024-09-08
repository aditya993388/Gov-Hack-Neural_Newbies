function sendMessage() {
    const userInput = document.getElementById('chat-input').value;
    const chatMessages = document.getElementById('chatbot-messages');

    if (userInput.trim()) {
        
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.innerText = userInput;
        chatMessages.appendChild(userMessageDiv);

      
        setTimeout(() => {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('bot-message');
            botMessageDiv.innerText = 'Sure, I’m happy to help! Just give me a moment while I process your request.';
            chatMessages.appendChild(botMessageDiv);

           
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

       
        document.getElementById('chat-input').value = '';
    }
}
