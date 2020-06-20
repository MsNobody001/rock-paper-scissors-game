// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0,
    wins: 0,
    loses: 0,
    draws: 0
}

const game = {
    playerHand: '',
    aiHand: '',
}

const hands = [...document.querySelectorAll('.select img')];

// Wybranie ręki przez gracza
const selectHand = (e) => {
    game.playerHand = e.target.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    e.target.style.boxShadow = '0 0 3px 6px red';
}

hands.forEach(hand => hand.addEventListener('click', selectHand));