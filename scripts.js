// Battle Simulator Functionality
document.querySelector('.battle-button').addEventListener('click', function() {
    const pokemon1 = document.getElementById('pokemon1').value;
    const pokemon2 = document.getElementById('pokemon2').value;

    const battleResult = document.querySelector('.battle-result');
    battleResult.textContent = `${pokemon1} battles ${pokemon2}... ${pokemon1} wins!`; // Randomize winner logic can be added here
});

// Quiz Functionality
document.querySelectorAll('.quiz-option').forEach(button => {
    button.addEventListener('click', function() {
        const result = document.querySelector('.quiz-result');
        if (this.textContent === 'Electric') {
            result.textContent = 'Correct! Pikachu is Electric type.';
            result.style.color = 'green';
        } else {
            result.textContent = 'Wrong answer. Try again!';
            result.style.color = 'red';
        }
    });
});
