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
    hands.forEach(hand => hand.style.boxShadow = '');
    e.target.style.boxShadow = '0 0 3px 6px red';
}

// Wybranie ręki przez komputer
function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

// Funkcja zwracająca wynik
function checkResult(player, ai) {
    if (player === ai) {
        return "draw";
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return "win";
    } else {
        return "loss"
    }
}

// Funkcja wyświetlająca wyniki i licznik gier
function gameResults(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === "draw") {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = 'Remis :/';
        document.querySelector('[data-summary="who-win"]').style.color = 'gray';
    } else if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = 'Ty wygrałeś!';
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    } else {
        document.querySelector('p.losses span').textContent = ++gameSummary.loses;
        document.querySelector('[data-summary="who-win"]').textContent = 'Przegrałeś :(';
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
    }
}

//Funkcja czyszcząca wybór ręki gracza
function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
}

// Funkcja sterująca
function startGame() {
    if (!game.playerHand) {
        return alert('Wybierz dłoń!');
    }
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    gameResults(game.playerHand, game.aiHand, gameResult);
    endGame();
}

hands.forEach(hand => hand.addEventListener('click', selectHand));
document.querySelector(".start").addEventListener('click', startGame);