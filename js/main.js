// Egyszerű JavaScript a kliensoldali funkcionalitáshoz

document.addEventListener('DOMContentLoaded', function() {
    console.log('Az oldal sikeresen betöltött!');

    // Gombokra kattintás figyelő
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('Gomb kattintva:', this.textContent);
        });
    });

    // Kártyák animációja
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`;
    });
});

// Fade-in animáció CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);