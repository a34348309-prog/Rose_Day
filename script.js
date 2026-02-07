document.addEventListener('DOMContentLoaded', () => {
    const giftButton = document.getElementById('gift-button');
    const loveMessage = document.getElementById('love-message');

    giftButton.addEventListener('click', () => {
        // Toggle message visibility
        if (loveMessage.classList.contains('hidden')) {
            loveMessage.classList.remove('hidden');
            giftButton.innerText = 'Love You 🤍';
            
            // Create heart explosion
            createHearts();
            
            // Periodically create hearts while message is open
            setInterval(createHeart, 800);
        }
    });

    function createHearts() {
        for (let i = 0; i < 30; i++) {
            setTimeout(createHeart, i * 100);
        }
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        
        // Random horizontal position
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Random size
        const size = Math.random() * 20 + 10;
        heart.style.fontSize = size + 'px';
        
        // Random duration
        const duration = Math.random() * 3 + 2;
        heart.style.animationDuration = duration + 's';
        
        // Random opacity
        heart.style.opacity = Math.random() * 0.5 + 0.5;

        // Position at bottom of screen to float up
        heart.style.bottom = '-20px';
        
        document.getElementById('heart-spawn-point').appendChild(heart);
        
        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
});
