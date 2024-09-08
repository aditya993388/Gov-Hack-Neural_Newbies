
const chatbot = document.getElementById('chatbot');
const toggleButton = document.getElementById('chatbot-toggle');
const closeButton = document.getElementById('close-chat');
const chatBody = document.getElementById('chat-body');
const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');

toggleButton?.addEventListener('click', function () {
    chatbot.style.display = 'flex';
});

closeButton?.addEventListener('click', function () {
    chatbot.style.display = 'none';
});

sendButton?.addEventListener('click', async function () {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        
        const messageElement = document.createElement('div');
        messageElement.classList.add('bot-message');
        messageElement.style.backgroundColor = '#e0e0e0';
        messageElement.style.padding = '10px';
        messageElement.style.borderRadius = '5px';
        messageElement.style.marginBottom = '10px';
        messageElement.textContent = userMessage;
        chatBody.appendChild(messageElement);

        chatBody.scrollTop = chatBody.scrollHeight;

        userInput.value = '';

        try {
           
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();

            const botResponseElement = document.createElement('div');
            botResponseElement.classList.add('bot-message');
            botResponseElement.style.backgroundColor = '#f0f0f0';
            botResponseElement.style.padding = '10px';
            botResponseElement.style.borderRadius = '5px';
            botResponseElement.style.marginBottom = '10px';
            botResponseElement.textContent = `Adi: ${data.response}`;
            chatBody.appendChild(botResponseElement);

            chatBody.scrollTop = chatBody.scrollHeight;
        } catch (error) {
           
            const errorMessageElement = document.createElement('div');
            errorMessageElement.classList.add('bot-message');
            errorMessageElement.style.backgroundColor = '#ffcccc';
            errorMessageElement.style.padding = '10px';
            errorMessageElement.style.borderRadius = '5px';
            errorMessageElement.style.marginBottom = '10px';
            errorMessageElement.textContent = 'Error: Unable to connect to the server';
            chatBody.appendChild(errorMessageElement);

            chatBody.scrollTop = chatBody.scrollHeight;
        }
    }
});

function revealOnScroll() {
    const categories = document.querySelector('.categories');
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= categories.offsetTop) {
        categories.classList.add('visible'); 
    }
}

window.addEventListener('scroll', revealOnScroll);

window.onload = () => {
    const categories = document.querySelector('.categories');
    categories.classList.remove('visible');
};
