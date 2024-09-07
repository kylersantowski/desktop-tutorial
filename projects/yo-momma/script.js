let currentJokeIndex = 0;
const jokeRatings = {};

// Fetch jokes from the jokes.json file
async function fetchJokes() {
    try {
        const response = await fetch('jokes.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jokes = await response.json();
        return jokes;
    } catch (error) {
        console.error('Error fetching jokes:', error);
    }
}

// Display a random joke
function displayJoke(jokes) {
    const jokeDisplay = document.getElementById('joke-display');
    currentJokeIndex = Math.floor(Math.random() * jokes.length);
    jokeDisplay.textContent = jokes[currentJokeIndex];
}

// Handle upvoting
function upvoteJoke() {
    jokeRatings[currentJokeIndex] = (jokeRatings[currentJokeIndex] || 0) + 1;
    alert(`Joke Upvoted! Current Rating: ${jokeRatings[currentJokeIndex]}`);
}

// Handle downvoting
function downvoteJoke() {
    jokeRatings[currentJokeIndex] = (jokeRatings[currentJokeIndex] || 0) - 1;
    alert(`Joke Downvoted! Current Rating: ${jokeRatings[currentJokeIndex]}`);
}

// Initialize the app
async function init() {
    const jokes = await fetchJokes();
    if (!jokes) return; // Exit if jokes couldn't be fetched

    const newJokeBtn = document.getElementById('new-joke-btn');
    const upvoteBtn = document.getElementById('upvote-btn');
    const downvoteBtn = document.getElementById('downvote-btn');

    displayJoke(jokes);

    newJokeBtn.addEventListener('click', () => {
        displayJoke(jokes);
    });

    upvoteBtn.addEventListener('click', upvoteJoke);
    downvoteBtn.addEventListener('click', downvoteJoke);
}

// Run the init function when the page loads
window.onload = init;
