// Function to show the dropdown menu
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

// Function to hide the dropdown menu
function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = ["Developer", "Designer", "Engineer"];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Initialize the typewriter effect when the window loads
window.onload = typeWriter;

// Open Popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "flex";
}

// Close Popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "none";
}

// Attach close button functionality
document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function () {
        const popup = this.closest('.popup'); // Find the closest popup element
        popup.style.display = 'none'; // Hide the popup
    });
});