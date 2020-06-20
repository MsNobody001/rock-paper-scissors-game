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

// Wybranie ręki przez komputer
function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

// Funkcja sterująca
function startGame() {
    if (!game.playerHand) {
        return alert('Wybierz dłoń!');
    }
    game.aiHand = aiChoice();
}

hands.forEach(hand => hand.addEventListener('click', selectHand));
document.querySelector(".start").addEventListener('click', startGame);