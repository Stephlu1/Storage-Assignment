const usernameInput = document.getElementById("username");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const displayName = document.getElementById("display-name");

saveBtn.addEventListener("click", () => {
    const name = usernameInput.value.trim();
    if (name) {
        localStorage.setItem("savedName", name);
        displaySavedName();
    }
});

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Wakey Wakey";
    } else if (hour < 18) {
        return "Howdy is it nap time";
    } else {
        return "Sweet Dreams";
    }
}

function displaySavedName() {
    const savedName = localStorage.getItem("savedName");
    if (savedName) {
        const greeting = getGreeting();
        displayName.textContent = `${greeting}, ${savedName}!`;
    } else {
        displayName.textContent = "";
    }
}

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("savedName");
    displayName.textContent = "";
    usernameInput.value = "";
});

document.addEventListener("DOMContentLoaded", displaySavedName);

