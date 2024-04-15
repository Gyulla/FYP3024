// Populate Photo Cards Section
const photoCardsSection = document.querySelector('.photo-cards');

// Sample data
const photoCardsData = [
    { image: 'pics/helmet_main.webp', description: 'Helmets' },
    { image: 'pics/suit_main.jpeg', description: 'Suits' },
    { image: 'pics/gloves_main.jpg', description: 'Gloves' },
    { image: 'pics/shoe_main.webp', description: 'Shoes' },
    { image: 'pics/sales_main.png', description: 'Sales' }
];

photoCardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('photo-card');
    cardElement.style.backgroundImage = `url('${card.image}')`;
    photoCardsSection.appendChild(cardElement);
});

// Populate Sales Items Section (similar to photo cards)
