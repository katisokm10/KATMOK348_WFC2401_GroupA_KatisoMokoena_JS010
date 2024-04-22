// Add event listener to execute code when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        // Fetch data from 'books.json' file
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                // Find the most recent book
                const mostRecentBook = findMostRecentBook(books);
                // Bug: Incorrect element ID used to display the result
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    // Attach event listener to solve Room 2
    document.getElementById("solveRoom2").addEventListener("click", () => {
        // Define JavaScript and React concepts sets
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // Bug: Missing 'this' concept from JS concepts
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // Bug: Incorrect function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        // Display common concepts to unlock the door
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // Attach event listener to solve Room 3
    document.getElementById("solveRoom3").addEventListener("click", () => {
        // Fetch directions from 'directions.json' file
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                // Navigate the labyrinth asynchronously
                navigateLabyrinth(directions)
                    .then(message => {
                        // Bug: Incorrect method used to set room 3 result
                        document.getElementById("room3Result").textContent = message;
                    });
            });
    });
});

// Function to find the most recent book from the provided list
function findMostRecentBook(books) {
    // Compare publication dates as timestamps and find the most recent book
    return books.reduce((mostRecent, book) => {
        const currentPublicationDate = new Date(book.published).getTime();
        const mostRecentPublicationDate = new Date(mostRecent.published).getTime();
        return currentPublicationDate > mostRecentPublicationDate ? book : mostRecent;
    });
}

// Function to find the intersection of two sets
function findIntersection(set1, set2) {
    return new Set([...set1].filter(value => set2.has(value)));
}

// Function to navigate the labyrinth asynchronously
async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // Fix: Await the setTimeout function to introduce delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    // Return success message after completing navigation
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
