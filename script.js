const originalName = "John Micah Savoniemi";
const nameElement = document.getElementById("ani-name");

function randomizeName() {
    const randomNumbers = originalName.split(' ').map(word => {
        // Generate a random number for each word
        return Math.floor(Math.random() * 10000); // You can adjust the range of random numbers as needed
    });

    // Join the random numbers into a string with spaces and update the text content
    nameElement.textContent = randomNumbers.join(' ');
}

function revertName() {
    nameElement.textContent = originalName;
}

nameElement.addEventListener("mouseenter", randomizeName);
nameElement.addEventListener("mouseleave", revertName);
